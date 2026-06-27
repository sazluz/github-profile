import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import { getUser, getRepos } from "../services/githubApi";

import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import LanguageChart from "../components/LanguageChart";
import InsightsCard from "../components/InsightsCard";
import TopRepositories from "../components/TopRepositories";

const Dashboard = () => {
  const { username } = useParams();

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const userData = await getUser(username);
        const repoData = await getRepos(username);

        setUser(userData);
        setRepos(repoData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-xl">
        Loading GitHub Profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-400 text-xl">
        {error}
      </div>
    );
  }

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-slate-950 px-6 py-30">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-3xl font-bold text-white">
          GitHub Analysis
        </h1>

        <div className="space-y-6">

          <ProfileCard user={user} />

          <StatsCard
            user={user}
            repos={repos}
          />

          {/* Analytics */}
          <div className="grid gap-6 lg:grid-cols-2">

            <LanguageChart repos={repos} />

            <InsightsCard
              user={user}
              repos={repos}
            />

          </div>

          <TopRepositories repos={repos} />

        </div>

      </div>
    </main>
    </>
  );
};

export default Dashboard;
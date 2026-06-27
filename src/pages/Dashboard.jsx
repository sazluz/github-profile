import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUser, getRepos } from "../services/githubApi";

import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";


const Dashboard = () => {

  const { username } = useParams();


  const [user,setUser] = useState(null);
  const [repos,setRepos] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");



  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true);

        const userData = await getUser(username);

        const repoData = await getRepos(username);


        setUser(userData);

        setRepos(repoData);


      } catch(err){

        setError(err.message);

      } finally {

        setLoading(false);

      }

    };


    fetchData();


  },[username]);



  if(loading){

    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Loading...
      </div>
    );

  }



  if(error){

    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-400">
        {error}
      </div>
    );

  }



  return (

    <main className="min-h-screen bg-slate-950 px-6 py-12">

      <div className="mx-auto max-w-5xl">


        <h1 className="mb-8 text-3xl font-semibold text-white">
          GitHub Analysis
        </h1>


        <div className="space-y-6">


          <ProfileCard user={user}/>


          <StatsCard
            user={user}
            repos={repos}
          />


        </div>


      </div>

    </main>

  );

};


export default Dashboard;
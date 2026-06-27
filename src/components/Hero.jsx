import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

import { getUser, getRepos } from "../services/githubApi";


function SearchBar({ onSearch, loading }) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    const trimmedUsername = username.trim();

    if (!trimmedUsername) return;

    onSearch(trimmedUsername);
  };


  return (
    <div className="w-full max-w-lg mx-auto mt-8">

      <div className="flex items-center rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-1.5 shadow-xl transition-all duration-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">

        <Search className="ml-3 h-5 w-5 text-slate-500" />

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Enter a GitHub username..."
          className="flex-1 bg-transparent px-3 py-2.5 text-white placeholder:text-slate-500 outline-none"
        />


        <button
          onClick={handleSearch}
          disabled={loading || !username.trim()}
          className="w-32 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

      </div>


      {/* Suggestions */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400">

        <span className="text-slate-500">
          Try now:
        </span>


        {["sazluz", "torvalds", "sindresorhus", "yyx990803"].map((user) => (

          <button
            key={user}
            onClick={() => setUsername(user)}
            className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 transition-colors hover:border-blue-500 hover:text-blue-400"
          >
            {user}
          </button>

        ))}

      </div>

    </div>
  );
}



export default function Hero() {

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

  const [repos, setRepos] = useState([]);

  const [error, setError] = useState("");

  const navigate = useNavigate();



  const handleSearch = (username) => {

  if (!username.trim()) return;

  navigate(`/dashboard/${username}`);

};


  return (

    <div className="relative isolate px-6 pt-8 lg:px-8 lg:pt-2">

      <div className="mx-auto max-w-2xl py-24 md:py-24 lg:py-36">


        <div className="text-center">

          <h1 className="text-5xl font-semibold text-white sm:text-7xl">
            Analyze Any GitHub Profile Instantly
          </h1>


          <p className="mt-6 text-lg text-gray-400 sm:text-xl">
            Enter any public GitHub username to explore repository
            statistics, language distribution, and developer insights
          </p>


          <SearchBar
            onSearch={handleSearch}
            loading={loading}
          />


        </div>



        {user && (
  <Dashboard
    user={user}
    repos={repos}
  />
)}

      </div>

    </div>

  );
}
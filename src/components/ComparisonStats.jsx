import {
  Star,
  GitFork,
  Code2,
  FolderGit2,
  Trophy
} from "lucide-react";


const ComparisonStats = ({ data }) => {


  const calculateStars = (repos) => {
    return repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );
  };


  const calculateForks = (repos) => {
    return repos.reduce(
      (sum, repo) => sum + repo.forks_count,
      0
    );
  };


  const calculateLanguages = (repos) => {

    const languages = new Set();

    repos.forEach(repo => {

      if(repo.language){
        languages.add(repo.language);
      }

    });

    return languages.size;
  };



  const stats = [

    {
      title:"Repositories",
      icon:FolderGit2,
      first:data.reposOne.length,
      second:data.reposTwo.length,
    },

    {
      title:"Stars",
      icon:Star,
      first:calculateStars(data.reposOne),
      second:calculateStars(data.reposTwo),
    },

    {
      title:"Forks",
      icon:GitFork,
      first:calculateForks(data.reposOne),
      second:calculateForks(data.reposTwo),
    },

    {
      title:"Languages",
      icon:Code2,
      first:calculateLanguages(data.reposOne),
      second:calculateLanguages(data.reposTwo),
    },

  ];



  // Calculate wins

  let firstWins = 0;
  let secondWins = 0;


  stats.forEach(stat => {

    if(stat.first > stat.second){
      firstWins++;
    }

    if(stat.second > stat.first){
      secondWins++;
    }

  });



  const winner = 
    firstWins > secondWins
      ? data.userOne.login
      : secondWins > firstWins
        ? data.userTwo.login
        : null;



  return (

    <div className="
      mt-8
      rounded-3xl
      border
      border-slate-800
      bg-slate-950
      p-6
    ">


      {/* Header */}

      <div className="
        flex
        items-center
        justify-center
        gap-4
      ">


        <h2 className="
          text-xl
          font-semibold
          text-white
        ">
          {data.userOne.login}
        </h2>


        <span className="
          rounded-full
          bg-slate-800
          px-4
          py-1
          text-sm
          text-slate-400
        ">
          VS
        </span>


        <h2 className="
          text-xl
          font-semibold
          text-white
        ">
          {data.userTwo.login}
        </h2>


      </div>





      {/* Stats */}

      <div className="
        mt-8
        space-y-5
      ">


        {
          stats.map(stat => {


            const Icon = stat.icon;


            const firstBetter =
              stat.first > stat.second;


            const secondBetter =
              stat.second > stat.first;



            return (

              <div
                key={stat.title}
                className="
                  grid
                  grid-cols-3
                  items-center
                  rounded-xl
                  bg-slate-900
                  p-4
                "
              >

                

                {/* Metric */}

                <div className="
                  flex
                  flex-col
                  items-center
                  gap-1
                  text-slate-400
                ">

                  <Icon size={18}/>

                  <span className="text-sm">
                    {stat.title}
                  </span>

                </div>


                {/* User One */}

                <div className={`
                  text-center
                  text-lg
                  font-bold
                  ${
                    firstBetter
                    ? "text-emerald-400"
                    : "text-white"
                  }
                `}>

                  {stat.first}

                  

                </div>




                {/* User Two */}

                <div className={`
                  text-center
                  text-lg
                  font-bold
                  ${
                    secondBetter
                    ? "text-emerald-400"
                    : "text-white"
                  }
                `}>

                  {stat.second}


                </div>



              </div>

            );


          })
        }


      </div>


    </div>

  );

};


export default ComparisonStats;
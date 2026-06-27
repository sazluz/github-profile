import { useState } from "react";

import { getUser, getRepos } from "../services/githubApi";

import Navbar from "../components/Navbar";
import CompareCard from "../components/CompareCard";
import ComparisonStats from "../components/ComparisonStats";


const Compare = () => {


  const [userOne,setUserOne] = useState("");
  const [userTwo,setUserTwo] = useState("");

  const [data,setData] = useState(null);

  const [loading,setLoading] = useState(false);

  const [error,setError] = useState("");



  const validateUsername = (username) => {

    const githubRegex =
      /^[a-zA-Z0-9-]+$/;


    return githubRegex.test(username);

  };




  const compareUsers = async () => {


    const firstUsername =
      userOne.trim();


    const secondUsername =
      userTwo.trim();



    // Empty validation

    if(!firstUsername || !secondUsername){

      setError(
        "Please enter both GitHub usernames"
      );

      return;

    }



    // Same user validation

    if(
      firstUsername.toLowerCase() ===
      secondUsername.toLowerCase()
    ){

      setError(
        "Please enter two different usernames"
      );

      return;

    }



    // Format validation

    if(
      !validateUsername(firstUsername) ||
      !validateUsername(secondUsername)
    ){

      setError(
        "Invalid GitHub username format"
      );

      return;

    }




    try {


      setLoading(true);

      setError("");

      setData(null);



      const [
        firstUser,
        secondUser
      ] = await Promise.all([


        getUser(firstUsername),

        getUser(secondUsername)

      ]);




      const [
        firstRepos,
        secondRepos
      ] = await Promise.all([


        getRepos(firstUsername),

        getRepos(secondUsername)

      ]);




      setData({

        userOne:firstUser,

        userTwo:secondUser,

        reposOne:firstRepos,

        reposTwo:secondRepos

      });



    } catch(err){


      setError(
        "One of these GitHub users does not exist"
      );


    } finally {


      setLoading(false);


    }


  };





  return (

<>
    <Navbar />
    <main className="
      min-h-screen
      bg-slate-950
      px-6
      py-30
    ">
          <div>


      </div>

      <div className="
        mx-auto
        max-w-6xl
      ">



        <h1 className="
          mb-8
          text-3xl
          font-bold
          text-white
        ">
          Compare Developers
        </h1>




        <div className="
          grid
          gap-4
          md:grid-cols-2
        ">



<div>

  <input
    className="
      w-full
      rounded-xl
      border
      border-slate-800
      bg-slate-900
      p-4
      text-white
      outline-none
      focus:border-blue-500
    "

    placeholder="First GitHub username"

    value={userOne}

    onChange={
      e => setUserOne(e.target.value)
    }

  />


  {/* User One Suggestions */}

  <div className="
    mt-3
    flex
    flex-wrap
    items-center
    gap-2
    text-sm
  ">

    <span className="text-slate-500">
      Try now:
    </span>


    {[
      "torvalds",
      "sindresorhus",
      "yyx990803",
      "gaearon"
    ].map((user)=>(

      <button

        key={user}

        onClick={() => setUserOne(user)}

        className="
          rounded-full
          border
          border-slate-700
          bg-slate-900
          px-3
          py-1
          text-slate-400
          transition
          hover:border-blue-500
          hover:text-blue-400
        "

      >

        {user}

      </button>

    ))}


  </div>


</div>




<div>

  <input
    className="
      w-full
      rounded-xl
      border
      border-slate-800
      bg-slate-900
      p-4
      text-white
      outline-none
      focus:border-blue-500
    "

    placeholder="Second GitHub username"

    value={userTwo}

    onChange={
      e => setUserTwo(e.target.value)
    }

  />



  {/* User Two Suggestions */}

  <div className="
    mt-3
    flex
    flex-wrap
    items-center
    gap-2
    text-sm
  ">


    <span className="text-slate-500">
      Try now:
    </span>



    {[
      "facebook",
      "vercel",
      "kentcdodds",
      "tj"
    ].map((user)=>(


      <button

        key={user}

        onClick={() => setUserTwo(user)}

        className="
          rounded-full
          border
          border-slate-700
          bg-slate-900
          px-3
          py-1
          text-slate-400
          transition
          hover:border-blue-500
          hover:text-blue-400
        "

      >

        {user}

      </button>


    ))}


  </div>


</div>

            

        </div>


                    {
          error &&

          <p className="
            mt-6
            rounded-xl
            bg-red-500/10
            p-4
            text-red-400
          ">
            {error}
          </p>

        }


        <button

          onClick={compareUsers}

          disabled={loading}

          className="
            mt-6
            rounded-xl
            bg-emerald-500
            px-6
            py-3
            font-semibold
            text-black
            transition
            hover:bg-emerald-400
            disabled:cursor-not-allowed
            disabled:opacity-50
          "

        >

          {
            loading
            ? "Comparing..."
            : "Compare"
          }


        </button>














        {
          data &&

          <>


          <div className="
            mt-10
            grid
            gap-6
            md:grid-cols-2
          ">


            <CompareCard
              user={data.userOne}
            />


            <CompareCard
              user={data.userTwo}
            />


          </div>




          <ComparisonStats
            data={data}
          />



          </>

        }




      </div>


    </main>

</>

  );

};


export default Compare;
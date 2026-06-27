import {
  Users,
  BookOpen,
  MapPin,
  Building2
} from "lucide-react";


const CompareCard = ({ user }) => {


  return (

    <div className="
      rounded-2xl
      border
      border-slate-800
      bg-slate-950
      p-6
    ">


      <div className="
        flex
        items-center
        gap-4
      ">


        <img
          src={user.avatar_url}
          alt={user.login}
          className="
            h-20
            w-20
            rounded-full
            border
            border-slate-700
          "
        />


        <div>

          <h2 className="
            text-xl
            font-semibold
            text-white
          ">
            {user.name || user.login}
          </h2>


          <p className="
            text-slate-400
          ">
            @{user.login}
          </p>


        </div>


      </div>



      <p className="
        mt-5
        text-sm
        text-slate-400
      ">

        {user.bio || "No bio available"}

      </p>




      <div className="
        mt-6
        space-y-3
        text-sm
      ">


        <div className="
          flex
          items-center
          gap-3
          text-slate-300
        ">

          <Users
            size={18}
            className="text-blue-400"
          />

          {user.followers} followers

        </div>



        <div className="
          flex
          items-center
          gap-3
          text-slate-300
        ">

          <BookOpen
            size={18}
            className="text-emerald-400"
          />

          {user.public_repos} repositories

        </div>




        {
          user.company &&

          <div className="
            flex
            items-center
            gap-3
            text-slate-300
          ">

            <Building2
              size={18}
              className="text-purple-400"
            />

            {user.company}

          </div>

        }




        {
          user.location &&

          <div className="
            flex
            items-center
            gap-3
            text-slate-300
          ">

            <MapPin
              size={18}
              className="text-red-400"
            />

            {user.location}

          </div>

        }



      </div>


    </div>

  );

};


export default CompareCard;
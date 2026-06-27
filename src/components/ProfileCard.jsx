import { Users, UserPlus } from "lucide-react";

const ProfileCard = ({ user }) => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

      <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">

        <img
          src={user.avatar_url}
          alt={user.login}
          className="h-24 w-24 rounded-full border-4 border-slate-800"
        />


        <div className="mt-5 sm:ml-6 sm:mt-0">

          <h2 className="text-2xl font-semibold text-white">
            {user.name || user.login}
          </h2>


          <p className="mt-1 text-slate-400">
            @{user.login}
          </p>


          {user.bio && (
            <p className="mt-3 max-w-lg text-sm text-slate-400">
              {user.bio}
            </p>
          )}

        </div>

      </div>


      <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-slate-800 pt-6 sm:justify-start">

        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Users className="h-5 w-5 text-emerald-400" />

          <span>
            {user.followers} Followers
          </span>
        </div>


        <div className="flex items-center gap-2 text-sm text-slate-300">

          <UserPlus className="h-5 w-5 text-blue-400" />

          <span>
            {user.following} Following
          </span>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;
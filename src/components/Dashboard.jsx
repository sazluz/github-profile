import ProfileCard from "./ProfileCard";
import StatsCard from "./StatsCard";


const Dashboard = ({ user, repos }) => {

  return (
    <section className="mt-12 w-full">

      <div className="mx-auto max-w-5xl space-y-6">


        <ProfileCard user={user} />


        <StatsCard
          user={user}
          repos={repos}
        />


      </div>

    </section>
  );
};


export default Dashboard;
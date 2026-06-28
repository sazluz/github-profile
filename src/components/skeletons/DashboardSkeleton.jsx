import ProfileSkeleton from "./ProfileSkeleton";
import StatsSkeleton from "./StatsSkeleton";
import Skeleton from "./Skeleton";


const DashboardSkeleton = () => {


return (

<main className="
 min-h-screen
 bg-slate-950
 px-6
 py-30
">


<div className="
 mx-auto
 max-w-6xl
">


<Skeleton
className="
 h-10
 w-72
 mb-8
"
/>


<ProfileSkeleton />


<div className="mt-6">

<StatsSkeleton />

</div>



<div className="
 mt-6
 grid
 gap-6
 lg:grid-cols-2
">


<div className="
 rounded-2xl
 border
 border-slate-800
 p-6
">

<Skeleton
className="
 h-6
 w-52
"
/>


<div className="mt-8 space-y-5">

{
[1,2,3].map(i=>(

<Skeleton
key={i}
className="
 h-10
 w-full
"
/>

))
}


</div>


</div>





<div className="
 rounded-2xl
 border
 border-slate-800
 p-6
">

<Skeleton
className="
 h-6
 w-52
"
/>


<div className="mt-8 space-y-4">

{
[1,2,3].map(i=>(

<Skeleton
key={i}
className="
 h-16
 w-full
"
/>

))
}


</div>


</div>


</div>





</div>


</main>

);


};


export default DashboardSkeleton;
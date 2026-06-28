import Skeleton from "./Skeleton";


const ProfileSkeleton = () => {

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
 gap-5
 items-center
">


<Skeleton
className="
 h-24
 w-24
 rounded-full
"
/>



<div className="space-y-3">

<Skeleton
className="
 h-6
 w-48
"
/>


<Skeleton
className="
 h-4
 w-32
"
/>


<Skeleton
className="
 h-4
 w-72
"
/>


</div>


</div>


</div>

);


};


export default ProfileSkeleton;
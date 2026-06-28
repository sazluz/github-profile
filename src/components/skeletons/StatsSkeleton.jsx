import Skeleton from "./Skeleton";


const StatsSkeleton = () => {


return (

<div className="
 grid
 gap-4
 md:grid-cols-3
">


{
[1,2,3].map(item=>(

<div
key={item}
className="
 rounded-2xl
 border
 border-slate-800
 bg-slate-950
 p-5
"
>


<Skeleton
className="
 h-6
 w-6
"
/>


<Skeleton
className="
 mt-5
 h-4
 w-24
"
/>


<Skeleton
className="
 mt-3
 h-8
 w-16
"
/>


</div>


))
}


</div>

);


};


export default StatsSkeleton;
import {
  GitBranch,
  Star,
  Code2,
  Activity,
  Trophy,
  GitFork,
  ExternalLink,
  Users, 
  UserPlus,
  CalendarDays
} from "lucide-react";


const DashboardPreview = () => {


  return (

<section className="
  border-b
  border-slate-800
  py-24
">


<div className="
  mx-auto
  max-w-7xl
  px-6
  lg:px-8
">



{/* Heading */}

<div className="
  mx-auto
  max-w-2xl
  text-center
">


<h2 className="
  text-3xl
  font-semibold
  text-white
  sm:text-4xl
">

See GitHub Insights in Action

</h2>


<p className="
 mt-4
 text-lg
 text-slate-400
">

Analyze developers with repositories, languages, activity and performance metrics.

</p>


</div>





{/* Dashboard */}

<div className="
 mx-auto
 mt-16
 max-w-6xl
 rounded-3xl
 border
 border-slate-800
 bg-slate-950
 p-6
 shadow-2xl
 sm:p-8
">





{/* Profile Card */}

<div className="
 rounded-2xl
 border
 border-slate-800
 bg-slate-950
 p-6
">


<div className="
 flex
 flex-col
 gap-5
 sm:flex-row
 sm:items-center
">


<img

src="https://avatars.githubusercontent.com/u/104188060?v=4"

className="
 h-24
 w-24
 rounded-full
 border
 border-slate-700
"

/>



<div>


<h3 className="
 text-2xl
 font-semibold
 text-white
">

Salahadin Admasu

</h3>


<p className="
 text-slate-400
">

@sazluz

</p>


<p className="
 mt-3
 max-w-xl
 text-sm
 text-slate-500
">

Building modern web applications with JavaScript and TypeScript.

</p>


</div>


</div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-slate-800 pt-6 sm:justify-start">

        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Users className="h-5 w-5 text-emerald-400" />

          <span>
            100 Followers
          </span>
        </div>


        <div className="flex items-center gap-2 text-sm text-slate-300">

          <UserPlus className="h-5 w-5 text-blue-400" />

          <span>
            5 Following
          </span>

        </div>

      </div>

</div>








{/* Stats */}

<div className="
 mt-6
 grid
 gap-4
 md:grid-cols-3
">



{[

{
title:"Repositories",
value:"53",
icon:GitBranch,
color:"text-emerald-400"
},


{
title:"Total Stars",
value:"356",
icon:Star,
color:"text-yellow-400"
},


  {
  title: "GitHub Member Since",
  value: "Apr 2022 (10y 3m)",
  icon: CalendarDays,
  color: "text-purple-400",
},


].map((item)=>(

<div

key={item.title}

className="
 rounded-2xl
 border
 border-slate-800
 bg-slate-950
 p-5
"


>


<item.icon
className={`h-6 w-6 ${item.color}`}
/>


<p className="
 mt-4
 text-sm
 text-slate-400
">

{item.title}

</p>


<p className="
 mt-1
 text-3xl
 font-semibold
 text-white
">

{item.value}

</p>


</div>


))}



</div>







{/* Analytics */}

<div className="
 mt-6
 grid
 gap-6
 lg:grid-cols-2
">





{/* Language */}

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
 justify-between
">

<h4 className="
 font-semibold
 text-white
">

Language Breakdown

</h4>


<Code2
className="
 h-5
 w-5
 text-blue-400
"
/>


</div>





<div className="
 mt-6
 space-y-4
">


{[

[
"JavaScript",
"60%",
"bg-yellow-400"
],

[
"TypeScript",
"25%",
"bg-blue-400"
],

[
"Python",
"15%",
"bg-emerald-400"
]


].map(([name,percent,color])=>(


<div key={name}>


<div className="
 mb-2
 flex
 justify-between
 text-sm
">

<span className="
 text-slate-300
">

{name}

</span>


<span className="
 text-slate-400
">

{percent}

</span>


</div>



<div className="
 h-2
 rounded-full
 bg-slate-800
">


<div

className={`
 h-2
 rounded-full
 ${color}
`}

style={{
width:percent
}}

/>


</div>


</div>


))}



</div>


</div>








{/* Insights */}

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
 justify-between
">


<h4 className="
 font-semibold
 text-white
">

Activity Insights

</h4>


<Activity
className="
 h-5
 w-5
 text-emerald-400
"

/>


</div>





<div className="
 mt-6
 space-y-3
">


{[

{
text:"Active developer",
icon:Activity,
color:"text-emerald-400"
},

{
text:"Popular repositories",
icon:Star,
color:"text-yellow-400"
},

{
text:"Polyglot programmer",
icon:Code2,
color:"text-blue-400"
}


].map((item)=>(


<div

key={item.text}

className="
 flex
 items-center
 gap-3
 rounded-xl
 bg-slate-900
 p-4
"

>


<item.icon

className={`
 h-5
 w-5
 ${item.color}
`}

/>


<span className="
 text-sm
 text-slate-300
">

{item.text}

</span>


</div>


))}



</div>



</div>



</div>









{/* Top Repository */}

<div className="
 mt-6
 rounded-2xl
 border
 border-slate-800
 bg-slate-950
 p-6
">


<div className="
 flex
 items-center
 justify-between
">


<h4 className="
 font-semibold
 text-white
">

Top Repository

</h4>


<span className="text-sm text-slate-400">
          Top 5 by Stars
        </span>


</div>




<div className="
 mt-5
 rounded-xl
  border
 border-slate-800
 bg-slate-950
 p-5
">


<div className="

 flex
 items-center
 justify-between
">


<div>


<h5 className="
 font-semibold
 text-white
">

portfolio-project

</h5>


<p className="
 mt-1
 text-sm
 text-slate-400
">

Modern React application

</p>


</div>


<ExternalLink
className="
 h-5
 w-5
 text-slate-400
"

/>


</div>




<div className="
 mt-5
 flex
 gap-6
 text-sm
 text-slate-400
">


<span>
Javascript
</span>


<span className="flex items-center gap-1">
  <Star size={15} />
    100
</span>


<span className="flex items-center gap-1">
  <GitFork size={15} />
    5
</span>


</div>


</div>


</div>






</div>



</div>


</section>

  );

};


export default DashboardPreview;
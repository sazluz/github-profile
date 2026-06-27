import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";


const COLORS = [
  "#10b981",
  "#3b82f6",
  "#facc15",
  "#a855f7",
  "#ef4444",
];


const LanguageChart = ({ repos }) => {


  const languages = {};


  repos.forEach((repo) => {

    if(repo.language){

      languages[repo.language] =
        (languages[repo.language] || 0) + 1;

    }

  });



  const data = Object.entries(languages)
    .map(([name,value]) => ({
      name,
      value
    }))
    .sort((a,b)=> b.value-a.value)
    .slice(0,5);



  return (

    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">


      <h2 className="text-lg font-semibold text-white">
        Language Distribution
      </h2>


      <div className="mt-6 h-[300px]">


        <ResponsiveContainer width="100%" height="100%">

          <PieChart>


            <Pie
              data={data}
    dataKey="value"
    nameKey="name"
    outerRadius={100}
    animationDuration={1200}
            >

              {
                data.map((entry,index)=>(
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))
              }

            </Pie>


            <Tooltip
  contentStyle={{
    backgroundColor: "#0f172a",
    border: "1px solid #334155",
    borderRadius: "10px",
    color: "#fff",
  }}
/>

            <Legend />

          </PieChart>


        </ResponsiveContainer>


      </div>


    </div>

  );
};


export default LanguageChart;
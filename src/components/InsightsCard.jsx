import {
  Activity,
  Star,
  Code2,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

import { generateInsights } from "../utils/insightGenerator";


const icons = {
  active: Activity,
  stars: Star,
  languages: Code2,
  growth: TrendingUp,
};


const colors = {
  active: "text-emerald-400",
  stars: "text-yellow-400",
  languages: "text-blue-400",
  growth: "text-purple-400",
};



const InsightsCard = ({ user, repos }) => {


  const insights = generateInsights(
    user,
    repos
  );


  return (

    <div
      className="
        h-fit
        w-full
        rounded-2xl
        border
        border-slate-800
        bg-slate-950
        p-6
      "
    >


      <div className="
        flex
        items-center
        justify-between
      ">

        <h2 className="
          text-lg
          font-semibold
          text-white
        ">
          Activity Insights
        </h2>


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


        {insights.map((item, index) => {


          const Icon =
            icons[item.type] || Lightbulb;


          const iconColor =
            colors[item.type] || "text-slate-300";



          return (

            <div
              key={index}
              className="
                flex
                items-start
                gap-4
                rounded-xl
                bg-slate-900
                p-4
              "
            >


              {/* Icon */}
              <div
                className={`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-slate-800
                  ${iconColor}
                `}
              >

                <Icon size={20}/>

              </div>



              {/* Content */}
              <div className="
                min-w-0
              ">

                <h3 className="
                  font-medium
                  text-white
                ">
                  {item.title}
                </h3>


                <p className="
                  mt-1
                  text-sm
                  leading-relaxed
                  text-slate-400
                ">
                  {item.description}
                </p>


              </div>


            </div>

          );


        })}


      </div>


    </div>

  );

};


export default InsightsCard;
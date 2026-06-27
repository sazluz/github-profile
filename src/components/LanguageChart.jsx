import { Code2 } from "lucide-react";


const COLORS = [
  "bg-yellow-400",
  "bg-blue-400",
  "bg-emerald-400",
  "bg-purple-400",
  "bg-red-400",
  "bg-cyan-400",
];


const LanguageChart = ({ repos }) => {


  const languageCount = {};


  repos.forEach((repo) => {

    if (repo.language) {

      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;

    }

  });



  const totalLanguages =
    Object.values(languageCount)
      .reduce(
        (sum, value) => sum + value,
        0
      );



  const languages =
    Object.entries(languageCount)

      .map(([name, count]) => ({
        name,
        count,
        percent: Math.round(
          (count / totalLanguages) * 100
        )
      }))

      .sort(
        (a, b) =>
          b.percent - a.percent
      )

      .slice(0, 5);



  if (!languages.length) {

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


        <p className="
          mt-6
          text-sm
          text-slate-400
        ">
          No language data available.
        </p>


      </div>

    );

  }




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


      {/* Header */}
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



      {/* Languages */}
      <div className="
        mt-6
        space-y-5
      ">


        {languages.map(
          ({ name, count, percent }, index) => (

          <div
            key={name}
          >


            <div className="
              mb-2
              flex
              items-center
              justify-between
              text-sm
            ">


              <div className="
                flex
                items-center
                gap-2
              ">

                <span className="
                  text-slate-300
                ">
                  {name}
                </span>


                <span className="
                  text-xs
                  text-slate-500
                ">
                  ({count})
                </span>


              </div>



              <span className="
                text-slate-400
              ">
                {percent}%
              </span>


            </div>




            <div className="
              h-2
              overflow-hidden
              rounded-full
              bg-slate-800
            ">


              <div

                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-700
                  ${COLORS[index % COLORS.length]}
                `}

                style={{
                  width: `${percent}%`
                }}

              />


            </div>


          </div>

        ))}


      </div>


    </div>

  );

};


export default LanguageChart;
import { generateInsights } from "../utils/insightGenerator";

const InsightsCard = ({ user, repos }) => {
  const insights = generateInsights(user, repos);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
      <h2 className="text-lg font-semibold text-white mb-5">
        Activity Insights
      </h2>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="rounded-xl bg-slate-800 p-4"
          >
            <h3 className="text-white font-medium">
              {insight.title}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {insight.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsCard;
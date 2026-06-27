import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Git Profile Analyzer
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Analyze GitHub profiles with meaningful insights.
          </p>
        </div>


        {/* Github Link */}
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
        >
          <FaGithub className="h-5 w-5" />
          View Repository
        </a>

      </div>


      {/* Bottom */}
      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Git Profile Analyzer. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
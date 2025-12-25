import { Lock, Copy } from "lucide-react";

const ReportHeader = () => {
  return (
    <div className="flex items-center gap-2 text-sm sm:text-base font-sans">
      {/* Lock icon */}
      <Lock size={16} className="text-yellow-500" />

      {/* Report link */}
      <a
        href="#"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Report for Jeevan Chopra{" "}
        <span className="text-gray-600">[Oct/14/2021]</span>
      </a>

      {/* Copy icon */}
      <Copy
        size={16}
        className="text-gray-600 cursor-pointer hover:text-black"
        onClick={() => navigator.clipboard.writeText("Report for Jeevan Chopra")}
      />
    </div>
  );
};

export default ReportHeader;

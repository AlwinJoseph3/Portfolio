import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] bg-zinc-950 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col border border-zinc-800 animate-in fade-in zoom-in duration-300">
        <div className="p-5 sm:p-6 md:p-8 border-b border-zinc-900 flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
              Quick Look
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 sm:p-3 bg-zinc-900 rounded-full text-white hover:scale-110 transition-transform"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-12 space-y-10 sm:space-y-12 md:space-y-16">
          <div>
            <h4 className="text-[#007AFF] font-mono text-xs font-black uppercase mb-3 sm:mb-4 md:mb-6">
              Education
            </h4>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                B.Tech <span className="text-[#007AFF]"> • </span> Computer
                Science & Business Systems
              </h3>
              <p className="text-sm md:text-base text-zinc-500">
                Rajagiri School of Engineering and Technology | 2025
                <br />
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[#007AFF] font-mono text-xs font-black uppercase mb-3 sm:mb-4 md:mb-6">
              Experience
            </h4>
            <div className="space-y-6">
              <div className="group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Creative Lead
                  </h3>
                  <span className="font-mono text-[10px] sm:text-xs text-[#007AFF] italic">
                    College Department Association
                  </span>
                </div>
                <ul className="space-y-3 text-sm md:text-base text-zinc-500">
                  <li>
                    • Took charge of the entire visual identity, designing
                    logos and branding.
                  </li>
                  <li>
                    • Made high-fidelity motion graphics and event promos.
                  </li>
                  <li>
                    • Worked with the team to ensure our events ran
                    smoothly.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-4 sm:pb-8">
            <div>
              <h4 className="text-[#007AFF] font-mono text-xs uppercase mb-3 sm:mb-4">
                Tech Stack
              </h4>
              <ul className="text-sm font-bold text-white space-y-2">
                <li>React / Tailwind</li>
                <li>HTML/CSS/JS</li>
                <li>C / C++</li>
                <li>Flutter</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#007AFF] font-mono text-xs uppercase mb-3 sm:mb-4">
                Creative
              </h4>
              <ul className="text-sm font-bold text-white space-y-2">
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Figma</li>
                <li>Blender</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 md:p-8 bg-zinc-900/50 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-[10px] sm:text-xs text-zinc-500 max-w-xs italic text-center md:text-left">
            Kochi, Kerala.
          </p>
          <a
            href="/Resume.pdf"
            download
            className="w-full md:w-auto justify-center px-6 py-3 bg-zinc-800 border border-zinc-700 rounded-full text-xs font-bold text-white flex items-center gap-2 hover:bg-[#007AFF] hover:text-white transition-all shadow-md"
          >
            <Download size={14} /> Download Full PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

import { X, Download } from "lucide-react";
const resumePdf = "/assets/resume.pdf";

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
      <div className="relative w-full max-w-7xl h-[85vh] sm:h-[90vh] bg-zinc-950 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col border border-zinc-800 animate-in fade-in zoom-in duration-300">
        <div className="p-5 sm:p-6 md:p-8 border-b border-zinc-900 flex justify-between items-center bg-zinc-950 z-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
            Resume
          </h2>
          <div className="flex items-center gap-4">
            <a
              href={resumePdf}
              download="resume.pdf"
              className="p-2 sm:p-3 bg-zinc-900 rounded-full text-white hover:scale-110 transition-transform hover:bg-[#007AFF]"
              title="Download PDF"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 sm:p-3 bg-zinc-900 rounded-full text-white hover:scale-110 transition-transform hover:bg-red-500/20 hover:text-red-500"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 w-full h-full bg-zinc-900/50 relative overflow-hidden">
          <object
            data={resumePdf}
            type="application/pdf"
            className="w-full h-full border-0"
            title="Resume PDF"
          >
            <div className="flex flex-col items-center justify-center h-full p-4 text-center">
              <p className="text-zinc-400 mb-4">
                It appears your browser doesn't support embedded PDFs.
              </p>
              <a
                href={resumePdf}
                download="resume.pdf"
                className="px-6 py-3 bg-[#007AFF] text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

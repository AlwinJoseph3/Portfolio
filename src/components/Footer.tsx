import { useState } from "react";
import { Linkedin, Github, Mail, MapPin, Check } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = "alwinjoseph1403@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative z-10 w-full border-t border-zinc-800 bg-transparent pt-20 pb-10 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 relative z-10">
          <div className="space-y-4">
            <h4 className="text-3xl sm:text-4xl md:text-6xl font-black font-display text-white uppercase tracking-tighter">
              Alwin Joseph
            </h4>
            <div className="flex items-center gap-3 text-zinc-500">
              <MapPin size={16} className="text-[#007AFF]" />
              <span className="text-sm font-medium uppercase tracking-widest">
                Kochi, Kerala
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <a
              href="https://github.com/AlwinJoseph3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-zinc-400 hover:text-[#007AFF] transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Github aria-label="Github link" size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/alwin-joseph-807420221"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-zinc-400 hover:text-[#007AFF] transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Linkedin aria-label="Linkedin link" size={16} /> LinkedIn
            </a>

            <button
              onClick={handleCopyEmail}
              className="group relative text-sm font-bold text-zinc-400 hover:text-[#007AFF] transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              {copied ? <Check size={16} /> : <Mail size={16} />}
              {copied ? "Copied!" : "Email"}

              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#007AFF] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Copy to Clipboard
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-800/50 pt-8 gap-4">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
            © {currentYear} Portfolio
          </p>
          <div className="flex flex-col items-end gap-2">
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
              Crafted with love ❤️
            </p>
            <p
              className="text-[10px] text-zinc-800 hover:text-zinc-600 transition-colors uppercase tracking-[0.2em] cursor-help"
              title="Just start typing..."
            >
              Psst... try typing my first name
            </p>
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full shadow-2xl transition-all duration-300 ${copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <div className="w-5 h-5 bg-[#007AFF] rounded-full flex items-center justify-center">
          <Check size={12} className="text-white" />
        </div>
        <span className="text-sm font-bold text-white uppercase tracking-wider">
          Email Copied
        </span>
      </div>
    </footer>
  );
};

export default Footer;

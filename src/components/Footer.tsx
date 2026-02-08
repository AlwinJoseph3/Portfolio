import { Linkedin, Github, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-zinc-800 bg-transparent pt-20 pb-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <h4 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Alwin Joseph
            </h4>
            <div className="flex items-center gap-3 text-zinc-500">
              <MapPin size={16} className="text-[#007AFF]" />
              <span className="text-sm font-medium uppercase tracking-widest">
                Kochi, Kerala
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-8">
            <a
              href="https://github.com/AlwinJoseph3"
              target="_blank"
              className="text-sm font-bold text-zinc-400 hover:text-[#007AFF] transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/alwin-joseph-807420221"
              target="_blank"
              className="text-sm font-bold text-zinc-400 hover:text-[#007AFF] transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="mailto:your@email.com"
              className="text-sm font-bold text-zinc-400 hover:text-[#007AFF] transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-800/50 pt-8 gap-4">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
            © {currentYear} Portfolio
          </p>
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
            Crafted with love ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

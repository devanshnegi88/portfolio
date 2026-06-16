import { footer, personal } from '../data/portfolioData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-[10px] font-bold">
              DN
            </div>
            <span className="text-xs text-slate-600">
              © {year} {personal.name}
            </span>
          </div>

          <p className="text-xs text-slate-700 text-center">{footer.note}</p>

          <div className="flex items-center gap-4">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

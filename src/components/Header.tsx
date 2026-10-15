import React from 'react';
import { ExternalLink, Globe, GraduationCap, ShieldCheck } from 'lucide-react';
import { Language } from '../types/admission';
import { OFFICIAL_LINKS, UI_STRINGS } from '../data/admissionData';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  onNavigateHome,
}) => {
  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-30 shadow-xs">
      {/* Top micro-bar for official portal shortcuts */}
      <div className="bg-blue-900 text-blue-100 text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-800 text-blue-200 uppercase tracking-wide">
              Official Portals
            </span>
            <span className="hidden sm:inline text-blue-200">
              Direct verification links:
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={OFFICIAL_LINKS.cetCell}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 font-medium underline underline-offset-2"
              title="State Common Entrance Test Cell Maharashtra"
            >
              cetcell.mahacet.org
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-blue-400">|</span>
            <a
              href={OFFICIAL_LINKS.mahaDbt}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 font-medium underline underline-offset-2"
              title="MahaDBT Scholarship Portal"
            >
              mahadbt.maharashtra.gov.in
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo and App Title */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 text-left focus:outline-hidden group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                  {UI_STRINGS.appName[currentLanguage]}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                    Maharashtra BE/B.Tech
                  </span>
                </h1>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                {UI_STRINGS.tagline[currentLanguage]}
              </p>
            </div>
          </button>

          {/* Right Action: Language Selector */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <Globe className="w-4 h-4 text-slate-500 ml-1.5 mr-1 hidden sm:inline" />
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  currentLanguage === 'en'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('mr')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  currentLanguage === 'mr'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                मराठी
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('hi')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  currentLanguage === 'hi'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

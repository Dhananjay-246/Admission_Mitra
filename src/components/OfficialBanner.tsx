import React from 'react';
import { ShieldCheck, ExternalLink, AlertCircle } from 'lucide-react';
import { Language } from '../types/admission';
import { OFFICIAL_LINKS, UI_STRINGS } from '../data/admissionData';

interface OfficialBannerProps {
  language: Language;
}

export const OfficialBanner: React.FC<OfficialBannerProps> = ({ language }) => {
  return (
    <div className="bg-linear-to-r from-blue-50 via-sky-50 to-indigo-50 border-y border-blue-100 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="flex items-start gap-2.5 text-slate-700">
          <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-blue-900 flex items-center gap-1.5 flex-wrap">
              <span>{language === 'mr' ? 'अधिकृत पडताळणी धोरण' : language === 'hi' ? 'आधिकारिक सत्यापन नीति' : 'Official Verification Policy'}</span>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded-full font-medium text-[11px] border border-emerald-200">
                {language === 'mr' ? 'विश्वसनीय माहिती' : language === 'hi' ? 'विश्वसनीय जानकारी' : 'Zero Rumors Policy'}
              </span>
            </div>
            <p className="text-slate-600 mt-0.5 leading-relaxed text-[11px] sm:text-xs">
              {UI_STRINGS.disclaimer[language]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
          <a
            href={OFFICIAL_LINKS.cetCell}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1.5 rounded-lg shadow-xs transition-colors"
          >
            <span>CET Cell Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={OFFICIAL_LINKS.mahaDbt}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-blue-700 border border-blue-200 font-medium px-3 py-1.5 rounded-lg shadow-xs transition-colors"
          >
            <span>MahaDBT Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

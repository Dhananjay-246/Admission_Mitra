import React from 'react';
import {
  ExternalLink,
  ShieldCheck,
  PhoneCall,
  Mail,
  AlertTriangle,
  Globe,
  FileCheck2,
  BookOpen,
} from 'lucide-react';
import { Language } from '../types/admission';
import { OFFICIAL_LINKS } from '../data/admissionData';

interface OfficialPortalsViewProps {
  language: Language;
}

export const OfficialPortalsView: React.FC<OfficialPortalsViewProps> = ({ language }) => {
  const portals = [
    {
      name: {
        en: 'State Common Entrance Test Cell (CET Cell)',
        mr: 'राज्य सामाईक प्रवेश परीक्षा कक्ष (CET Cell)',
        hi: 'राज्य सामान्य प्रवेश परीक्षा कक्ष (CET Cell)',
      },
      url: OFFICIAL_LINKS.cetCell,
      description: {
        en: 'Official statutory authority conducting MHT-CET, Centralized Admissions (CAP), provisional/final merit lists, seat matrix, and round cutoffs.',
        mr: 'एमएचटी-सीईटी परीक्षा, केंद्रीभूत प्रवेश प्रक्रिया (CAP), गुणवत्ता यादी, सीट मॅट्रिक्स व कटऑफ प्रसिद्ध करणारे अधिकृत पोर्टल.',
        hi: 'एमएचटी-सीईटी परीक्षा, सीएपी काउंसलिंग, मेरिट सूची, सीट मैट्रिक्स एवं कटऑफ हेतु आधिकारिक पोर्टल।',
      },
      tag: 'Primary Admission Portal',
      featured: true,
    },
    {
      name: {
        en: 'MahaDBT (Aaple Sarkar DBT Portal)',
        mr: 'महाडीबीटी (आपले सरकार डीबीटी पोर्टल)',
        hi: 'महाडीबीटी (आपले सरकार डीबीटी पोर्टल)',
      },
      url: OFFICIAL_LINKS.mahaDbt,
      description: {
        en: 'Government of Maharashtra direct benefit transfer portal for post-matric scholarships, EBC 50% tuition waiver, and hostel allowances.',
        mr: 'महाराष्ट्र शासनाचे अधिकृत शिष्यवृत्ती पोर्टल; ईबीसी ५०% फी सवलत, वसतिगृह भत्ता व मागासवर्गीय शिष्यवृत्तीसाठी.',
        hi: 'महाराष्ट्र सरकार का आधिकारिक छात्रवृत्ति पोर्टल; EBC ५०% फीस छूट एवं हॉस्टल भत्ते हेतु।',
      },
      tag: 'Scholarships Portal',
      featured: true,
    },
    {
      name: {
        en: 'Directorate of Technical Education (DTE), Maharashtra',
        mr: 'तंत्रशिक्षण संचालनालय (DTE), महाराष्ट्र राज्य',
        hi: 'तकनीकी शिक्षा निदेशालय (DTE), महाराष्ट्र राज्य',
      },
      url: OFFICIAL_LINKS.dtePortal,
      description: {
        en: 'State regulatory directorate overseeing engineering institutes, college approvals, curriculum oversight, and technical education policies.',
        mr: 'अभियांत्रिकी महाविद्यालये, अभ्यासक्रम आणि तांत्रिक शिक्षण नियमन करणारी राज्य संस्था.',
        hi: 'इंजीनियरिंग संस्थानों के नियमन एवं तकनीकी शिक्षा की सर्वोच्च राज्य संस्था।',
      },
      tag: 'State Regulatory Board',
      featured: false,
    },
    {
      name: {
        en: 'Fees Regulating Authority (FRA / Shikshan Shulka Samiti)',
        mr: 'शुल्क नियामक प्राधिकरण (FRA)',
        hi: 'शुल्क नियामक प्राधिकरण (FRA)',
      },
      url: OFFICIAL_LINKS.fraFeeRegulating,
      description: {
        en: 'Quasi-judicial authority that verifies and fixes the official fee structure for private unaided professional colleges each academic year.',
        mr: 'खाजगी विनाअनुदानित अभियांत्रिकी महाविद्यालयांची अधिकृत फी दरवर्षी निश्चित व मंजूर करणारे प्राधिकरण.',
        hi: 'निजी इंजीनियरिंग कॉलेजों की आधिकारिक फीस निर्धारित करने वाला प्राधिकरण।',
      },
      tag: 'Approved Fee Structures',
      featured: false,
    },
    {
      name: {
        en: 'National Anti-Ragging Portal (UGC / AICTE)',
        mr: 'राष्ट्रीय रॅगिंग विरोधी पोर्टल (Anti-Ragging)',
        hi: 'राष्ट्रीय एंटी-रैगिंग पोर्टल',
      },
      url: 'https://www.antiragging.in/',
      description: {
        en: 'Mandatory online undertaking registration for students and parents during institute reporting.',
        mr: 'कॉलेजमध्ये प्रवेश घेताना विद्यार्थी व पालकांसाठी आवश्यक असणारे ऑनलाइन प्रतिज्ञापत्र.',
        hi: 'कॉलेज में प्रवेश लेते समय छात्र एवं अभिभावक हेतु अनिवार्य ऑनलाइन हलफनामा।',
      },
      tag: 'Mandatory Undertaking',
      featured: false,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Title */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-blue-100 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
          <Globe className="w-3.5 h-3.5" />
          <span>Verified Government Portals</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {language === 'mr'
            ? 'अधिकृत पोर्टल्स व हेल्पलाइन संच'
            : language === 'hi'
            ? 'आधिकारिक पोर्टल एवं हेल्पलाइन निर्देशिका'
            : 'Official Portals & Verification Directory'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          {language === 'mr'
            ? 'कोणत्याही त्रयस्थ किंवा खाजगी वेबसाइटवर अवलंबून न राहता थेट महाराष्ट्र शासनाच्या अधिकृत संकेतस्थळांवरून माहिती तपासा.'
            : language === 'hi'
            ? 'सीधे महाराष्ट्र सरकार के आधिकारिक पोर्टल्स से सही व अद्यतन जानकारी प्राप्त करें।'
            : 'Always rely directly on official Government of Maharashtra portals for authentic bulletins.'}
        </p>
      </div>

      {/* Portals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portals.map((portal, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl p-5 border flex flex-col justify-between transition-all ${
              portal.featured
                ? 'border-blue-300 shadow-xs ring-1 ring-blue-100'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {portal.tag}
                </span>
                {portal.featured && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Essential
                  </span>
                )}
              </div>

              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                {portal.name[language]}
              </h3>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {portal.description[language]}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono truncate max-w-[180px]">
                {portal.url.replace('https://', '')}
              </span>
              <a
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors shadow-xs"
              >
                <span>{language === 'mr' ? 'उघडा' : language === 'hi' ? 'खोलें' : 'Visit Portal'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Official Helpdesk Guidelines */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-sm">
        <h3 className="font-bold text-base text-white flex items-center gap-2 mb-3">
          <PhoneCall className="w-4 h-4 text-blue-400" />
          <span>
            {language === 'mr'
              ? 'सीईटी सेल मदत कक्ष (Helpdesk Information)'
              : language === 'hi'
              ? 'सीईटी सेल सहायता केंद्र (Helpdesk Information)'
              : 'CET Cell Official Helpdesk & Support Info'}
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 space-y-1">
            <span className="font-bold text-white block">State CET Cell HQ (Mumbai):</span>
            <p className="leading-relaxed">
              8th Floor, New Excelsior Building, A.K. Nayak Marg, Fort, Mumbai - 400 001.
            </p>
            <p className="text-blue-300">Official Portal: cetcell.mahacet.org</p>
          </div>

          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 space-y-1">
            <span className="font-bold text-white block">Scrutiny / Facilitation Centers (FC):</span>
            <p className="leading-relaxed">
              {language === 'mr'
                ? 'प्रत्येक जिल्ह्यातील सरकारी आणि अनुदानित महाविद्यालयांत प्रत्यक्ष कागदपत्र पडताळणी कक्ष उपलब्ध असतात.'
                : language === 'hi'
                ? 'प्रत्येक जिले के सरकारी कॉलेजों में प्रत्यक्ष दस्तावेज सत्यापन केंद्र (FC) स्थापित किए जाते हैं।'
                : 'Scrutiny and verification facilitation centers are operated in govt/aided colleges across all districts.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

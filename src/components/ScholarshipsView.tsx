import React, { useState } from 'react';
import {
  GraduationCap,
  ExternalLink,
  Coins,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';
import { Language } from '../types/admission';
import { SCHOLARSHIPS_DATA, OFFICIAL_LINKS } from '../data/admissionData';

interface ScholarshipsViewProps {
  language: Language;
}

export const ScholarshipsView: React.FC<ScholarshipsViewProps> = ({ language }) => {
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>('ebc_scheme');

  const selectedScheme =
    SCHOLARSHIPS_DATA.find((s) => s.id === selectedSchemeId) || SCHOLARSHIPS_DATA[0];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Overview Banner */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-blue-100 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-1.5">
              <Coins className="w-3.5 h-3.5 text-emerald-600" />
              <span>MahaDBT Portal Government Schemes</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {language === 'mr'
                ? 'महाडीबीटी (MahaDBT) शिष्यवृत्ती व फी सवलती'
                : language === 'hi'
                ? 'महाडीबीटी (MahaDBT) छात्रवृत्ति एवं शुल्क छूट'
                : 'MahaDBT Scholarships & Fee Concessions'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {language === 'mr'
                ? 'कॅपद्वारे (CAP) प्रवेश घेतलेल्या विद्यार्थ्यांसाठी ईबीसी, वसतिगृह भत्ता, ओबीसी व एससी/एसटी शिष्यवृत्तीची संपूर्ण माहिती.'
                : language === 'hi'
                ? 'सीएपी द्वारा प्रवेशित विद्यार्थियों हेतु EBC, हॉस्टल भत्ता, एवं श्रेणीवार छात्रवृत्ति की प्रामाणिक जानकारी।'
                : 'Complete verified guide on post-matric scholarships, EBC 50% waiver, hostel allowances, and TFWS.'}
            </p>
          </div>

          <a
            href={OFFICIAL_LINKS.mahaDbt}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shrink-0 shadow-xs"
          >
            <span>
              {language === 'mr'
                ? 'महाडीबीटी पोर्टलवर अर्ज करा'
                : language === 'hi'
                ? 'महाडीबीटी पोर्टल पर जाएं'
                : 'Open MahaDBT Portal'}
            </span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Golden Rules for MahaDBT */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">
              {language === 'mr' ? '१. केवळ CAP प्रवेश पात्र' : language === 'hi' ? '१. केवल CAP प्रवेश' : '1. CAP Admissions Only'}
            </span>
            <p className="text-slate-600 text-[11px]">
              {language === 'mr'
                ? 'इन्स्टिट्यूट / मॅनेजमेंट कोट्यातील विद्यार्थ्यांना सरकारी फी सवलत मिळत नाही.'
                : language === 'hi'
                ? 'प्रबंधन कोटे की सीटों पर सरकारी छात्रवृत्ति लागू नहीं होती है।'
                : 'MahaDBT benefits apply solely to candidates admitted via official CAP rounds.'}
            </p>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">
              {language === 'mr' ? '२. बँक खात्याशी आधार लिंक' : language === 'hi' ? '२. आधार NPCI मैपिंग' : '2. Aadhaar NPCI Link'}
            </span>
            <p className="text-slate-600 text-[11px]">
              {language === 'mr'
                ? 'डीबीटी (DBT) निधी जमा होण्यासाठी बँक खाते आधारशी NPCI मॅप केलेले असणे आवश्यक.'
                : language === 'hi'
                ? 'डीबीटी राशि हेतु बैंक खाता आधार से एनपीसीआई मैप्ड होना अनिवार्य है।'
                : 'Bank account must be seeded with Aadhaar on NPCI mapper for DBT transfer.'}
            </p>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">
              {language === 'mr' ? '३. तहसीलदार उत्पन्न दाखला' : language === 'hi' ? '३. तहसीलदार आय प्रमाण' : '3. Tehsildar Income Proof'}
            </span>
            <p className="text-slate-600 text-[11px]">
              {language === 'mr'
                ? 'उत्पन्नाचा दाखला सक्षम प्राधिकऱ्याचा (तहसीलदार) चालू आर्थिक वर्षाचा असावा.'
                : language === 'hi'
                ? 'आय प्रमाण पत्र चालू वित्तीय वर्ष का सक्षम प्राधिकारी द्वारा जारी होना चाहिए।'
                : 'Annual income certificate must be issued by Tehsildar/SDO for current year.'}
            </p>
          </div>
        </div>
      </div>

      {/* Scheme Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {SCHOLARSHIPS_DATA.map((scheme) => {
          const isSelected = selectedSchemeId === scheme.id;
          return (
            <button
              key={scheme.id}
              onClick={() => setSelectedSchemeId(scheme.id)}
              className={`text-xs font-bold px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {scheme.id === 'ebc_scheme'
                ? 'EBC 50% Scheme'
                : scheme.id === 'panjabrao_hostel'
                ? 'Hostel Allowance (Punjab Rao)'
                : scheme.id === 'obc_vjnt_freeship'
                ? 'OBC / VJNT / SBC'
                : scheme.id === 'sc_st_scholarship'
                ? 'SC / ST (100% Free)'
                : 'TFWS Scheme'}
            </button>
          );
        })}
      </div>

      {/* Selected Scheme Detail Box */}
      <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-xs space-y-5">
        <div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 inline-block mb-1.5">
            {selectedScheme.department[language]}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {selectedScheme.name[language]}
          </h3>
        </div>

        {/* Benefits & Eligibility Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <Coins className="w-4 h-4 text-emerald-600" />
              <span>{language === 'mr' ? 'मिळणारा लाभ / सवलत:' : language === 'hi' ? 'प्राप्त लाभ / छूट:' : 'Concession / Benefits:'}</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {selectedScheme.benefit[language]}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <CreditCard className="w-4 h-4 text-blue-600" />
              <span>{language === 'mr' ? 'कौटुंबिक वार्षिक उत्पन्न मर्यादा:' : language === 'hi' ? 'पारिवारिक वार्षिक आय सीमा:' : 'Annual Family Income Limit:'}</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold text-blue-900">
              {selectedScheme.incomeLimit[language]}
            </p>
          </div>
        </div>

        {/* Beneficiary Target */}
        <div className="space-y-1 text-xs">
          <span className="font-bold text-slate-800 block">
            {language === 'mr' ? 'पात्र लाभार्थी:' : language === 'hi' ? 'पात्र लाभार्थी:' : 'Eligible Beneficiaries:'}
          </span>
          <p className="text-slate-700 leading-relaxed">
            {selectedScheme.beneficiary[language]}
          </p>
        </div>

        {/* Mandatory Documents */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-900 block">
            {language === 'mr' ? 'महाडीबीटी अर्जासाठी लागणारी कागदपत्रे:' : language === 'hi' ? 'महाडीबीटी आवेदन हेतु आवश्यक दस्तावेज:' : 'Documents required during online application:'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {selectedScheme.keyDocs[language].map((docName, dIdx) => (
              <div
                key={dIdx}
                className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{docName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link to MahaDBT */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {language === 'mr'
              ? 'अधिकृत अर्ज लिंक:'
              : language === 'hi'
              ? 'आधिकारिक आवेदन लिंक:'
              : 'Direct Portal Link:'}
          </span>
          <a
            href={selectedScheme.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg transition-colors"
          >
            <span>mahadbt.maharashtra.gov.in</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

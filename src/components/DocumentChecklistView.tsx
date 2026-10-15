import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  FileText,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  Printer,
  RotateCcw,
  Info,
} from 'lucide-react';
import { CandidateCategory, Language } from '../types/admission';
import {
  DOCUMENTS_LIST,
  CATEGORY_LABELS,
  OFFICIAL_LINKS,
} from '../data/admissionData';

interface DocumentChecklistViewProps {
  language: Language;
}

export const DocumentChecklistView: React.FC<DocumentChecklistViewProps> = ({
  language,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CandidateCategory>('obc');
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  // Filter required documents for selected category
  const relevantDocs = DOCUMENTS_LIST.filter((doc) =>
    doc.mandatoryFor.includes(selectedCategory)
  );

  const totalCount = relevantDocs.length;
  const readyCount = relevantDocs.filter((doc) => checkedDocs[doc.id]).length;
  const readinessPercent =
    totalCount > 0 ? Math.round((readyCount / totalCount) * 100) : 0;

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleResetChecklist = () => {
    setCheckedDocs({});
  };

  const handlePrint = () => {
    window.print();
  };

  const categoryKeys: CandidateCategory[] = [
    'open',
    'ews',
    'obc',
    'vjnt_sbc',
    'sc_st',
    'tfws',
    'minority',
    'pwd_defense',
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Category Selector Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-blue-100 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>
                {language === 'mr'
                  ? 'प्रवर्गनिहाय अनिवार्य कागदपत्रे तपासणी'
                  : language === 'hi'
                  ? 'श्रेणीवार अनिवार्य दस्तावेज चेकलिस्ट'
                  : 'Category-wise Mandatory Documents Checklist'}
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'mr'
                ? 'तुमचा प्रवर्ग निवडा आणि स्क्रूटनी सेंटरसाठी कागदपत्रांची तयारी तपासा.'
                : language === 'hi'
                ? 'अपनी श्रेणी चुनें और स्क्रूटनी केंद्र के लिए दस्तावेजों की तैयारी जांचें।'
                : 'Select your admission category to generate verified document requirements.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={handleResetChecklist}
              className="text-xs text-slate-500 hover:text-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-1 transition-colors"
              title="Reset ticks"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'mr' ? 'रीसेट' : language === 'hi' ? 'रीसेट' : 'Reset'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="text-xs text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-lg flex items-center gap-1 font-medium transition-colors"
              title="Print checklist"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'mr' ? 'प्रिंट' : language === 'hi' ? 'प्रिंट' : 'Print'}</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categoryKeys.map((catKey) => {
            const isSelected = selectedCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs scale-102'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {CATEGORY_LABELS[catKey][language]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Readiness Score Progress Meter */}
      <div className="bg-linear-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-medium text-blue-200 tracking-wide uppercase">
              {language === 'mr'
                ? 'कागदपत्र तयारी पातळी (Readiness Score)'
                : language === 'hi'
                ? 'दस्तावेज तैयारी स्कोर (Readiness Score)'
                : 'Admission Readiness Score'}
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold">{readinessPercent}%</span>
              <span className="text-sm text-blue-200">
                ({readyCount} / {totalCount}{' '}
                {language === 'mr' ? 'कागदपत्रे तयार' : language === 'hi' ? 'दस्तावेज तैयार' : 'documents ready'})
              </span>
            </div>
          </div>

          <div className="text-xs text-blue-100 bg-blue-800/60 px-3.5 py-2 rounded-xl border border-blue-700/60 max-w-sm">
            {readinessPercent === 100 ? (
              <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {language === 'mr'
                  ? 'उत्कृष्ट! तुमचे सर्व कागदपत्रे स्क्रूटनी सेंटरसाठी तयार आहेत.'
                  : language === 'hi'
                  ? 'शानदार! आपके सभी दस्तावेज स्क्रूटनी हेतु तैयार हैं।'
                  : 'Outstanding! All documents ready for Scrutiny confirmation.'}
              </span>
            ) : (
              <span>
                {language === 'mr'
                  ? 'टीप: ई-पडताळणी किंवा प्रत्यक्ष पडताळणीपूर्वी सर्व मूळ प्रती आणि प्रत्येकी ३ झेरॉक्स संच तयार ठेवा.'
                  : language === 'hi'
                  ? 'सुझाव: स्क्रूटनी से पूर्व सभी मूल दस्तावेज व ३ फोटोकॉपी सेट तैयार रखें।'
                  : 'Notice: Keep all original documents and 3 self-attested photocopy sets organized before verification.'}
              </span>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-blue-950/60 h-2.5 rounded-full mt-4 overflow-hidden border border-blue-700/50">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              readinessPercent === 100
                ? 'bg-emerald-400'
                : readinessPercent >= 50
                ? 'bg-blue-400'
                : 'bg-amber-400'
            }`}
            style={{ width: `${readinessPercent}%` }}
          />
        </div>
      </div>

      {/* Critical Statutory Alerts for OBC/SC/ST/EWS */}
      {(selectedCategory === 'obc' || selectedCategory === 'vjnt_sbc') && (
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-xs text-amber-950 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-amber-900">
              {language === 'mr'
                ? 'अति महत्त्वाचे: जात वैधता आणि नॉन क्रिमीलेअर (NCL) वैधता नियम'
                : language === 'hi'
                ? 'अति महत्वपूर्ण: जाति वैधता और नॉन-क्रीमी लेयर (NCL) वैधता नियम'
                : 'Statutory Rule: Caste Validity and Non-Creamy Layer (NCL) Validity'}
            </h4>
            <p className="leading-relaxed">
              {language === 'mr'
                ? '१. नॉन क्रिमीलेअर (NCL) प्रमाणपत्र चालू आर्थिक वर्षाच्या ३१ मार्चपर्यंत वैध असणे सक्तीचे आहे.\n२. कॅप प्रक्रियेच्या शेवटच्या मुदतीपर्यंत जात वैधता प्रमाणपत्र सादर न केल्यास तुमची राखीव जागा आपोआप खुल्या (Open) प्रवर्गात रूपांतरित केली जाईल.'
                : language === 'hi'
                ? '१. नॉन-क्रीमी लेयर (NCL) चालू वित्तीय वर्ष की ३१ मार्च तक वैध होना आवश्यक है।\n२. अंतिम समय सीमा तक जाति वैधता प्रमाण पत्र जमा न करने पर उम्मीदवारी सामान्य (Open) वर्ग में बदल दी जाएगी।'
                : '1. The Non-Creamy Layer (NCL) must clearly state validity up to March 31 of the current financial year.\n2. Without Caste Validity submitted before the final cutoff date of CAP, your seat automatically converts to Open/General!'}
            </p>
          </div>
        </div>
      )}

      {selectedCategory === 'ews' && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-950 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-blue-900">
              {language === 'mr'
                ? 'EWS पात्रता प्रमाणपत्र नियम (Proforma V)'
                : language === 'hi'
                ? 'EWS पात्रता नियम (Proforma V)'
                : 'EWS Eligibility Certificate Rule (Proforma V)'}
            </h4>
            <p className="leading-relaxed">
              {language === 'mr'
                ? 'महाराष्ट्र शासनाच्या विहित नमुन्यातील (Proforma V) ईडब्ल्यूएस प्रमाणपत्रच ग्राह्य धरले जाते. कुटुंबाचे सर्व मार्गांनी मिळणारे वार्षिक उत्पन्न ८ लाखांच्या आत असावे.'
                : language === 'hi'
                ? 'महाराष्ट्र शासन के निर्धारित प्रारूप (Proforma V) में बना प्रमाण पत्र ही मान्य होता है। पारिवारिक वार्षिक आय ८ लाख से कम होनी चाहिए।'
                : 'Only Maharashtra state format (Proforma V) issued by SDO/Tehsildar is accepted. Family income must not exceed ₹8 Lakhs.'}
            </p>
          </div>
        </div>
      )}

      {/* Document Items List */}
      <div className="space-y-3">
        {relevantDocs.map((doc, idx) => {
          const isChecked = !!checkedDocs[doc.id];
          return (
            <div
              key={doc.id}
              onClick={() => toggleDoc(doc.id)}
              className={`bg-white rounded-xl p-4 border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                isChecked
                  ? 'border-emerald-300 bg-emerald-50/20 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <div className="mt-0.5 shrink-0 text-slate-400">
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400" />
                )}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3
                    className={`text-sm font-bold ${
                      isChecked ? 'text-emerald-950 line-through opacity-80' : 'text-slate-900'
                    }`}
                  >
                    {idx + 1}. {doc.name[language]}
                  </h3>
                  <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200">
                    {doc.issuingAuthority[language]}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {doc.description[language]}
                </p>

                {doc.importantNote && (
                  <p className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded-md border border-amber-200 mt-1 inline-block">
                    {doc.importantNote[language]}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

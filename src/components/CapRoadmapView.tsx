import React, { useState } from 'react';
import {
  GitCommit,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
} from 'lucide-react';
import { Language } from '../types/admission';
import { CAP_ROADMAP, OFFICIAL_LINKS } from '../data/admissionData';

interface CapRoadmapViewProps {
  language: Language;
}

export const CapRoadmapView: React.FC<CapRoadmapViewProps> = ({ language }) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(4); // default open choice filling / allotment
  // Simulator state
  const [simPrefNumber, setSimPrefNumber] = useState<number>(3);
  const [simPreferenceChoice, setSimPreferenceChoice] = useState<'freeze' | 'betterment'>('betterment');

  const toggleStep = (stepNumber: number) => {
    setExpandedStep((prev) => (prev === stepNumber ? null : stepNumber));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-7 border border-blue-100 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>
                {language === 'mr'
                  ? 'केंद्रीभूत प्रवेश प्रक्रिया (CAP)'
                  : language === 'hi'
                  ? 'केंद्रीकृत प्रवेश प्रक्रिया (CAP)'
                  : 'Centralized Admission Process (CAP)'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {language === 'mr'
                ? 'अभियांत्रिकी प्रवेश टप्पे व नियमावली'
                : language === 'hi'
                ? 'इंजीनियरिंग प्रवेश चरण और दिशानिर्देश'
                : 'Maharashtra Engineering CAP Roadmap'}
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              {language === 'mr'
                ? 'नोंदणीपासून ते महाविद्यालयातील अंतिम प्रवेशापर्यंतच्या सर्व ७ टप्प्यांची अधिकृत माहिती.'
                : language === 'hi'
                ? 'पंजीकरण से लेकर कॉलेज में अंतिम प्रवेश तक के सभी ७ चरणों की आधिकारिक जानकारी।'
                : 'Complete step-by-step regulatory walkthrough from registration to final institute reporting.'}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 shrink-0 text-xs">
            <span className="font-semibold text-slate-800 block mb-1">
              {language === 'mr' ? 'अधिकृत पोर्टल:' : language === 'hi' ? 'आधिकारिक पोर्टल:' : 'Official Portal:'}
            </span>
            <a
              href={OFFICIAL_LINKS.cetCell}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium block"
            >
              cetcell.mahacet.org
            </a>
          </div>
        </div>

        {/* Interactive Freeze vs Betterment Simulator */}
        <div className="mt-6 bg-linear-to-br from-blue-50/70 via-indigo-50/50 to-sky-50 rounded-xl p-4 sm:p-5 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-blue-700" />
            <h3 className="text-base font-bold text-slate-900">
              {language === 'mr'
                ? 'सिम्युलेटर: Freeze vs Betterment मध्ये नक्की काय होते?'
                : language === 'hi'
                ? 'सिम्युलेटर: Freeze vs Betterment में वास्तव में क्या होता है?'
                : 'Interactive Simulator: Freeze vs Betterment Rules'}
            </h3>
          </div>
          <p className="text-xs text-slate-600 mb-4">
            {language === 'mr'
              ? 'विद्यार्थ्यांचा सर्वात मोठा गोंधळ फेरी १ चे कॉलेज मिळाल्यावर होतो. खाली तुमचा अलॉट झालेला पसंती क्रमांक निवडून पाहा:'
              : language === 'hi'
              ? 'राउंड १ का कॉलेज मिलने पर सही निर्णय लेने के लिए अपनी आवंटित वरीयता संख्या चुनें:'
              : 'Choose the allotted preference number to see the exact consequence and legal rule under CET Cell regulations:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                {language === 'mr'
                  ? '१. मिळालेल्या पर्यायाचा पसंती क्रमांक (Allotted Preference No.):'
                  : language === 'hi'
                  ? '१. आवंटित विकल्प की वरीयता संख्या (Allotted Preference No.):'
                  : '1. Which Option Number was allotted to you in Round 1?'}
              </label>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 4, 15].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSimPrefNumber(num)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      simPrefNumber === num
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {num === 1
                      ? language === 'mr'
                        ? 'पर्याय क्र. १ (Option 1)'
                        : 'Option 1'
                      : language === 'mr'
                      ? `पर्याय क्र. ${num} (Option ${num})`
                      : `Option ${num}`}
                  </button>
                ))}
              </div>
            </div>

            {simPrefNumber > 1 && (
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  {language === 'mr'
                    ? '२. तुमची इच्छा काय आहे?'
                    : language === 'hi'
                    ? '२. आप क्या चाहते हैं?'
                    : '2. What is your choice for this seat?'}
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSimPreferenceChoice('betterment')}
                    className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      simPreferenceChoice === 'betterment'
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {language === 'mr'
                      ? 'Betterment (वरचे कॉलेज हवे)'
                      : language === 'hi'
                      ? 'Betterment (उच्च कॉलेज चाहिए)'
                      : 'Betterment (Try for Higher)'}
                  </button>
                  <button
                    onClick={() => setSimPreferenceChoice('freeze')}
                    className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      simPreferenceChoice === 'freeze'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {language === 'mr'
                      ? 'Self-Freeze (हेच कॉलेज निश्चित)'
                      : language === 'hi'
                      ? 'Self-Freeze (यही कॉलेज पक्का)'
                      : 'Self-Freeze (Accept Current)'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Outcome Box */}
          <div className="mt-4 p-4 rounded-xl bg-white border border-blue-200 text-xs shadow-xs">
            {simPrefNumber === 1 ? (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-amber-700 font-bold">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>
                    {language === 'mr'
                      ? 'नियम: ऑटो-फ्रीझ (Auto-Freeze) लागू!'
                      : language === 'hi'
                      ? 'नियम: ऑटो-फ्रीज (Auto-Freeze) लागू!'
                      : 'Regulatory Rule: AUTO-FREEZE Activated!'}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {language === 'mr'
                    ? 'तुम्हाला तुमचा सर्वोच्च पसंती क्रमांक १ मिळाल्यामुळे हे कॉलेज ऑटो-फ्रीझ होते. तुम्हाला ₹१००० सीट स्वीकृती शुल्क भरून या कॉलेजमध्ये प्रवेश घेणे बंधनकारक आहे. तुम्ही पुढील फेऱ्यांमध्ये (Round 2 & 3) सहभागी होऊ शकत नाही.'
                    : language === 'hi'
                    ? 'आपको अपनी प्रथम वरीयता का विकल्प मिलने के कारण यह स्वतः लॉक हो गया है। ₹१००० शुल्क देकर कॉलेज में प्रवेश लेना अनिवार्य है। आप अगले राउंड में भाग नहीं ले सकते।'
                    : 'Because you received your first dream preference (#1), CET Cell automatically locks it. You MUST pay the ₹1,000 seat acceptance fee and report to the institute. You cannot participate in Round 2 or Round 3.'}
                </p>
              </div>
            ) : simPreferenceChoice === 'betterment' ? (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-indigo-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {language === 'mr'
                      ? `नियम: Betterment निवडल्यास पर्याय क्र. ${simPrefNumber} सुरक्षित राहतो!`
                      : language === 'hi'
                      ? `नियम: Betterment चुनने पर विकल्प क्र. ${simPrefNumber} सुरक्षित रहेगा!`
                      : `Rule: Choosing Betterment keeps Option #${simPrefNumber} 100% Reserved!`}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {language === 'mr'
                    ? `तुम्ही "Betterment" पर्याय निवडून ₹१००० सीट स्वीकृती शुल्क भरणे आवश्यक आहे. यामुळे तुमचे सध्याचे पर्याय क्र. ${simPrefNumber} चे कॉलेज कायम राखून ठेवले जाईल. फेरी २ मध्ये १ ते ${simPrefNumber - 1} यापैकी वरचे कॉलेज मिळाले, तर आधीचे कॉलेज आपोआप रद्द होऊन नवीन मिळेल. काहीही न मिळाल्यास, पर्याय क्र. ${simPrefNumber} ची जागा तुमच्यासाठी १००% सुरक्षित राहील!`
                    : language === 'hi'
                    ? `आप "Betterment" चुनकर ₹१००० फीस भरें। इससे आपकी वर्तमान सीट सुरक्षित रहेगी। राउंड २ में इससे ऊपर का कॉलेज मिलने पर ही यह सीट छूटेगी, अन्यथा यही सीट आपके पास बनी रहेगी!`
                    : `You select "Not Freeze / Betterment" and pay ₹1,000 seat acceptance fee. Your current seat (${simPrefNumber}) is safely locked for you. In Round 2, if a higher choice (1 to ${simPrefNumber - 1}) is allotted, your previous seat automatically releases. If no higher seat is allotted, your current seat remains intact!`}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {language === 'mr'
                      ? `नियम: Self-Freeze – पर्याय क्र. ${simPrefNumber} अंतिम!`
                      : language === 'hi'
                      ? `नियम: Self-Freeze – विकल्प क्र. ${simPrefNumber} फाइनल!`
                      : `Rule: Self-Freeze – Option #${simPrefNumber} Finalized!`}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {language === 'mr'
                    ? `तुम्ही स्वतः हे कॉलेज स्वीकारले आहे. आता लॉगिनमधून ₹१००० शुल्क भरा, सीट अलॉटमेंट लेटर डाऊनलोड करा आणि मूळ कागदपत्रांसह त्या महाविद्यालयात जाऊन अंतिम प्रवेश निश्चित करा. तुम्ही पुढील फेऱ्यांतून बाहेर पडाल.`
                    : language === 'hi'
                    ? `आपने अपनी इच्छा से यह सीट लॉक की है। ₹१००० शुल्क भरें, अलॉटमेंट लेटर डाउनलोड करें और कॉलेज जाकर मूल दस्तावेजों के साथ प्रवेश पूर्ण करें।`
                    : `You have voluntarily chosen to accept this seat. Pay ₹1,000 online fee, download allotment letter, and report to the institute with original documents to finish admission. You are done with CAP.`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 7-Step Detailed Flowchart */}
      <div className="space-y-4">
        {CAP_ROADMAP.map((step) => {
          const isExpanded = expandedStep === step.stepNumber;
          return (
            <div
              key={step.stepNumber}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded ? 'border-blue-400 shadow-sm' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Step Header */}
              <button
                onClick={() => toggleStep(step.stepNumber)}
                className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-hidden group"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isExpanded
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-blue-50 text-blue-700 border border-blue-200 group-hover:bg-blue-100'
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block">
                      {language === 'mr'
                        ? `टप्पा क्रमांक ${step.stepNumber}`
                        : language === 'hi'
                        ? `चरण संख्या ${step.stepNumber}`
                        : `Step ${step.stepNumber}`}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {step.title[language]}
                    </h3>
                  </div>
                </div>

                <div className="text-slate-400 group-hover:text-slate-700">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Step Expanded Content */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4 text-sm">
                  <p className="text-slate-700 leading-relaxed">
                    {step.description[language]}
                  </p>

                  {/* Action Points */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      {language === 'mr'
                        ? 'या टप्प्यात काय करावे:'
                        : language === 'hi'
                        ? 'इस चरण में क्या करें:'
                        : 'Action steps to complete:'}
                    </h4>
                    <ul className="space-y-1.5">
                      {step.actionItems[language].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Caution Box */}
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-900">
                    <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">
                        {language === 'mr' ? 'महत्त्वाची दक्षता: ' : language === 'hi' ? 'महत्वपूर्ण सावधानी: ' : 'Crucial Caution: '}
                      </span>
                      <span>{step.caution[language]}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

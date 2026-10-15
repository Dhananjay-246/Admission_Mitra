import React, { useState } from 'react';
import {
  Building2,
  Search,
  ExternalLink,
  MapPin,
  CheckCircle,
  FileSpreadsheet,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { Language, CollegeInfo } from '../types/admission';
import { TOP_COLLEGES, OFFICIAL_LINKS } from '../data/admissionData';

interface CollegesViewProps {
  language: Language;
}

export const CollegesView: React.FC<CollegesViewProps> = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = [
    'All',
    'Pune',
    'Mumbai',
    'Western Maharashtra',
    'Vidarbha',
    'Marathwada',
    'North Maharashtra',
  ];

  const filteredColleges = TOP_COLLEGES.filter((college) => {
    const matchesRegion =
      selectedRegion === 'All' || college.region === selectedRegion;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      college.name.toLowerCase().includes(q) ||
      college.marathiName.toLowerCase().includes(q) ||
      college.code.includes(q) ||
      college.district.toLowerCase().includes(q) ||
      college.popularBranches.some((b) => b.toLowerCase().includes(q));
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Directory Header Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-blue-100 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>DTE Institute Codes</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              {language === 'mr'
                ? 'महाराष्ट्रातील प्रमुख अभियांत्रिकी महाविद्यालये व DTE कोड'
                : language === 'hi'
                ? 'महाराष्ट्र के शीर्ष इंजीनियरिंग कॉलेज एवं DTE कोड'
                : 'Top Engineering Colleges & Official DTE Codes'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'mr'
                ? 'कॅप ऑप्शन फॉर्म भरताना लागणारे अधिकृत संस्था कोड (DTE Choice Codes) व अधिकृत पोर्टल माहिती.'
                : language === 'hi'
                ? 'सीएपी चॉइस फिलिंग हेतु आवश्यक आधिकारिक संस्थान कोड (DTE Choice Codes)।'
                : 'Verified DTE institute codes required during CAP option form priority submission.'}
            </p>
          </div>

          <a
            href={OFFICIAL_LINKS.cetCell}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors shrink-0 shadow-xs"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>
              {language === 'mr'
                ? 'CET Cell कटऑफ आर्काइव्ह'
                : language === 'hi'
                ? 'CET Cell कटऑफ आर्काइव'
                : 'CET Cell Cutoff Archive'}
            </span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Search and Filters */}
        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'mr'
                  ? 'कॉलेजचे नाव, DTE कोड (उदा. 6006), शहर किंवा शाखा शोधा...'
                  : language === 'hi'
                  ? 'कॉलेज का नाम, DTE कोड (उदा. 6006), शहर या ब्रांच खोजें...'
                  : 'Search by college, DTE Code (e.g. 6006, 3012), city or branch...'
              }
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium shrink-0 transition-colors ${
                  selectedRegion === reg
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Official Cutoff Policy Reminder */}
      <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <h4 className="font-bold text-blue-950">
            {language === 'mr'
              ? 'कटऑफ आणि फी संबंधी अधिकृत सूचना'
              : language === 'hi'
              ? 'कटऑफ एवं फीस संबंधित आधिकारिक सूचना'
              : 'Regulatory Notice Regarding Cutoffs & Fees'}
          </h4>
          <p className="leading-relaxed text-slate-700">
            {language === 'mr'
              ? 'प्रवेश मित्र कधीही मनमानी कटऑफ किंवा फी सांगत नाही. कटऑफ दरवर्षी परीक्षा काठिण्य पातळी व जागेनुसार बदलतात. मागील वर्षाच्या फेरी १, २ व ३ च्या अधिकृत कटऑफ पीडीएफ पाहण्यासाठी वरील "CET Cell कटऑफ आर्काइव्ह" बटणावर क्लिक करा. महाविद्यालयाची अधिकृत फी शिक्षण शुल्क समितीने (FRA) मंजूर केलेल्या पत्रकानुसार असते.'
              : language === 'hi'
              ? 'प्रवेश मित्र कभी भी अनुमानित कटऑफ या फीस का दावा नहीं करता। सटीक कटऑफ व शुल्क जानने हेतु आधिकारिक "CET Cell कटऑफ आर्काइव" देखें।'
              : 'Admission Mitra strictly never invents cutoffs or fee amounts. Official CAP Round 1, 2, 3 cutoff percentiles are issued exclusively via official PDF bulletins by CET Cell on cetcell.mahacet.org. College tuition fees are regulated by the Fees Regulating Authority (FRA).'}
          </p>
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredColleges.map((college) => (
          <div
            key={college.code}
            className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              {/* Top row with DTE code and status badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1 bg-blue-700 text-white font-mono font-bold text-xs px-2.5 py-1 rounded-lg shadow-xs">
                  DTE: {college.code}
                </span>
                <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                  {college.status}
                </span>
              </div>

              {/* College Names */}
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                {language === 'mr' ? college.marathiName : college.name}
              </h3>
              {language === 'mr' && (
                <p className="text-xs text-slate-500 mt-0.5">{college.name}</p>
              )}

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>
                  {college.location} ({college.region})
                </span>
              </div>

              {/* Popular Branches */}
              <div className="mt-3">
                <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                  {language === 'mr' ? 'प्रमुख शाखा:' : language === 'hi' ? 'प्रमुख शाखाएं:' : 'Popular Branches:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {college.popularBranches.map((branch, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                    >
                      {branch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <a
                href={college.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
              >
                <span>{language === 'mr' ? 'संकेतस्थळ' : language === 'hi' ? 'वेबसाइट' : 'Official Site'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={OFFICIAL_LINKS.cetCell}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 font-medium inline-flex items-center gap-1"
                title="View on CET Cell portal"
              >
                <span>CET Cell Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <div className="bg-white rounded-2xl p-8 text-center text-slate-500 border border-slate-200">
          <p className="text-sm">
            {language === 'mr'
              ? 'कोणतेही महाविद्यालय सापडले नाही. कृपया वेगळा शोध शब्द टाका.'
              : language === 'hi'
              ? 'कोई कॉलेज नहीं मिला। कृपया दूसरा शब्द खोजें।'
              : 'No colleges found matching your criteria. Try adjusting the search query.'}
          </p>
        </div>
      )}
    </div>
  );
};

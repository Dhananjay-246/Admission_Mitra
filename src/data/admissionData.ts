import {
  CandidateCategory,
  DocumentItem,
  CollegeInfo,
  ScholarshipScheme,
  CapStep,
  Language,
} from '../types/admission';

export const OFFICIAL_LINKS = {
  cetCell: 'https://cetcell.mahacet.org/',
  mahaDbt: 'https://mahadbt.maharashtra.gov.in/',
  dtePortal: 'https://dte.maharashtra.gov.in/',
  fraFeeRegulating: 'https://sssamiti.org/',
};

export const CATEGORY_LABELS: Record<CandidateCategory, Record<Language, string>> = {
  open: {
    en: 'Open / General',
    mr: 'खुला प्रवर्ग (Open / General)',
    hi: 'सामान्य वर्ग (Open / General)',
  },
  ews: {
    en: 'EWS (Economically Weaker Section)',
    mr: 'ई.डब्ल्यू.एस. (आर्थिक दुर्बल घटक)',
    hi: 'ई.डब्ल्यू.एस. (आर्थिक रूप से कमजोर वर्ग)',
  },
  obc: {
    en: 'OBC (Other Backward Class)',
    mr: 'इतर मागासवर्ग (OBC)',
    hi: 'अन्य पिछड़ा वर्ग (OBC)',
  },
  vjnt_sbc: {
    en: 'VJ / NT (A, B, C, D) & SBC',
    mr: 'वि.जा. / भ.ज. (A, B, C, D) आणि एस.बी.सी.',
    hi: 'वि.जा. / भ.ज. (A, B, C, D) और एस.बी.सी.',
  },
  sc_st: {
    en: 'SC / ST (Scheduled Castes & Tribes)',
    mr: 'अनुसूचित जाती / जमाती (SC / ST)',
    hi: 'अनुसूचित जाति / जनजाति (SC / ST)',
  },
  tfws: {
    en: 'TFWS (Tuition Fee Waiver Scheme)',
    mr: 'टी.एफ.डब्ल्यू.एस. (शिक्षण शुल्क माफी योजना)',
    hi: 'टी.एफ.डब्ल्यू.एस. (ट्यूशन फीस छूट योजना)',
  },
  minority: {
    en: 'Linguistic / Religious Minority',
    mr: 'भाषिक किंवा धार्मिक अल्पसंख्याक',
    hi: 'भाषाई या धार्मिक अल्पसंख्यक',
  },
  pwd_defense: {
    en: 'PwD / Defense Personnel Ward',
    mr: 'दिव्यांग (PwD) / संरक्षण दल (Defense)',
    hi: 'दिव्यांग (PwD) / रक्षा कर्मी परिवार',
  },
};

export const DOCUMENTS_LIST: DocumentItem[] = [
  {
    id: 'ssc_marksheet',
    name: {
      en: 'SSC (Std. X) Marksheet & Certificate',
      mr: '१० वी (SSC) गुणपत्रिका व प्रमाणपत्र',
      hi: '१०वीं (SSC) अंकतालिका व प्रमाण पत्र',
    },
    description: {
      en: 'Proof of date of birth and mathematics marks qualification.',
      mr: 'जन्म तारखेचा पुरावा आणि पायाभूत गुण पडताळणीसाठी आवश्यक.',
      hi: 'जन्म तिथि का प्रमाण और गणित विषय के अंकों की पुष्टि हेतु।',
    },
    issuingAuthority: {
      en: 'State Board / CBSE / ICSE',
      mr: 'राज्य मंडळ / CBSE / ICSE',
      hi: 'स्टेट बोर्ड / CBSE / ICSE',
    },
    mandatoryFor: ['open', 'ews', 'obc', 'vjnt_sbc', 'sc_st', 'tfws', 'minority', 'pwd_defense'],
  },
  {
    id: 'hsc_marksheet',
    name: {
      en: 'HSC (Std. XII) Marksheet & Passing Certificate',
      mr: '१२ वी (HSC) गुणपत्रिका व उत्तीर्ण प्रमाणपत्र',
      hi: '१२वीं (HSC) अंकतालिका व उत्तीर्ण प्रमाण पत्र',
    },
    description: {
      en: 'Minimum 45% aggregate in PCM (40% for Reserved/EWS/PwD of Maharashtra).',
      mr: 'PCM गटात किमान ४५% गुण (राखीव/EWS/दिव्यांग प्रवर्गासाठी किमान ४०% गुण).',
      hi: 'PCM समूह में न्यूनतम ४५% अंक (आरक्षित/EWS/दिव्यांग वर्ग के लिए ४०% अंक)।',
    },
    issuingAuthority: {
      en: 'State Board / CBSE / ISC',
      mr: 'राज्य मंडळ / CBSE / ISC',
      hi: 'स्टेट बोर्ड / CBSE / ISC',
    },
    mandatoryFor: ['open', 'ews', 'obc', 'vjnt_sbc', 'sc_st', 'tfws', 'minority', 'pwd_defense'],
  },
  {
    id: 'entrance_scorecard',
    name: {
      en: 'MHT-CET / JEE Main Scorecard',
      mr: 'एमएचटी-सीईटी (MHT-CET) / जेईई मेन गुणपत्रक',
      hi: 'एमएचटी-सीईटी (MHT-CET) / जेईई मेन स्कोरकार्ड',
    },
    description: {
      en: 'Official scorecard with percentile and Application ID.',
      mr: 'पर्सेंटाइल आणि अर्ज क्रमांकासह अधिकृत गुणपत्रक.',
      hi: 'पर्सेंटाइल और आवेदन संख्या के साथ आधिकारिक स्कोरकार्ड।',
    },
    issuingAuthority: {
      en: 'State CET Cell Maharashtra / NTA',
      mr: 'राज्य सीईटी सेल महाराष्ट्र / NTA',
      hi: 'स्टेट सीईटी सेल महाराष्ट्र / NTA',
    },
    mandatoryFor: ['open', 'ews', 'obc', 'vjnt_sbc', 'sc_st', 'tfws', 'minority', 'pwd_defense'],
  },
  {
    id: 'domicile_certificate',
    name: {
      en: 'Maharashtra State Domicile / Birth Certificate',
      mr: 'महाराष्ट्र अधिवास (Domicile) / जन्म दाखला / शाळा सोडल्याचा दाखला',
      hi: 'महाराष्ट्र अधिवास (Domicile) / जन्म प्रमाण पत्र / स्कूल लीविंग सर्टिफिकेट',
    },
    description: {
      en: 'Proves Maharashtra State Candidature (Type A). School leaving certificate must explicitly mention birthplace in Maharashtra.',
      mr: 'महाराष्ट्र राज्य उमेदवारी (प्रकार अ) सिद्ध करण्यासाठी आवश्यक. टीसीवर महाराष्ट्रातील जन्मस्थान नमूद असावे.',
      hi: 'महाराष्ट्र राज्य उम्मीदवारी (Type A) सिद्ध करने हेतु। टीसी पर महाराष्ट्र का जन्मस्थान होना अनिवार्य है।',
    },
    issuingAuthority: {
      en: 'Tehsildar / Executive Magistrate / Municipal Corporation',
      mr: 'तहसीलदार / कार्यकारी दंडाधिकारी / महानगरपालिका',
      hi: 'तहसीलदार / कार्यपालक दंडाधिकारी / नगर निगम',
    },
    mandatoryFor: ['open', 'ews', 'obc', 'vjnt_sbc', 'sc_st', 'tfws', 'minority', 'pwd_defense'],
    importantNote: {
      en: 'Mandatory to claim any Maharashtra quota, reservation, or scholarship.',
      mr: 'कोणतेही राज्य आरक्षण किंवा शिष्यवृत्ती मिळवण्यासाठी अधिवास अनिवार्य आहे.',
      hi: 'कोई भी राज्य आरक्षण या छात्रवृत्ति प्राप्त करने के लिए अधिवास अनिवार्य है।',
    },
  },
  {
    id: 'caste_certificate',
    name: {
      en: 'Caste Certificate (जातीचे प्रमाणपत्र)',
      mr: 'जातीचे प्रमाणपत्र (Caste Certificate)',
      hi: 'जाति प्रमाण पत्र (Caste Certificate)',
    },
    description: {
      en: 'Must state candidate caste and that it is recognized in Maharashtra.',
      mr: 'उमेदवाराची जात महाराष्ट्रात विहित प्रवर्गात मोडत असल्याचा अधिकृत दाखला.',
      hi: 'उम्मीदवार की जाति महाराष्ट्र सरकार द्वारा मान्य वर्ग में होने का प्रमाण पत्र।',
    },
    issuingAuthority: {
      en: 'Sub-Divisional Officer (SDO) / Deputy Collector',
      mr: 'उपविभागीय अधिकारी (प्रांत अधिकारी) / उप जिल्हाधिकारी',
      hi: 'उपमंडल अधिकारी (SDO) / उप जिलाधिकारी',
    },
    mandatoryFor: ['obc', 'vjnt_sbc', 'sc_st'],
  },
  {
    id: 'caste_validity',
    name: {
      en: 'Caste Validity Certificate (जात वैधता प्रमाणपत्र)',
      mr: 'जात वैधता प्रमाणपत्र (Caste Validity Certificate)',
      hi: 'जाति वैधता प्रमाण पत्र (Caste Validity Certificate)',
    },
    description: {
      en: 'Strictly mandatory for admission under reserved category in Maharashtra professional courses.',
      mr: 'व्यावसायिक अभियांत्रिकी पदवी प्रवेशासाठी जात वैधता प्रमाणपत्र अत्यंत आवश्यक आहे.',
      hi: 'महाराष्ट्र में आरक्षित वर्ग में इंजीनियरिंग प्रवेश हेतु जाति वैधता अनिवार्य है।',
    },
    issuingAuthority: {
      en: 'Divisional Caste Scrutiny Committee (विभागीय जात पडताळणी समिती)',
      mr: 'विभागीय जात प्रमाणपत्र पडताळणी समिती',
      hi: 'विभागीय जाति प्रमाण पत्र जांच समिति',
    },
    mandatoryFor: ['obc', 'vjnt_sbc', 'sc_st'],
    importantNote: {
      en: 'Crucial: Without Caste Validity by the cutoff date set by CET Cell, candidate seat converts directly to Open/General category!',
      mr: 'महत्त्वाचे: अंतिम मुदतीत जात वैधता सादर न केल्यास जागा आपोआप खुल्या (Open) प्रवर्गात रूपांतरित केली जाते!',
      hi: 'अति महत्वपूर्ण: अंतिम तिथि तक वैधता जमा न करने पर सीट स्वतः सामान्य वर्ग में बदल जाती है!',
    },
  },
  {
    id: 'non_creamy_layer',
    name: {
      en: 'Non-Creamy Layer Certificate (NCL - नॉन क्रिमीलेअर)',
      mr: 'नॉन क्रिमीलेअर दाखला (NCL Certificate)',
      hi: 'नॉन क्रीमी लेयर प्रमाण पत्र (NCL Certificate)',
    },
    description: {
      en: 'Mandatory for OBC, VJ/NT, SBC candidates. Must be valid up to 31st March of the current financial year.',
      mr: 'OBC, VJ/NT आणि SBC साठी अनिवार्य. चालू आर्थिक वर्षाच्या ३१ मार्चपर्यंत वैध असणे बंधनकारक आहे.',
      hi: 'OBC, VJ/NT और SBC हेतु अनिवार्य। चालू वित्तीय वर्ष की ३१ मार्च तक वैध होना चाहिए।',
    },
    issuingAuthority: {
      en: 'Sub-Divisional Officer / Tehsildar',
      mr: 'उपविभागीय अधिकारी / तहसीलदार',
      hi: 'उपमंडल अधिकारी / तहसीलदार',
    },
    mandatoryFor: ['obc', 'vjnt_sbc'],
    importantNote: {
      en: 'Check the expiry date! NCL must state validity up to 31st March of admission cycle.',
      mr: 'दाखल्यावरील तारीख तपासा! तो चालू शैक्षणिक वर्षाच्या ३१ मार्चपर्यंत वैध असावा.',
      hi: 'तारीख की जांच करें! यह चालू शैक्षणिक वर्ष के ३१ मार्च तक मान्य होना चाहिए।',
    },
  },
  {
    id: 'ews_certificate',
    name: {
      en: 'EWS Eligibility Certificate (Proforma V)',
      mr: 'आर्थिक दुर्बल घटक प्रमाणपत्र (EWS Proforma V)',
      hi: 'ईडब्ल्यूएस पात्रता प्रमाण पत्र (Proforma V)',
    },
    description: {
      en: 'For General category students with annual family income up to ₹8 Lakhs from all sources.',
      mr: 'सर्व मार्गांनी मिळणारे वार्षिक कौटुंबिक उत्पन्न ८ लाखांपर्यंत असलेल्या खुल्या प्रवर्गातील विद्यार्थ्यांसाठी.',
      hi: 'सभी स्रोतों से पारिवारिक वार्षिक आय ८ लाख तक वाले सामान्य वर्ग के छात्रों के लिए।',
    },
    issuingAuthority: {
      en: 'District Magistrate / SDO / Tehsildar',
      mr: 'जिल्हाधिकारी / उपविभागीय अधिकारी / तहसीलदार',
      hi: 'जिला मजिस्ट्रेट / SDO / तहसीलदार',
    },
    mandatoryFor: ['ews'],
  },
  {
    id: 'income_certificate',
    name: {
      en: 'Annual Family Income Certificate (तहसीलदार उत्पन्न दाखला)',
      mr: 'कौटुंबिक वार्षिक उत्पन्न दाखला (सक्षम प्राधिकारी)',
      hi: 'पारिवारिक वार्षिक आय प्रमाण पत्र',
    },
    description: {
      en: 'Issued for current financial year. Mandatory for TFWS, EWS, MahaDBT EBC and hostel scholarships.',
      mr: 'चालू आर्थिक वर्षाचा. TFWS, EWS आणि महाडीबीटी शिष्यवृत्तीसाठी अनिवार्य.',
      hi: 'चालू वित्तीय वर्ष का। TFWS, EWS और महाडीबीटी छात्रवृत्ति के लिए अनिवार्य।',
    },
    issuingAuthority: {
      en: 'Tehsildar / Sub-Divisional Officer',
      mr: 'तहसीलदार कार्यालय',
      hi: 'तहसीलदार कार्यालय',
    },
    mandatoryFor: ['ews', 'tfws', 'obc', 'vjnt_sbc'],
  },
  {
    id: 'minority_certificate',
    name: {
      en: 'Minority Declaration / School Leaving Certificate (TC)',
      mr: 'अल्पसंख्याक स्वघोषणापत्र / टीसी (Minority Proof)',
      hi: 'अल्पसंख्यक स्व-घोषणा / टीसी प्रमाण',
    },
    description: {
      en: 'For Linguistic (Hindi, Gujarati, Sindhi, etc.) or Religious (Muslim, Christian, Jain, Buddhist, Sikh, Parsi) minority quota seats.',
      mr: 'भाषिक किंवा धार्मिक अल्पसंख्याक कोट्यातील जागांसाठी पुरावा (टीसीवर मातृभाषा/धर्म नोंद किंवा विहित नमुन्यातील प्रतिज्ञापत्र).',
      hi: 'भाषाई या धार्मिक अल्पसंख्यक कोटे के लिए टीसी या हलफनामा।',
    },
    issuingAuthority: {
      en: 'School/College TC & Notarized Affidavit (Proforma O)',
      mr: 'शाळा सोडल्याचा दाखला व नोटराइज्ड प्रतिज्ञापत्र',
      hi: 'स्कूल लीविंग सर्टिफिकेट और नोटरीकृत हलफनामा',
    },
    mandatoryFor: ['minority'],
  },
  {
    id: 'pwd_defense_cert',
    name: {
      en: 'Disability Certificate / Defense Personnel Proforma (Def-1/2/3)',
      mr: 'दिव्यांगता प्रमाणपत्र (UDID) / संरक्षण दल दाखला (Proforma)',
      hi: 'दिव्यांगता प्रमाण पत्र / रक्षा कर्मी प्रोफ़ॉर्मा',
    },
    description: {
      en: 'Minimum 40% permanent physical disability certified via UDID, or Defense Zilla Sainik Welfare certificate.',
      mr: 'किमान ४०% दिव्यांगता किंवा जिल्हा सैनिक कल्याण मंडळाचे अधिकृत प्रमाणपत्र.',
      hi: 'न्यूनतम ४०% दिव्यांगता अथवा जिला सैनिक कल्याण बोर्ड का प्रमाण पत्र।',
    },
    issuingAuthority: {
      en: 'District Civil Surgeon / Zilla Sainik Welfare Board',
      mr: 'जिल्हा शल्यचिकित्सक / जिल्हा सैनिक कल्याण कार्यालय',
      hi: 'जिला सिविल सर्जन / जिला सैनिक कल्याण कार्यालय',
    },
    mandatoryFor: ['pwd_defense'],
  },
];

export const CAP_ROADMAP: CapStep[] = [
  {
    stepNumber: 1,
    title: {
      en: 'Online Registration & Document Upload',
      mr: 'ऑनलाइन नोंदणी आणि कागदपत्रे अपलोड करणे',
      hi: 'ऑनलाइन पंजीकरण और दस्तावेज अपलोड करना',
    },
    description: {
      en: 'Visit cetcell.mahacet.org, register with MHT-CET/JEE credentials, fill candidate profile and upload clear scans of original documents.',
      mr: 'cetcell.mahacet.org वर जाऊन नोंदणी करा, आवश्यक माहिती भरा आणि मूळ कागदपत्रांचे स्पष्ट स्कॅन अपलोड करा.',
      hi: 'cetcell.mahacet.org पर जाकर पंजीकरण करें, विवरण भरें और मूल दस्तावेजों के स्पष्ट स्कैन अपलोड करें।',
    },
    actionItems: {
      en: [
        'Select mode of scrutiny: E-Scrutiny (Online) or Physical Scrutiny (at Facilitation Center - FC)',
        'Ensure name spelling matches across SSC, HSC, and MHT-CET scorecards',
        'Download and print the filled application acknowledgement',
      ],
      mr: [
        'पडताळणी पद्धत निवडा: ई-पडताळणी (ऑनलाइन) किंवा प्रत्यक्ष पडताळणी (स्क्रूटनी सेंटर - FC येथे)',
        'नाव, जात प्रवर्ग आणि गुण बरोबर भरल्याची खात्री करा',
        'अर्ज भरल्याची पोहोच पावती (Acknowledgement) सुरक्षित ठेवा',
      ],
      hi: [
        'जांच का माध्यम चुनें: ई-स्क्रूटनी (ऑनलाइन) अथवा प्रत्यक्ष स्क्रूटनी (एफसी केंद्र पर)',
        'नाम, जाति वर्ग और अंकों की सही प्रविष्टि सुनिश्चित करें',
        'भरे हुए आवेदन की पावती (Acknowledgement) सुरक्षित रखें',
      ],
    },
    caution: {
      en: 'Double check mobile number & email ID; all OTPs and allotment SMS will arrive here.',
      mr: 'मोबाईल नंबर आणि ईमेल बरोबर टाका; सर्व ओटीपी आणि प्रवेश संदेश याच नंबरवर येतात.',
      hi: 'मोबाइल नंबर व ईमेल सही भरें; सभी ओटीपी व आवंटन संदेश इसी पर प्राप्त होंगे।',
    },
  },
  {
    stepNumber: 2,
    title: {
      en: 'Document Scrutiny & Verification Confirmation',
      mr: 'कागदपत्र पडताळणी व कन्फर्मेशन',
      hi: 'दस्तावेज सत्यापन एवं पुष्टिकरण',
    },
    description: {
      en: 'The Scrutiny Center verifies uploaded documents. If discrepancies arise, you receive a discrepancy message to re-upload.',
      mr: 'स्क्रूटनी सेंटरद्वारे कागदपत्रे तपासली जातात. काही त्रुटी आढळल्यास ती दुरुस्त करण्यासाठी संदेश दिला जातो.',
      hi: 'स्क्रूटनी केंद्र द्वारा दस्तावेजों की जांच की जाती है। त्रुटि होने पर पुनः अपलोड का अवसर मिलता है।',
    },
    actionItems: {
      en: [
        'Check portal dashboard daily for any query or discrepancy notice',
        'If queries raised, immediately upload required document before deadline',
        'Collect verified stamped Acknowledgement slip',
      ],
      mr: [
        'लॉगिन करून काही आक्षेप किंवा त्रुटी आली आहे का ते रोज तपासा',
        'त्रुटी आढळल्यास तातडीने सुधारित कागदपत्र अपलोड करा',
        'पडताळणी पूर्ण झाल्यावर शिक्का असलेली पोहोच पावती डाऊनलोड करा',
      ],
      hi: [
        'लॉगिन करके प्रतिदिन जांचें कि कोई त्रुटि सूचना तो नहीं आई',
        'आपत्ति होने पर निर्धारित समय में सही दस्तावेज अपलोड करें',
        'सत्यापित मुहरयुक्त रसीद डाउनलोड करें',
      ],
    },
    caution: {
      en: 'Application is invalid until Scrutiny Center confirms and generates the verified stamp!',
      mr: 'स्क्रूटनी केंद्राने कन्फर्म करून पावती दिल्यावरच तुमचा अर्ज अधिकृत मानला जातो!',
      hi: 'स्क्रूटनी केंद्र से पावती मिलने के बाद ही आवेदन वैध माना जाता है!',
    },
  },
  {
    stepNumber: 3,
    title: {
      en: 'Provisional Merit List & Grievance Window',
      mr: 'तात्पुरती गुणवत्ता यादी (Provisional Merit List) आणि तक्रार निवारण',
      hi: 'अनंतिम मेधा सूची (Provisional Merit List) और शिकायत निवारण',
    },
    description: {
      en: 'CET Cell publishes state-level and category ranks. Check all personal details, category, marks, and home university status.',
      mr: 'राज्य गुणवत्ता क्रमांक व प्रवर्ग क्रमांक जाहीर केला जातो. नाव, प्रवर्ग, गुण आणि विद्यापीठ क्षेत्र तपासून घ्या.',
      hi: 'राज्य स्तरीय और श्रेणीवार रैंक जारी होती है। अपने सभी विवरण, अंक और यूनिवर्सिटी क्षेत्र की जांच करें।',
    },
    actionItems: {
      en: [
        'Verify State General Merit Rank, Category Rank, and Home University tag',
        'If marks/category are misprinted, submit an online Grievance with proof during the 2-3 day window',
        'Wait for Final Merit List release along with official Seat Matrix',
      ],
      mr: [
        'राज्य गुणवत्ता क्रमांक (State General Merit Rank) व प्रवर्ग क्रमांक तपासा',
        'काही चूक असल्यास तक्रार निवारण (Grievance) कालावधीत पुरावा जोडून ऑनलाइन तक्रार नोंदवा',
        'अंतिम गुणवत्ता यादी (Final Merit List) आणि सीट मॅट्रिक्सची वाट पाहा',
      ],
      hi: [
        'राज्य मेरिट रैंक और श्रेणी रैंक की जांच करें',
        'यदि कोई विसंगति हो तो ग्रीवेंस अवधि में साक्ष्य के साथ ऑनलाइन आपत्ति दर्ज करें',
        'अंतिम मेरिट सूची और सीट मैट्रिक्स का इंतजार करें',
      ],
    },
    caution: {
      en: 'No grievances can be submitted after the grievance period closes; final ranks are binding.',
      mr: 'तक्रार निवारण मुदत संपल्यानंतर गुणवत्ता यादीत कोणताही बदल करता येत नाही.',
      hi: 'शिकायत निवारण अवधि समाप्त होने के बाद रैंक में कोई परिवर्तन संभव नहीं है।',
    },
  },
  {
    stepNumber: 4,
    title: {
      en: 'CAP Round 1 Option Form Filling',
      mr: 'कॅप फेरी १ (CAP Round 1) विकल्प अर्ज भरणे',
      hi: 'सीएपी राउंड १ विकल्प फॉर्म भरना',
    },
    description: {
      en: 'Submit college and branch preferences in descending order of your priority (Option 1 = dream college). You can fill up to 300 choices.',
      mr: 'तुमच्या पसंतीनुसार महाविद्यालये आणि शाखांची यादी प्राधान्यक्रमाने भरा (क्रमांक १ = सर्वोच्च पसंती). ३०० पर्यंत पर्याय भरता येतात.',
      hi: 'अपनी पसंद के अनुसार कॉलेज व शाखाएं प्राथमिकता क्रम में भरें (विकल्प १ = सर्वोच्च पसंद)। अधिकतम ३०० विकल्प भरे जा सकते हैं।',
    },
    actionItems: {
      en: [
        'Carefully check 9-digit choice codes (e.g. ending in 10 for Shift 1, T for TFWS)',
        'Place ambitious top colleges at top, realistic in middle, safe backups at bottom',
        'Confirm and lock option form before the deadline using OTP',
      ],
      mr: [
        '९ अंकी चॉइस कोड बारकाईने तपासा (उदा. शेवटी १० म्हणजे प्रथम शिफ्ट, T म्हणजे TFWS)',
        'सर्वोच्च कॉलेजेस वरती, सरासरी मध्यभागी आणि हमखास मिळणारे पर्याय शेवटी ठेवा',
        'मुदतीपूर्वी ओटीपी टाकून अर्ज नक्की कन्फर्म (Confirm/Lock) करा',
      ],
      hi: [
        '९ अंकों का चॉइस कोड ध्यान से देखें (अंत में १० सामान्य सीट, T यानी TFWS सीट)',
        'शीर्ष कॉलेज ऊपर, संभावित कॉलेज बीच में और सुरक्षित विकल्प नीचे रखें',
        'समय सीमा से पहले ओटीपी द्वारा फॉर्म को अवश्य लॉक/कन्फर्म करें',
      ],
    },
    caution: {
      en: 'CRITICAL RULE: If Option 1 is allotted, it is AUTO-FROZEN! Never put a college at #1 that you would refuse to join.',
      mr: 'अति महत्त्वाचा नियम: जर १ नंबरचा पर्याय मिळाला, तर तो ऑटो-फ्रीझ होतो! जो कॉलेज नको असेल तो चुकूनही १ नंबरवर टाकू नका.',
      hi: 'अति आवश्यक नियम: यदि विकल्प १ मिलता है, तो वह ऑटो-फ्रीज हो जाएगा! जो कॉलेज पसंद न हो उसे कभी भी १ नंबर पर न रखें।',
    },
  },
  {
    stepNumber: 5,
    title: {
      en: 'Round 1 Allotment & Seat Acceptance (Freeze vs Betterment)',
      mr: 'फेरी १ वाटप आणि सीट स्वीकारणे (Freeze vs Betterment नियम)',
      hi: 'राउंड १ सीट आवंटन एवं सीट स्वीकृति (Freeze vs Betterment नियम)',
    },
    description: {
      en: 'Log in to view your allotted institute. You must accept seat by paying ₹1,000 online seat acceptance fee.',
      mr: 'लॉगिन करून मिळालेले कॉलेज तपासा. ₹१००० सीट स्वीकृती शुल्क भरून खालीलपैकी योग्य पर्याय निवडा.',
      hi: 'लॉगिन कर आवंटित संस्थान देखें। ₹१००० शुल्क देकर निम्नानुसार सही विकल्प चुनें।',
    },
    actionItems: {
      en: [
        'AUTO-FREEZE: If choice #1 was allotted, it is automatically frozen. Pay ₹1000 and report to college. Barred from Round 2.',
        'SELF-FREEZE: If allotted choice > 1 and you are happy, click "Self Freeze", pay ₹1000 and complete admission at college.',
        'NOT FREEZE / BETTERMENT: If allotted choice > 1 and you want to try for higher choices in Round 2, click "Betterment", pay ₹1000. Your current seat is safely retained!',
      ],
      mr: [
        'ऑटो-फ्रीझ (Auto-Freeze): जर पसंती क्र. १ चे कॉलेज मिळाले तर ते थेट निश्चित होते. पुढील फेऱ्यांत जाता येत नाही.',
        'सेल्फ-फ्रीझ (Self-Freeze): १ पेक्षा इतर पसंतीचे कॉलेज मिळाले आणि समाधानी असल्यास सेल्फ-फ्रीझ करून प्रवेश निश्चित करा.',
        'बेटरमेंट (Betterment / Not Freeze): १ पेक्षा इतर कॉलेज मिळाले असून पुढील फेरीत वरचे कॉलेज हवे असल्यास बेटरमेंट निवडा आणि ₹१००० भरा. तुमची ही जागा सुरक्षित राहते!',
      ],
      hi: [
        'ऑटो-फ्रीज: यदि विकल्प १ आवंटित हुआ, तो वह स्वतः लॉक हो जाता है। अगले राउंड में भाग नहीं ले सकते।',
        'सेल्फ-फ्रीज: यदि विकल्प १ के अलावा मिला और आप संतुष्ट हैं, तो सेल्फ-फ्रीज चुनकर कॉलेज में प्रवेश लें।',
        'बेटरमेंट: यदि विकल्प १ के अलावा मिला और आप बेहतर कॉलेज चाहते हैं, तो बेटरमेंट चुनें और ₹१००० दें। वर्तमान सीट सुरक्षित रहेगी!',
      ],
    },
    caution: {
      en: 'Failing to pay ₹1000 seat acceptance fee cancels your allotted seat and forfeits that specific claim!',
      mr: '₹१००० सीट स्वीकृती शुल्क न भरल्यास मिळालेली जागा रद्द होते!',
      hi: '₹१००० सीट स्वीकृति शुल्क न भरने पर मिली हुई सीट रद्द हो जाती है!',
    },
  },
  {
    stepNumber: 6,
    title: {
      en: 'CAP Rounds 2 & 3 (Betterment & Option Editing)',
      mr: 'कॅप फेऱ्या २ व ३ (विकल्प बदल व सुधारित वाटप)',
      hi: 'सीएपी राउंड २ व ३ (विकल्प संपादन व बेहतर आवंटन)',
    },
    description: {
      en: 'Fresh vacant seat matrix is published. Eligible candidates can add, delete, or rearrange choice codes for better options.',
      mr: 'रिक्त जागांचे नवीन मॅट्रिक्स जाहीर होते. विद्यार्थी चांगले पर्याय मिळवण्यासाठी पर्यायांची क्रमवारी बदलू शकतात.',
      hi: 'रिक्त सीटों की नई सूची आती है। छात्र बेहतर कॉलेज पाने के लिए विकल्प क्रम बदल सकते हैं।',
    },
    actionItems: {
      en: [
        'Inspect vacant seat matrix published prior to each round',
        'Update choices: If a higher choice is allotted in Round 2/3, the previous seat automatically lapses',
        'If no higher choice is allotted, your previous round reserved seat remains safe with you',
      ],
      mr: [
        'प्रत्येक फेरीपूर्वी जाहीर होणारे रिक्त जागांचे मॅट्रिक्स नीट तपासा',
        'पर्याय बदला: जर नवीन फेरीत वरचा पर्याय मिळाला तर आधीची जागा आपोआप रद्द होते आणि नवीन जागा मिळते',
        'नवीन फेरीत काही न मिळाल्यास आधी राखून ठेवलेली जागा तशीच सुरक्षित राहते',
      ],
      hi: [
        'प्रत्येक राउंड से पूर्व रिक्त सीटों की सूची अवश्य देखें',
        'यदि नए राउंड में उच्च प्राथमिकता वाली सीट मिलती है तो पिछली सीट स्वतः छूट जाती है',
        'यदि नई सीट नहीं मिलती है तो पिछली सीट आपके लिए पूर्णतः सुरक्षित रहती है',
      ],
    },
    caution: {
      en: 'After Round 3, CAP centralized process concludes. All admitted seats are finalized.',
      mr: 'फेरी ३ नंतर केंद्रीभूत कॅप प्रक्रिया संपते व संस्था पातळीवरील फेऱ्या सुरू होतात.',
      hi: 'राउंड ३ के पश्चात केंद्रीकृत सीएपी प्रक्रिया समाप्त हो जाती है।',
    },
  },
  {
    stepNumber: 7,
    title: {
      en: 'Institute Reporting & Spot / ACAP Rounds',
      mr: 'महाविद्यालयात प्रत्यक्ष हजेरी आणि इन्स्टिट्यूट लेव्हल / स्पॉट फेऱ्या',
      hi: 'कॉलेज में रिपोर्टिंग एवं स्पॉट / संस्था स्तरीय राउंड',
    },
    description: {
      en: 'Report to your finally allotted institute with all original documents and fees. Vacant seats are filled via Against-CAP (ACAP) rounds.',
      mr: 'मिळालेल्या महाविद्यालयात मूळ कागदपत्रे व फीसह उपस्थित राहून प्रवेश घ्या. शिल्लक राहिलेल्या जागांसाठी स्पॉट राऊंड होतात.',
      hi: 'आवंटित संस्थान में सभी मूल दस्तावेजों व शुल्क के साथ रिपोर्ट करें। शेष रिक्त सीटों हेतु स्पॉट राउंड होते हैं।',
    },
    actionItems: {
      en: [
        'Carry 3 sets of self-attested photocopies + original documents',
        'Pay the balance institute fee via DD / Online as determined by FRA',
        'Check individual college websites for ACAP / Institutional quota vacant seat advertisements',
      ],
      mr: [
        'मूळ कागदपत्रे आणि प्रत्येकी ३ साक्षांकित प्रती सोबत ठेवा',
        'शुल्क नियामक प्राधिकरणाने (FRA) निश्चित केलेली फी डी.डी. किंवा ऑनलाइन भरा',
        'स्पॉट / इन्स्टिट्यूट लेव्हल रिक्त जागांसाठी संबंधित कॉलेजच्या वेबसाइटवर अर्ज करा',
      ],
      hi: [
        'मूल दस्तावेज एवं प्रत्येक के ३ स्व-प्रमाणित सेट साथ रखें',
        'संस्थान का शेष शुल्क कॉलेज की निर्धारित विधि अनुसार जमा करें',
        'स्पॉट राउंड रिक्त सीटों हेतु संबंधित कॉलेज की वेबसाइट पर सूचना देखें',
      ],
    },
    caution: {
      en: 'Note: MahaDBT government scholarships are NOT applicable for seats taken via Institutional Quota / Management Quota.',
      mr: 'लक्षात ठेवा: इन्स्टिट्यूट / मॅनेजमेंट कोट्यातून घेतलेल्या जागांवर सरकारी शिष्यवृत्ती (MahaDBT) सवलत लागू नसते.',
      hi: 'ध्यान दें: संस्था स्तरीय/प्रबंधन कोटे की सीटों पर सरकारी छात्रवृत्ति (MahaDBT) का लाभ नहीं मिलता है।',
    },
  },
];

export const TOP_COLLEGES: CollegeInfo[] = [
  {
    code: '6006',
    name: 'COEP Technological University, Pune',
    marathiName: 'सीओईपी टेक्नॉलॉजिकल युनिव्हर्सिटी, पुणे',
    location: 'Shivajinagar, Pune',
    district: 'Pune',
    region: 'Pune',
    status: 'State University / Autonomous',
    popularBranches: ['Computer Engg', 'AI & Robotics', 'E&TC', 'Mechanical', 'Electrical'],
    website: 'https://www.coeptech.ac.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '3012',
    name: 'Veermata Jijabai Technological Institute (VJTI), Mumbai',
    marathiName: 'वीरमाता जिजाबाई टेक्नॉलॉजिकल इन्स्टिट्यूट (VJTI), मुंबई',
    location: 'Matunga, Mumbai',
    district: 'Mumbai',
    region: 'Mumbai',
    status: 'Govt. Aided Autonomous',
    popularBranches: ['Computer Engg', 'Information Technology', 'E&TC', 'Mechanical'],
    website: 'https://vjti.ac.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '3215',
    name: 'Sardar Patel Institute of Technology (SPIT), Mumbai',
    marathiName: 'सरदार पटेल इन्स्टिट्यूट ऑफ टेक्नॉलॉजी (SPIT), मुंबई',
    location: 'Andheri West, Mumbai',
    district: 'Mumbai',
    region: 'Mumbai',
    status: 'Govt. Aided Autonomous',
    popularBranches: ['Computer Science', 'Data Science', 'AI & ML', 'E&TC'],
    website: 'https://www.spit.ac.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '6271',
    name: 'Pune Institute of Computer Technology (PICT), Pune',
    marathiName: 'पुणे इन्स्टिट्यूट ऑफ कॉम्प्युटर टेक्नॉलॉजी (PICT), पुणे',
    location: 'Dhankawadi, Pune',
    district: 'Pune',
    region: 'Pune',
    status: 'Private Autonomous',
    popularBranches: ['Computer Engg', 'Information Technology', 'AI & Data Science', 'E&TC'],
    website: 'https://pict.edu/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '3036',
    name: 'Institute of Chemical Technology (ICT), Mumbai',
    marathiName: 'इन्स्टिट्यूट ऑफ केमिकल टेक्नॉलॉजी (ICT), मुंबई',
    location: 'Matunga, Mumbai',
    district: 'Mumbai',
    region: 'Mumbai',
    status: 'State University / Autonomous',
    popularBranches: ['Chemical Engg', 'Food Tech', 'Polymer Engg', 'Pharmaceuticals'],
    website: 'https://www.ictmumbai.edu.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '6007',
    name: 'Walchand College of Engineering (WCE), Sangli',
    marathiName: 'वालचंद कॉलेज ऑफ इंजिनिअरिंग, सांगली',
    location: 'Vishrambag, Sangli',
    district: 'Sangli',
    region: 'Western Maharashtra',
    status: 'Govt. Aided Autonomous',
    popularBranches: ['Computer Science', 'Information Tech', 'Electronics', 'Mechanical', 'Civil'],
    website: 'http://www.walchandsangli.ac.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '6273',
    name: 'Vishwakarma Institute of Technology (VIT), Pune',
    marathiName: 'विश्वकर्मा इन्स्टिट्यूट ऑफ टेक्नॉलॉजी (VIT), पुणे',
    location: 'Bibwewadi, Pune',
    district: 'Pune',
    region: 'Pune',
    status: 'Private Autonomous',
    popularBranches: ['Computer Engg', 'AI & Data Science', 'Information Tech', 'Mechanical'],
    website: 'https://www.vit.edu/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '6175',
    name: 'Pimpri Chinchwad College of Engineering (PCCOE), Pune',
    marathiName: 'पिंपरी चिंचवड कॉलेज ऑफ इंजिनिअरिंग (PCCOE), पुणे',
    location: 'Nigdi, Pune',
    district: 'Pune',
    region: 'Pune',
    status: 'Private Autonomous',
    popularBranches: ['Computer Engg', 'IT', 'AI & ML', 'Mechanical', 'E&TC'],
    website: 'https://pccoepune.com/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '3199',
    name: 'Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai',
    marathiName: 'द्वारकादास जे. संघवी कॉलेज ऑफ इंजिनिअरिंग, मुंबई',
    location: 'Vile Parle West, Mumbai',
    district: 'Mumbai',
    region: 'Mumbai',
    status: 'Private Autonomous',
    popularBranches: ['Computer Engg', 'IT', 'AI & Data Science', 'Data Science'],
    website: 'https://www.djsce.ac.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '4115',
    name: 'Shri Ramdeobaba College of Engg & Management (RBU), Nagpur',
    marathiName: 'श्री रामदेवबाबा कॉलेज ऑफ इंजिनिअरिंग (RBU), नागपूर',
    location: 'Katol Road, Nagpur',
    district: 'Nagpur',
    region: 'Vidarbha',
    status: 'Private Autonomous',
    popularBranches: ['Computer Science', 'AI & ML', 'Cyber Security', 'E&TC'],
    website: 'https://www.rknec.edu/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '2008',
    name: 'Government College of Engineering, Chhatrapati Sambhajinagar',
    marathiName: 'शासकीय अभियांत्रिकी महाविद्यालय, छत्रपती संभाजीनगर (औरंगाबाद)',
    location: 'Station Road, Chhatrapati Sambhajinagar',
    district: 'Chhatrapati Sambhajinagar',
    region: 'Marathwada',
    status: 'Govt. Autonomous',
    popularBranches: ['Computer Science', 'IT', 'Electrical', 'Civil', 'Mechanical'],
    website: 'https://geca.ac.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '6005',
    name: 'Government College of Engineering, Karad',
    marathiName: 'शासकीय अभियांत्रिकी महाविद्यालय, कराड',
    location: 'Vidyanagar, Karad',
    district: 'Satara',
    region: 'Western Maharashtra',
    status: 'Govt. Autonomous',
    popularBranches: ['Information Tech', 'Civil', 'Electrical', 'Mechanical', 'E&TC'],
    website: 'http://www.gcekarad.ac.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '1002',
    name: 'Government College of Engineering, Amravati',
    marathiName: 'शासकीय अभियांत्रिकी महाविद्यालय, अमरावती',
    location: 'Kathora Naka, Amravati',
    district: 'Amravati',
    region: 'Vidarbha',
    status: 'Govt. Autonomous',
    popularBranches: ['Computer Science', 'Information Tech', 'Electrical', 'Civil'],
    website: 'https://gcoea.ac.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '3014',
    name: 'K. J. Somaiya College of Engineering, Mumbai',
    marathiName: 'के. जे. सोमय्या कॉलेज ऑफ इंजिनिअरिंग, मुंबई',
    location: 'Vidyavihar, Mumbai',
    district: 'Mumbai',
    region: 'Mumbai',
    status: 'Private Autonomous',
    popularBranches: ['Computer Engg', 'AI & Data Science', 'IT', 'Electronics'],
    website: 'https://kjsce.somaiya.edu/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '3182',
    name: 'Thadomal Shahani Engineering College (TSEC), Mumbai',
    marathiName: 'थाडोमल शहाणी इंजिनिअरिंग कॉलेज, मुंबई',
    location: 'Bandra West, Mumbai',
    district: 'Mumbai',
    region: 'Mumbai',
    status: 'Private Autonomous',
    popularBranches: ['Computer Engg', 'Information Technology', 'AI & Data Science'],
    website: 'https://tsec.edu/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
  {
    code: '1011',
    name: 'Government College of Engineering, Jalgaon',
    marathiName: 'शासकीय अभियांत्रिकी महाविद्यालय, जळगाव',
    location: 'NH-6, Jalgaon',
    district: 'Jalgaon',
    region: 'North Maharashtra',
    status: 'Govt. Autonomous',
    popularBranches: ['Computer Engg', 'Instrumentation', 'Electrical', 'Mechanical'],
    website: 'https://www.gcoej.ac.in/',
    cetCellCutoffRef: 'https://cetcell.mahacet.org/',
  },
];

export const SCHOLARSHIPS_DATA: ScholarshipScheme[] = [
  {
    id: 'ebc_scheme',
    name: {
      en: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti Yojna (EBC)',
      mr: 'राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना (EBC)',
      hi: 'राजर्षि छत्रपति शाहू महाराज शिक्षण शुल्क छात्रवृत्ति योजना (EBC)',
    },
    department: {
      en: 'Higher & Technical Education Department',
      mr: 'उच्च व तंत्रशिक्षण विभाग',
      hi: 'उच्च एवं तकनीकी शिक्षा विभाग',
    },
    beneficiary: {
      en: 'Open and EWS category students admitted through Centralized Admission Process (CAP).',
      mr: 'केंद्रीभूत प्रवेश प्रक्रियेद्वारे (CAP) प्रवेश घेतलेले खुल्या व EWS प्रवर्गातील विद्यार्थी.',
      hi: 'केंद्रीकृत प्रवेश प्रक्रिया (CAP) द्वारा प्रवेशित सामान्य व EWS वर्ग के छात्र।',
    },
    benefit: {
      en: '50% Tuition Fee & 50% Exam Fee reimbursement in Government, Aided and Unaided/Private Engineering colleges.',
      mr: 'शासकीय, अनुदानित व विनाअनुदानित खाजगी महाविद्यालयांमध्ये ५०% शिक्षण शुल्क आणि ५०% परीक्षा शुल्क सवलत.',
      hi: 'सरकारी एवं निजी इंजीनियरिंग कॉलेजों में ५०% ट्यूशन फीस और ५०% परीक्षा शुल्क की प्रतिपूर्ति।',
    },
    incomeLimit: {
      en: 'Annual Family Income up to ₹8,00,000/- (Rupees Eight Lakhs).',
      mr: 'वार्षिक कौटुंबिक उत्पन्न कमाल रु. ८,००,०००/- (आठ लाख रुपये).',
      hi: 'वार्षिक पारिवारिक आय अधिकतम रु. ८,००,०००/- तक।',
    },
    keyDocs: {
      en: ['CAP Allotment Letter', 'Tehsildar Income Certificate', 'Domicile Certificate', 'Ration Card / Family Declaration', 'HSC & SSC Marksheet'],
      mr: ['कॅप अलॉटमेंट लेटर', 'तहसीलदार उत्पन्न दाखला', 'अधिवास दाखला (Domicile)', 'रेशन कार्ड / प्रतिज्ञापत्र', '१० वी व १२ वी गुणपत्रिका'],
      hi: ['सीएपी आवंटन पत्र', 'तहसीलदार आय प्रमाण पत्र', 'अधिवास प्रमाण पत्र', 'राशन कार्ड / घोषणा पत्र', '१०वीं व १२वीं अंकतालिका'],
    },
    portalUrl: 'https://mahadbt.maharashtra.gov.in/',
  },
  {
    id: 'panjabrao_hostel',
    name: {
      en: 'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (Hostel Allowance)',
      mr: 'डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना',
      hi: 'डॉ. पंजाबराव देशमुख छात्रावास निर्वाह भत्ता योजना',
    },
    department: {
      en: 'Higher & Technical Education Department',
      mr: 'उच्च व तंत्रशिक्षण विभाग',
      hi: 'उच्च एवं तकनीकी शिक्षा विभाग',
    },
    beneficiary: {
      en: 'Children of registered Alpabhudharak (marginal farmers / labor) or students staying in registered hostels.',
      mr: 'अल्पभूधारक शेतकरी/शेतमजुरांची मुले किंवा वसतिगृहात राहून अभियांत्रिकी शिक्षण घेणारे विद्यार्थी.',
      hi: 'अल्पभूधारक किसान या हॉस्टल में रहकर इंजीनियरिंग करने वाले पात्र छात्र।',
    },
    benefit: {
      en: '₹30,000/year for MMRDA, Pune, Nagpur, Nashik municipal areas; ₹20,000/year for other districts.',
      mr: 'मुंबई (MMRDA), पुणे, नागपूर, नाशिक मनपा क्षेत्रासाठी दरमहा रु. ३,००० (वार्षिक रु. ३०,०००); इतर जिल्ह्यांसाठी वार्षिक रु. २०,०००.',
      hi: 'मुंबई, पुणे, नागपुर, नासिक क्षेत्रों हेतु ₹३०,००० प्रतिवर्ष; अन्य जिलों हेतु ₹२०,००० प्रतिवर्ष।',
    },
    incomeLimit: {
      en: 'Family income up to ₹8 Lakhs per annum (special preference for < ₹1 Lakh).',
      mr: 'वार्षिक उत्पन्न रु. ८ लाखांपर्यंत (रु. १ लाखाच्या आत असल्यास प्राधान्य).',
      hi: 'वार्षिक आय रु. ८ लाख तक।',
    },
    keyDocs: {
      en: ['Hostel Rector Certificate / Rent Agreement', 'Alpabhudharak Certificate or Income Proof', 'CAP Allotment Letter', 'Aadhaar Linked Bank Passbook'],
      mr: ['वसतिगृह दाखला / भाडे करार', 'अल्पभूधारक शेतकरी दाखला किंवा उत्पन्न पुरावा', 'कॅप अलॉटमेंट लेटर', 'आधार लिंक बँक पासबुक'],
      hi: ['हॉस्टल प्रमाण पत्र / रेंट एग्रीमेंट', 'अल्पभूधारक प्रमाण अथवा आय प्रमाण', 'सीएपी अलॉटमेंट लेटर', 'आधार लिंक बैंक पासबुक'],
    },
    portalUrl: 'https://mahadbt.maharashtra.gov.in/',
  },
  {
    id: 'obc_vjnt_freeship',
    name: {
      en: 'Post-Matric Scholarship / Tuition Fees for VJNT, OBC & SBC Students',
      mr: 'विजाभज, इमाव आणि विमाप्र विद्यार्थ्यांसाठी मॅट्रिकोत्तर शिष्यवृत्ती व शिक्षण शुल्क सवलत',
      hi: 'विजाभज, ओबीसी और एसबीसी छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति व शुल्क प्रतिपूर्ति',
    },
    department: {
      en: 'OBC, SEBC, VJNT & SBC Welfare Department',
      mr: 'इतर मागास बहुजन कल्याण विभाग',
      hi: 'अन्य पिछड़ा बहुजन कल्याण विभाग',
    },
    beneficiary: {
      en: 'Maharashtra state domiciled OBC, VJ/NT and SBC candidates admitted through CAP rounds.',
      mr: 'कॅपद्वारे प्रवेश घेतलेले महाराष्ट्राचे अधिवास असलेले ओबीसी, विजाभज व विमाप्र विद्यार्थी.',
      hi: 'सीएपी के माध्यम से प्रवेशित महाराष्ट्र के ओबीसी, विजाभज और एसबीसी विद्यार्थी।',
    },
    benefit: {
      en: '50% to 100% Tuition & Exam fee concession depending on family income tier (Scholarship vs Freeship).',
      mr: 'कौटुंबिक उत्पन्नानुसार ५०% ते १००% शिक्षण व परीक्षा शुल्क प्रतिपूर्ती आणि निर्वाह भत्ता.',
      hi: 'पारिवारिक आय के आधार पर ५०% से १००% ट्यूशन व परीक्षा शुल्क छूट।',
    },
    incomeLimit: {
      en: 'Scholarship: Up to ₹1.5 Lakhs (100% fee + maintenance); Tuition Fee Freeship: Up to ₹8 Lakhs (50% fee).',
      mr: 'शिष्यवृत्ती: उत्पन्न रु. १.५ लाखांपर्यंत (१००% फी + निर्वाह भत्ता); फ्रेशिप: रु. ८ लाखांपर्यंत (५०% फी).',
      hi: 'छात्रवृत्ति: आय ₹१.५ लाख तक (१००% फीस); फ्रीशिप: आय ₹८ लाख तक (५०% फीस)।',
    },
    keyDocs: {
      en: ['Caste Certificate', 'Caste Validity Certificate', 'Valid Non-Creamy Layer (NCL)', 'Income Certificate', 'CAP Allotment Letter'],
      mr: ['जातीचा दाखला', 'जात वैधता प्रमाणपत्र', 'वैध नॉन क्रिमीलेअर (NCL)', 'तहसीलदार उत्पन्न दाखला', 'कॅप अलॉटमेंट लेटर'],
      hi: ['जाति प्रमाण पत्र', 'जाति वैधता प्रमाण पत्र', 'वैध नॉन क्रीमी लेयर (NCL)', 'आय प्रमाण पत्र', 'सीएपी आवंटन पत्र'],
    },
    portalUrl: 'https://mahadbt.maharashtra.gov.in/',
  },
  {
    id: 'sc_st_scholarship',
    name: {
      en: 'Government of India Post-Matric Scholarship for SC & ST Students',
      mr: 'अनुसूचित जाती व अनुसूचित जमातींसाठी भारत सरकार मॅट्रिकोत्तर शिष्यवृत्ती',
      hi: 'अनुसूचित जाति एवं जनजाति हेतु भारत सरकार पोस्ट-मैट्रिक छात्रवृत्ति',
    },
    department: {
      en: 'Social Justice & Tribal Development Department',
      mr: 'सामाजिक न्याय व आदिवासी विकास विभाग',
      hi: 'सामाजिक न्याय एवं आदिवासी विकास विभाग',
    },
    beneficiary: {
      en: 'SC and ST candidates admitted to engineering colleges in Maharashtra via CAP.',
      mr: 'कॅपद्वारे अभियांत्रिकी पदवीसाठी प्रवेश घेतलेले अनुसूचित जाती (SC) व अनुसूचित जमाती (ST) विद्यार्थी.',
      hi: 'सीएपी द्वारा महाराष्ट्र के कॉलेजों में प्रवेशित एससी और एसटी छात्र।',
    },
    benefit: {
      en: '100% Tuition Fee, Development Fee, and Exam Fee paid by Govt + Monthly maintenance allowance.',
      mr: 'शासनाकडून १००% संपूर्ण शिक्षण शुल्क, विकास शुल्क व परीक्षा शुल्क सवलत + मासिक निर्वाह भत्ता.',
      hi: 'सरकार द्वारा १००% ट्यूशन फीस, विकास शुल्क व परीक्षा फीस की प्रतिपूर्ति + मासिक भत्ता।',
    },
    incomeLimit: {
      en: 'Family income up to ₹2,50,000/- per annum for full scholarship; Freeship available for above limits.',
      mr: 'कौटुंबिक उत्पन्न रु. २,५०,०००/- पर्यंत असल्यास संपूर्ण शिष्यवृत्ती; त्याहून अधिक असल्यास फ्रेशिप.',
      hi: 'पारिवारिक वार्षिक आय रु. २,५०,०००/- तक पूर्ण छात्रवृत्ति।',
    },
    keyDocs: {
      en: ['Caste Certificate', 'Caste Validity Certificate', 'Income Certificate / Form 16', 'CAP Allotment Order'],
      mr: ['जातीचा दाखला', 'जात वैधता प्रमाणपत्र', 'तहसीलदार उत्पन्न दाखला / फॉर्म १६', 'कॅप अलॉटमेंट लेटर'],
      hi: ['जाति प्रमाण पत्र', 'जाति वैधता प्रमाण पत्र', 'आय प्रमाण पत्र', 'सीएपी आवंटन पत्र'],
    },
    portalUrl: 'https://mahadbt.maharashtra.gov.in/',
  },
  {
    id: 'tfws_scheme',
    name: {
      en: 'Tuition Fee Waiver Scheme (TFWS)',
      mr: 'ट्यूशन फी वेव्हर स्कीम (TFWS - १००% शिक्षण शुल्क माफी)',
      hi: 'ट्यूशन फीस वेवर स्कीम (TFWS - १००% ट्यूशन फीस छूट)',
    },
    department: {
      en: 'AICTE & Directorate of Technical Education (DTE)',
      mr: 'एआयसीटीई (AICTE) आणि तंत्रशिक्षण संचालनालय (DTE)',
      hi: 'एआईसीटीई (AICTE) और तकनीकी शिक्षा निदेशालय (DTE)',
    },
    beneficiary: {
      en: 'Meritorious students of all categories admitted specifically under the TFWS choice code (ends with "T").',
      mr: 'गुणवत्ताधारक विद्यार्थी ज्यांनी TFWS चॉईस कोडद्वारे (शेवटी "T") प्रवेश मिळवला आहे.',
      hi: 'मेधावी छात्र जिन्होंने विशेष TFWS चॉइस कोड (अंत में "T") के माध्यम से सीट पाई है।',
    },
    benefit: {
      en: '100% waiver on Tuition Fee for all 4 years! (Student pays only development fee and exam fees).',
      mr: 'सर्व ४ वर्षांसाठी १००% शिक्षण शुल्क (Tuition Fee) पूर्ण माफ! (केवळ विकास व परीक्षा फी भरावी लागते).',
      hi: 'चारों वर्ष के लिए १००% ट्यूशन फीस पूर्णतः माफ! (केवल विकास और परीक्षा शुल्क देय होता है)।',
    },
    incomeLimit: {
      en: 'Annual Family Income must be strictly less than ₹8,00,000/- from all sources.',
      mr: 'कौटुंबिक वार्षिक उत्पन्न सर्व मार्गांनी ८ लाखांच्या आत असणे आवश्यक.',
      hi: 'पारिवारिक वार्षिक आय सभी स्रोतों से ८ लाख से कम होना अनिवार्य।',
    },
    keyDocs: {
      en: ['Tehsildar Income Certificate', 'Maharashtra Domicile Certificate', 'CAP TFWS Allotment Letter'],
      mr: ['सक्षम अधिकाऱ्याचा (तहसीलदार) उत्पन्न दाखला', 'महाराष्ट्र अधिवास दाखला (Domicile)', 'TFWS अलॉटमेंट लेटर'],
      hi: ['तहसीलदार का आय प्रमाण पत्र', 'महाराष्ट्र अधिवास प्रमाण पत्र', 'TFWS आवंटन पत्र'],
    },
    portalUrl: 'https://cetcell.mahacet.org/',
  },
];

export const SUGGESTED_QUERIES: Record<Language, string[]> = {
  en: [
    'What is the difference between Freeze, Self-Freeze and Betterment in CAP?',
    'What documents are compulsory for OBC and EWS engineering admissions?',
    'What is TFWS (Tuition Fee Waiver Scheme) and how does it work?',
    'How do I apply for MahaDBT EBC 50% fee concession?',
    'What happens if I get my Option 1 college in Round 1?',
    'Can I participate in Round 2 if I choose Betterment in Round 1?',
  ],
  mr: [
    'कॅप राउंडमध्ये ऑटो-फ्रीझ आणि बेटरमेंट (Betterment) मध्ये काय फरक आहे?',
    'OBC आणि EWS प्रवर्गासाठी कोणती कागदपत्रे अनिवार्य आहेत?',
    'TFWS योजना काय आहे आणि १००% ट्यूशन फी कशी माफ होते?',
    'महाडीबीटी (MahaDBT) ईबीसी ५०% फी सवलतीची पात्रता काय?',
    'फेरी १ मध्ये पहिल्या पसंतीचे कॉलेज मिळाले तर पुढे काय करावे?',
    'जात वैधता प्रमाणपत्र वेळेत न मिळाल्यास काय होते?',
  ],
  hi: [
    'सीएपी राउंड में ऑटो-फ्रीज और बेटरमेंट में क्या अंतर है?',
    'ओबीसी और ईडब्ल्यूएस के लिए कौन से दस्तावेज अनिवार्य हैं?',
    'TFWS योजना क्या है और १००% ट्यूशन फीस कैसे माफ होती है?',
    'महाडीबीटी EBC ५०% फीस छूट के लिए क्या पात्रता है?',
    'यदि राउंड १ में पहली पसंद का कॉलेज मिल जाए तो क्या करें?',
    'जाति वैधता प्रमाण पत्र समय पर न मिलने पर क्या होता है?',
  ],
};

export const UI_STRINGS = {
  appName: {
    en: 'Admission Mitra',
    mr: 'प्रवेश मित्र',
    hi: 'प्रवेश मित्र',
  },
  tagline: {
    en: 'Maharashtra Engineering Admissions Advisor (MHT-CET & CAP)',
    mr: 'महाराष्ट्र अभियांत्रिकी प्रवेश मार्गदर्शक (MHT-CET आणि कॅप प्रक्रिया)',
    hi: 'महाराष्ट्र इंजीनियरिंग प्रवेश सलाहकार (MHT-CET एवं सीएपी प्रक्रिया)',
  },
  nav: {
    chat: { en: 'AI Counselor', mr: 'एआय सल्लागार', hi: 'एआई सलाहकार' },
    capGuide: { en: 'CAP Roadmap', mr: 'कॅप मार्गदर्शक', hi: 'सीएपी रोडमैप' },
    documents: { en: 'Document Checklist', mr: 'कागदपत्रे तपासणी', hi: 'दस्तावेज चेकलिस्ट' },
    colleges: { en: 'Top Colleges & DTE Codes', mr: 'प्रमुख कॉलेजेस व DTE कोड', hi: 'शीर्ष कॉलेज व DTE कोड' },
    scholarships: { en: 'MahaDBT Scholarships', mr: 'महाडीबीटी शिष्यवृत्ती', hi: 'महाडीबीटी छात्रवृत्ति' },
    officialLinks: { en: 'Official Portals', mr: 'अधिकृत पोर्टल्स', hi: 'आधिकारिक पोर्टल' },
  },
  disclaimer: {
    en: 'Official Verification Notice: Admission Mitra provides regulatory guidelines and structured advice. Never rely on unofficial rumors. Exact dates, fees (determined by FRA), and cutoff percentiles change every year and are published exclusively by State CET Cell on cetcell.mahacet.org.',
    mr: 'अधिकृत पडताळणी सूचना: प्रवेश मित्र नियम व मार्गदर्शक माहिती पुरवतो. कोणत्याही अफवांवर विश्वास ठेवू नका. चालू वर्षाच्या अधिकृत तारखा, फी (FRA निर्धारित) आणि कटऑफ केवळ cetcell.mahacet.org वर प्रसिद्ध केले जातात.',
    hi: 'आधिकारिक सूचना: प्रवेश मित्र केवल नियामक दिशा-निर्देश प्रदान करता है। किसी भी अफवाह पर विश्वास न करें। चालू वर्ष की सटीक तिथियां, फीस और कटऑफ केवल cetcell.mahacet.org पर जारी की जाती हैं।',
  },
};

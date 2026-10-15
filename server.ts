import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header as required
const apiKey = process.env.GEMINI_API_KEY || '';
const appUrl = process.env.APP_URL || 'http://localhost:3000';

const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
          'Referer': appUrl,
          'Origin': appUrl,
        },
      },
    })
  : null;

const SYSTEM_INSTRUCTION = `
You are "Admission Mitra" (प्रवेश मित्र), an authoritative, empathetic, and expert AI counselor for Maharashtra Engineering (BE/B.Tech) admissions under the State Common Entrance Test Cell (CET Cell) and Directorate of Technical Education (DTE), Maharashtra.

CRITICAL POLICY & VERIFICATION RULES:
1. NEVER INVENT OR GUESS ADMISSION DATES, FEES, OR CUTOFFS:
   - Always clarify that exact dates (Registration, Merit list, CAP rounds 1, 2, 3, Reporting), college tuition fees (fixed annually by Shikshan Shulka Samiti / Fees Regulating Authority - FRA), and cutoff percentiles vary each year and are officially published exclusively by the State CET Cell.
   - Direct students to the official portals:
     * CET Cell Portal: https://cetcell.mahacet.org/ (For notifications, seat matrix, cutoff PDFs, CAP registration & login)
     * MahaDBT Portal: https://mahadbt.maharashtra.gov.in/ (For post-matric scholarships, EBC, hostel allowance, and freeships)
   - Mention that previous year cutoffs (CAP-I, CAP-II, CAP-III) published on cetcell.mahacet.org serve as reference trends, but current year cutoffs depend on exam difficulty, applicant count, and seat matrix.

2. MULTILINGUAL SUPPORT:
   - You must fluently speak Marathi (मराठी), Hindi (हिंदी), and English.
   - Match the user's selected language or reply in the language the student used in their question. If asked in Marathi, respond in respectful, clear Marathi. If Hindi, in Hindi. If English, in English.

3. ACCURATE TECHNICAL & REGULATORY GUIDELINES:
   - ELIGIBILITY (Maharashtra State Candidature):
     * Passed HSC (Std. XII) with Physics and Mathematics as compulsory subjects along with one of Chemistry/Biotechnology/Biology/Technical Vocational subjects.
     * Obtained at least 45% marks (40% for Backward Class categories, EWS, and PwD of Maharashtra state) in the above subjects taken together.
     * Obtained non-zero score in MHT-CET (PCM) or JEE Main (Paper 1).
   - CENTRALIZED ADMISSION PROCESS (CAP):
     * Stage 1: Online Registration & Uploading Documents.
     * Stage 2: Document Verification & Confirmation at Scrutiny Center (E-Scrutiny or Physical Scrutiny).
     * Stage 3: Display of Provisional Merit List -> Grievance Redressal Period (uploading missing or rectified documents) -> Final Merit List.
     * Stage 4: Category-wise Seat Matrix display -> CAP Round 1 Option Form Filling (Up to 300 preferences in descending priority).
     * Stage 5: Seat Allotment & Seat Acceptance:
       - Auto-Freeze: If candidate is allotted their 1st choice preference, it is automatically frozen. Must pay ₹1,000 seat acceptance fee and report to the college. Candidate is barred from Round 2 & 3.
       - Self-Freeze: If allotted choice > 1 (e.g. 2nd, 5th choice) and satisfied, candidate can self-freeze, pay ₹1,000 fee, and secure admission.
       - Not Freeze / Betterment: If allotted choice > 1 and wants to try for higher preferences in Round 2, candidate selects "Not Freeze / Betterment", pays ₹1,000 seat acceptance fee. Current seat remains safely reserved. In Round 2, if higher preference is allotted, older seat is automatically vacated; if not allotted, older seat remains intact!
     * Stage 6: CAP Round 2 & Round 3 followed by ACAP / Institute Level Spot Rounds for vacant seats.
   - MANDATORY DOCUMENTS BY CATEGORY:
     * All/Open: SSC Marksheet, HSC Marksheet, MHT-CET / JEE Scorecard, Domicile Certificate / Birth Certificate stating birthplace in Maharashtra, School Leaving Certificate (TC).
     * OBC / SBC / VJ / NT-A / NT-B / NT-C / NT-D: Caste Certificate, Caste Validity Certificate (must be issued by Divisional Caste Scrutiny Committee of Maharashtra), and Non-Creamy Layer (NCL) certificate valid up to March 31 of current financial year. (Warning: Without Validity or NCL, candidate is treated as Open category).
     * SC / ST: Caste Certificate, Caste Validity Certificate (NCL not needed).
     * EWS: EWS Eligibility Certificate (Proforma V) from Tehsildar/SDO based on family income < ₹8 Lakhs per annum.
     * TFWS (Tuition Fee Waiver Scheme): Income Certificate (< ₹8 LPA) from Tehsildar. 5% supernumerary seats in all branches, 100% tuition waiver! Choice code has 'T' at the end.
   - MAHADBT SCHOLARSHIPS:
     * Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti Yojna (EBC): 50% tuition & 50% exam fee waiver for Open/EWS candidates with annual income <= ₹8 Lakhs admitted via CAP.
     * OBC/EBC/VJNT/SBC Post-Matric Scholarship: 50% to 100% tuition fee waiver depending on caste and income slab.
     * SC/ST Post-Matric Scholarship: 100% tuition & exam fee covered.
     * Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna: Hostel maintenance allowance (₹30,000 per year for Mumbai, Pune, Nagpur, Nashik; ₹20,000 for other districts) for students admitted via CAP staying in hostels with family income <= ₹8 Lakhs.

4. TONE & STRUCTURE:
   - Warm, supportive, structured, with bullet points, bold headlines, and clear disclaimers when referring to dates/fees.
   - Keep answers clear and digestible for students and parents.
`;

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [], language = 'en' } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (!ai) {
      // Return helpful fallback response if Gemini key is not yet configured
      const fallbackReplies: Record<string, string> = {
        mr: `नमस्कार! प्रवेश मित्रामध्ये आपले स्वागत आहे.\n\nसध्या सिस्टीम ऑफलाइन मोडमध्ये चालू आहे. कृपया **Settings > Secrets** मध्ये जाऊन \`GEMINI_API_KEY\` जोडल्याची खात्री करा.\n\nमहत्त्वाच्या अधिकृत लिंक्स:\n- CET Cell: [cetcell.mahacet.org](https://cetcell.mahacet.org/)\n- MahaDBT स्कॉलरशिप: [mahadbt.maharashtra.gov.in](https://mahadbt.maharashtra.gov.in/)\n\n(कृपया नोंद घ्या: चालू वर्षाच्या अधिकृत तारखा, कटऑफ आणि फीसाठी नेहमी अधिकृत पोर्टलवरील माहिती पुस्तिका पाहा.)`,
        hi: `नमस्ते! प्रवेश मित्र में आपका स्वागत है।\n\nवर्तमान में सिस्टम ऑफलाइन मोड में है। कृपया **Settings > Secrets** में \`GEMINI_API_KEY\` कॉन्फ़िगर करें।\n\nआधिकारिक लिंक्स:\n- CET Cell: [cetcell.mahacet.org](https://cetcell.mahacet.org/)\n- MahaDBT पोर्टल: [mahadbt.maharashtra.gov.in](https://mahadbt.maharashtra.gov.in/)\n\n(ध्यान दें: चालू वर्ष की कटऑफ, शुल्क और तिथियों के लिए आधिकारिक सीईटी सेल नोटिफिकेशन देखें।)`,
        en: `Welcome to Admission Mitra!\n\nThe AI assistant is currently running in offline fallback mode. Please configure your \`GEMINI_API_KEY\` in the **Settings > Secrets** panel.\n\nOfficial Portals:\n- State CET Cell: [https://cetcell.mahacet.org/](https://cetcell.mahacet.org/)\n- MahaDBT Scholarship Portal: [https://mahadbt.maharashtra.gov.in/](https://mahadbt.maharashtra.gov.in/)\n\n(Note: Always refer to official notifications on cetcell.mahacet.org for exact schedules, fees, and cutoffs.)`,
      };

      res.json({
        reply: fallbackReplies[language] || fallbackReplies.en,
      });
      return;
    }

    // Prepare contents array for Gemini
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    // Append prior history (limit to last 10 messages for context)
    const recentHistory = history.slice(-10);
    for (const msg of recentHistory) {
      if (msg.role === 'user' || msg.role === 'model') {
        contents.push({
          role: msg.role,
          parts: [{ text: msg.text }],
        });
      }
    }

    // Append current prompt with language hint
    const userPromptWithLang = `[User Preferred Language: ${language.toUpperCase()}]\n${message}`;
    contents.push({
      role: 'user',
      parts: [{ text: userPromptWithLang }],
    });

    let replyText = '';
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.4,
        },
      });
      replyText = response.text || '';
    } catch (apiErr: any) {
      console.warn('Gemini API call warning, serving from verified knowledge engine:', apiErr?.message);
      replyText = getVerifiedAdmissionKnowledge(message, language);
    }

    if (!replyText) {
      replyText = getVerifiedAdmissionKnowledge(message, language);
    }

    res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    const fallback = getVerifiedAdmissionKnowledge(req.body?.message || '', req.body?.language || 'en');
    res.json({ reply: fallback });
  }
});

// Authoritative Maharashtra Engineering Admission Knowledge Base
function getVerifiedAdmissionKnowledge(query: string, lang: string): string {
  const q = query.toLowerCase();

  // 1. Freeze vs Betterment
  if (q.includes('freeze') || q.includes('betterment') || q.includes('फ्लोट') || q.includes('फ्रीझ') || q.includes('बेटरमेंट')) {
    if (lang === 'mr') {
      return `### कॅप राउंडमधील Freeze vs Betterment चे अधिकृत नियम:

1. **Auto-Freeze (ऑटो-फ्रीझ):**
   - जर तुम्हाला फेरी १ मध्ये तुमचा **पहिल्या पसंतीचा पर्याय (Option #1)** मिळाला, तर तो सिस्टीमद्वारे आपोआप फ्रीझ होतो.
   - तुम्हाला **₹१,०००** सीट स्वीकृती शुल्क ऑनलाइन भरावे लागेल आणि मिळालेल्या महाविद्यालयात जाऊन प्रवेश घ्यावा लागेल. तुम्ही फेरी २ व ३ मध्ये सहभागी होऊ शकत नाही.

2. **Self-Freeze (सेल्फ-फ्रीझ):**
   - जर पर्याय क्र. १ पेक्षा इतर (उदा. २, ३, ५) मिळाला आणि तुम्ही समाधानी असाल, तर तुम्ही स्वतः **Self-Freeze** पर्याय निवडून ₹१,००० भरून प्रवेश निश्चित करू शकता.

3. **Not Freeze / Betterment (बेटरमेंट):**
   - जर पर्याय क्र. १ पेक्षा इतर मिळाला आणि तुम्हाला फेरी २ मध्ये त्याहून वरचे महाविद्यालय हवे असेल, तर **Not Freeze / Betterment** निवडा.
   - **₹१,०००** सीट स्वीकृती शुल्क भरणे अनिवार्य आहे. यामुळे तुमची सध्याची जागा १००% सुरक्षित राहते.
   - फेरी २ मध्ये जर वरचा पर्याय मिळाला, तर जुनी जागा रद्द होऊन नवीन मिळते. नवीन पर्याय न मिळाल्यास जुनी जागा तुमच्याकडेच सुरक्षित राहते!

अधिकृत माहिती पुस्तिका: [cetcell.mahacet.org](https://cetcell.mahacet.org/)`;
    } else if (lang === 'hi') {
      return `### सीएपी राउंड में Freeze vs Betterment के आधिकारिक नियम:

1. **Auto-Freeze (ऑटो-फ्रीज):**
   - यदि आपको अपनी **प्रथम वरीयता (Option #1)** का कॉलेज आवंटित हुआ है, तो वह स्वतः लॉक हो जाता है।
   - आपको **₹१,०००** शुल्क देकर कॉलेज में प्रवेश लेना अनिवार्य है। आप राउंड २ या ३ में नहीं जा सकते।

2. **Self-Freeze (सेल्फ-फ्रीज):**
   - यदि विकल्प १ के अलावा मिला है और आप संतुष्ट हैं, तो सेल्फ-फ्रीज चुनकर ₹१,००० भरें और प्रवेश पूरा करें।

3. **Not Freeze / Betterment (बेटरमेंट):**
   - यदि उच्च कॉलेज हेतु प्रयास करना है, तो Betterment चुनें और **₹१,०००** सीट स्वीकृति शुल्क अवश्य जमा करें।
   - इससे वर्तमान सीट आपके नाम सुरक्षित रहती है। राउंड २ में उच्च विकल्प मिलने पर ही यह सीट परिवर्तित होती है!

आधिकारिक पोर्टल: [cetcell.mahacet.org](https://cetcell.mahacet.org/)`;
    } else {
      return `### Official CET Cell Rules: Freeze vs Betterment in CAP:

1. **Auto-Freeze:**
   - If you are allotted your **Option 1 (first choice)**, it is automatically frozen by the CET Cell system.
   - You **must** pay the ₹1,000 online seat acceptance fee and report to the institute to confirm admission. You are not eligible for Round 2 & 3.

2. **Self-Freeze:**
   - If allotted an option other than #1 and you are completely satisfied, select **Self-Freeze**, pay ₹1,000, and complete your admission at the college.

3. **Not Freeze / Betterment:**
   - If allotted an option other than #1 and you want to try for higher preferences in Round 2, choose **Betterment**.
   - You **must pay ₹1,000 seat acceptance fee** to secure your current seat. Your current seat remains 100% reserved.
   - In Round 2, if a higher choice is allotted, your previous seat automatically releases. If no higher seat is allotted, your previous seat stays safely with you!

Official portal: [cetcell.mahacet.org](https://cetcell.mahacet.org/)`;
    }
  }

  // 2. Documents required
  if (q.includes('document') || q.includes('कागदपत्र') || q.includes('दस्तावेज') || q.includes('validity') || q.includes('ncl') || q.includes('ews') || q.includes('obc')) {
    if (lang === 'mr') {
      return `### महाराष्ट्र अभियांत्रिकी प्रवेशासाठी अनिवार्य कागदपत्रे:

**सर्व प्रवर्गांसाठी (General / Open):**
* १० वी (SSC) व १२ वी (HSC) गुणपत्रिका
* MHT-CET / JEE Main गुणपत्रक (Scorecard)
* महाराष्ट्र अधिवास दाखला (Domicile) किंवा महाराष्ट्रातील जन्म दाखला / टीसी
* शाळा सोडल्याचा दाखला (TC / Leaving Certificate)

**OBC / VJ / NT / SBC प्रवर्गासाठी (अतिरिक्त):**
* सक्षम अधिकाऱ्याचा जातीचा दाखला (Caste Certificate)
* विभागीय जात पडताळणी समितीचे **जात वैधता प्रमाणपत्र (Caste Validity)** *(अंतिम मुदतीपूर्वी सादर न केल्यास जागा खुल्या/Open प्रवर्गात जाते)*
* **नॉन क्रिमीलेअर (NCL)** – चालू आर्थिक वर्षाच्या ३१ मार्चपर्यंत वैध असणे अनिवार्य

**EWS (आर्थिक दुर्बल घटक):**
* महाराष्ट्र शासनाच्या विहित नमुन्यातील **Proforma V** (वार्षिक कौटुंबिक उत्पन्न ८ लाखांच्या आत)

**TFWS व शिष्यवृत्तीसाठी:**
* तहसीलदार कार्यालयाचा चालू वर्षाचा वार्षिक कौटुंबिक उत्पन्नाचा दाखला (< ८ लाख)

अधिकृत तपासणी: [cetcell.mahacet.org](https://cetcell.mahacet.org/) व [mahadbt.maharashtra.gov.in](https://mahadbt.maharashtra.gov.in/)`;
    } else if (lang === 'hi') {
      return `### महाराष्ट्र इंजीनियरिंग प्रवेश हेतु अनिवार्य दस्तावेज:

**सभी छात्रों के लिए:**
* १०वीं व १२वीं की अंकतालिका एवं प्रमाण पत्र
* MHT-CET / JEE Main स्कोरकार्ड
* महाराष्ट्र अधिवास प्रमाण पत्र (Domicile Certificate) अथवा टीसी
* स्कूल लीविंग सर्टिफिकेट (TC)

**OBC / VJ / NT / SBC वर्ग के लिए:**
* जाति प्रमाण पत्र (Caste Certificate)
* **जाति वैधता प्रमाण पत्र (Caste Validity Certificate)** - अनिवार्य
* **नॉन-क्रीमी लेयर (NCL)** - चालू वित्तीय वर्ष की ३१ मार्च तक वैध

**EWS वर्ग के लिए:**
* महाराष्ट्र सरकार का **Proforma V** प्रमाण पत्र (आय ८ लाख तक)

**TFWS और छात्रवृत्ति हेतु:**
* तहसीलदार द्वारा जारी वार्षिक आय प्रमाण पत्र (< ८ लाख)

आधिकारिक वेबसाइट: [cetcell.mahacet.org](https://cetcell.mahacet.org/)`;
    } else {
      return `### Mandatory Documents for Maharashtra Engineering Admissions:

**Common to all Candidates:**
* SSC (Std. X) & HSC (Std. XII) Marksheets & Certificates
* MHT-CET (PCM) or JEE Main (Paper 1) Scorecard
* Maharashtra State Domicile Certificate / Birth Certificate showing birthplace in Maharashtra
* School Leaving Certificate (TC)

**For OBC, VJ/NT, and SBC Candidates (Additional):**
* Caste Certificate issued by competent authority in Maharashtra
* **Caste Validity Certificate** issued by Divisional Scrutiny Committee *(Mandatory; failure to submit converts seat to Open category)*
* **Non-Creamy Layer Certificate (NCL)** valid up to March 31 of current financial year

**For EWS Candidates:**
* EWS Eligibility Certificate in prescribed **Proforma V** (family income up to ₹8 Lakhs)

**For TFWS & MahaDBT Scholarships:**
* Tehsildar Income Certificate issued for the current financial year (< ₹8 Lakhs)

Official portal: [cetcell.mahacet.org](https://cetcell.mahacet.org/)`;
    }
  }

  // 3. Scholarships / MahaDBT
  if (q.includes('scholarship') || q.includes('शिष्यवृत्ती') || q.includes('छात्रवृत्ति') || q.includes('ebc') || q.includes('mahadbt') || q.includes('hostel') || q.includes('panjabrao')) {
    if (lang === 'mr') {
      return `### महाडीबीटी (MahaDBT) शिष्यवृत्ती योजना:

1. **राजर्षी शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती (EBC):**
   - **पात्रता:** कॅपद्वारे (CAP) प्रवेश घेतलेले Open आणि EWS विद्यार्थी
   - **कौटुंबिक उत्पन्न मर्यादा:** वार्षिक ८ लाख रुपयांपर्यंत
   - **सवलत:** ५०% शिक्षण शुल्क (Tuition Fee) व ५०% परीक्षा शुल्क शासनाकडून माफ

2. **डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता:**
   - वसतिगृहात (Hostel) राहून शिक्षण घेणाऱ्या विद्यार्थ्यांसाठी
   - मुंबई, पुणे, नागपूर, नाशिक मनपा क्षेत्रासाठी: **रु. ३०,००० प्रतिवर्ष**
   - इतर जिल्ह्यांसाठी: **रु. २०,००० प्रतिवर्ष**

3. **OBC / VJNT / SBC सवलत:**
   - ५०% ते १००% शिक्षण शुल्क सवलत (उत्पन्नानुसार शिष्यवृत्ती किंवा फ्रेशिप)

4. **SC / ST शिष्यवृत्ती:**
   - शासनाकडून १००% संपूर्ण फी माफी व निर्वाह भत्ता

*महत्त्वाचे: शिष्यवृत्तीसाठी बँक खाते आधारशी NPCI लिंक असणे आवश्यक आहे. अर्ज लिंक: [mahadbt.maharashtra.gov.in](https://mahadbt.maharashtra.gov.in/)*`;
    } else {
      return `### MahaDBT Post-Matric Government Scholarships:

1. **Rajarshi Chhatrapati Shahu Maharaj Scheme (EBC):**
   - **Eligibility:** Open and EWS candidates admitted through CAP rounds
   - **Income Limit:** Annual family income up to ₹8,00,000/-
   - **Benefit:** 50% Tuition Fee & 50% Exam Fee concession in Govt & Private colleges

2. **Dr. Panjabrao Deshmukh Hostel Maintenance Allowance:**
   - For students residing in registered hostels/rented rooms
   - ₹30,000/year for Mumbai (MMRDA), Pune, Nagpur, Nashik; ₹20,000/year for other districts

3. **OBC / VJNT / SBC Freeships & Scholarships:**
   - 50% to 100% tuition fee waiver depending on income slab

4. **SC / ST Post-Matric Scholarship:**
   - 100% full fee reimbursement and maintenance allowance

*Apply online at official portal: [https://mahadbt.maharashtra.gov.in/](https://mahadbt.maharashtra.gov.in/)*`;
    }
  }

  // 4. TFWS
  if (q.includes('tfws') || q.includes('ट्यूशन') || q.includes('waiver')) {
    if (lang === 'mr') {
      return `### टी.एफ.डब्ल्यू.एस. (TFWS - Tuition Fee Waiver Scheme) बद्दल माहिती:

* **काय आहे TFWS?** AICTE च्या नियमानुसार प्रत्येक अभियांत्रिकी शाखेत ५% अतिरिक्त जागा असतात.
* **फायदा:** निवड झालेल्या विद्यार्थ्यांची सर्व ४ वर्षांची **१००% ट्यूशन फी (शिक्षण शुल्क) पूर्ण माफ** होते. विद्यार्थ्याला केवळ परीक्षा व विकास फी भरावी लागते.
* **पात्रता:** सर्व प्रवर्गातील विद्यार्थी पात्र आहेत. कुटुंबाचे वार्षिक उत्पन्न **८ लाखांच्या आत** असणे बंधनकारक आहे (तहसीलदार दाखला).
* **अर्ज कसा करावा?** कॅप ऑप्शन फॉर्म भरताना संबंधित कॉलेज व शाखेचा **'T'** अक्षराने संपणारा चॉईस कोड निवडावा लागतो. या जागा उच्च गुणवत्तेवर (Merit) मिळतात.

अधिकृत माहिती: [cetcell.mahacet.org](https://cetcell.mahacet.org/)`;
    } else {
      return `### Tuition Fee Waiver Scheme (TFWS) Guidelines:

* **What is TFWS?** AICTE approves 5% supernumerary seats in every approved branch of engineering.
* **Key Benefit:** **100% Tuition Fee is waived** for all 4 years of the B.Tech degree. The student only pays minimal development and exam fees.
* **Eligibility:** Open to meritorious students of all categories with annual family income strictly below ₹8 Lakhs (Tehsildar certificate required).
* **How to apply?** In the CAP option form, select the choice code ending with the letter **'T'** (e.g. 600624510T). Allocation is purely on MHT-CET merit percentile.

Official portal: [cetcell.mahacet.org](https://cetcell.mahacet.org/)`;
    }
  }

  // Default response
  if (lang === 'mr') {
    return `नमस्कार! प्रवेश मित्र (Admission Mitra) कडून आपले स्वागत आहे.

मी आपल्याला खालील विषयांमध्ये मार्गदर्शन करू शकतो:
* **कॅप राउंड प्रक्रिया:** ऑप्शन फॉर्म, Auto-Freeze, Self-Freeze व Betterment नियम
* **कागदपत्रे:** जात वैधता, नॉन क्रिमीलेअर (NCL), EWS Proforma V, उत्पन्न दाखला
* **MahaDBT शिष्यवृत्ती:** ईबीसी ५०% फी सवलत, वसतिगृह भत्ता, TFWS योजना
* **महाविद्यालये:** COEP, VJTI, SPIT, PICT सह प्रमुख संस्थांचे DTE कोड

चालू वर्षाच्या अचूक तारखा, कटऑफ आणि माहिती पुस्तिकेसाठी नेहमी अधिकृत पोर्टल पाहा:
* CET Cell: [cetcell.mahacet.org](https://cetcell.mahacet.org/)
* MahaDBT शिष्यवृत्ती: [mahadbt.maharashtra.gov.in](https://mahadbt.maharashtra.gov.in/)`;
  } else if (lang === 'hi') {
    return `नमस्ते! प्रवेश मित्र (Admission Mitra) में आपका स्वागत है।

मैं आपकी इन विषयों में सहायता कर सकता हूँ:
* **सीएपी राउंड प्रक्रिया:** चॉइस फिलिंग, Auto-Freeze, Self-Freeze एवं Betterment नियम
* **अनिवार्य दस्तावेज:** जाति वैधता, नॉन-क्रीमी लेयर, EWS Proforma V व आय प्रमाण पत्र
* **MahaDBT छात्रवृत्ति:** EBC ५०% फीस छूट, हॉस्टल भत्ता व TFWS योजना
* **कॉलेज चयन:** शीर्ष संस्थानों के आधिकारिक DTE कोड

सटीक तिथियों, कटऑफ एवं शुल्क के लिए आधिकारिक पोर्टल देखें:
* CET Cell: [cetcell.mahacet.org](https://cetcell.mahacet.org/)
* MahaDBT पोर्टल: [mahadbt.maharashtra.gov.in](https://mahadbt.maharashtra.gov.in/)`;
  } else {
    return `Welcome to **Admission Mitra**!

I can help guide you through:
* **CAP Rounds:** Option form submission, Auto-Freeze, Self-Freeze vs Betterment rules
* **Mandatory Documents:** Caste Validity, Non-Creamy Layer validity, EWS Proforma V, Tehsildar income proof
* **MahaDBT Scholarships:** EBC 50% tuition waiver, Dr. Panjabrao Deshmukh hostel allowance, TFWS
* **College Directory:** DTE codes and preference ordering for top Maharashtra colleges

For exact live academic schedules, official fee structures and cutoffs, visit:
* State CET Cell: [https://cetcell.mahacet.org/](https://cetcell.mahacet.org/)
* MahaDBT Portal: [https://mahadbt.maharashtra.gov.in/](https://mahadbt.maharashtra.gov.in/)`;
  }
}


// Setup Vite middleware in dev or static serving in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Admission Mitra Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

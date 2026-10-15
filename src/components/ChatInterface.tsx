import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
  Shield,
  HelpCircle,
} from 'lucide-react';
import { Language, ChatMessage } from '../types/admission';
import { SUGGESTED_QUERIES, OFFICIAL_LINKS } from '../data/admissionData';

interface ChatInterfaceProps {
  language: Language;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ language }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const welcomeMessages: Record<Language, string> = {
      mr: `नमस्कार! मी **प्रवेश मित्र (Admission Mitra)** आहे – महाराष्ट्र अभियांत्रिकी पदवी (BE/B.Tech) प्रवेश प्रक्रियेसाठी आपला अधिकृत मार्गदर्शक.\n\nमी आपल्याला खालील विषयांमध्ये मदत करू शकतो:\n* **MHT-CET & JEE Main** पात्रता व गुणवत्ता यादी\n* **CAP Rounds प्रक्रिया**: E-Scrutiny, ऑप्शन फॉर्म, Auto-Freeze, Self-Freeze व Betterment नियम\n* **आवश्यक कागदपत्रे**: जात दाखला, जात वैधता, नॉन क्रिमीलेअर (NCL), EWS व TFWS उत्पन्न दाखला\n* **MahaDBT शिष्यवृत्ती**: ईबीसी (EBC) ५०% फी सवलत, वसतिगृह भत्ता, ओबीसी/एससी/एसटी स्कॉलरशिप\n* **महाविद्यालये व DTE कोड**: पसंतीक्रम कसा लावावा\n\n*(कृपया लक्षात घ्या: मी अधिकृत नियम व प्रक्रियेनुसार मार्गदर्शन करतो. चालू वर्षाच्या अधिकृत तारखा व कटऑफसाठी नेहमी [cetcell.mahacet.org](https://cetcell.mahacet.org/) व [mahadbt.maharashtra.gov.in](https://mahadbt.maharashtra.gov.in/) तपासा.)*\n\nआपला प्रश्न खाली विचारा किंवा सुचवलेल्या पर्यायांवर क्लिक करा!`,
      hi: `नमस्ते! मैं **प्रवेश मित्र (Admission Mitra)** हूँ – महाराष्ट्र इंजीनियरिंग (BE/B.Tech) प्रवेश प्रक्रिया हेतु आपका विश्वसनीय सलाहकार।\n\nमैं आपकी इन विषयों में सहायता कर सकता हूँ:\n* **MHT-CET व JEE Main** पात्रता एवं मेरिट लिस्ट\n* **CAP Rounds प्रक्रिया**: स्क्रूटनी, चॉइस फिलिंग, Auto-Freeze, Self-Freeze व Betterment नियम\n* **अनिवार्य दस्तावेज**: जाति प्रमाण पत्र, जाति वैधता, नॉन-क्रीमी लेयर, EWS व आय प्रमाण पत्र\n* **MahaDBT छात्रवृत्ति**: EBC ५०% फीस छूट, छात्रावास भत्ता, एवं श्रेणीवार स्कॉलरशिप\n* **कॉलेज चयन व DTE कोड**: सही प्राथमिकता क्रम कैसे बनाएं\n\n*(महत्वपूर्ण: प्रवेश मित्र वास्तविक नियमों पर आधारित परामर्श देता है। चालू वर्ष की तिथियां व कटऑफ केवल [cetcell.mahacet.org](https://cetcell.mahacet.org/) पर ही देखें।)*\n\nअपना प्रश्न नीचे पूछें अथवा सुझाई गई त्वरित पट्टियों पर क्लिक करें!`,
      en: `Welcome to **Admission Mitra** – your dedicated counselor for Maharashtra Engineering (BE/B.Tech) Centralized Admissions!\n\nI can assist you with:\n* **MHT-CET & JEE Main** eligibility & merit rank guidelines\n* **CAP Rounds Rules**: Scrutiny mode, Option Form Filling, Auto-Freeze, Self-Freeze vs Betterment\n* **Mandatory Documents Checklist**: Caste Certificate, Caste Validity, NCL validity, EWS Proforma V, Income certificates\n* **MahaDBT Scholarships**: EBC 50% Tuition Fee Concession, Dr. Panjabrao Deshmukh Hostel Allowance, Category Freeships\n* **Top Maharashtra Engineering Colleges & Official DTE Codes**\n\n*(Important Notice: Accurate regulatory guidance is provided. Current year exact schedules, fee structures, and cutoffs are exclusively published by CET Cell on [cetcell.mahacet.org](https://cetcell.mahacet.org/).)*\n\nAsk any question below or tap a suggested topic!`,
    };

    return [
      {
        id: 'welcome-msg',
        role: 'model',
        text: welcomeMessages[language],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
  });

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (messageText?: string) => {
    const textToSend = (messageText || input).trim();
    if (!textToSend || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Build history for backend
      const historyPayload = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload,
          language,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned error ${res.status}`);
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.reply || 'No response generated.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        role: 'model',
        text:
          language === 'mr'
            ? 'क्षमस्व, उत्तर मिळवताना त्रुटी आली. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा किंवा अधिकृत पोर्टलवर पाहा: [cetcell.mahacet.org](https://cetcell.mahacet.org/).'
            : language === 'hi'
            ? 'क्षमा करें, उत्तर प्राप्त करने में समस्या आई। कृपया पुनः प्रयास करें अथवा आधिकारिक पोर्टल देखें: [cetcell.mahacet.org](https://cetcell.mahacet.org/)।'
            : 'Sorry, an error occurred while connecting to Admission Mitra. Please try again or visit official portal: [cetcell.mahacet.org](https://cetcell.mahacet.org/).',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    const welcomeMessages: Record<Language, string> = {
      mr: `चॅट रीसेट केले आहे! मी **प्रवेश मित्र** आहे. महाराष्ट्रातील इंजिनिअरिंग प्रवेश, कॅप फेऱ्या, जात वैधता, ईबीसी स्कॉलरशिप आणि कॉलेजेसबाबत विचारा.`,
      hi: `चैट रीसेट कर दी गई है! मैं **प्रवेश मित्र** हूँ। महाराष्ट्र इंजीनियरिंग प्रवेश, सीएपी राउंड, जाति वैधता, EBC स्कॉलरशिप व कॉलेज से संबंधित प्रश्न पूछें।`,
      en: `Chat has been reset! I am **Admission Mitra**. Ask me anything about Maharashtra engineering admissions, CAP rounds, documents, scholarships, or colleges.`,
    };

    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        text: welcomeMessages[language],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Helper to format bot markdown text into formatted elements
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');

    return (
      <div className="space-y-2 text-sm leading-relaxed text-slate-800">
        {lines.map((line, idx) => {
          const trimmed = line.trim();

          // Empty line
          if (!trimmed) {
            return <div key={idx} className="h-1.5" />;
          }

          // Bullet points
          if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            const bulletText = trimmed.substring(2);
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: formatInlineMarkdown(bulletText),
                  }}
                />
              </div>
            );
          }

          // Numbered list
          if (/^\d+\.\s/.test(trimmed)) {
            const numberMatch = trimmed.match(/^(\d+\.)\s(.*)/);
            if (numberMatch) {
              return (
                <div key={idx} className="flex items-start gap-2 pl-1">
                  <span className="font-semibold text-blue-700 shrink-0 text-xs mt-0.5">
                    {numberMatch[1]}
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: formatInlineMarkdown(numberMatch[2]),
                    }}
                  />
                </div>
              );
            }
          }

          // Headers
          if (trimmed.startsWith('### ')) {
            return (
              <h4 key={idx} className="font-bold text-slate-900 text-sm mt-3 mb-1 text-blue-900">
                {trimmed.substring(4)}
              </h4>
            );
          }
          if (trimmed.startsWith('## ')) {
            return (
              <h3 key={idx} className="font-bold text-slate-900 text-base mt-3 mb-1 text-blue-900 border-b border-blue-100 pb-1">
                {trimmed.substring(3)}
              </h3>
            );
          }

          // Regular paragraph
          return (
            <p
              key={idx}
              dangerouslySetInnerHTML={{
                __html: formatInlineMarkdown(trimmed),
              }}
            />
          );
        })}
      </div>
    );
  };

  const formatInlineMarkdown = (text: string) => {
    // Links: [Text](url)
    let formatted = text.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-0.5">$1 <svg class="w-3 h-3 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>'
    );

    // Bold: **Text**
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');

    // Code: `code`
    formatted = formatted.replace(
      /`([^`]+)`/g,
      '<code class="px-1.5 py-0.5 rounded bg-slate-100 text-blue-800 text-xs font-mono border border-slate-200">$1</code>'
    );

    return formatted;
  };

  const suggestions = SUGGESTED_QUERIES[language] || SUGGESTED_QUERIES.en;

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] min-h-[580px] max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Chat Subheader */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-800">
                {language === 'mr'
                  ? 'प्रवेश मित्र - संवाद केंद्र'
                  : language === 'hi'
                  ? 'प्रवेश मित्र - संवाद केंद्र'
                  : 'Admission Mitra AI Assistant'}
              </h2>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              {language === 'mr'
                ? 'MHT-CET, कॅप फेऱ्या, कागदपत्रे व स्कॉलरशिप सल्ला'
                : language === 'hi'
                ? 'MHT-CET, सीएपी राउंड, दस्तावेज एवं छात्रवृत्ति सहायता'
                : 'MHT-CET, CAP rounds, documents & scholarships advisor'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors text-xs flex items-center gap-1"
            title="Reset Chat"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {language === 'mr' ? 'नवीन चॅट' : language === 'hi' ? 'नई चैट' : 'Reset'}
            </span>
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${
                  isUser
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'bg-blue-600 text-white shadow-xs'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3.5 shadow-xs relative group ${
                  isUser
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-white border border-slate-200 rounded-tl-none'
                }`}
              >
                {isUser ? (
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                ) : (
                  <div>
                    {renderFormattedContent(msg.text)}

                    {/* Copy action for assistant response */}
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{msg.timestamp}</span>
                      <button
                        onClick={() => handleCopy(msg.text, msg.id)}
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors px-1.5 py-0.5 rounded hover:bg-slate-50"
                        title="Copy message"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Loading Bubble */}
        {loading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-blue-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
                <div
                  className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                />
                <div
                  className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                />
                <span className="text-xs text-slate-500 font-medium ml-2">
                  {language === 'mr'
                    ? 'माहिती तपासत आहे...'
                    : language === 'hi'
                    ? 'जानकारी जांची जा रही है...'
                    : 'Checking admission rules...'}
                </span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompt Chips */}
      <div className="bg-white border-t border-slate-100 px-4 py-2.5 overflow-x-auto">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>
            {language === 'mr'
              ? 'त्वरित प्रश्न (क्लिक करा):'
              : language === 'hi'
              ? 'त्वरित प्रश्न (क्लिक करें):'
              : 'Quick suggestions (tap to ask):'}
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {suggestions.slice(0, 4).map((query, index) => (
            <button
              key={index}
              onClick={() => handleSend(query)}
              disabled={loading}
              className="text-xs shrink-0 bg-blue-50/70 hover:bg-blue-100 text-blue-800 border border-blue-200/60 rounded-full px-3 py-1.5 transition-colors disabled:opacity-50 text-left font-medium max-w-[280px] sm:max-w-none truncate"
            >
              {query}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white border-t border-slate-200 p-3 sm:p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            placeholder={
              language === 'mr'
                ? 'एमएचटी-सीईटी, कॅप राउंड, जात वैधता किंवा ईबीसी विषयी विचारा...'
                : language === 'hi'
                ? 'MHT-CET, सीएपी राउंड, जाति वैधता अथवा EBC के बारे में पूछें...'
                : 'Ask about MHT-CET, CAP rounds, documents, scholarships or colleges...'
            }
            className="flex-1 px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-2.5 rounded-xl shadow-xs transition-colors flex items-center justify-center shrink-0 cursor-pointer disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-blue-600" />
            <span>
              {language === 'mr'
                ? 'अधिकृत नियमांवर आधारित'
                : language === 'hi'
                ? 'आधिकारिक नियमों पर आधारित'
                : 'Built on verified CET Cell rules'}
            </span>
          </div>
          <span className="hidden sm:inline">
            Official links: <a href={OFFICIAL_LINKS.cetCell} target="_blank" rel="noreferrer" className="underline hover:text-blue-600">cetcell.mahacet.org</a>
          </span>
        </div>
      </div>
    </div>
  );
};

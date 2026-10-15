import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Compass,
  FileCheck,
  Building,
  Coins,
  Globe,
  GraduationCap,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import { Language } from './types/admission';
import { UI_STRINGS, OFFICIAL_LINKS } from './data/admissionData';
import { Header } from './components/Header';
import { OfficialBanner } from './components/OfficialBanner';
import { ChatInterface } from './components/ChatInterface';
import { CapRoadmapView } from './components/CapRoadmapView';
import { DocumentChecklistView } from './components/DocumentChecklistView';
import { CollegesView } from './components/CollegesView';
import { ScholarshipsView } from './components/ScholarshipsView';
import { OfficialPortalsView } from './components/OfficialPortalsView';

type TabType = 'chat' | 'cap_guide' | 'documents' | 'colleges' | 'scholarships' | 'official_links';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('admission_mitra_lang');
    if (saved === 'mr' || saved === 'hi' || saved === 'en') {
      return saved;
    }
    return 'mr'; // Default to Marathi for Maharashtra students
  });

  const [activeTab, setActiveTab] = useState<TabType>('chat');

  useEffect(() => {
    localStorage.setItem('admission_mitra_lang', currentLanguage);
  }, [currentLanguage]);

  const navItems: Array<{
    id: TabType;
    label: Record<Language, string>;
    icon: React.ElementType;
    badge?: string;
  }> = [
    {
      id: 'chat',
      label: UI_STRINGS.nav.chat,
      icon: MessageSquare,
      badge: 'AI',
    },
    {
      id: 'cap_guide',
      label: UI_STRINGS.nav.capGuide,
      icon: Compass,
    },
    {
      id: 'documents',
      label: UI_STRINGS.nav.documents,
      icon: FileCheck,
    },
    {
      id: 'colleges',
      label: UI_STRINGS.nav.colleges,
      icon: Building,
    },
    {
      id: 'scholarships',
      label: UI_STRINGS.nav.scholarships,
      icon: Coins,
    },
    {
      id: 'official_links',
      label: UI_STRINGS.nav.officialLinks,
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 sm:pb-0">
      {/* Navigation & Verification Headers */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onNavigateHome={() => setActiveTab('chat')}
      />

      <OfficialBanner language={currentLanguage} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6">
        {/* Desktop/Tablet Horizontal Navigation Tab Bar */}
        <div className="hidden sm:flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs mb-6 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label[currentLanguage]}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive ? 'bg-blue-800 text-blue-100' : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="transition-all duration-150">
          {activeTab === 'chat' && <ChatInterface language={currentLanguage} />}
          {activeTab === 'cap_guide' && <CapRoadmapView language={currentLanguage} />}
          {activeTab === 'documents' && <DocumentChecklistView language={currentLanguage} />}
          {activeTab === 'colleges' && <CollegesView language={currentLanguage} />}
          {activeTab === 'scholarships' && <ScholarshipsView language={currentLanguage} />}
          {activeTab === 'official_links' && <OfficialPortalsView language={currentLanguage} />}
        </div>
      </main>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-1 py-1.5 shadow-lg flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-lg text-[10px] font-semibold transition-colors relative ${
                isActive ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                {item.badge && (
                  <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-[8px] font-bold px-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="mt-0.5 max-w-[54px] truncate text-center">
                {item.label[currentLanguage]}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 px-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
              AM
            </div>
            <span className="font-semibold text-slate-800">
              Admission Mitra (प्रवेश मित्र)
            </span>
            <span>•</span>
            <span>Maharashtra Engineering Aspirants Advisor</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 font-medium">
            <a
              href={OFFICIAL_LINKS.cetCell}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 flex items-center gap-1"
            >
              <span>State CET Cell (cetcell.mahacet.org)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={OFFICIAL_LINKS.mahaDbt}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 flex items-center gap-1"
            >
              <span>MahaDBT (mahadbt.maharashtra.gov.in)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-400">
          <p>
            Zero-Rumors Policy: Admission Mitra provides regulatory guidelines and structured advice based on Maharashtra Government norms. Exact schedules, fee structures, and cutoffs are published exclusively via official bulletins by the State CET Cell.
          </p>
        </div>
      </footer>
    </div>
  );
}

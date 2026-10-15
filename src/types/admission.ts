export type Language = 'en' | 'mr' | 'hi';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export type CandidateCategory =
  | 'open'
  | 'ews'
  | 'obc'
  | 'vjnt_sbc'
  | 'sc_st'
  | 'tfws'
  | 'minority'
  | 'pwd_defense';

export interface DocumentItem {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  issuingAuthority: Record<Language, string>;
  mandatoryFor: CandidateCategory[];
  importantNote?: Record<Language, string>;
}

export interface CollegeInfo {
  code: string;
  name: string;
  marathiName: string;
  location: string;
  district: string;
  region: 'Pune' | 'Mumbai' | 'Western Maharashtra' | 'Vidarbha' | 'Marathwada' | 'North Maharashtra';
  status: 'State University / Autonomous' | 'Govt. Autonomous' | 'Govt. Aided Autonomous' | 'Private Autonomous' | 'Government';
  popularBranches: string[];
  website: string;
  cetCellCutoffRef: string;
}

export interface ScholarshipScheme {
  id: string;
  name: Record<Language, string>;
  department: Record<Language, string>;
  beneficiary: Record<Language, string>;
  benefit: Record<Language, string>;
  incomeLimit: Record<Language, string>;
  keyDocs: Record<Language, string[]>;
  portalUrl: string;
}

export interface CapStep {
  stepNumber: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  actionItems: Record<Language, string[]>;
  caution: Record<Language, string>;
}

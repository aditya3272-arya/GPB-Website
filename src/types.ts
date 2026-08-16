export interface TeamMemberRole {
  id: string;
  role: string;
  namePlaceholder: string;
  photoPlaceholder: string;
  department: string;
  deskNumber: string;
  description: string;
  keyResponsibilities: string[];
  customName?: string;
  customPhoto?: string;
}

export interface BankingService {
  id: string;
  title: string;
  category: 'Accounts' | 'Deposits' | 'Lending' | 'Wealth & Insurance' | 'Operations';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  keyHighlights: string;
  badge?: string;
}

export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  statNumber?: string;
  statLabel?: string;
}

export interface NoticeItem {
  id: string;
  text: string;
  date: string;
  isUrgent?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMemberRole {
  id: string;
  name: string;
  role: string;
  department: string;
  deskNumber: string;
  deskId: number;
  photoUrl?: string;
  fallbackInitials?: string;
  description: string;
  keyResponsibilities: string[];
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

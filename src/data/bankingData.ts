import { TeamMemberRole, BankingService, TrustPillar, FAQItem, NoticeItem } from '../types';

export const BANKING_ROLES: TeamMemberRole[] = [
  {
    id: 'role-1',
    role: 'Insurance',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Risk & Protection Group',
    deskNumber: 'Desk 01',
    description: 'Oversees student life and health insurance policy records, coverage evaluations, and premium settlement vouchers.',
    keyResponsibilities: [
      'Evaluate comprehensive student protection plans',
      'Maintain insurance ledger & policy registrations',
      'Process policy documentation and claim vouchers'
    ]
  },
  {
    id: 'role-2',
    role: 'Customer Service Executive',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Front Desk & Branch Help',
    deskNumber: 'Desk 02',
    description: 'Primary customer touchpoint for account enquiries, statement issuance, grievance resolution, and general banking guidance.',
    keyResponsibilities: [
      'Attend to daily banking counter enquiries',
      'Issue physical passbook transaction updates',
      'Direct visitors to appropriate banking desks'
    ]
  },
  {
    id: 'role-3',
    role: 'Insurance Sales Executive',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Client Advisory & Solutions',
    deskNumber: 'Desk 03',
    description: 'Assists customers in identifying suitable life, health, and asset insurance plans with tailored premium structures.',
    keyResponsibilities: [
      'Present custom insurance options to accountholders',
      'Explain terms, policy tenure, and maturity returns',
      'Assist applicants with proposal form completions'
    ]
  },
  {
    id: 'role-4',
    role: 'Account Opening & KYC',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Onboarding & Compliance',
    deskNumber: 'Desk 04',
    description: 'Handles new customer onboarding, Aadhaar/ID identity verification, signature card creation, and account generation.',
    keyResponsibilities: [
      'Scrutinize student KYC identification documents',
      'Issue account numbers & starter kits',
      'Maintain specimen signature records'
    ]
  },
  {
    id: 'role-5',
    role: 'Cashier',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Cash Management & Vault',
    deskNumber: 'Desk 05',
    description: 'Manages physical cash receipts, currency counting, token disbursement, withdrawal pay-in slips, and end-of-day balance balancing.',
    keyResponsibilities: [
      'Accept cash deposits with verified pay-in slips',
      'Disburse cash withdrawals against signed vouchers',
      'Daily ledger reconciliation and cash book balancing'
    ]
  },
  {
    id: 'role-6',
    role: 'Verification & Cheque Book Officer',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Clearing & Instrument Operations',
    deskNumber: 'Desk 06',
    description: 'Scrutinizes submitted cheques, verifies maker-checker signatures, processes clearing entries, and dispatches fresh cheque books.',
    keyResponsibilities: [
      'Authenticate cheque leaf signatures against KYC records',
      'Log CTS (Cheque Truncation) clearing entries',
      'Issue personalized cheque book requisitions'
    ]
  },
  {
    id: 'role-7',
    role: 'Deposit & Documentation Officer',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Term Deposits & Records Management',
    deskNumber: 'Desk 07',
    description: 'Executes Fixed Deposit (FD) and Recurring Deposit (RD) certificates, tracks maturity schedules, and archives master registers.',
    keyResponsibilities: [
      'Issue official term deposit certificates with rate lock',
      'Process monthly recurring deposit schedules',
      'Manage physical and digital documentation archives'
    ]
  },
  {
    id: 'role-8',
    role: 'Investment Advisor',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Wealth Management & Financial Literacy',
    deskNumber: 'Desk 08',
    description: 'Provides structured financial advice on savings goals, compound growth instruments, and systematic budgeting strategies.',
    keyResponsibilities: [
      'Analyze student financial goals & savings horizons',
      'Recommend diversified interest-bearing options',
      'Conduct financial literacy consultations'
    ]
  },
  {
    id: 'role-9',
    role: 'Loan',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Credit Assessment & Disbursals',
    deskNumber: 'Desk 09',
    description: 'Appraises student education, activity, and project loan proposals, reviews collateral/guarantees, and creates repayment schedules.',
    keyResponsibilities: [
      'Appraise loan eligibility and purpose verification',
      'Structure transparent monthly installment schedules (EMI)',
      'Manage loan sanction letters and disbursal accounts'
    ]
  },
  {
    id: 'role-10',
    role: 'Credit',
    namePlaceholder: '[STUDENT NAME]',
    photoPlaceholder: '[STUDENT PHOTO]',
    department: 'Risk Management & Underwriting',
    deskNumber: 'Desk 10',
    description: 'Assesses creditworthiness, monitors overdue repayments, maintains internal credit score metrics, and oversees overdraft limits.',
    keyResponsibilities: [
      'Calculate borrower credit ratings and risk scorecards',
      'Authorize credit card and overdraft facility limits',
      'Perform monthly audit of outstanding loan balances'
    ]
  }
];

export const BANKING_SERVICES: BankingService[] = [
  {
    id: 'savings-account',
    title: 'Savings Accounts',
    category: 'Accounts',
    shortDesc: 'High-interest savings account with zero minimum balance requirement for students and seamless passbook access.',
    fullDesc: 'Designed to cultivate disciplined financial habits, our Savings Account offers attractive interest rates, instant transaction receipts, customized cheque books, and secure online account management.',
    iconName: 'Wallet',
    keyHighlights: 'Interest up to 7.25% p.a. • Instant passbook issuance • Zero hidden maintenance fees',
    badge: 'Popular',
    features: [
      'Zero minimum balance for active student accountholders',
      'Quarterly compounding interest credited directly to account',
      'Personalized debit card and cheque book on opening',
      'Real-time SMS & email transaction notifications'
    ]
  },
  {
    id: 'current-account',
    title: 'Current Accounts',
    category: 'Accounts',
    shortDesc: 'Tailored for class clubs, project enterprises, and event committees requiring high-frequency deposits and transactions.',
    fullDesc: 'A powerhouse account engineered for club treasurers and enterprise simulations with high transaction limits, multi-signatory permissions, and comprehensive monthly ledger statements.',
    iconName: 'Building2',
    keyHighlights: 'Multi-signatory authority • Free cheque leaves • Detailed ledger statements',
    badge: 'Institutional',
    features: [
      'Higher daily cash deposit and withdrawal thresholds',
      'Multi-signatory authorizations for committee oversight',
      'Monthly consolidated audit-ready bank statements',
      'Dedicated relationship desk support'
    ]
  },
  {
    id: 'kyc-onboarding',
    title: 'Account Opening & KYC',
    category: 'Operations',
    shortDesc: 'Fast, paperless onboarding with instant identity verification, biometric registration, and starter kit issuance.',
    fullDesc: 'Our streamlined onboarding protocol ensures compliant identity verification within minutes at Desk 04, enabling immediate deposit readiness and digital activation.',
    iconName: 'UserCheck',
    keyHighlights: '10-minute counter opening • Instant starter kit • Strict identity verification',
    features: [
      'Simple one-page onboarding form with student ID',
      'Specimen signature capture for forgery prevention',
      'Immediate allotment of 12-digit Premier Account Number',
      'Welcome pack including passbook, rules manual, and login PIN'
    ]
  },
  {
    id: 'term-deposits',
    title: 'Fixed & Recurring Deposits',
    category: 'Deposits',
    shortDesc: 'Guaranteed capital appreciation with flexible tenures and lucrative compound returns on your savings.',
    fullDesc: 'Lock in your savings with Gurukul PREMIER Bank Term Deposits. Choose between lump-sum Fixed Deposits (FD) or disciplined monthly Recurring Deposits (RD) with fixed high interest.',
    iconName: 'PiggyBank',
    keyHighlights: 'Up to 8.10% p.a. return • Tenures from 1 month to 3 years • Premature withdrawal flexibility',
    badge: 'High Yield',
    features: [
      'Fixed Deposit interest up to 8.10% p.a. with compounding',
      'Recurring Deposit starting from small monthly contributions',
      'Official printed FD Certificates issued at Desk 07',
      'Option for quarterly interest payout or maturity compounding'
    ]
  },
  {
    id: 'loans-lending',
    title: 'Loans & Credit Facility',
    category: 'Lending',
    shortDesc: 'Transparent lending solutions for student projects, competition materials, educational needs, and club initiatives.',
    fullDesc: 'Our loan desk provides structured financing with low transparent interest rates, clear EMI schedules, and no hidden prepayment penalties.',
    iconName: 'Landmark',
    keyHighlights: 'Fast sanction • Flexible repayment schedules • Transparent terms',
    features: [
      'Project & Education financing with subsidized rate structures',
      'Clear EMI repayment schedules generated on sanction',
      'Zero processing fee for academic & extracurricular proposals',
      'Dedicated guidance from Loan & Credit Desk Officers'
    ]
  },
  {
    id: 'insurance-protection',
    title: 'Insurance & Protection',
    category: 'Wealth & Insurance',
    shortDesc: 'Comprehensive coverage plans safeguarding student assets, health, and event projects against unforeseen events.',
    fullDesc: 'Protect your financial peace of mind. Our Insurance division offers structured coverage plans with transparent claim settlements and guided advisory.',
    iconName: 'ShieldCheck',
    keyHighlights: 'Hassle-free coverage • Low premium vouchers • 100% claim guidance',
    features: [
      'Student activity & project loss protection plans',
      'Clear, jargon-free policy terms and payout schedules',
      'Assisted claim documentation at Desk 01 and Desk 03',
      'Direct premium deduction facility from your savings account'
    ]
  },
  {
    id: 'investment-advisory',
    title: 'Investment Advisory',
    category: 'Wealth & Insurance',
    shortDesc: 'Structured financial literacy consultations, goal-based wealth planning, and growth portfolio guidance.',
    fullDesc: 'Learn the fundamentals of prudent asset allocation, compound interest mechanics, and smart money habits with our certified student Investment Advisors.',
    iconName: 'TrendingUp',
    keyHighlights: 'Goal-based planning • Financial literacy • 1-on-1 consultations',
    features: [
      'Personalized savings plan tailored to your target milestone',
      'Interactive compounding and inflation impact demonstrations',
      'Free portfolio health checks and quarterly rebalancing',
      'Educational workshops on smart financial management'
    ]
  },
  {
    id: 'cheque-clearing',
    title: 'Cheque & Cash Services',
    category: 'Operations',
    shortDesc: 'Secure CTS cheque clearing, verified pay-in slips, counter cash handling, and signature authentication.',
    fullDesc: 'Experience reliable counter banking with precision cashiers and strict cheque verification protocols ensuring 100% accounting accuracy.',
    iconName: 'Coins',
    keyHighlights: 'Dual-signatory verification • Same-day cheque processing • Tamper-proof slips',
    features: [
      'Multi-denomination currency processing and coin supply',
      'CTS-compliant electronic cheque verification at Desk 06',
      'Duplicate receipt vouchers provided for every cash deposit',
      'Vault-level security and daily balancing audits'
    ]
  },
  {
    id: 'customer-support',
    title: 'Dedicated Customer Support',
    category: 'Operations',
    shortDesc: 'Prompt assistance, transaction queries, passbook updates, and grievance redressal at Desk 02.',
    fullDesc: 'Our Customer Service Executives are committed to answering your banking queries, resolving transaction concerns, and ensuring smooth counter service.',
    iconName: 'Headphones',
    keyHighlights: 'Friendly counter desk • Rapid resolution • Statement reprints',
    features: [
      'Walk-in counter assistance during all school banking hours',
      'Instant duplicate statement generation upon request',
      'Transparent grievance escalation matrix with supervisor review',
      'Comprehensive FAQs and banking guidance brochures'
    ]
  }
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: 'pillar-1',
    title: 'Institutional Security',
    description: 'Every deposit, loan sanction, and cheque instrument undergoes rigorous multi-tier verification and strict maker-checker controls.',
    iconName: 'ShieldCheck',
    statNumber: '100%',
    statLabel: 'Audit Compliance'
  },
  {
    id: 'pillar-2',
    title: 'Customer-First Banking',
    description: '10 dedicated specialized desks managed by trained student officers providing transparent, attentive, and personalized service.',
    iconName: 'Users',
    statNumber: '10',
    statLabel: 'Dedicated Desks'
  },
  {
    id: 'pillar-3',
    title: 'Transparent Transactions',
    description: 'Zero hidden fees, clear interest computation, and immediate physical & digital transaction receipts for total financial clarity.',
    iconName: 'CheckCircle2',
    statNumber: '0%',
    statLabel: 'Hidden Charges'
  },
  {
    id: 'pillar-4',
    title: 'Reliable Growth Solutions',
    description: 'High-yield term deposits, prudent lending appraisals, and sound advisory designed to build enduring financial capability.',
    iconName: 'TrendingUp',
    statNumber: '8.10%',
    statLabel: 'Max Deposit Yield'
  }
];

export const NOTICES: NoticeItem[] = [
  {
    id: 'n-1',
    text: 'New High-Yield Fixed Deposit interest rates of 8.10% p.a. now effective at Desk 07.',
    date: 'Aug 2026',
    isUrgent: true
  },
  {
    id: 'n-2',
    text: 'Student KYC verification desk operational from 09:00 AM to 03:30 PM on all school banking days.',
    date: 'Aug 2026'
  },
  {
    id: 'n-3',
    text: 'Cheque clearing cutoff time is 01:30 PM for same-day ledger credit processing.',
    date: 'Aug 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Accounts & KYC',
    question: 'How do I open an account with Gurukul PREMIER Bank?',
    answer: 'Visit Desk 04 (Account Opening & KYC) during branch operating hours with your student identity card. Fill out the simple 1-page account opening form and receive your starter kit and passbook within 10 minutes.'
  },
  {
    category: 'Accounts & KYC',
    question: 'Is there any minimum balance penalty?',
    answer: 'No. All student savings accounts at Gurukul PREMIER Bank have zero minimum balance requirements, ensuring students can manage their funds without hidden charges.'
  },
  {
    category: 'Deposits',
    question: 'What is the minimum tenure and amount for Fixed Deposits?',
    answer: 'Fixed Deposits start from as low as 30 days up to 3 years. You can open an FD with a minimum deposit of ₹100 at Desk 07 and earn up to 8.10% annual interest.'
  },
  {
    category: 'Operations',
    question: 'How do I deposit or withdraw cash safely?',
    answer: 'Fill out a standard Pay-in Slip (for deposits) or Withdrawal Voucher (for withdrawals) and present it with your passbook at Desk 05 (Cashier). You will receive an authorized stamped receipt for every transaction.'
  },
  {
    category: 'Cheques & Clearing',
    question: 'How long does cheque clearing take?',
    answer: 'Cheques submitted at Desk 06 before 01:30 PM are processed and credited on the very same day following signature authentication.'
  }
];

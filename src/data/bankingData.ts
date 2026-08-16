import { TeamMemberRole, BankingService, TrustPillar, FAQItem, NoticeItem } from '../types';

export const BANKING_ROLES: TeamMemberRole[] = [
  // Desk 1 - Customer Service Executives (2)
  {
    id: 'desk-1-rishita',
    name: 'Rishita Samtani',
    role: 'Customer Service Executive',
    department: 'Front Desk & Customer Care',
    deskNumber: 'Desk 01',
    deskId: 1,
    photoUrl: '/team/desk1-rishita-samtani.JPG',
    fallbackInitials: 'RS',
    description: 'Primary customer touchpoint for account enquiries, statement duplicates, grievance redressal, and front-counter guidance.',
    keyResponsibilities: [
      'Attend to daily banking counter enquiries and visitor guidance',
      'Issue physical passbook transaction updates and statement reprints',
      'Direct accountholders to appropriate operational counters'
    ]
  },
  {
    id: 'desk-1-shiveksha',
    name: 'Shiveksha Gaur',
    role: 'Customer Service Executive',
    department: 'Front Desk & Customer Care',
    deskNumber: 'Desk 01',
    deskId: 1,
    photoUrl: '/team/desk1-shiveksha-gaur.JPG',
    fallbackInitials: 'SG',
    description: 'Provides proactive assistance with banking forms, service requests, token queues, and dispute resolution.',
    keyResponsibilities: [
      'Assist accountholders with pay-in slip and requisition completions',
      'Log customer service feedback and grievance registers',
      'Manage front-desk customer flow and counter coordination'
    ]
  },

  // Desk 2 - Insurance Manager & Insurance Sales Executive
  {
    id: 'desk-2-khushi',
    name: 'Khushi Premchandani',
    role: 'Insurance Manager',
    department: 'Risk & Protection Group',
    deskNumber: 'Desk 02',
    deskId: 2,
    photoUrl: '/team/desk2-khushi-premchandani.JPG',
    fallbackInitials: 'KP',
    description: 'Oversees student protection policy administration, coverage appraisals, insurance vouchers, and claim settlement registers.',
    keyResponsibilities: [
      'Evaluate comprehensive student activity and health protection plans',
      'Maintain policy master registers and authorized premium vouchers',
      'Supervise claim scrutinies and insurance clearance certificates'
    ]
  },
  {
    id: 'desk-2-kshirin',
    name: 'Kshirin Maitray',
    role: 'Insurance Sales Executive',
    department: 'Risk & Protection Group',
    deskNumber: 'Desk 02',
    deskId: 2,
    photoUrl: '/team/desk2-kshirin-maitray.JPG',
    fallbackInitials: 'KM',
    description: 'Assists customers in choosing suitable protection plans with transparent premium schedules and maturity returns.',
    keyResponsibilities: [
      'Present custom insurance options tailored to student needs',
      'Explain policy terms, coverage tenures, and benefits',
      'Assist applicants with proposal forms and premium setup'
    ]
  },

  // Desk 3 - Account Opening & KYC Officers (2)
  {
    id: 'desk-3-keshav',
    name: 'Keshav Gera',
    role: 'Account Opening & KYC Officer',
    department: 'Onboarding & Compliance',
    deskNumber: 'Desk 03',
    deskId: 3,
    photoUrl: '/team/desk3-keshav-gera.JPG',
    fallbackInitials: 'KG',
    description: 'Handles new customer onboarding, student ID/Aadhaar scrutiny, and allotment of 12-digit Premier Account Numbers.',
    keyResponsibilities: [
      'Scrutinize student KYC identification documents and eligibility',
      'Allot official 12-digit Premier Account Numbers',
      'Maintain compliant onboarding logs and account master files'
    ]
  },
  {
    id: 'desk-3-achintya',
    name: 'Achintya Tyagi',
    role: 'Account Opening & KYC Officer',
    department: 'Onboarding & Compliance',
    deskNumber: 'Desk 03',
    deskId: 3,
    photoUrl: '/team/desk3-achintya-tyagi.JPG',
    fallbackInitials: 'AT',
    description: 'Executes specimen signature indexing, issues passbook starter kits, and manages digital KYC verification.',
    keyResponsibilities: [
      'Capture and record specimen signature specimen cards',
      'Issue official starter kits, passbooks, and NetBanking PINs',
      'Validate multi-signatory permissions for club accounts'
    ]
  },

  // Desk 4 - Cashiers (2)
  {
    id: 'desk-4-shaurya',
    name: 'Shaurya Bhushan',
    role: 'Cashier',
    department: 'Cash Management & Vault',
    deskNumber: 'Desk 04',
    deskId: 4,
    photoUrl: '/team/desk4-shaurya-bhushan.JPG',
    fallbackInitials: 'SB',
    description: 'Manages counter cash receipts, currency denomination counting, verified pay-in slips, and authorized receipt stamping.',
    keyResponsibilities: [
      'Accept cash deposits with verified pay-in slips',
      'Count and authenticate currency notes and denominations',
      'Provide duplicate stamped receipt vouchers to depositors'
    ]
  },
  {
    id: 'desk-4-ram',
    name: 'Ram Gautam',
    role: 'Cashier',
    department: 'Cash Management & Vault',
    deskNumber: 'Desk 04',
    deskId: 4,
    photoUrl: '/team/desk4-ram-gautam.JPG',
    fallbackInitials: 'RG',
    description: 'Executes verified cash withdrawals against signed withdrawal vouchers and performs end-of-day vault ledger reconciliation.',
    keyResponsibilities: [
      'Disburse cash withdrawals against authorized signed vouchers',
      'Reconcile cash drawer balances with daily transaction logs',
      'Perform closing vault audits and cash summary reporting'
    ]
  },

  // Desk 5 - Verification & Cheque Book Officers (2)
  {
    id: 'desk-5-vani',
    name: 'Vani Jain',
    role: 'Verification & Cheque Book Officer',
    department: 'Clearing & Instrument Operations',
    deskNumber: 'Desk 05',
    deskId: 5,
    photoUrl: '/team/desk5-vani-jain.JPG',
    fallbackInitials: 'VJ',
    description: 'Scrutinizes submitted cheques, verifies maker-checker signatures against KYC records, and manages clearing entries.',
    keyResponsibilities: [
      'Authenticate cheque signatures against KYC specimen records',
      'Validate instrument dates, amounts in words & figures, and endorsements',
      'Authorize cheque clearing credits into payee ledgers'
    ]
  },
  {
    id: 'desk-5-yatharth',
    name: 'Yatharth Tayal',
    role: 'Verification & Cheque Book Officer',
    department: 'Clearing & Instrument Operations',
    deskNumber: 'Desk 05',
    deskId: 5,
    photoUrl: '/team/desk5-yatharth-tayal.JPG',
    fallbackInitials: 'YT',
    description: 'Requisitions personalized cheque books, maintains CTS registers, and processes stop-payment mandates.',
    keyResponsibilities: [
      'Issue and dispatch personalized 10-leaf student cheque books',
      'Maintain CTS (Cheque Truncation) tracking registers',
      'Process cheque cancellation and stop-payment requisitions'
    ]
  },

  // Desk 6 - Deposit Manager & Documentation Officer
  {
    id: 'desk-6-daivik',
    name: 'Daivik Garg',
    role: 'Deposit Manager',
    department: 'Term Deposits & Records Management',
    deskNumber: 'Desk 06',
    deskId: 6,
    photoUrl: '/team/desk6-daivik-garg.JPG',
    fallbackInitials: 'DG',
    description: 'Executes Fixed Deposit (FD) and Recurring Deposit (RD) certificates, locks interest rates, and oversees maturity schedules.',
    keyResponsibilities: [
      'Issue official term deposit certificates with locked annual yields',
      'Calculate quarterly compounding interest credits',
      'Authorize premature withdrawals and maturity reinvestment'
    ]
  },
  {
    id: 'desk-6-vansh',
    name: 'Vansh Gupta',
    role: 'Documentation Officer',
    department: 'Term Deposits & Records Management',
    deskNumber: 'Desk 06',
    deskId: 6,
    photoUrl: '/team/desk6-vansh-gupta.JPG',
    fallbackInitials: 'VG',
    description: 'Manages physical and digital banking archives, audit registers, deposit master records, and compliance files.',
    keyResponsibilities: [
      'Maintain archival registers of all deposit bonds and certificates',
      'Audit documentary compliance on open customer accounts',
      'Coordinate physical file preservation and regulatory audits'
    ]
  },

  // Desk 7 - Investment Advisors (2)
  {
    id: 'desk-7-muskan',
    name: 'Muskan Kaur Batra',
    role: 'Investment Advisor',
    department: 'Wealth Management & Financial Literacy',
    deskNumber: 'Desk 07',
    deskId: 7,
    photoUrl: '/team/desk7-muskan-kaur-batra.JPG',
    fallbackInitials: 'MB',
    description: 'Provides structured financial advice on savings goals, compound growth instruments, and systematic budgeting strategies.',
    keyResponsibilities: [
      'Analyze student financial goals & savings horizons',
      'Recommend diversified interest-bearing growth options',
      'Conduct financial literacy consultations and workshops'
    ]
  },
  {
    id: 'desk-7-anya',
    name: 'Anya Singhal',
    role: 'Investment Advisor',
    department: 'Wealth Management & Financial Literacy',
    deskNumber: 'Desk 07',
    deskId: 7,
    photoUrl: '/team/desk7-anya-singhal.jpg',
    fallbackInitials: 'AS',
    description: 'Demonstrates compounding power, inflation calculations, and structured wealth accumulation models.',
    keyResponsibilities: [
      'Structure disciplined systematic savings plans (SIP)',
      'Conduct portfolio health checks and yield comparisons',
      'Assist student enterprises with surplus fund allocation'
    ]
  },

  // Desk 8 - Loan Manager & Loan Officer
  {
    id: 'desk-8-kanishk',
    name: 'Kanishk Sharma',
    role: 'Loan Manager',
    department: 'Credit Assessment & Disbursals',
    deskNumber: 'Desk 08',
    deskId: 8,
    photoUrl: '/team/desk8-kanishk-sharma.JPG',
    fallbackInitials: 'KS',
    description: 'Appraises student project and activity loan applications, reviews repayment capability, and sanctions credit facilities.',
    keyResponsibilities: [
      'Appraise credit proposals for academic and club initiatives',
      'Issue formal loan sanction letters and credit limits',
      'Review monthly lending risk portfolios and recovery metrics'
    ]
  },
  {
    id: 'desk-8-naina',
    name: 'Naina Sachdeva',
    role: 'Loan Officer',
    department: 'Credit Assessment & Disbursals',
    deskNumber: 'Desk 08',
    deskId: 8,
    photoUrl: '/team/desk8-naina-sachdeva.JPG',
    fallbackInitials: 'NS',
    description: 'Prepares transparent monthly EMI repayment schedules, manages applicant documentation, and tracks loan accounts.',
    keyResponsibilities: [
      'Structure transparent monthly installment schedules (EMI)',
      'Guide applicants through loan documentation and agreements',
      'Maintain loan disbursal and periodic recovery ledgers'
    ]
  },

  // Desk 9 - Credit Officers (2)
  {
    id: 'desk-9-manas',
    name: 'Manas Arya',
    role: 'Credit Officer',
    department: 'Risk Management & Underwriting',
    deskNumber: 'Desk 09',
    deskId: 9,
    photoUrl: '/team/desk9-manas-arya.JPG',
    fallbackInitials: 'MA',
    description: 'Assesses creditworthiness, calculates internal credit scorecards, and audits borrower repayment integrity.',
    keyResponsibilities: [
      'Calculate borrower credit ratings and risk scorecards',
      'Monitor overdue repayments and debt-to-income ratios',
      'Perform monthly audit of outstanding credit lines'
    ]
  },
  {
    id: 'desk-9-aditya',
    name: 'Aditya Arya',
    role: 'Credit Officer',
    department: 'Risk Management & Underwriting',
    deskNumber: 'Desk 09',
    deskId: 9,
    photoUrl: '/team/desk9-aditya-arya.png',
    fallbackInitials: 'AA',
    description: 'Authorizes credit card and overdraft facility limits, reviews collateral guarantees, and oversees credit compliance.',
    keyResponsibilities: [
      'Authorize credit card and temporary overdraft limits',
      'Appraise club event financing and sponsorship guarantees',
      'Coordinate credit health notices and limit adjustments'
    ]
  },

  // Desk 10 - Sales Manager (1)
  {
    id: 'desk-10-vikrant',
    name: 'Vikrant Bhardwaj',
    role: 'Sales Manager',
    department: 'Strategic Growth & Partnerships',
    deskNumber: 'Desk 10',
    deskId: 10,
    photoUrl: '/team/desk10-vikrant-bhardwaj.JPG',
    fallbackInitials: 'VB',
    description: 'Leads institutional banking outreach, coordinates cross-desk initiatives, organizes financial literacy campaigns, and drives account growth.',
    keyResponsibilities: [
      'Drive student banking adoption and account onboarding drives',
      'Coordinate inter-desk operational workflows and promotions',
      'Organize school-wide financial literacy events and branch visits'
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

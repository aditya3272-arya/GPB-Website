import React, { useState } from 'react';
import { 
  UserPlus, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  CreditCard,
  Building,
  User,
  Phone,
  Mail,
  Award
} from 'lucide-react';
import { BankLogo } from './BankLogo';

interface AccountOpeningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountOpeningModal: React.FC<AccountOpeningModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    gradeSection: '',
    studentRollNo: '',
    accountType: 'Premier Student Privilege Savings',
    initialDeposit: '500',
    nomineeName: ''
  });

  const [generatedAccount, setGeneratedAccount] = useState<{
    accountNo: string;
    starterKitCode: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.gradeSection) return;
      setStep(2);
    } else if (step === 2) {
      const randomAcc = `4092 ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)}`;
      const randomKit = `GPB-KIT-${Math.floor(10000 + Math.random() * 90000)}`;
      setGeneratedAccount({ accountNo: randomAcc, starterKitCode: randomKit });
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    setGeneratedAccount(null);
    setFormData({
      fullName: '',
      gradeSection: '',
      studentRollNo: '',
      accountType: 'Premier Student Privilege Savings',
      initialDeposit: '500',
      nomineeName: ''
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-sm max-w-lg w-full border border-slate-200 border-t-4 border-t-[#C5A059] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#002D62] text-white p-5 flex items-center justify-between border-b border-[#C5A059]/40">
          <div className="flex items-center gap-3">
            <BankLogo size={36} showText={false} />
            <div>
              <div className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                Desk 04 • Onboarding & KYC
              </div>
              <div className="text-sm font-extrabold text-white">
                Student Account Opening
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1.5 rounded-sm hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        {/* Step Indicator */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs">
          <div className={`flex items-center gap-1.5 font-extrabold uppercase tracking-wider ${step >= 1 ? 'text-[#002D62]' : 'text-slate-400'}`}>
            <span className={`w-5 h-5 rounded-sm flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-[#002D62] text-white' : 'bg-slate-200 text-slate-500'}`}>1</span>
            <span>Student Info</span>
          </div>
          <div className="h-0.5 w-8 bg-slate-200"></div>
          <div className={`flex items-center gap-1.5 font-extrabold uppercase tracking-wider ${step >= 2 ? 'text-[#002D62]' : 'text-slate-400'}`}>
            <span className={`w-5 h-5 rounded-sm flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-[#002D62] text-white' : 'bg-slate-200 text-slate-500'}`}>2</span>
            <span>Account Type</span>
          </div>
          <div className="h-0.5 w-8 bg-slate-200"></div>
          <div className={`flex items-center gap-1.5 font-extrabold uppercase tracking-wider ${step === 3 ? 'text-emerald-700' : 'text-slate-400'}`}>
            <span className={`w-5 h-5 rounded-sm flex items-center justify-center text-[10px] ${step === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>3</span>
            <span>Passbook Allotment</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Full Student Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:bg-white focus:border-[#002D62] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Grade / Section *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.gradeSection}
                    onChange={(e) => setFormData({ ...formData, gradeSection: e.target.value })}
                    placeholder="e.g. Class 11-A"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:bg-white focus:border-[#002D62] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Student Roll / ID
                  </label>
                  <input
                    type="text"
                    value={formData.studentRollNo}
                    onChange={(e) => setFormData({ ...formData, studentRollNo: e.target.value })}
                    placeholder="e.g. 26"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:bg-white focus:border-[#002D62] outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#001D42] rounded-sm transition-colors shadow-xs uppercase tracking-wider"
                >
                  Proceed to KYC Verification
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Selected Account Tier
                </label>
                <select
                  value={formData.accountType}
                  onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:border-[#002D62] outline-none"
                >
                  <option>Premier Student Privilege Savings (7.25% p.a.)</option>
                  <option>Class Club & Activity Current Account</option>
                  <option>High-Yield Recurring Deposit Link Account</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Initial Activity Deposit (₹)
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.initialDeposit}
                  onChange={(e) => setFormData({ ...formData, initialDeposit: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:border-[#002D62] outline-none"
                />
                <span className="text-[10px] text-slate-500 font-semibold mt-0.5 block">
                  Zero minimum balance required. You may start with ₹0 or any initial sum.
                </span>
              </div>

              <div className="p-3 bg-amber-50 rounded-sm border border-[#C5A059]/40 text-xs text-slate-800 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#C5A059] shrink-0" />
                <span>
                  Specimen signature and starter pack will be authorized at Desk 04.
                </span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 uppercase tracking-wider"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#001D42] rounded-sm transition-colors shadow-xs uppercase tracking-wider"
                >
                  Confirm & Generate Account
                </button>
              </div>
            </form>
          )}

          {step === 3 && generatedAccount && (
            <div className="space-y-5 text-center">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-sm flex items-center justify-center mx-auto border border-emerald-200">
                <Award size={30} />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-[#002D62]">
                  Student Account Successfully Allotted!
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Welcome to Gurukul PREMIER Bank. Please note your official account credentials.
                </p>
              </div>

              {/* Passbook Card */}
              <div className="bg-slate-50 rounded-sm p-4 border border-slate-200 text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-sans font-bold">Accountholder:</span>
                  <span className="font-bold text-slate-800 font-sans">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-sans font-bold">Account No:</span>
                  <span className="font-extrabold text-[#002D62]">{generatedAccount.accountNo}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-sans font-bold">Starter Kit Ref:</span>
                  <span className="font-bold text-[#C5A059]">{generatedAccount.starterKitCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans font-bold">Initial Deposit:</span>
                  <span className="font-bold text-emerald-700 font-sans">₹{formData.initialDeposit} (Credited)</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#001D42] rounded-sm shadow-banking uppercase tracking-wider"
                >
                  Done & Collect Physical Passbook at Desk 04
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

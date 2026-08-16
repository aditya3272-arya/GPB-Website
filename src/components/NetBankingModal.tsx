import React, { useState } from 'react';
import { 
  Lock, 
  User, 
  Key, 
  ShieldCheck, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  Wallet, 
  ArrowDownLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  RotateCw,
  LogOut
} from 'lucide-react';
import { BankLogo } from './BankLogo';

interface NetBankingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetBankingModal: React.FC<NetBankingModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerId, setCustomerId] = useState('GPB-STU-2026');
  const [pin, setPin] = useState('1234');
  const [showPin, setShowPin] = useState(false);

  // Simulated account data
  const accountData = {
    accountNumber: '4092 8812 3341',
    holderName: 'Student Accountholder',
    accountType: 'Premier Student Privilege',
    balance: '₹14,850.00',
    availableLimit: '₹5,000.00',
    recentTransactions: [
      { id: 'tx-1', desc: 'Cash Deposit (Desk 05 - Cashier)', date: '14 Aug 2026', amount: '+₹5,000.00', type: 'credit' },
      { id: 'tx-2', desc: 'Term Deposit Placement (Desk 07)', date: '10 Aug 2026', amount: '-₹3,000.00', type: 'debit' },
      { id: 'tx-3', desc: 'Savings Interest Credited', date: '01 Aug 2026', amount: '+₹185.00', type: 'credit' },
      { id: 'tx-4', desc: 'Cheque CTS Clearing #001290', date: '28 Jul 2026', amount: '+₹2,500.00', type: 'credit' },
    ]
  };

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerId && pin) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-sm max-w-md w-full border border-slate-200 border-t-4 border-t-[#C5A059] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#002D62] text-white p-5 flex items-center justify-between border-b border-[#C5A059]/40">
          <div className="flex items-center gap-3">
            <BankLogo size={36} showText={false} />
            <div>
              <div className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                Gurukul PREMIER Bank
              </div>
              <div className="text-sm font-extrabold text-white">
                Internet Banking Portal
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

        {/* Modal Body */}
        {!isLoggedIn ? (
          /* Login Form */
          <div className="p-6 space-y-5">
            <div className="p-3 bg-amber-50 rounded-sm border border-[#C5A059]/40 flex items-center gap-2 text-xs text-slate-800">
              <ShieldCheck size={16} className="text-[#C5A059] shrink-0" />
              <span>
                Simulated 256-bit SSL encrypted student banking portal.
              </span>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Customer ID / Student Reg ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User size={15} />
                  </div>
                  <input
                    type="text"
                    required
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:bg-white focus:border-[#002D62] outline-none"
                    placeholder="Enter Customer ID"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                  Secret PIN / Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Key size={15} />
                  </div>
                  <input
                    type={showPin ? 'text' : 'password'}
                    required
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full pl-9 pr-10 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:bg-white focus:border-[#002D62] outline-none"
                    placeholder="Enter 4-digit PIN"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPin ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#001D42] rounded-sm transition-all shadow-xs flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Lock size={13} className="text-[#DFB748]" />
                  <span>Secure Login to Account</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center pt-2">
                First time student user? Visit <strong>Desk 04 (KYC)</strong> for PIN setup.
              </div>
            </form>
          </div>
        ) : (
          /* Simulated Authenticated Dashboard View */
          <div className="p-6 space-y-5">
            {/* Account Card */}
            <div className="bg-[#002D62] rounded-sm p-5 text-white shadow-banking border border-[#C5A059]/40 relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] text-slate-300 font-extrabold uppercase tracking-wider">
                    {accountData.accountType}
                  </div>
                  <div className="text-xs font-mono text-[#DFB748] tracking-widest mt-0.5">
                    {accountData.accountNumber}
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-sm font-extrabold uppercase tracking-wider">
                  Verified
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Available Total Balance</div>
                <div className="text-2xl font-extrabold text-white tracking-tight">
                  {accountData.balance}
                </div>
              </div>
            </div>

            {/* Quick Summary Statement */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">
                  Recent Ledger Entries
                </h4>
                <span className="text-[10px] text-slate-400 font-mono font-bold">Real-time</span>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {accountData.recentTransactions.map((tx) => (
                  <div 
                    key={tx.id} 
                    className="p-2.5 bg-slate-50 rounded-sm border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-sm flex items-center justify-center ${
                        tx.type === 'credit' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                      }`}>
                        {tx.type === 'credit' ? <ArrowDownLeft size={13} /> : <ArrowUpRight size={13} />}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-[11px] truncate max-w-[160px]">
                          {tx.desc}
                        </div>
                        <div className="text-[9px] text-slate-400 font-semibold">{tx.date}</div>
                      </div>
                    </div>
                    <span className={`font-mono font-extrabold text-xs ${
                      tx.type === 'credit' ? 'text-emerald-700' : 'text-slate-800'
                    }`}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-rose-700 hover:bg-rose-50 rounded-sm border border-rose-200 transition-colors uppercase tracking-wider"
              >
                <LogOut size={13} />
                <span>Log Out</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-1.5 text-xs font-extrabold text-white bg-[#002D62] rounded-sm hover:bg-[#001D42] uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

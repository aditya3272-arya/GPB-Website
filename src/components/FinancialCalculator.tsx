import React, { useState } from 'react';
import { 
  Calculator, 
  PiggyBank, 
  Landmark, 
  HelpCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const FinancialCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fd' | 'loan'>('fd');

  // Fixed Deposit Calculator State
  const [depositAmount, setDepositAmount] = useState<number>(5000);
  const [tenureMonths, setTenureMonths] = useState<number>(12);
  const fdRate = 8.10; // 8.10% p.a.

  // Compound interest calculation for FD: A = P * (1 + r/4)^(4*t)
  const years = tenureMonths / 12;
  const maturityAmount = Math.round(
    depositAmount * Math.pow(1 + (fdRate / 100) / 4, 4 * years)
  );
  const totalInterest = maturityAmount - depositAmount;

  // Loan EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [loanTenureMonths, setLoanTenureMonths] = useState<number>(6);
  const loanRate = 9.5; // 9.5% p.a.

  // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = loanRate / 12 / 100;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenureMonths)) /
    (Math.pow(1 + monthlyRate, loanTenureMonths) - 1)
  );
  const totalRepayment = emi * loanTenureMonths;
  const totalLoanInterest = totalRepayment - loanAmount;

  return (
    <section id="loans" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Gold Accent Bar */}
          <div className="w-12 h-1 bg-[#C5A059] mx-auto mb-4"></div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-slate-50 border border-slate-200 text-xs font-extrabold text-[#002D62] uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Planning Calculators
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002D62] tracking-tight">
            Deposit & Loan Calculators
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal mt-2 leading-relaxed">
            Calculate your maturity returns on term deposits or project monthly loan installments with transparent compounding.
          </p>

          {/* Calculator Switcher */}
          <div className="inline-flex bg-slate-100 p-1 rounded-sm mt-6 border border-slate-200">
            <button
              onClick={() => setActiveTab('fd')}
              className={`flex items-center gap-2 px-5 py-2 rounded-sm text-xs font-extrabold transition-all uppercase tracking-wider ${
                activeTab === 'fd'
                  ? 'bg-[#002D62] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PiggyBank size={15} className={activeTab === 'fd' ? 'text-[#DFB748]' : ''} />
              <span>Fixed Deposit (FD)</span>
            </button>
            <button
              onClick={() => setActiveTab('loan')}
              className={`flex items-center gap-2 px-5 py-2 rounded-sm text-xs font-extrabold transition-all uppercase tracking-wider ${
                activeTab === 'loan'
                  ? 'bg-[#002D62] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Landmark size={15} className={activeTab === 'loan' ? 'text-[#DFB748]' : ''} />
              <span>Loan EMI Calculator</span>
            </button>
          </div>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-sm border border-slate-200 border-t-4 border-t-[#C5A059] p-6 sm:p-10 shadow-banking">
          {activeTab === 'fd' ? (
            /* Fixed Deposit View */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Area */}
              <div className="lg:col-span-7 space-y-6">
                {/* Deposit Amount Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <span>Deposit Amount</span>
                    <span className="text-sm font-extrabold text-[#002D62] bg-white px-2.5 py-1 rounded-sm border border-slate-300">
                      ₹{depositAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full accent-[#002D62] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                    <span>₹500</span>
                    <span>₹25,000</span>
                    <span>₹50,000</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <span>Tenure Period</span>
                    <span className="text-sm font-extrabold text-[#002D62] bg-white px-2.5 py-1 rounded-sm border border-slate-300">
                      {tenureMonths} Months ({years.toFixed(1)} Yrs)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="36"
                    step="3"
                    value={tenureMonths}
                    onChange={(e) => setTenureMonths(Number(e.target.value))}
                    className="w-full accent-[#002D62] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                    <span>3 Months</span>
                    <span>18 Months</span>
                    <span>36 Months</span>
                  </div>
                </div>

                {/* Interest Rate Note */}
                <div className="p-3 bg-amber-50 rounded-sm border border-[#C5A059]/50 text-xs text-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#C5A059]" />
                    <span className="font-bold">Student FD Rate:</span>
                  </div>
                  <span className="font-extrabold text-[#002D62]">{fdRate}% p.a. (Quarterly Compounding)</span>
                </div>
              </div>

              {/* Result Summary Box */}
              <div className="lg:col-span-5 bg-white rounded-sm border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                    Maturity Summary
                  </div>
                  <div className="text-3xl font-extrabold text-[#002D62] mt-1">
                    ₹{maturityAmount.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-800 font-bold mt-0.5 uppercase tracking-wider">
                    Estimated Return on Maturity
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Principal Deposited:</span>
                    <span className="font-bold text-slate-800">₹{depositAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Interest Earned:</span>
                    <span className="font-bold text-emerald-700">+₹{totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Applicable Rate:</span>
                    <span className="font-bold text-slate-800">{fdRate}% p.a.</span>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-slate-400 text-center font-bold uppercase tracking-wider">
                  Certificate issued at Desk 07 upon placement
                </div>
              </div>
            </div>
          ) : (
            /* Loan EMI View */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Area */}
              <div className="lg:col-span-7 space-y-6">
                {/* Loan Amount Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <span>Required Loan Amount</span>
                    <span className="text-sm font-extrabold text-[#002D62] bg-white px-2.5 py-1 rounded-sm border border-slate-300">
                      ₹{loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[#002D62] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                    <span>₹1,000</span>
                    <span>₹25,000</span>
                    <span>₹50,000</span>
                  </div>
                </div>

                {/* Loan Tenure Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <span>Repayment Tenure</span>
                    <span className="text-sm font-extrabold text-[#002D62] bg-white px-2.5 py-1 rounded-sm border border-slate-300">
                      {loanTenureMonths} Months
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="24"
                    step="1"
                    value={loanTenureMonths}
                    onChange={(e) => setLoanTenureMonths(Number(e.target.value))}
                    className="w-full accent-[#002D62] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                    <span>1 Month</span>
                    <span>12 Months</span>
                    <span>24 Months</span>
                  </div>
                </div>

                {/* Interest Rate Note */}
                <div className="p-3 bg-amber-50 rounded-sm border border-[#C5A059]/50 text-xs text-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#C5A059]" />
                    <span className="font-bold">Project Rate:</span>
                  </div>
                  <span className="font-extrabold text-[#002D62]">{loanRate}% p.a. (Reducing Balance)</span>
                </div>
              </div>

              {/* EMI Result Summary Box */}
              <div className="lg:col-span-5 bg-white rounded-sm border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                    Monthly Installment (EMI)
                  </div>
                  <div className="text-3xl font-extrabold text-[#002D62] mt-1">
                    ₹{emi.toLocaleString()} <span className="text-xs font-normal text-slate-500">/mo</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-bold mt-0.5 uppercase tracking-wider">
                    Fixed Monthly Repayment Schedule
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Sanctioned Principal:</span>
                    <span className="font-bold text-slate-800">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Interest Payable:</span>
                    <span className="font-bold text-amber-700">₹{totalLoanInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Amount Payable:</span>
                    <span className="font-bold text-[#002D62]">₹{totalRepayment.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-slate-400 text-center font-bold uppercase tracking-wider">
                  Loan appraisal processed at Desk 09 & Desk 10
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

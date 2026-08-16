import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { FAQS } from '../data/bankingData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    desk: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Gold Accent Bar */}
          <div className="w-12 h-1 bg-[#C5A059] mx-auto mb-4"></div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-slate-50 border border-slate-200 text-xs font-extrabold text-[#002D62] uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Helpdesk & Counter Desks
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002D62] tracking-tight">
            Contact Gurukul PREMIER Bank
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal mt-2 leading-relaxed">
            Have a question regarding account opening, passbook entries, term deposit certificates, or loan options? Reach out to our student officers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Branch Desk Info & FAQs */}
          <div className="lg:col-span-6 space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-sm border border-slate-200 border-t-2 border-t-[#C5A059] shadow-2xs">
                <div className="w-9 h-9 rounded-sm bg-[#002D62] text-[#DFB748] flex items-center justify-center mb-3">
                  <MapPin size={18} />
                </div>
                <div className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Branch Location</div>
                <div className="text-sm font-bold text-[#002D62] mt-0.5">XI-C1 </div>
                <div className="text-xs text-slate-500 mt-1">Senior Wing, Gurukul The School</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-sm border border-slate-200 border-t-2 border-t-[#C5A059] shadow-2xs">
                <div className="w-9 h-9 rounded-sm bg-[#002D62] text-[#DFB748] flex items-center justify-center mb-3">
                  <Clock size={18} />
                </div>
                <div className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Operating Hours</div>
                <div className="text-sm font-bold text-[#002D62] mt-0.5">Mon - Fri: 09:00 - 15:30</div>
                <div className="text-xs text-slate-500 mt-1">Activity Session Counters</div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div>
              <h3 className="text-lg font-extrabold text-[#002D62] mb-4 flex items-center gap-2">
                <HelpCircle size={18} className="text-[#C5A059]" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div 
                      key={idx} 
                      className="border border-slate-200 rounded-sm overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-3.5 text-left bg-slate-50 hover:bg-slate-100/80 font-bold text-xs text-slate-800 flex items-center justify-between gap-3"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown 
                          size={14} 
                          className={`text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#002D62]' : ''}`} 
                        />
                      </button>
                      {isOpen && (
                        <div className="p-3.5 text-xs text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Customer Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-sm border border-slate-200 border-t-4 border-t-[#C5A059] p-6 sm:p-8 shadow-banking">
              <h3 className="text-lg font-extrabold text-[#002D62] tracking-tight">
                Submit an Enquiry to Customer Support
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Your request will be routed directly to Desk 02 (Customer Service Executive).
              </p>

              {submitted ? (
                <div className="p-6 bg-white rounded-sm border border-emerald-200 text-center space-y-3 animate-in zoom-in-95">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-extrabold text-[#002D62]">
                    Enquiry Token Generated!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your enquiry has been logged with Token <strong>#GPB-{(Math.floor(Math.random()*8999)+1000)}</strong>. Please visit Desk 02 for physical acknowledgment.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', studentId: '', desk: 'General Enquiry', message: '' });
                    }}
                    className="mt-2 px-4 py-2 text-xs font-bold text-white bg-[#002D62] rounded-sm uppercase tracking-wider"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                        Student / Customer Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-sm focus:border-[#002D62] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                        Student ID / Account No.
                      </label>
                      <input
                        type="text"
                        value={formData.studentId}
                        onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                        placeholder="e.g. GPB-10492"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-sm focus:border-[#002D62] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                      Concerned Banking Desk
                    </label>
                    <select
                      value={formData.desk}
                      onChange={(e) => setFormData({ ...formData, desk: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-sm focus:border-[#002D62] outline-none"
                    >
                      <option>Desk 02 - Customer Service Executive</option>
                      <option>Desk 01 - Insurance Desk</option>
                      <option>Desk 04 - Account Opening & KYC</option>
                      <option>Desk 05 - Cashier Counter</option>
                      <option>Desk 06 - Cheque Book & Verification</option>
                      <option>Desk 07 - Deposit & Term Certificates</option>
                      <option>Desk 08 - Investment Advisor</option>
                      <option>Desk 09 - Loan Desk</option>
                      <option>Desk 10 - Credit & Risk Desk</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                      Enquiry Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your banking requirement or query..."
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-sm focus:border-[#002D62] outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#001D42] rounded-sm transition-colors shadow-xs flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <Send size={13} className="text-[#DFB748]" />
                    <span>Submit Enquiry to Desk 02</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

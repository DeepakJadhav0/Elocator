import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Linkedin, Instagram, Twitter, 
  Send, CheckCircle2, Clock
} from 'lucide-react';

const CompactContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-8 px-4 flex items-center justify-center font-sans text-slate-900">
      <div className="max-w-5xl w-full mx-auto">
        
        {/* Compact Header */}
        <div className="mb-8 ml-2">
          <h1 className="text-2xl font-black tracking-tight text-slate-800">Get in touch</h1>
          <p className="text-sm text-slate-500">We usually respond within a few business hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Form - 7 Cols */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6">
              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                  <p className="font-bold">Thanks for reaching out!</p>
                  <button onClick={() => setSubmitted(false)} className="text-xs text-emerald-600 font-bold mt-2 uppercase tracking-tighter hover:underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Name</label>
                      <input required type="text" placeholder="Your name" className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</label>
                      <input required type="email" placeholder="email@example.com" className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Message</label>
                    <textarea required rows="3" placeholder="How can we help?" className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none resize-none transition-all"></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-3.5 h-3.5" />}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info - 5 Cols */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            <div className="bg-emerald-600 rounded-2xl p-6 text-white shadow-md shadow-emerald-100 flex flex-col justify-between min-h-[220px]">
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-lg"><Phone className="w-4 h-4" /></div>
                    <div>
                      <p className="text-[10px] font-bold uppercase opacity-70">Phone</p>
                      <p className="text-sm font-semibold">+91 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-lg"><Mail className="w-4 h-4" /></div>
                    <div>
                      <p className="text-[10px] font-bold uppercase opacity-70">Email</p>
                      <p className="text-sm font-semibold">contact@elocate.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
                {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                  <button key={i} className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 flex items-center gap-4">
              <div className="bg-slate-100 p-3 rounded-xl"><MapPin className="w-5 h-5 text-slate-600" /></div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400">Headquarters</p>
                <p className="text-xs font-semibold text-slate-700 leading-tight">Chh. Sambhajinagar, Maharashtra, IN</p>
              </div>
            </div>

          </div>
        </div>

        <p className="text-center mt-8 text-[11px] font-medium text-slate-400 uppercase tracking-[0.2em]">
          ELOCATE INNOVATE &bull; 2026
        </p>
      </div>
    </div>
  );
};

export default CompactContactPage;
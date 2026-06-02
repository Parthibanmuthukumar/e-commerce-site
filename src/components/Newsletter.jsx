import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Mimic API delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 800);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-cyber-border bg-[#FAF9F5] relative overflow-hidden select-none">
      
      {/* Decorative neutral backdrop shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyber-slate/60 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto rounded border border-cyber-border bg-white p-8 sm:p-12 text-center relative z-10 shadow-[0_4px_30px_rgba(28,26,23,0.02)]">
        
        {/* Subtle glowing corner lines */}
        <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyber-cyan/30 rounded-tl"></span>
        <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyber-indigo/30 rounded-br"></span>

        {!submitted ? (
          <div className="space-y-6 animate-fade-in-up">
            
            {/* Header */}
            <div className="space-y-2.5">
              <span className="text-cyber-cyan font-mono text-xs font-semibold uppercase tracking-widest leading-none">
                STAY UPDATED
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cyber-black tracking-tight">
                Join the Neural Network
              </h2>
              <p className="text-cyber-muted text-sm max-w-lg mx-auto leading-relaxed pt-1.5">
                Subscribe to receive weekly release notes, restock alerts for limited drops, and priority access to new Anti Gravity collection drops.
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-3">
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                
                {/* Input */}
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4.5 py-3.5 rounded bg-cyber-slate text-sm text-cyber-black placeholder-cyber-muted border border-cyber-border focus:border-cyber-cyan transition-all duration-300 font-sans"
                />

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3.5 rounded bg-cyber-black text-white text-xs font-bold tracking-widest hover:bg-[#FAF9F5] hover:text-cyber-black border border-cyber-black transition-all duration-300 flex items-center justify-center gap-2 group shrink-0"
                >
                  {loading ? (
                    <span className="text-black h-4.5 w-4.5 border-2 border-cyber-black border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      SUBSCRIBE
                      <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

              </div>
            </form>

            {/* Muted subtext */}
            <div className="text-[10px] text-cyber-muted font-mono tracking-wide">
              No spam. Unsubscribe anytime. Your customer data is strictly protected.
            </div>

          </div>
        ) : (
          <div className="py-6 space-y-4 animate-fade-in-up text-center flex flex-col items-center justify-center">
            
            {/* Success Check Icon */}
            <div className="h-14 w-14 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 flex items-center justify-center text-cyber-emerald shadow-sm">
              <CheckCircle2 size={30} />
            </div>

            <div className="space-y-1.5 pt-2">
              <h3 className="font-serif text-xl font-bold text-cyber-black tracking-wide">
                Subscription Confirmed!
              </h3>
              <p className="text-cyber-muted text-sm max-w-sm mx-auto leading-relaxed">
                You have successfully joined the Anti Gravity network. We will ping you on the next collection drop.
              </p>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="text-[11px] font-semibold tracking-wider text-cyber-muted hover:text-cyber-black uppercase pt-4 transition-colors font-mono"
            >
              ← Sign Up Another Email
            </button>

          </div>
        )}

      </div>
    </section>
  );
}

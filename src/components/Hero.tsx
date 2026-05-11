const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-28 text-white">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-6xl lg:text-7xl font-semibold leading-tight">
            Banking Without <br />
            <span className="text-[#C6A972]">Limits.</span>
          </h1>

          <p className="mt-4 text-[#8E9196] max-w-md">
            Send, save, spend and grow your money with premium digital banking.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-2xl bg-[#C6A972] text-black font-medium">
              Open Account
            </button>

            <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex items-center justify-center min-h-137.5">
          {/* Back Analytics Card */}
          <div className="absolute top-10 right-0 w-72 p-5 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl rotate-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-[#8E9196]">Monthly Revenue</p>
                <h3 className="text-2xl font-semibold mt-1">₦12.4M</h3>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#C6A972]/20 flex items-center justify-center text-[#E0C48A]">
                ↗
              </div>
            </div>

            <div className="flex items-end gap-2 h-32">
              {[40, 70, 55, 90, 75, 100].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full bg-linear-to-t from-[#8E6D3B] to-[#E0C48A]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Main Premium Card */}
          <div className="relative w-105 h-65 rounded-[36px] bg-linear-to-br from-[#1A1B1E] to-[#0F1012] border border-white/10 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,196,138,0.18),transparent_35%)]" />

            {/* Metallic Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#E0C48A]/60 to-transparent" />

            {/* Decorative Blur */}
            <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-[#C6A972]/10 blur-3xl" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#8E9196] text-sm uppercase tracking-[0.2em]">
                    Nova Pay
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold">$24,580</h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-[#C6A972]/40" />
                </div>
              </div>

              <div>
                <p className="text-[#8E9196] text-xs tracking-[0.3em] uppercase mb-3">
                  Card Number
                </p>

                <div className="flex gap-4 text-xl tracking-[0.2em] text-[#EAE4DB]">
                  <span>4321</span>
                  <span>••••</span>
                  <span>••••</span>
                  <span>9084</span>
                </div>

                <div className="mt-8 flex justify-between items-end">
                  <div>
                    <p className="text-[#8E9196] text-xs uppercase tracking-[0.2em]">
                      Card Holder
                    </p>

                    <p className="mt-2 text-[#F6F3EE] font-medium">Joel Hart</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[#8E9196] text-xs uppercase tracking-[0.2em]">
                      Expires
                    </p>

                    <p className="mt-2 text-[#F6F3EE] font-medium">08/30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Transfer Card */}
          <div className="absolute bottom-10 left-0 w-64 p-5 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl -rotate-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C6A972]/15 flex items-center justify-center text-[#E0C48A] text-lg">
                ✓
              </div>

              <div>
                <p className="text-white font-medium">Transfer Successful</p>

                <p className="text-sm text-[#8E9196]">
                  ₦240,000 sent instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

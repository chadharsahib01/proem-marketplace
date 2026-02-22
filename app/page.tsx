export const dynamic = 'force-dynamic';
import { supabase } from '@/utils/supabase';
import { Shield, Lock, Search, PlusCircle, Globe, Scale, ArrowRight } from 'lucide-react';
import MarketplaceCard from '@/components/MarketplaceCard';

export default async function Home() {
  const { data: listings } = await supabase
    .from('listings')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Premium Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Shield size={22} fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">Proem</span>
          </div>
          <div className="flex gap-4">
             <button className="hidden md:block px-5 py-2.5 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Identity Portal</button>
             <button className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">Connect Wallet</button>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
        {/* Full-Fledged Hero Section */}
        <section className="mb-20">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                <Lock size={14} /> Identity-Verified Ecosystem
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                Trust <br/><span className="text-blue-500">Verified.</span> <br/>Legacy Secured.
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl font-medium">
                The professional standard for translating 20 years of industry wisdom into a secure, verifiable marketplace ecosystem.
              </p>
              <div className="flex flex-wrap gap-5">
                <button className="bg-blue-600 hover:bg-blue-500 px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 transition-all shadow-xl shadow-blue-600/20 group">
                  Post Opportunity <PlusCircle size={22} className="group-hover:rotate-90 transition-transform" />
                </button>
                <div className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                  <Scale className="text-blue-400" size={24} />
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-300">Escrow Protected</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="premium-card p-10 rounded-[2.5rem]">
             <Shield className="text-blue-600 mb-6" size={40} />
             <h3 className="text-2xl font-bold mb-3">Identity Vetting</h3>
             <p className="text-slate-500 leading-relaxed">Rigorous 256-bit background checks for every professional on the platform.</p>
          </div>
          <div className="premium-card p-10 rounded-[2.5rem]">
             <Scale className="text-blue-600 mb-6" size={40} />
             <h3 className="text-2xl font-bold mb-3">Smart Escrow</h3>
             <p className="text-slate-500 leading-relaxed">Funds are secured and released only upon verified milestone achievement.</p>
          </div>
          <div className="premium-card p-10 rounded-[2.5rem]">
             <Globe className="text-blue-600 mb-6" size={40} />
             <h3 className="text-2xl font-bold mb-3">Global Legacy</h3>
             <p className="text-slate-500 leading-relaxed">Translate decades of offline professional trust into a digital portability score.</p>
          </div>
        </div>

        {/* Marketplace Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="relative w-full md:w-[400px]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Filter by industry skill..." 
              className="w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none font-bold text-slate-700 shadow-sm"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
             {['All Opportunities', 'Technical', 'Consulting', 'Strategic'].map(t => (
               <button key={t} className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-sm font-bold whitespace-nowrap hover:border-blue-500 transition-all">{t}</button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings?.map((l: any) => (
            <MarketplaceCard key={l.id} listing={l} />
          ))}
          {(!listings || listings.length === 0) && (
            <div className="col-span-full py-40 text-center bg-slate-50 border-4 border-dashed border-slate-200 rounded-[3rem]">
              <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="text-slate-400 rotate-45" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-400">Waiting for Market Synchronization...</h2>
              <p className="text-slate-400 mt-2">Connect your Supabase database to see active listings.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

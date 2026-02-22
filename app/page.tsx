export const dynamic = 'force-dynamic';
import { supabase } from '@/utils/supabase';
import { ShieldCheck, Scale, Globe, ArrowRight } from 'lucide-react';
import MarketplaceCard from '@/components/MarketplaceCard';

export default async function Home() {
  const { data: listings } = await supabase.from('listings').select('*').order('created_at', { ascending: false });

  return (
    <div className="min-h-screen">
      <nav className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">PROEM</div>
        <div className="flex gap-4">
          <button className="text-sm font-bold px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors">Login</button>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold">Get Verified</button>
        </div>
      </nav>

      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">Trust is the New <br/><span className="text-blue-400">Global Currency.</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-10">An identity-engineered marketplace built on 20 years of professional vetting and secure escrow protocols.</p>
          <button className="bg-blue-600 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700">Explore Marketplace <ArrowRight size={18}/></button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12 border-b border-slate-100">
        <div className="space-y-4">
          <ShieldCheck className="text-blue-600" size={36}/><h3 className="text-xl font-bold">Verified ID</h3>
          <p className="text-slate-500 leading-relaxed">Identity vetting that protects both sides of the transaction.</p>
        </div>
        <div className="space-y-4">
          <Scale className="text-green-600" size={36}/><h3 className="text-xl font-bold">Escrow Control</h3>
          <p className="text-slate-500 leading-relaxed">Funds held securely and released only on verified milestones.</p>
        </div>
        <div className="space-y-4">
          <Globe className="text-purple-600" size={36}/><h3 className="text-xl font-bold">Global Portability</h3>
          <p className="text-slate-500 leading-relaxed">A professional reputation score that travels anywhere.</p>
        </div>
      </div>

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Verified Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {listings?.map((l: any) => <MarketplaceCard key={l.id} listing={l} />)}
            {(!listings || listings.length === 0) && (
              <div className="col-span-3 text-center py-20 bg-white border border-dashed border-slate-200 rounded-3xl">
                <p className="text-slate-400 italic">No listings found. Ensure your Supabase table 'listings' has data.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

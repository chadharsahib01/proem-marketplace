import { ShieldCheck, DollarSign, ArrowUpRight } from 'lucide-react';
import { Listing } from '@/lib/types';

export default function MarketplaceCard({ listing }: { listing: Listing }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group">
      <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-100 w-fit mb-4">
        <ShieldCheck size={14} className="text-blue-600" />
        <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Identity Verified</span>
      </div>
      
      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">
        {listing.title}
      </h4>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
        {listing.description}
      </p>

      <div className="flex justify-between items-center pt-4 border-t border-slate-50">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Budget</span>
          <div className="flex items-center text-lg font-black text-slate-900">
            <DollarSign size={16} className="text-green-600" />
            {listing.budget.toLocaleString()}
          </div>
        </div>
        <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-colors">
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
}

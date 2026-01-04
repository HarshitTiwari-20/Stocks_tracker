
import { getMarketTrends, PortfolioStock } from '@/lib/actions/finnhub.actions';
import Link from 'next/link';
import { ArrowUp, ArrowDown } from 'lucide-react';

export const revalidate = 60; // Revalidate every minute

export default async function MarketPage() {
    const { gainers, losers } = await getMarketTrends();

    return (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-8 space-y-8">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                    Live Market Trends
                </h1>
                <p className="text-gray-400 mt-2 text-lg">
                    Top movers in the market today based on popular assets.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Gainers Section */}
                <section className="bg-gray-900/50 backdrop-blur-md rounded-3xl border border-gray-800/50 p-6 shadow-xl">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="p-3 bg-green-500/10 rounded-2xl">
                            <ArrowUp className="w-6 h-6 text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-100">Top Gainers</h2>
                    </div>

                    <div className="space-y-4">
                        {gainers.map((stock) => (
                            <MarketCard key={stock.symbol} stock={stock} type="gainer" />
                        ))}
                        {gainers.length === 0 && <EmptyState />}
                    </div>
                </section>

                {/* Top Losers Section */}
                <section className="bg-gray-900/50 backdrop-blur-md rounded-3xl border border-gray-800/50 p-6 shadow-xl">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="p-3 bg-red-500/10 rounded-2xl">
                            <ArrowDown className="w-6 h-6 text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-100">Top Losers</h2>
                    </div>

                    <div className="space-y-4">
                        {losers.map((stock) => (
                            <MarketCard key={stock.symbol} stock={stock} type="loser" />
                        ))}
                        {losers.length === 0 && <EmptyState />}
                    </div>
                </section>
            </div>
        </div>
    );
}

function MarketCard({ stock, type }: { stock: PortfolioStock; type: 'gainer' | 'loser' }) {
    const isGainer = type === 'gainer';
    const colorClass = isGainer ? 'text-green-400' : 'text-red-400';
    const bgClass = isGainer ? 'hover:bg-green-500/5' : 'hover:bg-red-500/5';

    return (
        <Link
            href={`/stocks/${stock.symbol}`}
            className={`flex items-center justify-between p-4 rounded-xl bg-gray-800/40 border border-gray-800 transition-all duration-300 ${bgClass} hover:border-gray-700 hover:scale-[1.01] group`}
        >
            <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-100 group-hover:text-white transition-colors">
                    {stock.symbol}
                </span>
                <span className="text-sm text-gray-400 truncate max-w-[150px] md:max-w-[200px]">
                    {stock.name}
                </span>
            </div>

            <div className="flex flex-col items-end">
                <span className="font-semibold text-gray-200">
                    ${stock.price.toFixed(2)}
                </span>
                <span className={`text-sm font-medium flex items-center gap-1 ${colorClass}`}>
                    {stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                </span>
            </div>
        </Link>
    );
}

function EmptyState() {
    return (
        <div className="text-center py-10 text-gray-500">
            No data available presently.
        </div>
    );
}
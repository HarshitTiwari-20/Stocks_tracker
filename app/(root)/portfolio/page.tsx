
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getWatchlistSymbolsByEmail } from "@/lib/actions/watchlist.action";
import { getPortfolioDetails } from "@/lib/actions/finnhub.actions";

export default async function PortfolioPage() {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.email) redirect('/sign-in');

    const symbols = await getWatchlistSymbolsByEmail(session.user.email);
    const stocks = await getPortfolioDetails(symbols);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white">My Portfolio</h1>
            {stocks.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                    <p className="text-xl">Your watchlist is empty.</p>
                    <p className="mt-2 text-sm">Add stocks to your watchlist to see them here.</p>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-lg border border-gray-800">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs text-gray-400 uppercase bg-gray-900/50 border-b border-gray-800">
                            <tr>
                                <th className="px-6 py-4">Company</th>
                                <th className="px-6 py-4">Symbol</th>
                                <th className="px-6 py-4 text-right">Price</th>
                                <th className="px-6 py-4 text-right">Change</th>
                                <th className="px-6 py-4 text-right">Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stocks.map((stock) => (
                                <tr key={stock.symbol} className="border-b border-gray-800 hover:bg-gray-800/20 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                                        {stock.logo ? (
                                            <img src={stock.logo} alt={stock.symbol} className="w-8 h-8 rounded-full object-contain bg-white p-0.5" />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">
                                                {stock.symbol.slice(0, 2)}
                                            </div>
                                        )}
                                        {stock.name}
                                    </td>
                                    <td className="px-6 py-4">{stock.symbol}</td>
                                    <td className="px-6 py-4 text-white text-right">${stock.price.toFixed(2)}</td>
                                    <td className={`px-6 py-4 text-right ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {stock.marketCap ? `$${(stock.marketCap).toLocaleString()}M` : 'N/A'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

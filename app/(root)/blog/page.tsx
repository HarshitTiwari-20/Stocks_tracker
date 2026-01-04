
import { getNews } from "@/lib/actions/finnhub.actions";

export default async function BlogPage() {
    // Fetch general market news
    const news = await getNews([]);

    return (
        <div className="space-y-8">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold text-white">Market News</h1>
                <p className="text-gray-400">Latest updates from the financial world.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {news.map((item) => (
                    <a
                        key={`${item.id}-${item.datetime}`}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block space-y-4 rounded-lg border border-gray-800 bg-gray-900/40 p-5 hover:bg-gray-800/60 transition-colors"
                    >
                        <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-800 relative">
                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.headline}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-gray-500">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs text-blue-400">
                                <span>{item.source}</span>
                                <span>{new Date(item.datetime * 1000).toLocaleDateString()}</span>
                            </div>
                            <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                                {item.headline}
                            </h2>
                            <p className="text-sm text-gray-400 line-clamp-3">
                                {item.summary}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {news.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No news available at the moment.
                </div>
            )}
        </div>
    )
}

export interface StockWithWatchlistStatus {
    symbol: string;
    name: string;
    exchange: string;
    type: string;
    isInWatchlist: boolean;
}

export interface FinnhubSearchResult {
    symbol: string;
    description: string;
    displaySymbol: string;
    type: string;
}

export interface FinnhubSearchResponse {
    count: number;
    result: FinnhubSearchResult[];
}

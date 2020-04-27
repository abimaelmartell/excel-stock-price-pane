const API_BASE = 'https://financialmodelingprep.com/api/v3';

const fetchStockPrices = async (symbols) => {
    const url = `${API_BASE}/stock/real-time-price/${symbols.join(',')}`;

    const response = await fetch(url);
    const json = await response.json();

    return json['companiesPriceList'];
}

const fetchStockProfile = async (symbol) => {
    const url = `${API_BASE}/company/profile/${symbol}`;

    const response = await fetch(url);
    const json = await response.json();

    return json['profile'];
}

export { fetchStockPrices, fetchStockProfile }

const API_BASE = 'https://financialmodelingprep.com/api/v3';

const fetchStockPrices = (symbols) => {
  const url = `${API_BASE}/stock/real-time-price/${symbols.join(',')}`;

  return fetch(url);
}

const fetchStockProfile = (symbol) => {
    const url = `${API_BASE}/company/profile/${symbol}`;

    return fetch(url);
}

export { fetchStockPrices, fetchStockProfile }

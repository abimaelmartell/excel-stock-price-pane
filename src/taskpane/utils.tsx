const formatNumber = (number: number) => (
	number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
);

const sortByPrice = (a: Object, b: Object) => (
	b['price'] - a['price']
);

export { formatNumber, sortByPrice };

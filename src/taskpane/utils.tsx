const formatNumber = (number: number) => (
	number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
);

export { formatNumber };

const formatNumber = (number: number) => (
	number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
);

const sortByPrice = (a: Object, b: Object) => (
	b['price'] - a['price']
);

const getPercentageClass = (percentage: string) => {
    let percentageClass = 'percentage-neutral';

    if (percentage.includes("+")) {
        percentageClass = "percentage-positive";
    } else if (percentage.includes("-")) {
        percentageClass = "percentage-negative";
    }

    return percentageClass;
}

export { formatNumber, sortByPrice, getPercentageClass };

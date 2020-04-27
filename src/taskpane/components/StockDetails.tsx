import * as React from "react";

import { Button } from "office-ui-fabric-react";

export interface StockDetailsData {
    changesPercentage: string;
    companyName: string;
    description: string;
    image: string;
    price: number
    symbol: string;
}

interface StockDetailsProps extends StockDetailsData {
    onBack: Function
}

const getPercentageClass = (percentage: string) => {
    let percentageClass = 'percentage-neutral';

    if (percentage.includes("+")) {
        percentageClass = "percentage-positive";
    } else if (percentage.includes("-")) {
        percentageClass = "percentage-negative";
    }

    return percentageClass;
}

class StockDetails extends React.Component<StockDetailsProps> {
    render () {
        const {
            changesPercentage,
            companyName,
            description,
            image,
            price,
            symbol,
            onBack
        } = this.props;

        return (
            <main className="ms-stock-prices__details">
                <Button onClick={onBack.bind(this)}>&lt;- Back to List</Button>
                <img src={ image } alt={`${companyName} Logo`} />
                <h2>{ companyName } ({ symbol })</h2>
                <p className="detail-price">${ price }  <span className={getPercentageClass(changesPercentage)}>{ changesPercentage }</span></p>
                <p>{ description }</p>
            </main>
        );
    }
};

export default StockDetails;
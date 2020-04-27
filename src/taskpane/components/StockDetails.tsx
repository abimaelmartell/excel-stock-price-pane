import * as React from "react";
import { Button } from "office-ui-fabric-react";

import { formatNumber } from "../utils";

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
                <Button onClick={onBack.bind(this)}>&larr; Back to List</Button>
                <img src={ image } alt={`${companyName} Logo`} />
                <h2>{ companyName }</h2>
                <h3>({ symbol })</h3>
                <p className="detail-price">${ formatNumber(price) }  <span className={getPercentageClass(changesPercentage)}>{ changesPercentage }</span></p>
                <p>{ description }</p>
            </main>
        );
    }
};

export default StockDetails;

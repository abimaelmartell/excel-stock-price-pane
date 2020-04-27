import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react";

import { formatNumber, getPercentageClass } from "../utils";

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

        const percentageClass = getPercentageClass(changesPercentage);

        return (
            <main className="ms-stock-prices__details">
                <DefaultButton onClick={onBack.bind(this)}>
                    &larr; Back to List
                </DefaultButton>

                <img src={ image } alt={`${companyName} Logo`} />

                <h2>{ companyName }</h2>
                <h3>({ symbol })</h3>

                <p className="detail-price">${ formatNumber(price) } <span className={percentageClass}>{ changesPercentage }</span></p>

                <p>{ description }</p>
            </main>
        );
    }
};

export default StockDetails;

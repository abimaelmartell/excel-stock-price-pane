import * as React from "react";

import { Button } from "office-ui-fabric-react";

export interface StockPriceItem {
  symbol: string;
  price: number;
}

interface StockPriceItemProps extends StockPriceItem {
    onClick: Function;
}

interface StockPricesProps {
  items: StockPriceItem[];
  onSelectSymbol: Function;
}

class StockPrice extends React.Component<StockPriceItemProps> {
    onClick(e: React.MouseEvent) {
        e.preventDefault();

        this.props.onClick();
    }

    render () {
        const { symbol, price } = this.props;

        return (
            <li className="ms-ListItem">
                <Button onClick={this.onClick.bind(this)}>
                    <span className="ms-font-m ms-fontColor-neutralPrimary stock-list-symbol">{symbol}</span>
                    <span className="ms-font-m ms-fontColor-neutralPrimary">${price}</span>
                </Button>
            </li>
        );
    }
};

class StockPricesList extends React.Component<StockPricesProps> {
    selectSymbol(symbol: string) {
        this.props.onSelectSymbol(symbol);
    }

    render () {
        const { items } = this.props;

        return (
            <main className="ms-stock-prices__main">
                <p>Click to show details</p>
                <ul className="ms-List">
                    { items.map((item) => (
                        <StockPrice
                            onClick={this.selectSymbol.bind(this, item.symbol)}
                            key={item.symbol}
                            {...item}
                        />
                    )) }
                </ul>
            </main>
        );
    }
};

export default StockPricesList;
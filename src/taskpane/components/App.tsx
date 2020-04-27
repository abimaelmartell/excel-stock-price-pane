import * as React from "react";

import Header from "./Header";
import StockPricesList, { StockPriceItem } from "./StockPricesList";
import StockDetails, { StockDetailsData } from "./StockDetails";

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  prices: StockPriceItem[];
  selectedSymbol?: string;
  selectedSymbolData?: StockDetailsData;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      prices: [
        {
          symbol: "APPL",
          price: 20.20
        },
        {
          symbol: "AMZ",
          price: 20.20
        },
        {
          symbol: "GOOG",
          price: 20.20
        },
        {
          symbol: "MSFT",
          price: 20.20
        },
      ]
    };

    this.onSelectSymbol = this.onSelectSymbol.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  onSelectSymbol(symbol: string) {
    this.setState({
      selectedSymbol: symbol,
      selectedSymbolData: {
        changesPercentage: "(+2.89%)",
        companyName: "Apple Inc.",
        description: "Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications.",
        image: "https://financialmodelingprep.com/images-New-jpg/AAPL.jpg",
        price: 282.97,
        symbol: "AAPL"
      }
    });
  }

  onBack() {
    this.setState({
      selectedSymbol: null,
      selectedSymbolData: null
    })
  }

  render() {
    const { isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <p>Please sideload your addin to see app body.</p>
      );
    }

    return (
      <div className="ms-welcome">
        <Header title={this.props.title} />

        {this.state.selectedSymbol ?
          <StockDetails onBack={this.onBack} { ...this.state.selectedSymbolData } /> :
          <StockPricesList items={this.state.prices} onSelectSymbol={this.onSelectSymbol} />
        }
      </div>
    );
  }
}

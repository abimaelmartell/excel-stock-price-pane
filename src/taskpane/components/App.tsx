import * as React from "react";

import Header from "./Header";
import Loading from "./Loading";
import StockPricesList, { StockPriceItem } from "./StockPricesList";
import StockDetails, { StockDetailsData } from "./StockDetails";

import { fetchStockPrices } from "../api";

const DEFAULT_SYMBOLS = [
  'AAPL',
  'AMD',
  'AMZN',
  'FB',
  'FNDR',
  'GOOG',
  'NVDA',
  'PIH',
  'TWTR',
  'UBER',
  'WORK',
  'ZNGA',
];

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  prices: StockPriceItem[];
  isLoading: boolean;
  selectedSymbol?: string;
  selectedSymbolData?: StockDetailsData;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      prices: [],
      isLoading: true
    };

    this.onSelectSymbol = this.onSelectSymbol.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  async componentDidMount() {
    const response = await fetchStockPrices(DEFAULT_SYMBOLS);
    const json = await response.json();

    this.setState({
      prices: json['companiesPriceList'],
      isLoading: false
    });
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

        { this.state.isLoading && <Loading /> }

        {this.state.selectedSymbol ?
          <StockDetails onBack={this.onBack} { ...this.state.selectedSymbolData } /> :
          <StockPricesList items={this.state.prices} onSelectSymbol={this.onSelectSymbol} />
        }
      </div>
    );
  }
}

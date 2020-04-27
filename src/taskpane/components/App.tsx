import * as React from "react";

import Header from "./Header";
import Loading from "./Loading";
import StockPricesList, { StockPriceItem } from "./StockPricesList";
import StockDetails, { StockDetailsData } from "./StockDetails";

import { fetchStockPrices, fetchStockProfile } from "../api";
import { sortByPrice } from "../utils";

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
      prices: json['companiesPriceList'].sort(sortByPrice),
      isLoading: false
    });
  }

  async onSelectSymbol(symbol: string) {
    this.setState({
      isLoading: true
    });

    const response = await fetchStockProfile(symbol);
    const json = await response.json();

    const {
      profile: {
        changesPercentage,
        companyName,
        description,
        image,
        price
      }
    } = json;

    this.setState({
      selectedSymbol: symbol,
      isLoading: false,
      selectedSymbolData: {
        changesPercentage,
        companyName,
        description,
        image,
        price,
        symbol
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

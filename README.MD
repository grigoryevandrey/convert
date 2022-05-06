# Convert

Easy to use cli for fetching quotes from [CoinMarketCap](https://coinmarketcap.com/).

## Installation

```Bash
npm i -g @grigoryevandrey/convert
```

To get help, use:

```Bash
convert -h
```

## Providing CoinMarketCap API key

To use this cli, you must provide your CoinMarketCap API key in `CMC_API_KEY` environment variable:

```Bash
export CMC_API_KEY=<my_api_key>
```

## Usage

Before using, make sure you have exported API key to enviroment variable.

```Bash
convert <from_ticker> <to_ticker> [<amount>]
```

### Examples

Regular usage:

```Bash
convert BTC USD 10
```

You can omit amount, thus it will be set to 1:

```Bash
convert BTC USD
```

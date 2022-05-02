#! /usr/bin/env node

import yargs from 'yargs/yargs';
import { convert } from './convert';
import { logMessage } from './logging';

const processing = async (): Promise<void> => {
  const usage = '\nUsage: convert -f <from_ticker> -t <to_ticker> -a <amount>';

  const args = await yargs(process.argv.slice(2))
    .usage(usage)
    .locale('en')
    .options({
      from: {
        alias: 'f',
        describe: 'Ticker of interest',
        demandOption: true,
        string: true,
      },
      to: {
        alias: 't',
        describe: 'Ticker to convert into',
        demandOption: true,
        string: true,
      },
      amount: {
        alias: 'a',
        describe: 'Amount of interest',
        demandOption: true,
        number: true,
      },
    })
    .help('help')
    .alias('h', 'help')
    .alias('v', 'version').argv;

  const { from, to, amount } = args;
  const price = await convert(from, to, amount);

  if (!!price) logMessage(`${amount} ${from.toUpperCase()} = ${price} ${to.toUpperCase()}`);
};

processing();

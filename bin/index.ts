#! /usr/bin/env node

import yargs from 'yargs/yargs';
import { convert } from './convert';
import { logMessage } from './logging';

const processing = async (): Promise<void> => {
  const usage = '\nUsage: convert <from_ticker> <to_ticker> [<amount>]';

  const args = await yargs(process.argv.slice(2))
    .usage(usage)
    .locale('en')
    .help('help')
    .demandCommand(2, 3)
    .alias('h', 'help')
    .alias('v', 'version').argv;

  const [fromArg, toArg, amountArg] = args._;

  const from = `${fromArg}`;
  const to = `${toArg}`;
  const amount = amountArg ? Number(amountArg) : 1;

  const price = await convert(from, to, amount);

  if (!!price) logMessage(`${amount} ${from.toUpperCase()} = ${price} ${to.toUpperCase()}`);
};

processing();

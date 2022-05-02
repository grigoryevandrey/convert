import boxen, { BorderStyle } from 'boxen';
import chalk from 'chalk';

export const logMessage = (message: string): void => {
  console.log(
    boxen(chalk.green(message), {
      padding: 1,
      borderStyle: BorderStyle.Round,
      borderColor: 'green',
    }),
  );
};

export const logError = (message: string): void => {
  console.error(
    boxen(chalk.red(message), {
      padding: 1,
      borderStyle: BorderStyle.Round,
      borderColor: 'red',
    }),
  );
};

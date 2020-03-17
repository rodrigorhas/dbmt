import { createLogger, format, transports } from 'winston';
import { consoleFormat } from 'winston-console-format';
import { format as formatDate } from 'date-fns';
import { createWriteStream } from 'fs';

export const startDate = formatDate(new Date(), 'MM_dd_yyyy__HH_mm_ss');

export const Logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.timestamp(),
    format.ms(),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'dbm-cli' },
  transports: [
    new transports.File({
      level: 'silly',
      filename: `.logs/session__${startDate}.log`,
    }),
    new transports.Console({
      level: 'silly',
      format: format.combine(
        format.colorize({ all: true }),
        format.padLevels(),
        consoleFormat({
          showMeta: true,
          metaStrip: ['timestamp', 'service'],
          inspectOptions: {
            depth: Infinity,
            colors: true,
            maxArrayLength: Infinity,
            breakLength: 120,
            compact: Infinity
          }
        })
      )
    })
  ]
});

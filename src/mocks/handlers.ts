/**
 * This file is AUTO GENERATED by [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
 * Feel free to commit/edit it as you need.
 */
/* eslint-disable */
/* tslint:disable */
import { setupWorker, rest } from 'msw';
import { faker } from '@faker-js/faker';

faker.seed(1);

const baseURL = '';
const MAX_ARRAY_LENGTH = 20;

let i = 0;
const next = () => {
  if (i === Number.MAX_SAFE_INTEGER - 1) {
    i = 0;
  }
  return i++;
};

export const handlers = [
  rest.post(`${baseURL}/Aufhebungsbescheid`, (_, res, ctx) => {
    const resultArray = [
      [
        ctx.status(200),
        ctx.json({
          ergebnisse: [
            ...new Array(
              faker.datatype.number({ max: MAX_ARRAY_LENGTH })
            ).keys(),
          ].map((_) => ({
            docGUID: faker.lorem.slug(1),
          })),
        }),
      ],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.get(`${baseURL}/Aufhebungsbescheid`, (_, res, ctx) => {
    const resultArray = [[ctx.status(200), ctx.json(null)]];

    return res(...resultArray[next() % resultArray.length]);
  }),
];

// This configures a Service Worker with the given request handlers.
export const startWorker = () => {
  const worker = setupWorker(...handlers);
  worker.start();
};
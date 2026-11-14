/* eslint-disable no-console */
/* This script generates mock data for your local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

import { generateJson } from 'json-schema-faker'
import { schema } from './mockDataSchema.js'
import { faker } from '@faker-js/faker'
import fs from 'fs'
import chalk from 'chalk'

// json-schema-faker >= 0.6: faker is passed in as an extension per call.
// A time-based seed keeps the generated data randomized on every run.
const json = await generateJson(schema, {
  seed: Date.now(),
  extensions: { faker },
})

fs.writeFile('./src/api/db.json', json, function (err) {
  if (err) {
    return console.log(chalk.red(err))
  } else {
    console.log(chalk.green('Mock data generated.'))
  }
})

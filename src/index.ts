#!/usr/bin/env ts-node-esm

import { Command } from 'commander'

const program = new Command()

program
  .name('template-manager')
  .version('0.0.1')
  .description('A CLI for generating a new project')
  .action(() => {
    console.log('Hello World')
    console.log(process.cwd())
  })
  .parse(process.argv)
//   .arguments('')

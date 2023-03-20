#!/usr/bin/env ts-node-esm

import fs from 'fs-extra'
import { Command } from 'commander'
import path from 'path'
import inquirer from 'inquirer'
import { DEFAULT_CLI_OPTIONS, TEMPLATE_LISTS } from './consts.js'

import type { CliOptions, TemplateListKeys } from './types/index.js'

main()
async function main() {
  const name = await promptAppName()
  const side = await promptAppSide()
  const template = await promptTemplateList(side)
  console.log(name, side, template)
}

async function promptAppName() {
  const { name } = await inquirer.prompt<Pick<CliOptions, 'name'>>({
    type: 'input',
    name: 'name',
    message: 'What is the project name?',
    default: DEFAULT_CLI_OPTIONS.name,
    transformer: (input) => {
      return input.trim()
    },
  })

  return name
}

async function promptAppSide() {
  const { side } = await inquirer.prompt<Pick<CliOptions, 'side'>>({
    type: 'list',
    name: 'side',
    message: 'Is this a front-end or back-end project?',
    choices: ['front', 'back'],
  })

  return side
}

async function promptTemplateList(side: TemplateListKeys) {
  const { template } = await inquirer.prompt({
    type: 'list',
    name: 'template',
    message: 'What template would you like to use?',
    choices: TEMPLATE_LISTS[side],
  })

  return template
}

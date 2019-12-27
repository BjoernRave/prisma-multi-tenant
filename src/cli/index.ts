#!/usr/bin/env node

import * as commands from './commands'
import {
  parseArgs,
  convertToCommandArgs,
  shouldPrintHelp,
  shouldPrintVersion,
  shouldSetVerbose
} from './helpers/arguments'
import { printError } from './helpers/errors'
import help from './helpers/help'
import Management from '../shared/management'

import { PmtError } from '../shared/errors'
import { Command } from '../shared/types'

const args = parseArgs()
let management: Management

const run = async (): Promise<void> => {
  // Printing help
  if (shouldPrintHelp(args)) {
    return help.printGlobalHelp()
  }

  // Printing version
  if (shouldPrintVersion(args)) {
    return help.printGlobalVersion()
  }

  // Setting verbosity
  if (shouldSetVerbose(args)) {
    process.env.verbose = 'true'
  }

  const { parsedPrimaryArgs, commandName } = args

  // Finding command
  const command: Command | undefined = Object.values(commands).find(c => c.name == commandName)

  if (!command) {
    throw new PmtError('unrecognized-command', commandName)
  }

  if (parsedPrimaryArgs['--help']) {
    help.printCommandHelp(command)
    return
  }

  management = new Management()

  // Executing command
  await command.execute(convertToCommandArgs(command, args), management)
}

run()
  .then(async () => {
    if (management) {
      await management.disconnect()
    }
  })
  .catch(async err => {
    printError(err, args)
    if (management) {
      await management.disconnect()
    }
    process.exit(1)
  })

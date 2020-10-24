oops
====



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oops.svg)](https://npmjs.org/package/oops)
[![Downloads/week](https://img.shields.io/npm/dw/oops.svg)](https://npmjs.org/package/oops)
[![License](https://img.shields.io/npm/l/oops.svg)](https://github.com/mattbun/oops/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oops
$ oops COMMAND
running command...
$ oops (-v|--version|version)
oops/0.0.0 linux-x64 node-v14.4.0
$ oops --help [COMMAND]
USAGE
  $ oops COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oops autocomplete [SHELL]`](#oops-autocomplete-shell)
* [`oops drop [FILE]`](#oops-drop-file)
* [`oops hello [FILE]`](#oops-hello-file)
* [`oops help [COMMAND]`](#oops-help-command)
* [`oops list`](#oops-list)
* [`oops stash [FILE]`](#oops-stash-file)

## `oops autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ oops autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ oops autocomplete
  $ oops autocomplete bash
  $ oops autocomplete zsh
  $ oops autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

## `oops drop [FILE]`

describe the command here

```
USAGE
  $ oops drop [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/drop.ts](https://github.com/mattbun/oops/blob/v0.0.0/src/commands/drop.ts)_

## `oops hello [FILE]`

describe the command here

```
USAGE
  $ oops hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oops hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mattbun/oops/blob/v0.0.0/src/commands/hello.ts)_

## `oops help [COMMAND]`

display help for oops

```
USAGE
  $ oops help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `oops list`

describe the command here

```
USAGE
  $ oops list

OPTIONS
  -h, --help              show CLI help
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [src/commands/list.ts](https://github.com/mattbun/oops/blob/v0.0.0/src/commands/list.ts)_

## `oops stash [FILE]`

stash files

```
USAGE
  $ oops stash [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/stash.ts](https://github.com/mattbun/oops/blob/v0.0.0/src/commands/stash.ts)_
<!-- commandsstop -->

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
* [`oops hello [FILE]`](#oops-hello-file)
* [`oops help [COMMAND]`](#oops-help-command)
* [`oops list [FILE]`](#oops-list-file)
* [`oops stash [FILE]`](#oops-stash-file)

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

## `oops list [FILE]`

describe the command here

```
USAGE
  $ oops list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
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

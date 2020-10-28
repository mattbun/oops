oops
====



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@mattbun/oops.svg)](https://npmjs.org/package/@mattbun/oops)
[![Downloads/week](https://img.shields.io/npm/dw/@mattbun/oops.svg)](https://npmjs.org/package/@mattbun/oops)
[![License](https://img.shields.io/npm/l/@mattbun/oops.svg)](https://github.com/mattbun/oops/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @mattbun/oops
$ oops COMMAND
running command...
$ oops (-v|--version|version)
@mattbun/oops/0.0.3 linux-x64 node-v12.19.0
$ oops --help [COMMAND]
USAGE
  $ oops COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oops autocomplete [SHELL]`](#oops-autocomplete-shell)
* [`oops drop`](#oops-drop)
* [`oops help [COMMAND]`](#oops-help-command)
* [`oops list`](#oops-list)
* [`oops restore`](#oops-restore)
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

## `oops drop`

delete stashes

```
USAGE
  $ oops drop

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/drop.ts](https://github.com/mattbun/oops/blob/v0.0.3/src/commands/drop.ts)_

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

list stashes

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

_See code: [src/commands/list.ts](https://github.com/mattbun/oops/blob/v0.0.3/src/commands/list.ts)_

## `oops restore`

restore stashes

```
USAGE
  $ oops restore

OPTIONS
  -f, --force  overwrite if it already exists
  -h, --help   show CLI help
```

_See code: [src/commands/restore.ts](https://github.com/mattbun/oops/blob/v0.0.3/src/commands/restore.ts)_

## `oops stash [FILE]`

stash files

```
USAGE
  $ oops stash [FILE]

OPTIONS
  -h, --help       show CLI help
  -m, --modified   stash all modified files according to git
  -n, --name=name  name for the stash
  -u, --untracked  stash all untracked files according to git

ALIASES
  $ oops
```

_See code: [src/commands/stash.ts](https://github.com/mattbun/oops/blob/v0.0.3/src/commands/stash.ts)_
<!-- commandsstop -->

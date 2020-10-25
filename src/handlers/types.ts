import * as Parser from '@oclif/parser'

interface Args { [name: string]: any }

type Options<T> = T extends Parser.Input<infer R>
  ? Parser.Output<R, Args>
  : any;

type Flags<T> = Options<T>['flags']

export interface ParserOutput<T> {
  args: Args;
  flags: Flags<T>;
}

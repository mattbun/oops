export interface StashInput {
  id?: string;
  name?: string;
  files: Array<StashFile>;
}

export interface Stash {
  id: string;
  name?: string;
  createdDate: string;
  files: Array<StashFile>;
}

export interface StashFile {
  filename: string;
  originalAbsolutePath: string;
  stashedRelativePath: string;
}

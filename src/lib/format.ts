import { Stash } from './types'

export function getName(stash: Stash) {
  return stash.name ?? stash.id
}

export function getDate(stash: Stash) {
  return (new Date(stash.createdDate)).toLocaleString();
}

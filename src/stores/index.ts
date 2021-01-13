import { writable } from 'svelte/store';

// which type of search is currently in use
export enum SearchMode {
  SimpleSearch,
  AdvancedSearch,
}
export const searchMode = writable<SearchMode>(SearchMode.SimpleSearch);

export const resultsStore = writable<[number, string][]>([]);
export const exactMatchStore = writable<[number, string]>(null);

export const currentQueryStore = writable(null);

export const workerStore = writable<Worker>(null);

export const workerIsReadyStore = writable(false);

// stores for searches. We want them to persist even when they're not visible
export const easySearchStore = writable<string>('');

type Pattern = { exclude: boolean, category: string };
export const categorySearchStore = writable<Pattern[]>([]);

// settings menu
export * from './settings';

// advanced search data
export * from './advancedSearch';
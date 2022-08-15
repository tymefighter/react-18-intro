// Libraries
import { useState, useCallback, useMemo, useTransition } from 'react';

// Components
import { SearchInput } from './components/searchInput/SearchInput';
import { SearchResults } from './components/searchResults/SearchResults';

// Data
import { DATA } from './data.fixture';

// Styles
import styles from './searchResultsPage.module.scss';

// Types
import type { SearchResult } from './types';

const performHeaveComputation = () => {
  let count = 0;
  for(let i = 0;i < 400000000; i++) count += 1;
}

export const SearchResultsPage = () => {
  // This controls the search input
  const [searchQueryInput, setSearchQueryInput] = useState('');

  // This controls the computation of filtered results
  const [searchQuery, setSearchQuery] = useState('');

  const [isTransitionPending, startTransition] = useTransition();
  const onSearch = useCallback((newSearchQuery: string): void => {
    setSearchQueryInput(newSearchQuery);
    startTransition(() => {
      setSearchQuery(newSearchQuery)
    });
  }, [startTransition]);

  const searchResults: SearchResult[] = useMemo(
    () => {
      performHeaveComputation();

      const lowerCaseSearchQuery = searchQuery.toLowerCase();
      return DATA.filter(({ label }: SearchResult) => label.toLowerCase().includes(lowerCaseSearchQuery))
    }, 
    [searchQuery]
  );

  return (
    <div className={styles.searchResultsPage}>
      <SearchInput 
        searchQuery={searchQueryInput}
        onSearch={onSearch}
        isLoading={isTransitionPending}
      />
      <SearchResults
        searchResults={searchResults}
      />
    </div>
  )
};

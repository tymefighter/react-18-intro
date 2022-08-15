// Styles
import styles from './searchResults.module.scss';

// Types
import type { SearchResult } from '../../types';

interface SearchResultsProps {
  searchResults: SearchResult[];
};

export const SearchResults = ({ searchResults }: SearchResultsProps): JSX.Element => (
  <div className={styles.searchResults}>
    {searchResults.map(({ label, description }: SearchResult): JSX.Element => (
      <div key={label} className={styles.searchResult}>
        <h2 className={styles.searchResultHeading}>{label}</h2>
        <p className={styles.searchResultDesc}>{description}</p>
      </div>
    ))}
  </div>
);

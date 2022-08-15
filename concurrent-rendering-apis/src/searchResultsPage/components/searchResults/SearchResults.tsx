// Types
import type { SearchResult } from '../../types';

interface SearchResultsProps {
  searchResults: SearchResult[];
};

export const SearchResults = ({ searchResults }: SearchResultsProps): JSX.Element => (
  <div>
    {searchResults.map(({ label, description }: SearchResult): JSX.Element => (
      <div key={label}>
        <h2>{label}</h2>
        <p>{description}</p>
      </div>
    ))}
  </div>
);

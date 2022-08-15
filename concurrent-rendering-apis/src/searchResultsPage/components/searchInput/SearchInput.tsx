// Styles
import styles from './searchInput.module.scss';

interface SearchInputProps {
  searchQuery: string;
  onSearch: (newSearchQuery: string) => void;
  isLoading?: boolean;
}

export const SearchInput = ({ searchQuery, onSearch, isLoading }: SearchInputProps): JSX.Element => (
  <div className={styles.searchInputContainer}>
    <input 
      className={styles.searchInput}
      aria-label="Search Query"
      placeholder="Search..."
      onChange={event => onSearch(event.target.value)}
      value={searchQuery}
    />
    {isLoading ? (
      <span className={styles.loader}>&#8634;</span>
    ) : null }
  </div>
)

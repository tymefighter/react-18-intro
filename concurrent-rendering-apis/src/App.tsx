// Libraries
import { useState } from 'react'

// Components
import { SearchResultsPage } from 'searchResultsPage'
import { TabPage } from 'tabPage';

// Styles
import styles from './app.module.scss';

type PageType = 'SEARCH_RESULT_PAGE' | 'TAB_PAGE';

export const App = () => {
  const [page, setPage] = useState<PageType>('SEARCH_RESULT_PAGE');

  return (
    <div className={styles.app}>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => setPage('SEARCH_RESULT_PAGE')}>
          Open Search Results Page
        </button>
        <button className={styles.button} onClick={() => setPage('TAB_PAGE')}>
          Open Tab Page
        </button>
      </div>
      <div>
        {page === 'SEARCH_RESULT_PAGE' ? (
          <SearchResultsPage />
        ) : (
          <TabPage />
        )}
      </div>
    </div>
  )
}

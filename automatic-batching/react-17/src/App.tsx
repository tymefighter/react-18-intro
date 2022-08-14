// Libraries
import { useState, useEffect } from 'react';

// Utils
import { fetchData } from 'fetchData';

// Styles
import styles from './app.module.scss';

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<string[] | undefined>();

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setIsLoading(false);
      setData(fetchedData)
    })
  }, []);

  debugger;

  if(isLoading) {
    return (
      <div className={styles.container}>
        <span className={styles.tombstoneLoader}>&#8634;</span>
      </div>
    )
  }

  if(!data) {
    return (
      <div className={styles.container}>
        <p className={styles.emptyDataText}>There is no data to show</p>
      </div>
    );
  }

  return (
    <div className={styles.dataContainer}>
      {data.map(dataItem => (
        <p key={dataItem} className={styles.dataItem}>
          {dataItem}
        </p>
      ))}
    </div>
  )
}

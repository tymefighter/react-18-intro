// Hooks
import { useGetUserDetails } from './useGetUserDetails';

// Styles
import styles from './bio.module.scss';

const USER_ID = '1991239';

export const Bio = () => {
  const { name, description } = useGetUserDetails(USER_ID);

  return (
    <div className={styles.bio}>
      <h1 className={styles.bioHeader}>
        {name}
      </h1>
      <p className={styles.bioDescription}>
        {description}
      </p>
    </div>
  )
};

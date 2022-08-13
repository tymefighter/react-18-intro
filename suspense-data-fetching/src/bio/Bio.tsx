// Hooks
import { useGetUserDetails } from './useGetUserDetails';

// Styles
import styles from './bio.module.scss';

export const Bio = () => {
  const { name, description } = useGetUserDetails();

  return (
    <div className={styles.bio}>
      <h1>
        {name}
      </h1>
      <p>
        {description}
      </p>
    </div>
  )
};

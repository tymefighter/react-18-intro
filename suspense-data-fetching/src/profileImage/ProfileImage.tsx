// Hooks
import { useProfileImage } from './useProfileImage';

// Styles
import styles from './profileImage.module.scss';

export const ProfileImage = () => {
  const { url, label } = useProfileImage();

  return (
    <img 
      src={url} 
      alt={label} 
      className={styles.profileImage}
      height="50rem"
      width="50rem"
    />
  )
};

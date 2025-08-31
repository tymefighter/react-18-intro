// Hooks
import { FeedItem } from './types';
import { useFeed } from './useFeed';

// Styles
import styles from './feed.module.scss';

export const Feed = () => {
  const feed = useFeed();

  return (
    <div className={styles.feedContainer}>
      <div className={styles.feed}>
        {feed.map(({ title, description, time }: FeedItem) => (
          <div className={styles.feedItem}>
            <div className={styles.feedItemHeader}>
              <h2 className={styles.feedItemHeaderTitle}>
                {title}
              </h2>
              <p className={styles.feedItemHeaderTimestamp}>
                {time.toString()}
              </p>
            </div>
            <p className={styles.feedItemDescription}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

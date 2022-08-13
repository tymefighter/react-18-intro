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
              <h2>
                {title}
              </h2>
              <p>
                {time.toString()}
              </p>
            </div>
            <p>
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

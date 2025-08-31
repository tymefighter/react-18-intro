// Mock Data
import { FEED_DATA } from './feed.fixture';

// Types
import { FeedItem } from './types';

export const fetchFeed = (): Promise<FeedItem[]> => 
  new Promise(resolve => {
    setTimeout(() => resolve(FEED_DATA), 900)
  });

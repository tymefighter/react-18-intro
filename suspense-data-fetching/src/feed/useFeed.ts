// Libraries
import { useMemo } from 'react';

// Utils
import { wrapPromise } from 'utils/wrapPromise';
import { fetchFeed } from './fetchFeed';

// Types
import type { FeedItem } from './types';

const getFeedResource = () => wrapPromise(fetchFeed());

export const useFeed = (): FeedItem[] => {
  const feedResource = useMemo(() => getFeedResource(), []);
  const feed = feedResource.read();

  return feed;
};

// Libraries
import { useMemo } from 'react';

// Utils
import { wrapPromise } from 'utils/wrapPromise';
import { fetchFeed } from './fetchFeed';

// Types
import type { FeedItem } from './types';

const getFeedResource = (() => {
  const feedResource = wrapPromise(fetchFeed());
  return () => feedResource;
})()

export const useFeed = (): FeedItem[] => {
  const feedResource = getFeedResource();
  const feed = feedResource.read();

  return feed;
};

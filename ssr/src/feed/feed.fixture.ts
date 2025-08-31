// Types
import type { FeedItem } from './types';

export const FEED_DATA: FeedItem[] = [
  {
    time: new Date(2022, 0, 15),
    title: 'Message from Yogten Trib',
    description:
      `
        Hi Dreg, Grand President Empan requests your present at
        the delusional capitol of reminiscence island. We want to
        discuss the obligatory matter which haven't been discussed
        in the meetings of all tasks.
      `
  },
  {
    time: new Date(2022, 2, 13),
    title: 'Hoboras has posted about the new supreme carrier',
    description:
      `
        Hello everyone, we would like to announce the new Supreme Carrier.
        This would be able to travel among the stars at greater speed and
        carry more people across the galaxy. You may await your experience
        of this amazing carrier, it is worthy well.
      `
  },
  {
    time: new Date(2022, 2, 17),
    title: 'Mendett has replied to your message',
    description:
      `
      This has an interesting implication. Even if we use a GraphQL client 
      that collects all data requirements in a single request, streaming the
      response lets us show more content sooner. Because we render-as-we-fetch 
      (as opposed to after fetching), if user appears in the response earlier
      than posts, we'll be able to “unlock” the outer <Suspense> boundary before
      the response even finishes. We might have missed this earlier, but even the
      fetch-then-render solution contained a waterfall: between fetching and rendering.
      Suspense doesn't inherently suffer from this waterfall, and libraries like Relay
      take advantage of this.
      `
  },
  {
    time: new Date(2022, 2, 17),
    title: 'Platt Vortek has just joined your squad',
    description: 
      `
        Platt Vortek has just joined your squad. Feed free to chat with him and
        discuss squad meets
      `
  }
]
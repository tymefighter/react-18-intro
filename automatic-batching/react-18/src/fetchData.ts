// Constants
import { DATA } from './data.fixture';

export const fetchData = (): Promise<string[]> => new Promise(resolve => {
  setTimeout(() => resolve(DATA), 700)
})

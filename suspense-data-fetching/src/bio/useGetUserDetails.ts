// Libraries
import { useMemo } from 'react';

// Utils
import { wrapPromise } from 'utils/wrapPromise';
import { fetchUserName } from './fetchUserName';
import { fetchUserDescription } from './fetchUserDescription';

const USER_ID = '1991239';

const getNameResource = () => wrapPromise(fetchUserName(USER_ID));
const getDescriptionResource = () => wrapPromise(fetchUserDescription(USER_ID));

export const useGetUserDetails = (): {
  name: string;
  description: string;
} => {
  const nameResource = useMemo(() => getNameResource(), []);
  const name = nameResource.read();

  const descriptionResource = useMemo(() => getDescriptionResource(), []);
  const description = descriptionResource.read();

  return {
    name,
    description
  }
};


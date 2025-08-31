// Libraries
import { useMemo } from 'react';

// Utils
import { wrapPromise } from 'utils/wrapPromise';
import { fetchUserName } from './fetchUserName';
import { fetchUserDescription } from './fetchUserDescription';

// Types
import { Resource } from 'types';

const getNameResource = (() => {
  let resourceDetails: {
    currUserId: string;
    nameResource: Resource<string>
  } | undefined;

  return (userId: string): Resource<string> => {
    if(resourceDetails?.currUserId !== userId) {
      resourceDetails = {
        currUserId: userId,
        nameResource: wrapPromise(fetchUserName(userId))
      }
    }

    return resourceDetails.nameResource;
  }
})();

const getDescriptionResource = (() => {
  let resourceDetails: {
    currUserId: string;
    descriptionResource: Resource<string>
  } | undefined;

  return (userId: string): Resource<string> => {
    if(resourceDetails?.currUserId !== userId) {
      resourceDetails = {
        currUserId: userId,
        descriptionResource: wrapPromise(fetchUserDescription(userId))
      }
    }

    return resourceDetails.descriptionResource;
  }
})();

export const useGetUserDetails = (userId: string): {
  name: string;
  description: string;
} => {
  const nameResource = getNameResource(userId);
  const name = nameResource.read();

  const descriptionResource = getDescriptionResource(userId);
  const description = descriptionResource.read();

  return {
    name,
    description
  }
};


// Libraries
import { useMemo } from 'react';

// Utils
import { wrapPromise } from 'utils/wrapPromise';

const PROFILE_IMAGE_URL = '/images/profile-image.jpg'

interface Output {
  url: string;
  label: string;
}; 

const getImageResource = () => {
  const imagePromise = new Promise<Output>(resolve => {
    const image = new Image();
    image.src = PROFILE_IMAGE_URL;
    image.addEventListener('load', () => {
      resolve({
        url: PROFILE_IMAGE_URL,
        label: 'User Profile Image'
      })
    });
  })

  return wrapPromise(imagePromise)
}

export const useProfileImage = (): Output => {
  const imageResource = useMemo(() => getImageResource(), []);
  return imageResource.read();
};

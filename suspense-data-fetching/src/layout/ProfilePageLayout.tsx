// Libraries
import { Children, ReactElement, ReactNode } from 'react';

export const SLOT_NAMES = {
  IMAGE: 'IMAGE',
  BIO: 'BIO',
  FEED: 'FEED'
} as const;

type SlotName = typeof SLOT_NAMES[keyof typeof SLOT_NAMES]

const Slot = ({ name, children }: { name: SlotName; children: ReactNode }): null => null

interface ProfilePageLayoutProps {
  children: ReactNode;
}

const ProfilePageLayout = ({ children }: ProfilePageLayoutProps): ReactElement => {
  const childrenArr = Children.toArray(children) as ReactElement[];

  const imageEl = childrenArr.find((childEl: ReactElement): boolean => childEl.props?.name === SLOT_NAMES.IMAGE);
  const bioEl = childrenArr.find((childEl: ReactElement): boolean => childEl.props?.name === SLOT_NAMES.BIO);
  const feedEl = childrenArr.find((childEl: ReactElement): boolean => childEl.props?.name === SLOT_NAMES.FEED);

  return (
    <div>
      <div>
        {imageEl?.props?.children}
        {bioEl?.props?.children}
      </div>
      {feedEl?.props?.children}
    </div>
  )
};

ProfilePageLayout.Slot = Slot;

export { ProfilePageLayout };

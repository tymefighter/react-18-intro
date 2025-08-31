// Libraries
import { Suspense } from 'react'

// Components
import { ProfilePageLayout, SLOT_NAMES } from 'layout/ProfilePageLayout'
import { ProfileImage } from 'profileImage'
import { Bio } from 'bio'
import { Feed } from 'feed'
import { PageTombstone } from 'pageTombstone'

export const App = () => (
  <Suspense fallback={<PageTombstone />}>
    <ProfilePageLayout>
      <ProfilePageLayout.Slot name={SLOT_NAMES.IMAGE}>
        <ProfileImage />
      </ProfilePageLayout.Slot>
      <ProfilePageLayout.Slot name={SLOT_NAMES.BIO}>
        <Bio />
      </ProfilePageLayout.Slot>
      <ProfilePageLayout.Slot name={SLOT_NAMES.FEED}>
        <Feed />
      </ProfilePageLayout.Slot>
    </ProfilePageLayout>
  </Suspense>
)

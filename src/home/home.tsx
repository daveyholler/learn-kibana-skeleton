import { useState } from 'react';
import {
  EuiButton,
  EuiPageTemplate,
} from '@elastic/eui';

import { EpisodeList } from './episode_list';

export default function Home() {
  const [activeTab, setActiveTab] = useState('tabOne');

  const tabs = [
    {
      id: 'tabOne',
      label: 'Episodes',
      isSelected: activeTab === 'tabOne',
      onClick: () => setActiveTab('tabOne'),
    },
    {
      id: 'tabTwo',
      label: 'Related',
      isSelected: activeTab === 'tabTwo',
      onClick: () => setActiveTab('tabTwo'),
    }
  ]

  const button = (
    <EuiButton iconType="play" fill>Watch Now</EuiButton>
  );

  return (
    <EuiPageTemplate
      pageHeader={{
        pageTitle: 'The Flinstones',
        rightSideItems: [button],
        tabs: tabs
      }}
    >
      <>
        { activeTab === 'tabOne' ? (
          <EpisodeList />
        ) : (
          <p>All the related content...</p>
        ) }
      </>
    </EuiPageTemplate>
  )
}

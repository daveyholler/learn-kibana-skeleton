import { useState } from 'react';
import moment from 'moment';
import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiImage,
  EuiSpacer,
  EuiStat,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import { Episode } from './data';

interface IEpisodeFlyout {
  episode: Episode;
}

export const EpisodeFlyout: React.FC<IEpisodeFlyout> = ({
  episode
}) => {

  const [ flyoutIsVisible, setFlyoutIsVisible ] = useState(false);
  let flyout;

  if (flyoutIsVisible) {
    flyout = (
      <EuiFlyout onClose={() => setFlyoutIsVisible(false)} size="s">
        <EuiFlyoutHeader hasBorder>
          <EuiText>
            <EuiTitle>
              <h2>{episode.title}</h2>
            </EuiTitle>
            <p>{moment(episode.released).format('MMMM D, YYYY')}</p>
          </EuiText>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiImage size="l" hasShadow alt={episode.title} src={episode.image} />
          <EuiSpacer size="xl"/>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiStat title={episode.seasonNumber} description="Season"/>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiStat title={episode.episodeNumber} description="Episode"/>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiStat title={episode.imDbRating} description="Rating"/>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="l"/>
          <EuiText>
            <p>{episode.plot}</p>
          </EuiText>
        </EuiFlyoutBody>
        <EuiFlyoutFooter>
          <EuiFlexGroup> 
            <EuiFlexItem>
              <EuiButton iconType="play" fill>Watch Now</EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlyoutFooter>
      </EuiFlyout>
    )
  }

  return (
    <div>
      <EuiButton onClick={() => setFlyoutIsVisible(true)}>Details</EuiButton>
      {flyout}
    </div>
  )
}

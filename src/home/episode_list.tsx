import { EuiCard, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import {
  Episode,
  Show,
  EPISODES
} from './data';

export const EpisodeList: React.FC = () => {
  return (
    <EuiFlexGroup wrap>
      {EPISODES.episodes.map((episode: Episode, index: number) => (
        <EuiFlexItem key={index} grow={false}>
          <EuiCard
            style={{ maxWidth: '25rem' }}
            textAlign="left"
            image={
              <div>
                <img src={episode.image} alt={episode.title} />
              </div>
            }
            title={episode.title}
            description={episode.plot.slice(0, 50)}
          />
        </EuiFlexItem>
      ))}
    </EuiFlexGroup>
  )
}

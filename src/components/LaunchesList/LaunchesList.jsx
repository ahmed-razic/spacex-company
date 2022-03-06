import './style.scss';
import LaunchesItem from '../LaunchesItem';

function LaunchesList({ launches }) {
  return launches.map((item) => (
    <LaunchesItem
      key={item.id}
      date={item.launch_date_local}
      site={item.launch_site.site_name_long}
      article={item.links.article_link}
      flickr={item.links.flickr_images}
      video={item.links.video_link}
      wiki={item.links.wikipedia}
      mission={item.mission_name}
      rocket={item.rocket.rocket_name}
    />
  ));
}
export default LaunchesList;

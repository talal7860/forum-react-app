/**
 *
 * Asynchronously loads the component for TopicNew
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

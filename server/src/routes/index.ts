
import twitterRoute from './twitter-route/index';
import ConfigInterface from '../config/ConfigInterface';

function initRoutes(app: any, config: ConfigInterface): void {

    twitterRoute(app, config);
}

export default initRoutes;

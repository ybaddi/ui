import RouteMapper from '@enso-ui/route-mapper';
import store from '@root/store';

export default (name, params, absolute) => {
    const { meta, routes } = store.state;

    return (new RouteMapper(meta.appUrl, routes).get(name, params, absolute));
};

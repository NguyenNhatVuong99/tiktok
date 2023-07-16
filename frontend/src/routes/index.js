import { HeaderOnly } from '~/components/Layout';
import { Home, Following, Profile, Upload, Search } from '~/pages';
const PublicRoutes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/following',
        name: 'Following',
        component: Following,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        layout: null,
    },
];
const PrivateRoutes = [];
export { PublicRoutes, PrivateRoutes };

const { Router } = require('express');
const userRoute = require('./api/users');

const router = Router();

const defaultRoutes = [
    {
        path: '/users',
        route: userRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;

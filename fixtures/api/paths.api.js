export const apiPaths = {
    auth: {
        login: process.env.API_LOGIN_PATH || '/login',
        me: process.env.API_ME_PATH || '/me',
    },
    users: process.env.API_USERS_PATH || '/users',
};

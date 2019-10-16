const NODE_ENV = process.env.NODE_ENV || "dev";
const env = {
    dev: NODE_ENV === "dev",
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbHost: process.env.DB_HOST || "",
    dbName: process.env.DB_NAME || "",
    cors: process.env.CORS || "*",
    minTimeInSeconds: process.env.MIN_TIME_IN_SECONDS || 300,
    maxTimeInSeconds: process.env.MAX_TIME_IN_SECONDS || 3600,
    cookieMinTime: process.env.COOKIE_MIN_TIME || 7200,
    cookieMaxTime: process.env.COOKIE_MAX_TIME || 2592000,
    authJwtSecret: process.env.AUTH_JWT_SECRET || "",
    defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD || "root",
    defaultUserPassword: process.env.DEFAULT_USER_PASSWORD || "secret",
    publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN || "",
    adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN || "",
    unAuthApiKeyToken: process.env.UN_AUTH_API_KEY_TOKEN || ""
};

const config = () => {
    return env;
};

module.exports = config;

import dotenv from 'dotenv';
import {Sequelize} from 'sequelize';

dotenv.config();

export const DATABASES = {
    ENGINE: process.env.ENGINE,
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT
}

export const sequelize = new Sequelize (
    DATABASES.NAME, DATABASES.USER, DATABASES.PASSWORD, {
    host: DATABASES.HOST,
    port: DATABASES.PORT,
    dialect: DATABASES.ENGINE
})

export const REDIS = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
}
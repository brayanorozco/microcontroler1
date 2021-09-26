import { DataTypes } from 'sequelize';
import { sequelize } from '../settings';

const opts = { timestamps: true, freezeTableName: true };

export const Model = sequelize.define('model', {
    uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUDV4
    },

    name: {
        type: DataTypes.STRING
    },

    description: {
        type: DataTypes.STRING
    },

    price: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },

    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

    registeredUser: {
        type: DataTypes.UUID
    },

    updateUser: {
        type: DataTypes.UUID
    },
}, opts)

//This function is going to help us to setup the previous model in the database

export const syncDB = async () => {

    try {

        await Model.sync({
            logging: false,
            force: true
        })
        console.info('Model up')

    } catch (error) {
        console.info('Model down', error);
    }

}
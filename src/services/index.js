import {View, Create, Delete, Update} from '../controllers'
import { Model } from '../models';

export const HandleUpdate = async ({ pk, name, description, price }) => {

    try {

        let {statusCode, data, message } = await Model.update({ pk, name, description, price })
        
        return { statusCode, data, message }

    } catch (error) {

        console.error( { step: "service HandleUpdate", error });

        return {
            statusCode: 500,
            message: "Internal error server"
        }  
        
    }
}

export const HandleDelete = async ({ pk }) => {

    try {

        let { statusCode, data, message }  = await Delete({ pk });

        return { statusCode, data, message }
        
    } catch (error) {

        console.error( { step: "service HandleDelete", error });

        return {
            statusCode: 500,
            message: "Internal error server"
        }  
        
    }

}

export const HandleCreate = async ({ name, description, price }) => {

    try {

        let { statusCode, data, message }  = await Create({ name, description, price });

        return { statusCode, data, message }
        
    } catch (error) {

        console.error( { step: "service HandleCreate", error });

        return {
            statusCode: 500,
            message: "Internal error server"
        }  
        
    }

}

export const FindEnable = async ( {limit, offset, filter = {status: true} }) => {

    try {

        let { statusCode, data, message }  = await View({ 
            limit,
            offset,
            filter
        });

        return { statusCode, data, message }
        
    } catch (error) {

        console.error( { step: "service FindEnable", error });

        return {
            statusCode: 500,
            message: "Internal error server"
        }  
    }
}

export const handleView = async ({limit, offset, filter = {}}) => {

    try {
        
        let { statusCode, data, message }  =  await View({limit, offset, filter})

        return {statusCode, data, message}

    } catch (error) {

        console.error( { step: "service handleView", error })

        return {
            statusCode: 500,
            message: "Internal error server"
        }  
    }
}

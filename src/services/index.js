import {View} from '../controllers'

export const handleView = async ({limit, offset, filter = {}}) => {

    try {
        
        let {statusCode, data, message }  =  await View({limit, offset, filter})

    } catch (error) {
        console.error(error)

        return {
            statusCode: 500,
            message: "Internal error server"
        }
        
    }
}
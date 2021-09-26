import {
    Model
} from '../models'

export const Update = async ({ pk, name, description, price }) => {
    try {

        await Model.update(
            { name, description, price },
            { where: { uuid: pk }, logging: false }
        )

    } catch (error) {
        console.error({ step: "controller Update", error })

        return {
            statusCode: 500,
            message: "Internal error server"
        }
    }
}


export const Delete = async ({ pk }) => {
    try {

      await Model.destroy({ where: {uuid: pk} })

      return {
        statusCode: 200,
        data: "Product deleted"
    }
        
    } catch (error) {
        console.error({step: "controller Delete"});

        return {
            statusCode: 500,
            message: "Internal error server"
        };
        
    }

} 

export const Create = async ({
    name,description, price
}) => {

    try {

        let { rows, count } = await Model.create(
        
            { name, description, price }, 
            { fields: ['name', 'description', 'price'], logging: false }
        );

        return {
            statusCode: 200,
            data: {
                data: rows,
                pageCount: Math.ceil(count / limit),
                itemCount: count
            }
        }

    } catch (error) {
        console.error({step: "controller Create"});

        return {
            statusCode: 500,
            message: "Internal error server"
        };
    }

}


export const View = async ({
    limit,
    offset,
    filter
}) => {

    try {

        let {
            rows,
            count
        } = await Model.findAndCountAll({
            where: filter,
            limit,
            offset,
            logging: false
        });

        return {
            statusCode: 200,
            data: {
                data: rows,
                pageCount: Math.ceil(count / limit),
                itemCount: count
            }
        }

    } catch (error) {
        console.error({step: "controller View"});

        return {
            statusCode: 500,
            message: "Internal error server"
        };
    }

}
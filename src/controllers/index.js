import { Model } from '../models'

export const View = async ({ limit, offset, filter }) => {

    try {

        let {rows, count} = await Model.findAndCountAll({where: filter, limit, offset, logging: false});

        return {
            statusCode: 200,
            data: {
                data: rows,
                pageCount: Math.ceil(count / limit),
                itemCount: count
            }
        }

    } catch (error) {

        return {
            statusCode: 500,
            message: "Internal error server"
        };
    }

}
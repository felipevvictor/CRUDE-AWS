"use strict";

const AWS = require("aws-sdk");

const fetchItem = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    let item;

    try {
        const results = await dynamoDB.get({
            TableName: "ItemTableNew",
            Key: { id }
        }).promise();

        item = results.Item;

    } catch (error) {
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };

}

module.exports = {
    handler: fetchItem,
};

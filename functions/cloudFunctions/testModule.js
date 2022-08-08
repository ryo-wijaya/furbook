const functions = require('firebase-functions');
const cors = require('cors')({ origin: ['https://xxx', true] });
require('dotenv').config();

const testFunction = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const variable = req.body.testVariable

        envVar = process.env.TEST_ENV_VAR


        return res.status(200).send({
            status: 200,
            message: `Your message ${variable} has been recieved! Your test env variable is ${envVar}`
        });
    })
})


module.exports = {
    testFunction
}

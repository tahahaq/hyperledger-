let express = require('express'),
    constants = require('../utils/constants'),
    db_insert = require('../db_functions/insert'),
    db_read = require('../db_functions/read'),
    router = express.Router();


router.post('/request', function (req, res) {
    db_insert.sendDataToBlockchain(req.body.type , req.body.data).then((response) => {

        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});






router.get("/food/:id", function (req, res) {
    db_read.getDataByFoodId(req.params.id).then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});





module.exports = router;

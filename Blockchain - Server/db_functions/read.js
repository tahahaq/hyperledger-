var exports = module.exports = {},
    axios = require('axios'),
    constants = require('../utils/constants');


// Fetching the data from blockchain and rerunning it by timber id
exports.getDataByFoodId = async (id) => {
    try {
        let requests = {
            farm : {},
            farmer : {},
            coop : {},
            transporter : {},
            retailer : {}
        };
            let farm = await axios.get(constants.hyperledgerUrl + `farm/${id}` );
            let returningData = farm.data;
            delete returningData["$class"];
            console.log(returningData + "farm")
            requests.farm = returningData;


            let farmer =await axios.get(constants.hyperledgerUrl + `Farmer/${id}`);
            let returningData1 = farmer.data;
            delete returningData1["$class"];
            console.log(returningData1+ "Farmer")
            requests.farmer =returningData1;


            let coop = await axios.get(constants.hyperledgerUrl + `coop/${id}`);
            let returningData2 = coop.data;
            delete returningData2["$class"];
            console.log(returningData2 + 'coop');
            requests.coop =returningData2;


            let transporter = await axios.get(constants.hyperledgerUrl + `Transporter/${id}`);
            let returningData3 = transporter.data;
            delete returningData3["$class"];
            console.log(returningData3 + 'Transporter');
            requests.transporter = returningData3;

        let retailer = await axios.get(constants.hyperledgerUrl + `Retailer/${id}`);
        let returningData4 = retailer.data;
        delete returningData4["$class"];
        console.log(returningData4 + 'Retailer');
        requests.retailer = returningData4;


        return requests;

    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

var exports = module.exports = {},
    axios = require('axios'),
    constants = require('../utils/constants');

// Sending data to Blockchain
exports.sendDataToBlockchain = async (type , data) => {
    try {
            switch (type) {
                case 'Farm':
                    await axios.post(constants.hyperledgerUrl + 'farm',data.farm);
                    await axios.post(constants.hyperledgerUrl + 'Farmer' , data.farmer);
                    return constants.responseMessages.Success;
                case 'Coop' :
                    await axios.post(constants.hyperledgerUrl + 'coop', data.coop );
                    return constants.responseMessages.Success;
                case 'Transporter' :
                    await axios.post(constants.hyperledgerUrl + 'Transporter', data.transporter);
                    return constants.responseMessages.Success;
                case 'Retailer' :
                    console.log(data)
                    await axios.post(constants.hyperledgerUrl + 'Retailer', data.retailer);
                    return constants.responseMessages.Success;
            }

    } catch (e) {
        console.log(e)
    }
};

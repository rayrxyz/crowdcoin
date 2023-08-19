import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb8dC841A67a09443B8b466380f4DA655015643A2'
);

export default instance;
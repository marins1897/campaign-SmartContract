import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x54DCD9288225E83018BB0E411b1C79008804b8Ac'
);

export default instance;
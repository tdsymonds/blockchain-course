import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb1429E67a235C5964f3ea81523E314d8BBD1CD87'
);

export default instance;

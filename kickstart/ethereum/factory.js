import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8c1C7B4f0ad8aa0DbC653c160F7BA809B92C41F2'
);

export default instance;

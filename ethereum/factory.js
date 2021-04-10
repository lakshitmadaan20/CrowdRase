import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4d295884812a6DFa07E60109220e5D696df1fcc3'
);

export default instance;

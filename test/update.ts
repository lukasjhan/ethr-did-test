import { EthrDID } from 'ethr-did';
import { ethers } from 'ethers';
import Web3 from 'web3';

(async () => {
  const chainNameOrId = '5777'; // chain ID

  //const provider = new Web3.providers.HttpProvider('http://localhost:9545');
  const ethrProvider = new ethers.JsonRpcProvider('http://localhost:9545');

  const ethrDid = new EthrDID({
    identifier:
      '0x039bc2ea3b85db54611a4fe2924651489d19b91bdca63ea7f9f4bb58974fbe811a',
    privateKey:
      '0x3bc404459d3506ec399de3a054580a67b186769bbe986fd6ed5300b072c44a19',
    rpcUrl: 'http://localhost:9545', // server address
    registry: '0x09CFE7f56C3d25bFdd104ded135402BFaeeE438b', // contract address
    chainNameOrId,
    provider: ethrProvider,
  });
  console.log(ethrDid);
  console.log(ethrDid.did);

  //await ethrDid.revokeAttribute('didDocumentMetadata/deactivated', 'true');
  await ethrDid.setAttribute('didDocumentMetadata.deactivated', 'true');

  console.log('Done');
})();

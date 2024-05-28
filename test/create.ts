import { EthrDID } from 'ethr-did';

(async () => {
  const chainNameOrId = '5777'; // chain ID

  const keypair = EthrDID.createKeyPair();

  console.log({
    keypair,
  });

  const ethrDid = new EthrDID({
    identifier: keypair.identifier,
    privateKey: keypair.privateKey,
    rpcUrl: 'http://localhost:9545', // server address
    registry: '0x09CFE7f56C3d25bFdd104ded135402BFaeeE438b', // contract address
    chainNameOrId,
  });
  console.log(ethrDid);
  console.log(ethrDid.did);
})();

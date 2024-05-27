import { EthrDID } from 'ethr-did';

(async () => {
  const chainNameOrId = 'goerli'; // chain ID
  const ethrDid = new EthrDID({
    identifier: '0x4b2a8428c6ed76f2bf4c039b96aca9619b8231bd',
    privateKey:
      '3faa29a8fab3e07a206b47406d6a7baed8e40110e6f986f1a2e8f3a2c6e51551',
    rpcUrl: 'http://localhost:9545', // server address
    registry: '0x09CFE7f56C3d25bFdd104ded135402BFaeeE438b', // contract address
    chainNameOrId,
  });
  console.log(ethrDid);
  console.log(ethrDid.did);
})();

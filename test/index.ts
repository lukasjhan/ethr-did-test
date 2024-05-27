import { Resolver } from 'did-resolver';
import { getResolver } from 'ethr-did-resolver';

// While experimenting, you can set a rpc endpoint to be used by the web3 provider
// You can also set the address for your own ethr-did-registry contract
const providerConfig = {
  networks: [
    {
      name: 'goerli', // network name
      chainId: 1337, // chainId
      rpcUrl: 'http://localhost:9545', // server address
      registry: '0x09CFE7f56C3d25bFdd104ded135402BFaeeE438b', // contract address
    },
  ],
};
// It's recommended to use the multi-network configuration when using this in production
// since that allows you to resolve on multiple public and private networks at the same time.

// getResolver will return an object with a key/value pair of { "ethr": resolver } where resolver is a function used by the generic did resolver.
const ethrDidResolver = getResolver(providerConfig);
const didResolver = new Resolver(ethrDidResolver);

(async () => {
  const doc = await didResolver.resolve(
    'did:ethr:goerli:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74',
  );
  console.log(JSON.stringify(doc, null, 2));
})();

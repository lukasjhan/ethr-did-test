module.exports = {
  apps: [
    {
      name: 'truffle',
      script: 'truffle develop --network goerli',
      args: ['develop'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};

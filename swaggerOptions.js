module.exports = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'Webgraffiti API',
      version: '1.0.0',
      description: 'REST API for Listing, Saving and Deleting Speech bubbles on Webgraffiti',
    },
    servers: [
      {
        url: 'https://webgraffiti.herokuapp.com/',
        description: 'Webgraffiti server'
      }
    ],
  },
  apis: ['./routes/*.js'],
};

  
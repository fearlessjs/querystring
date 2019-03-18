const { parse } = require('querystringify')

const queryString = (req, res) => {
  req.query = parse(req.getQuery())
}

module.exports = options => {
  return Array.isArray(options)
    ? {
      handlers: options,
      middlewares: [queryString]
    }
    : {
      ...options,
      middlewares: [...options.middlewares, queryString]
    }
}

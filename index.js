const { parse } = require('querystringify')

const queryString = (req, res) => {
  req.query = parse(req.getQuery())
}

module.exports = options => {
  if (Array.isArray(options)) {
    return {
      handlers: options,
      middlewares: [queryString]
    }
  }

  const { middlewares = [] } = options

  return {
    ...options,
    middlewares: [...middlewares, queryString]
  }
}

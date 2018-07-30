let begin = require('@architect/functions')

function route(req, res) {
  let request = JSON.stringify(req, null, 2)
  console.log('hello backend', request)
  res({
    js: `console.log('hello frontend', ${request})`
  })
}

exports.handler = begin.js.get(route)

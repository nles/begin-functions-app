let begin = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    xml: '<app>hello world</app>'
  })
}

exports.handler = begin.xml.get(route)


import originJSONP from 'jsonp'

export default function (url, params, options) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + formatParams(params)

  return new Promise((resolve, reject) => {
    originJSONP(url, options, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

function formatParams (params) {
  let url = ''
  for (var k in params) {
    let value = params[k] !== undefined ? params[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

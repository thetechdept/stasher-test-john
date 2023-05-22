const queryStringBuilder = (params) => {
  return Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')
}

export default queryStringBuilder


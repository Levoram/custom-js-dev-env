//Use mockapi in development
export default function getBaseUrl() {
  // Use mock API by default in development, or when explicitly requested
  const isDevelopment = import.meta.env.DEV
  const useMockApi = getQueryStringPrameterByName('useMockApi')

  if (isDevelopment || useMockApi === 'true') {
    return 'http://localhost:3005/'
  }

  return '/'
}

function getQueryStringPrameterByName(name, url) {
  if (!url) url = window.location.href

  name = name.replace(/[[\]]/g, '\\$&')

  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

//importing fetch polyfill lib
import 'whatwg-fetch'
import getBaseUrl from './baseUrl.js'

//get environment baseUrl  inDevelopment ? inProduction
const baseUrl = getBaseUrl()

//Just exporting the getUsers function to isolate
//fetch logic in a javascript style repository pattern.
export function getUsers() {
  return get('users')
}

export function deleteUser(id) {
  return del(`users/${id}`)
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError)
}

// Can't call func delete since reserved word.
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE',
  })

  return fetch(request).then(onSuccess, onError)
}

function onSuccess(res) {
  return res.json()
}

function onError(err) {
  console.log(err) //eslint-disable-line no-console
}

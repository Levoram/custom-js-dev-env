//importing fetch polyfill lib
import 'whatwg-fetch';

//Just exporting the getUsers function to isolate
//fetch logic in a javascript style repository pattern.
export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(url).then(onSuccess,onError);
}

function onSuccess(res){
  return Response.json();
}

function onError (err){
  console.log(error); //eslint-disable-line no-console
}

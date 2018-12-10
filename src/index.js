//index.js
import hello from './hello.js';
import { getUsers } from './api/userApi';

hello("World!");

getUsers().then(res => {

  //Clear out any previous results
  let userTable = "";

  //map userinfo to table
  res.forEach(user => {
    userTable += `<tr>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    </tr>`
  });

  //add new userTable to the document
  global.document.querySelector('#users').innerHTML = userTable;

});

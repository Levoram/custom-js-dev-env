import './index.css'
import { getUsers, deleteUser } from './api/userApi.js'

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = ''

  result.forEach(user => {
    usersBody += `<tr>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      </tr>`
  })

  document.getElementById('users').innerHTML = usersBody

  const deleteLinks = document.getElementsByClassName('deleteUser')

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target
      event.preventDefault()
      deleteUser(element.attributes['data-id'].value)
      const row = element.parentNode.parentNode
      row.parentNode.removeChild(row)
    }
  })
})

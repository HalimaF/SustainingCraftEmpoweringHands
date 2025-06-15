// include.js: Loads static header and footer files
function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', function() {
  let headerFile = '/components/header-guest.html';
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user && user.role === 'admin') headerFile = '/components/header-admin.html';
  else if (user && user.role === 'seller') headerFile = '/components/header-artisan.html';
  else if (user && user.role === 'buyer') headerFile = '/components/header-user.html';
  if(document.getElementById('header')) loadComponent('header', headerFile);
  if(document.getElementById('footer')) loadComponent('footer', '/components/footer.html');
});

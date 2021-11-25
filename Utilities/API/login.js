function login(email, password) {
  return new Promise(function (resolve, reject) {
    var data = JSON.stringify({
      Email: email,
      Password: password,
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        let result = this.responseText;
        resolve(result);
      }
    });

    xhr.open('POST', 'https://mediwell.herokuapp.com/login');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
  });
}

export default login;

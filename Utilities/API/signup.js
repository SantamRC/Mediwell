function signup(first, last, email, password) {
  return new Promise(function (resolve, reject) {
    var data = JSON.stringify({
      FirstName: first,
      LastName: last,
      Email: email,
      Password: password,
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        let result = this.responseText;
        console.log(result);
        resolve(result);
      }
    });

    xhr.open('POST', 'https://mediwell.herokuapp.com/signup');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
  });
}

export default signup;

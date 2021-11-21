function token() {
  var data =
    'code=a3f7d96aba8fcd42e082bd58a3404c99&client_id=A0FPTzuzBbcDjyUXMfbXfdgYkj4QNkbh&client_secret=sDtfJTgPyC2Pn7nU&redirect_uri=http%3A%2F%2Fwww.google.com&grant_type=authorization_code';

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      let value = JSON.parse(this.responseText).access_token;
      return value;
    }
  });

  xhr.open('POST', 'https://sandbox-api.dexcom.com/v2/oauth2/token');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.send(data);
}

export default token;

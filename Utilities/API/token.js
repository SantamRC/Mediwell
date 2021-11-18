function token() {
  fetch('https://sandbox-api.dexcom.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      code: 'a3f7d96aba8fcd42e082bd58a3404c99',
      client_id: 'A0FPTzuzBbcDjyUXMfbXfdgYkj4QNkbh',
      client_secret: 'sDtfJTgPyC2Pn7nU',
      redirect_uri: 'http://www.google.com',
      grant_type: 'authorization_code',
    }),
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log('The error is: ' + err));
}

export default token;

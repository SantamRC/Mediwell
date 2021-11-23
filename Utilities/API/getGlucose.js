function getGlucose(token, start, end) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        let result = this.responseText;
        resolve(result);
      }
    });

    xhr.open(
      'GET',
      `https://sandbox-api.dexcom.com/v2/users/self/egvs?startDate=${start}&endDate=${end}`,
    );
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);

    xhr.send();
  });
}

export default getGlucose();

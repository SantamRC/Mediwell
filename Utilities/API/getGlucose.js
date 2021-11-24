function getGlucose(token) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    let start = new Date.toISOString();
    let end = new Date(new Date().getTime() + 5 * 60000).toISOString();

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        let result = JSON.parse(this.responseText).egvs.value;
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

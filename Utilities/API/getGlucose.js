function getGlucose(token) {
  return new Promise(async function (resolve, reject) {
    getTime().then(({start, end}) => {
      // console.log('Start=' + start);
      // console.log('End=' + end);
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
          let result = JSON.parse(this.responseText).egvs[0].value;
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
  });
}

function getTime() {
  return new Promise((resolve, reject) => {
    let start = new Date(new Date() - 1000 * 60 * 60 * 24 * 30)
      .toISOString()
      .split('.')[0];
    let end = new Date(
      new Date(new Date() - 1000 * 60 * 60 * 24 * 30).getTime() + 5 * 60000,
    )
      .toISOString()
      .split('.')[0];
    resolve({start: start, end: end});
  });
}

export default getGlucose;

function getRecommendation() {
  return new Promise(function (resolve, reject) {
    var data = JSON.stringify({
      glucose_value: 50,
      exercise_level: 'ex_3',
      glucose_trend: 'Going up',
      is_Aerobic: false,
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        let result = this.responseText;
        resolve(result);
      }
    });

    xhr.open('POST', 'https://mediwell-demo.herokuapp.com/getRecommendation');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(data);
  });
}

export default getRecommendation;

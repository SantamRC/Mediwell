function calculateIOB(units, timeOfInjection) {
  return new Promise(function (resolve, reject) {
    let duration = new Date().getTime() - timeOfInjection; //take in hours
    let activeTime = 4;
    let iob = units * ((activeTime - duration) / activeTime);
  });
}

export default calculateIOB;

const hours = document.querySelector('.hours')
const minutes = document.querySelector('.mins')
const seconds = document.querySelector('.secs')
const amPm = document.querySelector('.am-pm')

setInterval(() => {
    let currentTime = new Date();

    if (currentTime.getHours() < 10) {
      hours.textContent = "0" + currentTime.getHours();
    } else {
      hours.textContent = currentTime.getHours();
    }


    if (currentTime.getMinutes() < 10) {
      minutes.textContent = "0" + currentTime.getMinutes();
    } else {
        minutes.textContent = currentTime.getMinutes();
    }



    if(currentTime.getSeconds() < 10){
        seconds.textContent = '0' + currentTime.getSeconds();
    }else{
        seconds.textContent = currentTime.getSeconds()
    }

    if(currentTime.getHours() > 12){
      amPm.textContent ='pm'
    }else{
      amPm.textContent = 'am'
    }
}, 1000)

let countDownDate = new Date("Dec 31, 2022 20: 30: 25").getTime();
let y= setInterval(function(){
    let now = new Date().getTime();

    //finding the difference between new and countDown

    let difference = countDownDate - now;

    //Calculating thr days, hours, minutes and second
    let days = Math.floor(difference /(1000* 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60))/ (1000 * 60));
    let seconds = Math.floor((difference %(1000 * 60)) / 1000);

    //output the result
    document.querySelector('#Count').innerHTML = days +"d" + ": " + hours + "h" + ": " + minutes + "m" + " : " + seconds + "s"; 

    if (difference <0){
        clearInterval(y);

        document.querySelector('#Count').innerHTML = "TIME-UP";
    }
}, 1000);
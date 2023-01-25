let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');
    

function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6, 
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
        
        secondArrow.style = `transform: rotate(${seconds}deg);`
        minuteArrow.style = `transform: rotate(${minutes}deg);`
        hourArrow.style = `transform: rotate(${hours}deg);`
        
        hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        
        
        
        
        setTimeout(() => clock(),1000)
    
}

clock()

// setTimeout()  - создает нам задержку и говорит через сколько миллисекунд нам нужно что-либо выполнять


// Рекурсия - это когда функция вызывает саму себя

// let i = 0;

// function rek() {
//     console.log(i);
//     if( i < 10) {
//         i++
//         rek()
//     }
// }

// rek();


let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    
for(let i = 0; i < links.length;i++) {
    links[i].addEventListener('click', function() {
        for(let x = 0; x < tabs.length;x++) {
            tabs[x].classList.remove('active')
            links[x].classList.remove('active')
        }
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}

 let hourClock = document.querySelector('.stopwatch__hours'),
  minuteClock = document.querySelector('.stopwatch__minutes'),
  secondClock = document.querySelector('.stopwatch__seconds'),
  btnClock = document.querySelector('.stopwatch__btn'),
  spanClock = document.querySelector('.tabsLink__span');

  btnClock.addEventListener('click', function() {
    if(btnClock.innerHTML == 'start'){
        spanClock.classList.add('active');
        btnClock.innerHTML = 'stop'
        setTimeout(() => stopClock())
        
    }else if(btnClock.innerHTML == 'stop') {
        spanClock.classList.remove('active');
        spanClock.classList.add('active_clear');
        btnClock.innerHTML = 'clear';
    }else {
        spanClock.classList.remove('active_clear');
        btnClock.innerHTML = 'start';
        hourClock.innerHTML = '0';
        minuteClock.innerHTML = '0';
        secondClock.innerHTML = '0';
    }
  })

  function stopClock() {
    if(btnClock.innerHTML == 'stop') {
        secondClock.innerHTML++;
        if(secondClock.innerHTML == '60') {
            secondClock.innerHTML = '0';
            minuteClock.innerHTML++;
            if(minuteClock.innerHTML == '60') {
                minuteClock.innerHTML = '0';
                hourClock.innerHTML++;
                if(hourClock.innerHTML == '24') {
                    hourClock.innerHTML = '0';
                }
            }
        }
    } else {
        return
    }

    setTimeout(() => stopClock(), 1000);
}





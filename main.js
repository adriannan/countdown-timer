// console.log('ok');

// const endTime = Math.floor(new Date('2019-06-22 17:00:00')/1000)

const finalDate = document.querySelector('.final-date')
const finalTime = document.querySelector('.final-time')
const final = `${finalDate.value} ${finalTime.value}`

const btn = document.querySelector('button')
const spanD = document.querySelector('span.d')
const spanH = document.querySelector('span.h')
const spanM = document.querySelector('span.m')
const spanS = document.querySelector('span.s')
const newEndTime = Math.floor(new Date(final).getTime()/1000)

// function count() {
//     const nowTime = Math.floor(new Date().getTime() / 1000);
//     const time = newEndTime - nowTime;

//     let days = Math.floor(time/(60*60*24));
//     days = days<10 ? `0${days}` : days
//     let hours = Math.floor(time/(60*60)%24);
//     hours = hours<10 ? `0${hours}` : hours
//     let minutes = Math.floor(time/(60)%60);
//     minutes = minutes<10 ? `0${minutes}` : minutes
//     let secs = Math.floor(time%60);
//     secs = secs<10 ? `0${secs}` : secs

//     spanD.textContent = days
//     spanH.textContent = hours
//     spanM.textContent = minutes
//     spanS.textContent = secs
// }

// let interval = setInterval(count, 1000)

function newCount() {
    if(Math.floor(new Date(finalDate.value).getTime()/1000) < Math.floor(new Date().getTime() / 1000)) {
        return alert(`You can't change the past...`)
    } else {
        // clearInterval(interval)
        const newEndTime = Math.floor(new Date(finalDate.value).getTime()/1000)

        interval = setInterval(()=>{
        const nowTime = Math.floor(new Date().getTime() / 1000);
        const time = newEndTime - nowTime;
    
        let days = Math.floor(time/(60*60*24));
        days = days<10 ? `0${days}` : days
        let hours = Math.floor(time/(60*60)%24);
        hours = hours<10 ? `0${hours}` : hours
        let minutes = Math.floor(time/(60)%60);
        minutes = minutes<10 ? `0${minutes}` : minutes
        let secs = Math.floor(time%60);
        secs = secs<10 ? `0${secs}` : secs
    
        spanD.textContent = days
        spanH.textContent = hours
        spanM.textContent = minutes
        spanS.textContent = secs
    
      }, 1000)
    }
}

btn.addEventListener('click', newCount)


//setInterval()-it calls a function at specified intervals.


// const endDate=new Date("13 August,2025 11:40:00").getTime();

// const startDate=new Date().getTime(); //indicates the current time
// instead of hardcoding the start and end date we take user input for that
const startBtn=document.getElementById("startBtn");
function mainTask(){
    const startInput=document.getElementById("startDate").value;
    const endInput=document.getElementById("endDate").value;
    if(!startInput || !endInput){
        alert("Please select both start and end date/time!!");
        return;
    }

    const startDate=new Date(startInput).getTime();
    const endDate=new Date(endInput).getTime();
     
    if(endDate<= startDate){
        alert("End date must be after start date!!");
        return;
    }
    // clearInterval(x);

    let x=setInterval(function updateTimer(){
 const currentDate=new Date().getTime();
 const distanceCovered=currentDate-startDate;
 const distancePending=endDate-currentDate;
//  calculate days, min, hr and sec based on distancePending
// 1 day=24*60*60**1000 ms
const oneDayInMillis=(24*60*60*1000);
const oneHourInMillis=(60*60*1000);
const oneMinInMillis=(60*1000);
const oneSecInMillis=(1000);

const days=Math.floor(distancePending / (oneDayInMillis));
const hrs=Math.floor((distancePending %(24*60*60*1000))/(oneHourInMillis));
const mins=Math.floor((distancePending%(60*60*1000))/(oneMinInMillis));
const secs=Math.floor((distancePending %(60*1000))/(oneSecInMillis));
 
document.getElementById("days").innerText=days;
document.getElementById("hours").innerText=hrs;
document.getElementById("minutes").innerText=mins;
document.getElementById("seconds").innerText=secs;

// calculate width percentage for progress bar
const totalDistance=endDate-startDate;

const percentageDistance=(distanceCovered/totalDistance)*100;

// set width for progress bar
document.getElementById("progress-bar").style.width=percentageDistance+"%";

// if we provide any date which is less than the current date,
// then it will set progress bar width to 100% and it displays EXPIRED message .
  if(distancePending <= 0){
    clearInterval(x);
    document.getElementById("countdown").innerHTML="DATE EXPIRED";
document.getElementById("progress-bar").style.width="100%";
  
}
}, 1000);

}

startBtn.addEventListener("click",mainTask);
// we can use either anonymous function or simple function also,
// for code readiability I use here normal function 
// startBtn.addEventListener(
//     "click",()=>{
//     const startInput=document.getElementById("startDate").value;
//     const endInput=document.getElementById("endDate").value;
//     if(!startInput || !endInput){
//         alert("Please select both start and end date/time!!");
//         return;
//     }

//     const startDate=new Date(startInput).getTime();
//     const endDate=new Date(endInput).getTime();
     
//     if(endDate<= startDate){
//         alert("End date must be after start date!!");
//         return;
//     }
//     clearInterval(x);

//     let x=setInterval(function updateTimer(){
//  const currentDate=new Date().getTime();
//  const distanceCovered=currentDate-startDate;
//  const distancePending=endDate-currentDate;
// //  calculate days, min, hr and sec based on distancePending
// // 1 day=24*60*60**1000 ms
// const oneDayInMillis=(24*60*60*1000);
// const oneHourInMillis=(60*60*1000);
// const oneMinInMillis=(60*1000);
// const oneSecInMillis=(1000);

// const days=Math.floor(distancePending / (oneDayInMillis));
// const hrs=Math.floor((distancePending %(24*60*60*1000))/(oneHourInMillis));
// const mins=Math.floor((distancePending%(60*60*1000))/(oneMinInMillis));
// const secs=Math.floor((distancePending %(60*1000))/(oneSecInMillis));
 
// document.getElementById("days").innerText=days;
// document.getElementById("hours").innerText=hrs;
// document.getElementById("minutes").innerText=mins;
// document.getElementById("seconds").innerText=secs;

// // calculate width percentage for progress bar
// const totalDistance=endDate-startDate;

// const percentageDistance=(distanceCovered/totalDistance)*100;

// // set width for progress bar
// document.getElementById("progress-bar").style.width=percentageDistance+"%";

// // if we provide any date which is less than the current date,
// // then it will set progress bar width to 100% and it displays EXPIRED message .
//   if(distancePending <= 0){
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML="DATE EXPIRED";
// document.getElementById("progress-bar").style.width="100%";
  
// }
// }, 1000);
//     }
// )
 

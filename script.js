// let dateandtime_ = new Date()

// let hrz = dateandtime_.getHours()
// let minz = dateandtime_.getMinutes()
// let secz = dateandtime_.getSeconds()
    
// let hr_div = document.getElementById("hr").innerHTML(hrz);
// let min_div = document.getElementById("min").innerText(minz);
// let ss_div = document.getElementById("sec").innerHTML(secz)


    
// let updating_hr = ()=> {
//     let dateandtime_ = new Date()

//     let hrz = dateandtime_.getHours()
//     let minz = dateandtime_.getMinutes()
//     let secz = dateandtime_.getSeconds()
        
//     let hr_div = document.getElementById("hr").innerHTML = ("chnged");
//     let min_div = document.getElementById("min").innerText = (minz);
//     let ss_div = document.getElementById("sec").innerHTML = (secz) 
//     return hr_div
// }

// var time_HH = () =>  {

//      hour_ = new Date().getMilliseconds()

//     chndtxt = document.getElementById("hr").innerHTML = hour_;
   
   
//     return setInterval(chndtxt,1000)
 
    

// }
// time_HH()

// console.log(chndtxt)
let hr_ = () =>{
    hours = new Date().getHours()

    text_ = document.getElementById("hr").innerHTML = hours;
    return text_
}


setInterval(hr_,1000)

let minz = () => {
    minutes = new Date().getMinutes()

    text_ = document.getElementById("min").innerHTML = ": " + minutes + " :";
    

    return text_
}

setInterval(minz,1000)



let secz = () => {
    seconds = new Date().getSeconds()

    text_ = document.getElementById("sec").innerHTML = seconds;
    return text_
}

setInterval(secz,1000)


// date month day 

let mydate = () =>{
    d = new Date().getDate()

    t = document.getElementById("date_").innerHTML = d + "th";
    return t 
}

mydate()
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let mymonth = () =>{
    m = new Date()
    month = months[m.getMonth()]
    t = document.getElementById("month_").innerHTML = month;

    return t
}
mymonth()

let alldays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thrusday", "Friday","Saturday"]
let myday = () => {

    d = new Date()
    day = alldays[d.getDay()]

    t = document.getElementById("day_").innerHTML = day;
    return t
}
myday()
// window.setInterval(timing_func(),1000)
//Initializing my DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById("greeting");
const callSign = document.getElementById("name");
const focus = document.getElementById("focus");


//Saving AM or PM
const showAmPM = true;

//Function to show real time
showTime = () =>{
    let today = new Date();
     hour = today.getHours();
     min = today.getMinutes();
     sec = today.getSeconds();

    //checking if it is AM or PM
    const amOrPm = hour >= 12 ? "PM" : "AM";

    //formating the time into a 12Hour format

    hour = hour % 12 || 12;

    //Display the time
    time.innerHTML = `${hour}<span>:<span/>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPM ? amOrPm :''}`;
    return setTimeout(showTime, 1000);
}

//Function to add zero to single digit numbers
addZero = (t) => (parseInt(t,10) < 10 ? "0" : "") + t;


//function to set bg and greeting
 setBgandGreet = () => {
    let today = new Date();
        hour = today.getHours();

    if(hour < 12){
        //It's morning
        document.body.style.backgroundImage = "url('images/morning.jpg')";
        greeting.textContent = "Good Morning";
        document.body.style.backgroundSize = "1920px 1080px";
        document.body.style.color = "red";
    } 
    else if(hour < 18){
        //it's afternoon
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
        document.body.style.backgroundSize = "1920px 1080px";
        greeting.textContent = "Good Afternoon";
        document.body.style.color = "white";
    } else {
        //Evening it is
        document.body.style.backgroundImage = "url('images/night.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.backgroundSize = "1920px 1080px";
        document.body.style.color = "white";
    }  
}


//Fetching the name of the user from localstorage
getName = () => {
    if(localStorage.getItem('name') == null){
        callSign.textContent = '[Enter Name]';
    } else {
        callSign.textContent =  localStorage.getItem('name');
    }
    return callSign;

}

//Set Name
setName = (e) => {
    if(e.type=== 'keypress'){
        //making sure Enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name',e.target.innerText);
            callSign.blur();
        }
    }   else {
        localStorage.setItem('name',e.target.innerText);
    }
}


//Fetching the focus of the user from localstorage
getFocus = () => {
    if(localStorage.getItem('focus') == null || localStorage.getItem('focus') == ''){
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent =  localStorage.getItem('focus');
    }
    return focus;
}


//Set Focus
setFocus = (e) => {
    if(e.type=== 'keypress'){
        //making sure Enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }
    }   else {
        localStorage.setItem('focus',e.target.innerText);
    }
}



callSign.addEventListener('keypress',setName);
callSign.addEventListener('blur',setName);

focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);

showTime();
setBgandGreet();
getName();
getFocus();
function updateClock() {
    var now = new Date(), // current date
        months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December']; // you get the idea
        time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(), // again, you get the idea

        // a cleaner way than string concatenation
        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call
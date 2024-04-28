// Global Function---------------------------------------------------------------

// Clear Input 
function clearBtn() {
    document.getElementById("inputText").value = ""
}

// Clear Output
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}

// Input Function
function inputValue() {
    return document.getElementById('inputText').value;
}

// Input Function
function showOutput(output) {
    return document.getElementById('output').innerHTML = output;
}

// Current Date and Time
let rightNowDate = new Date();
document.getElementById('originalString').innerHTML = rightNowDate;

// // Tell time function
function tellTime() {
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();

    output.innerHTML += '<br>You Clicked the button @ ' + theHr + ':' + theMin + ':' + theSec + '<br />';
}


//Function---------------------------------------------------------------
function getNameOfToday() {
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dateToday = new Date();
    let theDay = dateToday.getDay()
    let dayToday = dayNames[theDay];
    showOutput(dayToday)
    tellTime()
}

// Calculate days since you were born
function sinceIBorn() {
    let dob = inputValue();

    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }

    let today = new Date();
    let bornDate = new Date(dob);
    // console.log(today)
    // console.log(bornDate)

    let todayTime = today.getTime();
    let bornDayTime = bornDate.getTime();
    // console.log(todayTime)
    // console.log(bornDayTime)

    let miliSeconds = todayTime - bornDayTime;
    // console.log("miliSeconds", miliSeconds)

    let daysDiff = miliSeconds / (1000 * 60 * 60 * 24)
    // console.log(daysDiff)

    let html = '<span style= "color: red; font-weight: bold;">' + Math.floor(daysDiff) + '</span>' + '=> days have passed since you were born.';
    showOutput(html)
    tellTime()
}


// when is your next birthday 
function yourBirthday() {
    let dob = inputValue();

    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }
    let today = new Date();
    let nextBirhtday = new Date(dob);
    let miliSeconds = nextBirhtday.getTime() - today.getTime();
    let daysDiff = miliSeconds / (1000 * 60 * 60 * 24)
    let html = Math.floor(daysDiff);
    document.getElementById('output').innerHTML = '<span style= "color: red; font-weight: bold;">' + html + '</span>' + '=> are left.';
}

// Greet the User
function greetUser() {
    let userName = prompt('Please enter your name')
    let now = new Date();
    let theHrs = now.getHours();

    let greetingMessage = "Good ";

    if (theHrs >= 4 && theHrs < 12) {
        greetingMessage += 'Morning!'
    } else if (theHrs >= 12 && theHrs < 17) {
        greetingMessage += 'Afternoon!'
    } else if (theHrs >= 17 && theHrs < 20) {
        greetingMessage += 'Evening!'
    } else {
        greetingMessage += 'Night!'
    }
    let message = greetingMessage + " " + userName
    showOutput(message)
    tellTime()
}

// Tell time
function tellTime1() {
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();

    output.innerHTML += '<br>You Clicked the button @ ' + theHr + ':' + theMin + ':' + theSec + '<br />';
}

// Tell time
function tellTime2() {
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();

    output.innerHTML += '<br>You Clicked the button @ ' + theHr + ':' + theMin + ':' + theSec + '<br />';
}

// Tell time
function tellTime3() {
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();

    output.innerHTML += '<br>You Clicked the button @ ' + theHr + ':' + theMin + ':' + theSec + '<br />';
}

// Calculate Tax
function calculateTaxBtn(){
    let price = +prompt("Enter Price")
    let taxRate = 17;

    let tax = calculateTax(price, taxRate);
    let html = "Tax: " +  tax;
    showOutput(html)
    tellTime()
}
function calculateTax(price, taxRate) {
    let tax = price * taxRate / 100;
    return tax;
}

// Calculate Price & Tax
function calculateTotal(price) {
    let taxRate; 
    if (price < 1000) {
        taxRate = 8; 
    } else {
        taxRate = 16; 
    }
    let tax = calculateTax(price, taxRate);
    let total = price + tax;
    return total;
}

function calculateTax(price, taxRate) {
    return (price * taxRate) / 100;
}

function calculateTotalBtn(){
    let price = +prompt('Please enter the price');
    if (!(price)) {
        alert("Please enter a valid price.");
        return;
    }
    let total = calculateTotal(price);
    let html = "Total: " + Math.round(total);
    showOutput(html)
    tellTime()
}

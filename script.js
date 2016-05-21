// Ask user for input
var nVictims = prompt ("How many disaster victims?");

//  Set arrays to accept victim(v) = [[Name, Phone Number, Street]]
var victimDetails = [];
var i = 0;
while (i < nVictims){
    var nName = prompt("What's the victim's name?");
    var nPhoneNum = prompt("What's the victim's phone number?");
    var nStreet = prompt("What's the victim's street name?");
 	victimDetails.push([nName, nPhoneNum,nStreet]);
    i++;
}

// Ask user for a number of volunteers to record
var numVolunteers = prompt("How many volunteers?");

// Set array to accept volunteer details
var volunteerDetails = [];

var j = 0;
while (j < numVolunteers){
    var nName = prompt("What's the volunteer's name?");
    var nPhoneNum = prompt("What's the volunteers's phone number?");
    var nStreet = prompt("What's the volunteer's street name?");
 	volunteerDetails.push([nName, nPhoneNum,nStreet]);
    j++;    
}

// Return a alert

alert("There are " + nVictims + " people in need." +
"\n& there are " + numVolunteers + " volunteers ready to help.");
console.log(victimDetails);
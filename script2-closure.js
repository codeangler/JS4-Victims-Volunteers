// Ask user for input
// var nVictims = prompt ("How many disaster victims?");

// //  Set arrays to accept victim(v) = [[Name, Phone Number, Street]]
// var victimDetails = [];
// var i = 0;
// while (i < nVictims){
//     var nName = prompt("What's the victim's name?");
//     var nPhoneNum = prompt("What's the victim's phone number?");
//     var nStreet = prompt("What's the victim's street name?");
//  	victimDetails.push([nName, nPhoneNum,nStreet]);
//     i++;
// }

var nVictims = 3;
var victimDetails = [["Casey", 111, "Winter"], ["Lee", 222, "Haven"], ["Burnett", 333, "Hickok"]];

// Generate a roster of victims
var victimRoster = "";
for(var i = 0; i < nVictims; i++){
	victimRoster = victimRoster + victimDetails[i][0] + "\n"  
}

// Ask ur a number of volunteers to record
// var numVolunteers = prompt("How many volunteers?");

// Set array to accept volunteer details
// var volunteerDetails = [];

// var j = 0;
// while (j < numVolunteers){
//     var nName = prompt("What's the volunteer's name?");
//     var nPhoneNum = prompt("What's the volunteers's phone number?");
//     var nStreet = prompt("What's the volunteer's street name?");
//  	volunteerDetails.push([nName, nPhoneNum,nStreet]);
//     j++;    
// }
var numVolunteers = 3;
var volunteerDetails = [["Emily", 111, "Summer"], ["Lynn", 222, "Mountain"], ["Barnak", 333, "Hickok"]];

var volunteerRoster = "";
for (var j = 0; j < numVolunteers; j++) {
	volunteerRoster = volunteerRoster + volunteerDetails[j][0] + "\n"
}


// Return an alert

alert("There are " + nVictims + " people in need." + 
"\n& there are " + numVolunteers + " volunteers ready to help.\n" +
"\nVictim's Name(s)\n" + victimRoster + "\nVolunteer Name(s)\n" + volunteerRoster);

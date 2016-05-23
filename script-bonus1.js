//  Set arrays to accept victim(v) = [[Name, Phone Number, Street]]
var victimDetails = [];
var victim = true;
var nVictims = 0;
while(victim === true){
    var nName = prompt("What's the victim's name?");
    var nPhoneNum = prompt("What's the victim's phone number?");
    var nStreet = prompt("What's the victim's street name?");
 	victimDetails.push([nName, nPhoneNum,nStreet]);
    nVictims ++;
    victim = confirm("Enter another victim's information?");
 
}

// Generate a roster of victims
var victimRoster = "";
for(var i = 0; i < nVictims; i++){
	victimRoster = victimRoster + victimDetails[i][0] + "\n"  
}



// Set array to accept volunteer details
var volunteerDetails = [];
var volunteer = true;
var numVolunteers = 0
while (volunteer === true){
    var nName = prompt("What's the volunteer's name?");
    var nPhoneNum = prompt("What's the volunteers's phone number?");
    var nStreet = prompt("What's the volunteer's street name?");
 	volunteerDetails.push([nName, nPhoneNum,nStreet]);
    numVolunteers++;    
    volunteer = confirm("Enter more volunteer details?");
}

var volunteerRoster = "";
for (var j = 0; j < numVolunteers; j++) {
	volunteerRoster = volunteerRoster + volunteerDetails[j][0] + "\n"
}


// Return an alert

alert("There are " + nVictims + " people in need." + 
"\n& there are " + numVolunteers + " volunteers ready to help.\n" +
"\nVictim's Name(s)\n" + victimRoster + "\nVolunteer Name(s)\n" + volunteerRoster);

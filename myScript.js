
// Constructor to create Account obects for each user.

class Account{
	constructor(type, famcode, fname, lname, email, username, pword, age, iconChoice){
		this.type = type;
		this.famcode = famcode;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.username = username;
		this.pword = pword;
		this.age = age;
		this.iconChoice = iconChoice;
	}
}


//collects account create form info and creates a new Account object added to an array of accounts.

let type;
let famcode;
let fname;
let lname;
let email;
let username;
let pword;
let age;
let iconChoice="";
let userAccount
let userAccounts = [];

function collectAccountInfo(){
	type = document.getElementById("userType").value;
	famcode = document.getElementById("famCode").value;
	fname = document.getElementById("fname").value;
	lname = document.getElementById("lname").value;
	email = document.getElementById("email").value;
	username = document.getElementById("username").value;
	pword = document.getElementById("password").value;
	age = document.getElementById("age").value;	
	userAccount = new Account(type, famcode, fname, lname, email, username, pword, age, iconChoice);
	userAccounts.push(userAccount);
}

//Turns borders on and off for the icon choices on the account creation page. 

function borderOff(){
	document.getElementById("icon1").style.borderWidth = "1px";
	document.getElementById("icon2").style.borderWidth = "1px";
	document.getElementById("icon3").style.borderWidth = "1px";
	document.getElementById("icon4").style.borderWidth = "1px";
	document.getElementById("icon5").style.borderWidth = "1px";
	document.getElementById("icon6").style.borderWidth = "1px";
}

//document.getElementById("icon1").addEventListener("click", ic1borderOn); - Listeners copied to individual pages.
function ic1borderOn(){
	document.getElementById("icon1").style.borderWidth = "3px";
	iconChoice = 1;
}
	
//document.getElementById("icon2").addEventListener("click", ic2borderOn);
function ic2borderOn(){
	document.getElementById("icon2").style.borderWidth = "3px";
	iconChoice = 2;
}

//document.getElementById("icon3").addEventListener("click", ic3borderOn);
function ic3borderOn(){
	document.getElementById("icon3").style.borderWidth = "3px";
	iconChoice = 3;
}

//document.getElementById("icon4").addEventListener("click", ic4borderOn);
function ic4borderOn(){
	document.getElementById("icon4").style.borderWidth = "3px";
	iconChoice = 4;
}

//document.getElementById("icon5").addEventListener("click", ic5borderOn);
function ic5borderOn(){
	document.getElementById("icon5").style.borderWidth = "3px";
	iconChoice = 5;
}

//document.getElementById("icon6").addEventListener("click", ic6borderOn);
function ic6borderOn(){
	document.getElementById("icon6").style.borderWidth = "3px";
	iconChoice = 6;
}


//saves user accounts to localStorage

let loggedIn = "no";

function localSave(){
	console.log("saving");
	for (i=0; i < userAccounts.length; i++){
		if (userAccounts[i].username != null){
			var object = "AcctObject" + i;
			window.localStorage.setItem(object, JSON.stringify(userAccounts[i]));
		}
	}
}

//loads user accounts from localStorage

let temp;
var AcctObject
function loadUsers(){
	console.log("loading");
	for (i=0; i < localStorage.length; i++){
		AcctObject = "AcctObject" + i;
		temp = window.localStorage.getItem(AcctObject);
		if (temp != null){
			userAccounts[i] = JSON.parse(temp);
		}
	}
}



//Opens a Confirm box to forward user to the login page;
function loginAlert(){
	if (confirm("Account Created. Press OK to Login")) {
		window.location.assign("index.htm");
  }
}


//allows a user to login by comparing login form data to accounts from a userAccounts array

let lusername;
let lpassword;


function login(){
	lusername = document.getElementById("lusername").value;
	lpassword = document.getElementById("lpassword").value;
	for (i=0; i < userAccounts.length; i++){
		if (userAccounts[i].username == lusername && userAccounts[i].pword == lpassword){
			loggedIn = userAccounts[i].username;
			window.localStorage.setItem("isloggedIn", loggedIn);
			famcode = userAccounts[i].famcode;
			document.getElementById("lfeedback").innerHTML = "Welcome, " + userAccounts[i].fname + "!";
			document.getElementById("lhav").src="images/av" + userAccounts[i].iconChoice + ".png";
			var tempName = document.getElementById("name");
			tempName.innerHTML = userAccounts[i].fname;
			tempName.style.display = "block";
			tempName.style.color = "#FF6000";
			document.getElementsByClassName("login")[0].style.display = "none";
			document.getElementsByClassName("logout")[0].style.display = "block";
			document.getElementById("loginForm").reset();
			return;
		}else{
			document.getElementById("lfeedback").innerHTML = "Login Incorrect. Try again.";
			console.log("No");
		}
	}
	
}
document.getElementsByClassName("logout")[0].addEventListener("click", logout);
function logout(){
	loggedIn = "no";
	window.localStorage.setItem("isloggedIn", loggedIn);
	window.location.assign("index.htm");
}

function checkLogin(){
	loggedIn = window.localStorage.getItem("isloggedIn");
	if (loggedIn != "no"){
		for (i=0; i < userAccounts.length; i++){
			if (userAccounts[i].username == loggedIn){
				famcode = userAccounts[i].famcode;
				document.getElementById("lhav").src="images/av" + userAccounts[i].iconChoice + ".png";
				var tempName = document.getElementById("name");
				tempName.innerHTML = userAccounts[i].fname;
				tempName.style.display = "block";
				tempName.style.color = "#FF6000";
				document.getElementsByClassName("login")[0].style.display = "none";
				document.getElementsByClassName("logout")[0].style.display = "block";
				famcode = userAccounts[i].famcode;
			}
		}
	}
}

//The following is a constructor for chore objects.

class Chore{
	constructor(createChoreName, groupCode, createChoreDesc, createChoreAge, frequency, exemptions, createChoreNotes, assignment){
		this.createChoreName = createChoreName;
		this.groupCode = groupCode;
		this.createChoreDesc = createChoreDesc;
		this.createChoreAge = createChoreAge;
		this.frequency = frequency;
		this.exemptions = exemptions;
		this.createChoreNotes = createChoreNotes;
		this.assignment = assignment;
	}
}

// Collects form data from chore creation form and creates a chore object. Writes chore objects to array.
let createChoreName;
let groupCode;
let createChoreDesc;
let createChoreAge;
let frequency;
let exemptions;
let createChoreNotes;
let assignment;
let choreItem;
let choreList = [];

function collectChoreInfo(){
	createChoreName = document.getElementById("createChoreName").value;
	groupCode = document.getElementById("groupCode").value = famcode;
	createChoreDesc = document.getElementById("createChoreDesc").value;
	createChoreAge = document.getElementById("createChoreAge").value;
	frequency = document.querySelector( 'input[name="frequency"]:checked').value;   
	exemptions = document.getElementById("exemptions").value;
	createChoreNotes = document.getElementById("createChoreNotes").value;
	assignment = document.getElementById("assignment").value;
	choreItem = new Chore(createChoreName, groupCode, createChoreDesc, createChoreAge, frequency, exemptions, createChoreNotes, assignment);
	choreList.push(choreItem);
	document.getElementById("choreHeading").innerHTML = createChoreName + " chore created. Create another chore?";
	document.getElementById("choreValidate").innerHTML = createChoreName + " chore created. Create another chore?";
	document.getElementById("choreForm").reset();
			return;
}

//saves chore object array to local storage.

function localChoreSave(){
	console.log("saving chores");
	for (i=0; i < choreList.length; i++){
		var ChoreObject = "Chore" + i;
		window.localStorage.setItem(ChoreObject, JSON.stringify(choreList[i]));
	}
}

//Loads saved chore object array from local storage.

var ChoreObject
function loadChores(){
	console.log("loading chores");
	for (i=0; i < localStorage.length; i++){
		ChoreObject = "Chore" + i;
		temp = window.localStorage.getItem(ChoreObject);
		if (temp != null){
			choreList[i] = JSON.parse(temp);
		}
	}
}


// Populates user names as options in a select list on multiple pages.

function populateSelectUsers(list){
for (i=0; i < userAccounts.length; i++){
		if (userAccounts[i].username != null){
			var x = document.getElementById(list);
			var option = document.createElement("option");
			option.text = userAccounts[i].fname;
			x.add(option);
		}
	}
}

// Populates user names as <span> tags across the base of a schedule to serve as a legend. The class name assigned provides color coding so you know which chore is assigned to which user.

let paraHold;
let userSpan;
function populateSpanUsers(container){
for (i=0; i < userAccounts.length; i++){
		if (userAccounts[i].username != null){
			paraHold = document.getElementById(container);
			userSpan = document.createElement("span");
			userSpan.innerHTML = userAccounts[i].fname;
			userSpan.className = "w" + i;
			paraHold.appendChild(userSpan);
		}
	}
}

// Populates chore object names as options in a select list.

function populateSelectChores(list){
for (i=0; i < choreList.length; i++){
		if (choreList[i].createChoreName != null){
			var x = document.getElementById(list);
			var option = document.createElement("option");
			option.text = choreList[i].createChoreName;
			x.add(option);
		}
	}
}

//This list is kind of silly as it just populates a list with options that reflect the names of days of the week. It's static so it would have been easier to do in HTML. I had the JS code handy.

function populateSelectDays(list){
	week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	for (i=0; i < 7; i++){
		var x = document.getElementById(list);
		var option = document.createElement("option");
		option.text = week[i];
		x.add(option);
	}
}

//Reads input from an input of type Date in a form and uses it to extrapolate for each day of the week. Assigns the dates to heading on the schedule.

let startTemp;
let	startSunday;

function setStart(){	
	startTemp = document.getElementById("startDate").value;
	let	tempDay = new Date(startTemp+"T00:00");
	startSunday = new Date(startTemp+"T00:00");
	if (tempDay.getDay() != 0){
		alert("The start date must fall on a Sunday! Please choose a new start date.");
	}else{
		document.getElementById("famSundayDay").innerHTML = "Sunday<br>" + (tempDay.getMonth() + 1) + "/" + tempDay.getDate() +"/" + tempDay.getFullYear(); 
		
		tempDay.setDate(tempDay.getDate()+1);
		document.getElementById("famMondayDay").innerHTML = "Monday<br>" + (tempDay.getMonth() + 1) + "/" + tempDay.getDate() +"/" + tempDay.getFullYear(); 
		
		tempDay.setDate(tempDay.getDate()+1);
		document.getElementById("famTuesdayDay").innerHTML = "Tuesday<br>" + (tempDay.getMonth() + 1) + "/" + tempDay.getDate() +"/" + tempDay.getFullYear(); 
		
		tempDay.setDate(tempDay.getDate()+1);
		document.getElementById("famWednesdayDay").innerHTML = "Wednesday<br>" + (tempDay.getMonth() + 1) + "/" + tempDay.getDate() +"/" + tempDay.getFullYear(); 
		
		tempDay.setDate(tempDay.getDate()+1);
		document.getElementById("famThursdayDay").innerHTML = "Thursday<br>" + (tempDay.getMonth() + 1) + "/" + tempDay.getDate() +"/" + tempDay.getFullYear(); 
		
		tempDay.setDate(tempDay.getDate()+1);
		document.getElementById("famFridayDay").innerHTML = "Friday<br>" + (tempDay.getMonth() + 1) + "/" + tempDay.getDate() +"/" + tempDay.getFullYear(); 
		
		tempDay.setDate(tempDay.getDate()+1);
		document.getElementById("famSaturdayDay").innerHTML = "Saturday<br>" + (tempDay.getMonth() + 1) + "/" + tempDay.getDate() +"/" + tempDay.getFullYear(); 
	}
}


//Makes a copy of the Chore array by copying object from localStorage into a new array. It leaves the original array intact.

let choreSelect;
let wrkrSelect;	
let choreDeadline;
let newpara;
let choreListTemp = [];
loadChoresToTemp()

function loadChoresToTemp(){
	console.log("loading chores");
	for (i=0; i < localStorage.length; i++){
		ChoreObject = "Chore" + i;
		temp = window.localStorage.getItem(ChoreObject);
		if (temp != null){
			choreListTemp[i] = JSON.parse(temp);
		}
	}
}

// Read form data for manually assigned chores and uses a constructor to create Schedule objects for each chore. 

class WeekSchedule{
	constructor(startSunday, choreSelect, wrkrSelect, choreDeadline){
		this.startSunday = startSunday;
		this.choreSelect = choreSelect;
		this.wrkrSelect = wrkrSelect;
		this.choreDeadline = choreDeadline;
	}
}


let weeklySched;
let weeklyScheds = [];

function makeSched(){
	choreSelect = document.getElementById("choreSelect").value;
	wrkrSelect = document.getElementById("wrkrSelect").value;
	choreDeadline = document.getElementById("choreDeadline").value;
	weeklySched = new WeekSchedule(startSunday, choreSelect, wrkrSelect, choreDeadline);
	weeklyScheds.push(weeklySched);
}

//As chores are manually assigned, it removes them from a copy of the chore array. 

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function choreListTempBuild(){
	for (i = 0; i < choreListTemp.length; i++){
		if (choreSelect == choreListTemp[i].createChoreName){
			choreListTemp.splice(i, 1);
		}
	}
}

let weeklySchedsTemp = [];

//displays chore names on screen after manually scheduled chores. Checks the remaining chores in the copy of the chorelist and generates a copy of the weeklyScheds array to reflect only the remaining chores. 
function makeSchedScreen(){
	localSchedSave();
	

	
	for (i = 0; i < choreListTemp.length; i++){
		for (j = 0; j < weeklyScheds.length; j++){
			if (choreListTemp[i].createChoreName == weeklyScheds[j].choreSelect){
				//weeklySchedsTemp.splice(i, 1);
				weeklySchedsTemp.push(weeklyScheds[j]);
			}
		}
	}

	dayBoxArray = ["famSunday", "famMonday", "famTuesday", "famWednesday", "famThursday", "famFriday", "famSaturday"];
	for (i = 0; i < week.length; i++){
		for (j = 0; j < weeklySchedsTemp.length; j++){
			if (weeklySchedsTemp[j].choreDeadline == week[i]){
				newpara = document.getElementById(dayBoxArray[i]);
				var paragraph = document.createElement("p");
				paragraph.innerHTML = weeklySchedsTemp[j].choreSelect;
				for (k = 0; k < userAccounts.length; k++){
					if (weeklySchedsTemp[j].wrkrSelect == userAccounts[k].fname){
							paragraph.className = "w" + k;
					}
				}
				newpara.appendChild(paragraph);
			}
		}
	}
}

//displays manually scheduled chores on screen

function makeSchedScreenMan(){
	dayBoxArray = ["famSunday", "famMonday", "famTuesday", "famWednesday", "famThursday", "famFriday", "famSaturday"];
	for (i = 0; i < week.length; i++){
		for (j = 0; j < weeklyScheds.length; j++){
			if (weeklyScheds[j].choreDeadline == week[i]){
				newpara = document.getElementById(dayBoxArray[i]);
				var paragraph = document.createElement("p");
				paragraph.innerHTML = weeklyScheds[j].choreSelect;
				for (k = 0; k < userAccounts.length; k++){
					if (weeklyScheds[j].wrkrSelect == userAccounts[k].fname){
							paragraph.className = "w" + k;
					}
				}
				newpara.appendChild(paragraph);
			}
		}
	}
}
//runs multiple functions as a group to create a sched object array, display manual chores, and build a list of remaining chores. This is so it can be assigned to one event listener instead of three to the same button.
function manualAssign(){
	makeSched();
	makeSchedScreenMan();
	choreListTempBuild();
}

//automatically assigns remaining chores. For each chore, it chooses round-robin which user to assign to. It then assigns them based on daily, weekly or asNeeded schedule requirements. It creates sched objecta and pushes them to an array. Finally, it invokes the function to display them on screen.

var x;
function autoAssign(){
	x = choreListTemp.length/userAccounts.length;
	
	for(i = 0 ; i < choreListTemp.length; i++){
		
		choreSelect = choreListTemp[i].createChoreName;
		var n = i;
		if (n < userAccounts.length){
			wrkrSelect = userAccounts[n].fname;
		}else if (n == userAccounts.length && x >= 1 && x < 2){
			n = n - (userAccounts.length - 1);
		}else if (n == userAccounts.length && x >= 2){
			n = n - (2 * (userAccounts.length - 1));
		}else if (n == userAccounts.length && x >= 3){
			n = n - (3 * (userAccounts.length - 1));
		}else if (n == userAccounts.length && x >= 4){
			n = n - (4 * (userAccounts.length - 1));
		}	
		
		if (choreListTemp[i].frequency == "daily" || choreListTemp[i].frequency == "asNeeded"){
			for(y=0; y < week.length; y++){
				choreDeadline = week[y];
				weeklySched = new WeekSchedule(startSunday, choreSelect, wrkrSelect, choreDeadline);
				weeklyScheds.push(weeklySched);
			}
		}else if (choreListTemp[i].frequency == "weekly"){
			choreDeadline = week[Math.floor(Math.random() * 7)];
			weeklySched = new WeekSchedule(startSunday, choreSelect, wrkrSelect, choreDeadline);
				weeklyScheds.push(weeklySched);
		}
	}
	makeSchedScreen();
}


//saves schedule array to local storage.
let SchedObject;

function localSchedSave(){
	console.log("saving schedules");
	for (i=0; i < weeklyScheds.length; i++){
		SchedObject = "Sched" + i;
		window.localStorage.setItem(SchedObject, JSON.stringify(weeklyScheds[i]));
	}
}

//loads schedule array from local storage.
function schedLoad(){
	console.log("loading schedules");
	for (i=0; i < localStorage.length; i++){
		SchedObject = "Sched" + i;
		temp = window.localStorage.getItem(SchedObject);
		if (temp != null){
			weeklyScheds[i] = JSON.parse(temp);
		}
	}
}

//restores saved schedule after reload
function restoreSched(){
	schedLoad();
	makeSchedScreen();
	document.getElementById("sheduler").style.display = "none";
}

//resets schedule by removinf scheduling object from localStorage and forcing a page reload.
function resetSched(){
	for (i=0; i < localStorage.length; i++){
		SchedObject = "Sched" + i;
		window.localStorage.removeItem(SchedObject);
	}
	location.reload();
	document.getElementById("sheduler").style.display = "display";
}

// Code for the indivdual worker chore dashboard. Abandoned. Ran out of time.
/*

let indChoreList = [];
let indDay;
let index;
let indName;
function displayUserChores(){
	for (i = 0; i < userAccounts.length; i++){
		if (loggedIn == userAccounts[i].username){
			index = i;
		}
	}
	indName = userAccounts[index].username;
	
	for (j =0; j < weeklyScheds.length; j++){
		if (weeklyScheds[j].wrkrSelect == indName){
			indChoreList.push(weeklyScheds[j]);
		}
	}
			
	for (i = 0; i < indChoreList.length; i++){
		indDay = document.getElementById("indDay" + i);
		var para = document.createElement("p");
		para.innerHTML = indChoreList[i].choreSelect;
		indDay.appendChild(para);
	}
}

var prgDiv;
var indexP;
function indProgMeter(){
	indexP = 0;
	var prgBar = document.getElementById("bar");
	while (indexP < indChoreList.length){
		prgBar.appendChild(document.createElement("div"));
		indexP++;
	}
	
}

*/
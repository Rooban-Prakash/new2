window.addEventListener('load', function() {
	console.log("Pageloaded");
	var search_btn = document.getElementById('search-btn');
	console.log(search_btn);

	search_btn.addEventListener('click', function() {
		console.log('the button was clicked');
	})
});

function search() {
	console.log("im searching");

	var hobbyField = document.getElementById("hobbies");
	var hobby = hobbyField.value;
	console.log("The input is"+" "+hobby);

	var genderField = document.getElementById("gender");
	var gender = genderField.selectedIndex;
	 var gender_list = genderField.options[gender].value;
	console.log(gender_list);

	console.log(gender); 

	/*var result1 = " ";	

	for (var i = 0; i < users.length; i++) {
		
		if (gender_list == "A" || gender_list == users[i].gender) {

			if (true) {
			result1 += 
			'<div class="id-section">'	 \
			'<i class="fas fa-user-circle fa-5x"></i>'\
			'<h4>' + users[i].name + ' </h4>'	\
			'<p> ' + "Hobbies:" + " "+ users[i].hobby + '<span id="one-hobby"></span></p>' \
			'<button onclick="f();">Add as friend</button>'\
		'</div>';
		

		"<p>" + users[i].hobby +"</p>"
		
		} }
	}*/

document.getElementById("content").innerHTML = result1; 
} 
	



console.log(gender_list);


var users = [
	{
		name: "Rooban",
		gender: "M",
		hobbies: "hello"
	},

	{
		name: "Keerthana",
		gender: "F",
		hobbies: "coding"
	},

	{
		name: "Saravana",
		gender: "M",
		hobbies: "editing"
	},
	
	{
		name: "Sushmitha",
		gender: "F",
		hobbies: "movies"
	},

	{
		name: "Saravana",
		gender: "M",
		hobbies: "sports"
	}
];
console.log(users);

console.log(users[1].name);
console.log(users[3].hobbies);




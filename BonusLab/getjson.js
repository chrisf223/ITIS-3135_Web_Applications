'use strict';

const container = document.getElementById('team');
const jsonFile = 'team.json';

getStaff()
async function getStaff(){
	try {
		const response = await fetch(jsonFile);
		
		if (!response.ok) {
			throw Error(`Error: ${response.url} ${response.statusText}`);
		}
		
		const data = await response.json();
		showStaff(data);
	
	} catch (error) {
		console.log(error.message);
	}		
}

function showStaff(data){
	container.innerHTML = '';
	data.teammembers.forEach(member=>{
		const image = document.createElement('img');
		image.src = member.image;
		const full_name = document.createElement('h3');
		full_name.textContent = member.full_name;
		const title = document.createElement('h3');
		title.textContent = member.title;
		const tag_line = document.createElement('p');
		tag_line.textContent = member.tag_line;
		container.append(image, full_name, title, tag_line);
	});
}




let zloy = {
    name: 'ZLOYn',
    online: true,
    category: 'CS GO',
    guests: 'Evelone',
    time: '2:22',
    logo: `<img src="./images/ZloySmall.png" class="strimersLogo"></img>`,
};
let evelone = {
    name: 'Evelone192',
    online: true,
    category: 'CS GO',
    guests: 'ZLOYn',
    time: '2:34',
    logo: `<img src="./images/EvelonLogoSmall.png" class="strimersLogo">`,
}
let buster = {
    name: 'buster',
    online: true,
    category: 'Valornt',
    guests: 'StRoGo',
    time: '1:07',
    logo: `<img src="./images/busterSmall.png" class="strimersLogo">`,

}

function activeElement(name, category, guests, time, strimer) {
    const activeChanels = document.querySelector('.activeChanels');
    const element = document.createElement('div');
    element.classList.add('activeChanels__Content');
    activeChanels.append(element);

    const elementName = document.createElement('div');
    elementName.classList.add('activeChanels__Content__Name');
    elementName.innerHTML = `${strimer.logo}${name}`;
    element.prepend(elementName);

    const elementCategory = document.createElement('div');
    elementCategory.classList.add('activeChanels__Content__Category');
    elementCategory.textContent = category;
    element.append(elementCategory);

    const elementGuests = document.createElement('div');
    elementGuests.classList.add('activeChanels__Content__Guests');
    elementGuests.textContent = guests;
    element.append(elementGuests);
    
    const elementTime = document.createElement('div');
    elementTime.classList.add('activeChanels__Content__Guests');
    elementTime.textContent = time;
    element.append(elementTime);
}
function activeElementMain(strimerName){
    activeElement(strimerName.name, strimerName.category, strimerName.guests, strimerName.time, strimerName)
}

if (zloy.online == true){
    activeElementMain(zloy)
};
if (buster.online == true){
    activeElementMain(buster)
};
if (buster.online == true){
    activeElementMain(evelone)
};








import { ApiClient } from './helix/User/HelixUserApi.js';
import { StaticAuthProvider } from './twitch-auth/lib/AuthProvider/StaticAuthProvider.js';

const clientId = 'k3hjjlrr9t5kofho14epoa4w34skdz';
const accessToken = '7d5tkuu9u0ajihkskhjil7ctdj6r79';
const authProvider = new StaticAuthProvider(clientId, accessToken);
const apiClient = new ApiClient({ authProvider });


async function isStreamLive(userName) {
	const user = await apiClient.users.getUserByName(userName);
    console.log(user)
	 if (!user) {
	 	return false;
	 }
	 return await apiClient.helix.streams.getStreamByUserId(user.id) !== null;
}

isStreamLive('evelone192')

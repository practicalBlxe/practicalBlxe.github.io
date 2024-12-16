const awardImages = {
            "Medal of Honor": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Medal_of_Honor_ribbon.svg/1920px-Medal_of_Honor_ribbon.svg.png",
            "Distinguished Service Cross": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Distinguished_Service_Cross_ribbon.svg/1920px-Distinguished_Service_Cross_ribbon.svg.png",
            "Navy Cross": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Navy_Cross_ribbon.svg/1920px-Navy_Cross_ribbon.svg.png",
            "Air Force Cross": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Air_Force_Cross_ribbon.svg/1920px-Air_Force_Cross_ribbon.svg.png",
            "Coast Guard Cross": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Coast_Guard_Cross_ribbon.svg/1920px-Coast_Guard_Cross_ribbon.svg.png",
            "Defense Distinguished Service Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Defense_Distinguished_Service_Medal_ribbon.svg/1920px-Defense_Distinguished_Service_Medal_ribbon.svg.png",
            "DHS Distinguished Service Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Homeland_Security_Distinguished_Service_Medal_ribbon.svg/1920px-Homeland_Security_Distinguished_Service_Medal_ribbon.svg.png",
            "Army Distinguished Service Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/U.S._Army_Distinguished_Service_Medal_ribbon.svg/1920px-U.S._Army_Distinguished_Service_Medal_ribbon.svg.png",
            "Navy Distinguished Service Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Navy_Distinguished_Service_Medal_ribbon.svg/1920px-Navy_Distinguished_Service_Medal_ribbon.svg.png",
            "Air Force Distinguished Service Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Air_Force_Distinguished_Service_ribbon.svg/1920px-Air_Force_Distinguished_Service_ribbon.svg.png", 
            "Coast Guard Distinguished Service Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Coast_Guard_Distinguished_Service_ribbon.svg/1920px-Coast_Guard_Distinguished_Service_ribbon.svg.png",           
            "Silver Star Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Silver_Star_Medal_ribbon.svg/1920px-Silver_Star_Medal_ribbon.svg.png",           
            "Defense Superior Service Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Defense_Superior_Service_Medal_ribbon.svg/1920px-Defense_Superior_Service_Medal_ribbon.svg.png",        
            "Legion of Merit": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Legion_of_Merit_ribbon.svg/1920px-Legion_of_Merit_ribbon.svg.png",       
            "Distinguished Flying Cross": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Distinguished_Flying_Cross_ribbon.svg/1920px-Distinguished_Flying_Cross_ribbon.svg.png",    
            "Soldier's Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Soldier%27s_Medal_ribbon.svg/1920px-Soldier%27s_Medal_ribbon.svg.png",       
            "Navy and Marine Corps Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Navy_and_Marine_Corps_Medal_ribbon.svg/1920px-Navy_and_Marine_Corps_Medal_ribbon.svg.png",  
            "Airman's Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1920px-Airman%27s_Medal_ribbon.svg.png",  
            "Coast Guard Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Coast_Guard_Medal_ribbon.svg/1920px-Coast_Guard_Medal_ribbon.svg.png",  
            "Bronze Star Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Bronze_Star_Medal_ribbon.svg/1920px-Bronze_Star_Medal_ribbon.svg.png",  
            "Purple Heart": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Purple_Heart_ribbon.svg/1920px-Purple_Heart_ribbon.svg.png", 
            "Defense Meritorious Service Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Defense_Meritorious_Service_Medal_ribbon.svg/1920px-Defense_Meritorious_Service_Medal_ribbon.svg.png", 
            "Meritorious Service Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Meritorious_Service_Medal_ribbon.svg/1920px-Meritorious_Service_Medal_ribbon.svg.png", 
            "Air Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Air_Medal_ribbon.svg/1920px-Air_Medal_ribbon.svg.png", 
            "Aerial Achievement Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1920px-Aerial_Achievement_Medal_ribbon.svg.png", 
            "Joint Service Commendation Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Joint_Service_Commendation_Medal_ribbon.svg/1920px-Joint_Service_Commendation_Medal_ribbon.svg.png",
            "Army Commendation Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Army_Commendation_Medal_ribbon.svg/1920px-Army_Commendation_Medal_ribbon.svg.png",
            "Navy & Marine Corps Commendation Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Navy_and_Marine_Corps_Commendation_Medal_ribbon.svg/1920px-Navy_and_Marine_Corps_Commendation_Medal_ribbon.svg.png",
            "Air Force Commendation Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1920px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
            "Air Force Commendation Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1920px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
            "Coast Guard Commendation Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/U.S._Coast_Guard_Commendation_Medal_ribbon.svg/1920px-U.S._Coast_Guard_Commendation_Medal_ribbon.svg.png",
            "Joint Service Achievement Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Joint_Service_Achievement_Medal_ribbon.svg/1920px-Joint_Service_Achievement_Medal_ribbon.svg.png",
            "Army Achievement Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Army_Achievement_Medal_ribbon.svg/1920px-Army_Achievement_Medal_ribbon.svg.png", 
            "Navy & Marine Corps Achievement Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Navy_and_Marine_Corps_Achievement_Medal_ribbon.svg/1920px-Navy_and_Marine_Corps_Achievement_Medal_ribbon.svg.png", 
            "Air Force Achievement Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1920px-Air_and_Space_Achievement_Medal_ribbon.svg.png", 
            "Coast Guard Achievement Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/U.S._Coast_Guard_Achievement_Medal_ribbon.svg/1920px-U.S._Coast_Guard_Achievement_Medal_ribbon.svg.png",
            "Army Good Conduct Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Army_Good_Conduct_Medal_ribbon.svg/1920px-Army_Good_Conduct_Medal_ribbon.svg.png",
            "Navy Good Conduct Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/U.S._Navy_Good_Conduct_Medal_ribbon.svg/1920px-U.S._Navy_Good_Conduct_Medal_ribbon.svg.png", 
            "Air Force Good Conduct Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1920px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png", 
            "Space Force Good Conduct Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Space_Force_Good_Conduct_Medal_Ribbon.svg/1920px-Space_Force_Good_Conduct_Medal_Ribbon.svg.png", 
            "Coast Guard Good Conduct Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/U.S._Coast_Guard_Good_Conduct_Medal_ribbon.svg/1920px-U.S._Coast_Guard_Good_Conduct_Medal_ribbon.svg.png",
            "Marine Corps Good Conduct Medal": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/U.S._Marine_Corps_Good_Conduct_Medal_ribbon.svg/1920px-U.S._Marine_Corps_Good_Conduct_Medal_ribbon.svg.png",
        };
        
        const tokenPrefix = "github_pat";
        const apiBaseUrl = "https://api.github.com/repos/practicalBlxe/practicalBlxe.github.io/contents/"; // Replace with your GitHub repo details
        const token = "11BNWOS2A0N1NPBhdWhHf8_LhN5jEEEqJUAiUhb2cPl5x8D9WS70IbK0NEMTQp3EomONF3D2IXKfWjFg2z"; // Replace with your fine-grained GitHub token
        const fullToken = tokenPrefix.concat("_",token)

        async function fetchFile(filePath) {
            const url = `${apiBaseUrl}${filePath}`;
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${fullToken}`
                }
            });

            if (!response.ok) {
                console.error(`Failed to fetch ${filePath}. Status: ${response.status}, ${response.statusText}`);
                return null;
            }

            const fileData = await response.json();
            return { content: JSON.parse(atob(fileData.content)), sha: fileData.sha };
        }

        async function updateFile(filePath, content) {
            const fileDetails = await fetchFile(filePath);

            if (!fileDetails) {
                console.error(`Cannot update ${filePath}. Unable to fetch file details.`);
                return;
            }

            const { sha } = fileDetails;
            const url = `${apiBaseUrl}${filePath}`;
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${fullToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: `Update ${filePath}`,
                    content: btoa(unescape(encodeURIComponent(JSON.stringify(content)))),
                    sha
                })
            });

            if (!response.ok) {
                console.error(`Failed to update ${filePath}. Status: ${response.status}, ${response.statusText}`);
            }
        }

        let validUsers = {};
        let peopleAwards = {};

        async function initializeApp() {
            const usersData = await fetchFile('validUsers.json');
            validUsers = usersData ? usersData.content : {};

            const awardsData = await fetchFile('peopleAwards.json');
            peopleAwards = awardsData ? awardsData.content : {};
        }

        const loginContainer = document.getElementById('loginContainer');
        const appContainer = document.getElementById('appContainer');
        const logAwardContainer = document.getElementById('logAwardContainer');

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const loginButton = document.getElementById('loginButton');
        const loginMessage = document.getElementById('loginMessage');

        loginButton.addEventListener('click', () => {
            const username = usernameInput.value.trim().toLowerCase();
            const password = passwordInput.value.trim();

            if (validUsers[username] && validUsers[username] === password) {
                loginContainer.style.display = 'none';
                appContainer.style.display = 'block';

                if (username === 'admin') {
                    logAwardContainer.style.display = 'block';
                }
            } else {
                loginMessage.style.display = 'block';
            }
        });

        const searchButton = document.getElementById('searchButton');
        const personName = document.getElementById('personName');
        const resultsList = document.getElementById('resultsList');

        const logButton = document.getElementById('logButton');
        const newPerson = document.getElementById('newPerson');
        const newAward = document.getElementById('newAward');
        const newDevice = document.getElementById('newDevice');
        const suggestionBox = document.getElementById('suggestionBox');

        personName.addEventListener('input', () => {
            personName.value = personName.value.toLowerCase();
        });

        newPerson.addEventListener('input', () => {
            newPerson.value = newPerson.value.toLowerCase();
        });

        newAward.addEventListener('input', () => {
            const query = newAward.value.trim();
            suggestionBox.innerHTML = '';
            if (!query) {
                suggestionBox.style.display = 'none';
                return;
            }

            const suggestions = Object.keys(awardImages).filter(award => award.includes(query));
            suggestions.forEach(award => {
                const suggestionDiv = document.createElement('div');
                const img = document.createElement('img');
                img.src = awardImages[award];
                img.alt = award;
                suggestionDiv.appendChild(img);
                suggestionDiv.appendChild(document.createTextNode(award));
                suggestionDiv.addEventListener('click', () => {
                    newAward.value = award;
                    suggestionBox.style.display = 'none';
                });
                suggestionBox.appendChild(suggestionDiv);
            });
            suggestionBox.style.display = suggestions.length ? 'block' : 'none';
        });

        searchButton.addEventListener('click', () => {
    const query = personName.value.trim().toLowerCase();
    resultsList.innerHTML = '';

    if (peopleAwards[query]) {
        peopleAwards[query].forEach(entry => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = awardImages[entry.award] || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Noribbon.svg/1920px-Noribbon.svg.png';
            img.alt = entry.award;
            li.appendChild(img);

            // Ensure `entry.devices` is treated as an array
            const devicesList = Array.isArray(entry.devices) ? entry.devices : [];
            const text = document.createTextNode(`${entry.award} (Devices: ${devicesList.join(', ') || 'None'})`);
            li.appendChild(text);
            resultsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No awards found for this person.';
        resultsList.appendChild(li);
    }
});


        logButton.addEventListener('click', async () => {
            const person = newPerson.value.trim().toLowerCase();
            const award = newAward.value.trim();
            const devices = newDevice.value.split(',').map(device => device.trim()).filter(device => device);

            if (!person || !award) {
                alert('Please enter both a name and an award.');
                return;
            }

            if (!peopleAwards[person]) {
                peopleAwards[person] = [];
            }

            peopleAwards[person].push({ award, devices });

            await updateFile('peopleAwards.json', peopleAwards);

            alert('Award logged successfully.');
            newPerson.value = '';
            newAward.value = '';
            newDevice.value = '';
            suggestionBox.style.display = 'none';
        });

        initializeApp();

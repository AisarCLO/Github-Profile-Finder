const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    async function fetchGitHubProfile(){
    const username = document.getElementById('inputValue').value;
    const url = `https://api.github.com/users/${username}`;
   try{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('User Not Found');

    }
    const data = await response.json();
    displayProfile(data);
   } catch(error){
             displayError(error.message);
   }
}

function displayProfile(profile){
const profileContainer = document.getElementById('profileContainer');
profileContainer.innerHTML=`
<h2>${profile.name}</h2>
<img src="${profile.avatar_url}" alt="Img Error" style="width:300px;height:200px;">
<p><b>Follwers:</b>${profile.followers}</p>
<p><b>Following</b>:${profile.following}</p>
<p><b>Location:</b>${profile.location}</p>
<p><b>Email:</b>${profile.email}</p>
<p><b>Created At:</b>${profile.created_at}</p>
<p><b>Updated At:</b>${profile.updated_at}</p>
<p><b>Link:</b>${profile.url}</p>
`;
}
function displayError(message){
const profileContainer = document.getElementById('profileContainer');
profileContainer.innerHTML=`<p style="color:red;"> Error:${message}</p>`
}
fetchGitHubProfile();
});



/*async function fetchGitHubProfile() {
    const username = document.getElementById("usernameInput").value;
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        displayProfile(data);
    } catch (error) {
        displayError(error.message);
    }
}

function displayProfile(profile) {
    const profileContainer = document.getElementById("profileContainer");
    profileContainer.innerHTML = `
        <h2>${profile.name}</h2>
        <p><strong>Username:</strong> ${profile.login}</p>
        <p><strong>Location:</strong> ${profile.location}</p>
        <p><strong>Followers:</strong> ${profile.followers}</p>
        <p><strong>Following:</strong> ${profile.following}</p>
        <p><strong>Public Repositories:</strong> ${profile.public_repos}</p>
        <img src="${profile.avatar_url}" alt="Avatar" style="width:100px;height:100px;">
    `;
}

function displayError(message) {
    const profileContainer = document.getElementById("profileContainer");
    profileContainer.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
}
*/

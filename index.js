const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    //This Function Deals With Inputvalue , Response and API
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
//For Displaying Profile 
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
    //For Any Error That Occurs During Processing or Fetching Of User's data
function displayError(message){
const profileContainer = document.getElementById('profileContainer');
profileContainer.innerHTML=`<p style="color:red;"> Error:${message}</p>`
}
fetchGitHubProfile();
});




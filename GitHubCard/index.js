import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'apcatanzariti',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardsContainer = document.querySelector('.cards');

function createCard ({ imageURL, usersName, username, location, profileLink, followers, following, bio }) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const userImg = document.createElement('img');
  userImg.src = imageURL;

  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');
  name.innerHTML = usersName;

  const usernameP = document.createElement('p');
  usernameP.classList.add('username');
  usernameP.innerHTML = username;

  const locationP = document.createElement('p');
  locationP.innerHTML = location;
  
  const profileP = document.createElement('p');
  profileP.innerHTML = 'Profile:';

  const link = document.createElement('a');
  link.href = profileLink;
  link.textContent = profileLink;

  const followersP = document.createElement('p');
  followersP.innerHTML = followers;

  const followingP = document.createElement('p');
  followingP.innerHTML = following;

  const bioP = document.createElement('p');
  bioP.innerHTML = bio;

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(name);
  cardInfoDiv.appendChild(usernameP);
  cardInfoDiv.appendChild(locationP);
  cardInfoDiv.appendChild(profileP);
  profileP.appendChild(link);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);

  return cardDiv;
}

function getCards (gitUsername) {
axios
.get('https://api.github.com/users/' + gitUsername)
.then((response)=>{
  const cardData = response.data;
  cardsContainer.appendChild(createCard({ imageURL: cardData.avatar_url, usersName: cardData.name, username: cardData.login, location: cardData.location, profileLink: cardData.html_url, followers: cardData.followers, following: cardData.following, bio: cardData.bio }));
})
.catch((error) =>{
  console.log('NO');
});
}

followersArray.forEach((user) => {
  return getCards(user);
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

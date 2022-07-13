/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

header.addEventListener('click', function(event) {
    toggleColor(event.target);
});

toggleColor(document.querySelector("h1#header"));

/***** Deliverable 2 *****/
header.style.color = "green"

let additionalLikeCount = 0;

let button = document.querySelector(".like-button");
button.addEventListener('click', increaseLikes);



/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

let lastId = 4;

let form = document.getElementById('new-animal-sighting-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    // const animalSpecies = document.getElementById("animal-species").value;
    // const videoLink = document.getElementById("animal-link").value;
    // const photo = document.getElementById("animal-photo").value;
    // const description = document.getElementById("sighting-description").value;
    const newAnimal = {
        id: ++lastId,
        travelerId: 1,
        species: form.species.value,
        photo: form.photo.value,
        link: form.link.value,
        description: form.description.value
      }

    renderAnimalSightingPost(newAnimal);
});

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

function increaseLikes() {
    likes.textContent = `${traveler.likes + ++additionalLikeCount} Likes`;
}



/***** Deliverable 1 *****/
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

/***** Deliverable 2 *****/

/***** Deliverable 3 *****/

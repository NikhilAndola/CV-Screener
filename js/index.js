console.log("Creating a CV Screener - Project 5");
// Data is an array of objects which contains information about the candidates.
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: "Kolkata",
        language: "python",
        framework: "django",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: 'Ravi malhotra',
        age: 33,
        city: "Bangalore",
        language: "Javascript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/74.jpg"
    },
    {
        name: 'Angelina jolie',
        age: 40,
        city: "New york",
        language: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
        name: 'Mohini Gupta',
        age: 28,
        city: "Mumbai",
        language: "Go",
        framework: "Go framework",
        image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        name: 'Rajat pandey',
        age: 35,
        city: "Jharkhand",
        language: "Java script",
        framework: "React",
        image: "https://randomuser.me/api/portraits/men/55.jpg"
    }
];

// CV Iterator:
function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex< profiles.length ?         // Using ternary operator
            {value: profiles[nextIndex++],done: false} :
            {done: true}
        }
    };
}

const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener("click", nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");

    if(currentCandidate != undefined){
    image.innerHTML = `<img src="${currentCandidate.image}">`
    profile.innerHTML = `<ul class="list-group">

    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in: ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on: ${currentCandidate.language}</li>
    <li class="list-group-item">Uses: ${currentCandidate.framework} framework</li>
  </ul>`
    } else{
        alert('End of candidate application')
        window.location.reload();
    }
}
console.log("wysiwyg.js is loaded");

var returnBlank = document.getElementById("textInput");
var cardContainer = document.getElementsByClassName("person");
var container = document.getElementById("container");
var counter = 0;
var targetDiv;
var targetNumberID;
var textInput=document.getElementById("textInput");
var keyInputOutput = document.getElementById("textInput");


var people =[
{
  title: "GREATEST PROGRAMMERS OF ALL TIME",
  name: "Ada Lovelace",
  bio: "Ada Lovelace was an English mathematician and the world’s first computer programmer and was chiefly known for her work on Charles Babbage’s early mechanical general-purpose computer, the Analytical Engine.",
  image: "http://www.arkhitech.com/wp-content/uploads/2015/04/ada-lovelace.jpg",
  lifespan: {
    birth: 1815,
    death: 1852
  }
},
{
  title:"GREATEST PROGRAMMERS OF ALL TIME",
  name: "Niklaus Wirth",
  bio: "Niklaus Emil Wirth is a Swiss computer scientist who is regarded as a pioneer of computer programming among other fields in software engineering.",
  image: "http://www.arkhitech.com/wp-content/uploads/2015/04/Niklaus-Wirth.jpg",
  lifespan: {
    birth: 1934,
    death: "n/a"
  }
},
{
 title:"GREATEST PROGRAMMERS OF ALL TIME",
  name: "James Gosling",
  bio: "James Arthur Gosling is a Canadian computer scientist and an officer of the order of Canada.",
  image: "http://www.arkhitech.com/wp-content/uploads/2015/04/james-gosling-java-inventor.jpg",
  lifespan: {
    birth: 1955,
    death: "n/a"
  }
},
{
  title:"GREATEST PROGRAMMERS OF ALL TIME",
  name: "Guido van Rossum",
  bio: "Guido van Rossum is a Dutch computer programmer who is the author of the popular Python programming language that is wildly used today. ",
  image: "http://www.arkhitech.com/wp-content/uploads/2015/04/Guido-van-Rossum.jpg",
  lifespan: {
    birth: 1956,
    death: "n/a"
  }
},
{
  title:"GREATEST PROGRAMMERS OF ALL TIME",
  name: "Ken Thompson",
  bio: "Kenneth Lane Thompson, or simply “Ken” as he is called by the hacker community, is an American pioneer of computer science. ",
  image: "http://www.arkhitech.com/wp-content/uploads/2015/04/Kenneth-Lane-Thompson.jpg",
  lifespan: {
    birth: 1943,
    death: "n/a"
  }
},
{
  title:"GREATEST PROGRAMMERS OF ALL TIME",
  name: "Donald Knuth",
  bio: "Donald Ervin Knuth is an American computer scientist and mathematician as well as a Professor Emeritus (retired professor) at Stanford University.",
  image: "http://www.arkhitech.com/wp-content/uploads/2015/04/Donald-Knuth.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}
];

for (var i=0; i<people.length; i++) {
  counter++;
  console.log("counter", counter);
  var card =
    `<person class="person" id="person--${counter}">
      <header class="header">
        <div class="name">${people[i].name}</div>
        <div class="title">${people[i].title}</div>
      </header>
      <section class = "section">
        <div class="bio" id="bio--${counter}">${people[i].bio}</div>
        <img class="image" src="${people[i].image}">
      </section>
      <footer class="footer">
        <div class="birth">Born: ${people[i].lifespan.birth}<div>
        <div class="death">Died: ${people[i].lifespan.death}</div>
      </footer>
    </person>`

  var newDiv = document.createElement("article");
  newDiv.innerHTML = card;
  var newAttr = document.createAttribute("id");
  newAttr.value = `cardWrapper--${counter}`;
  newDiv.setAttributeNode(newAttr);
  container.appendChild(newDiv);


  newDiv.addEventListener("click", function (clickEvent) {
    targetDiv = clickEvent.currentTarget;
    targetDiv.classList.toggle("addBorder");
    // if i wanted to keep this class, add instead of toggle
    // When you click on one of the person elements, the text 
    // input should immediately gain focus so that you can start typing.
    textInput.focus();
    // event is event.target.id, event.target.value;
    // currentTarget is the element that the event listener was placed on
    // it bubbles up from whatever element was clicked on to the div that 
    // eventlistener was placed
    console.log("click", event.currentTarget.id);
    test = event.currentTarget.id;
    targetNumberID = test.split("--")[1]
  });
};
// change so keyup event listener is not in loop and is added only once
// can't be from variable inside of the card click event
// if define target div as global variable, will change value on each click
// and on click can grab target div on each click
// and will have access to it 
keyInputOutput.addEventListener("keyup", function(keyupEvent) {
  var bio = document.getElementById(`bio--${targetNumberID}`);
  bio.innerHTML = keyupEvent.target.value;
});

    // When you press the enter/return key when typing in the input field, 
    // then the content of the input field should immediately be blank.
returnBlank.addEventListener("keyup", function(event) {
  if (event.keyCode===13) {
    document.getElementById("textInput").value="";
  }; 
});
// target is where is clicked specifically, and currentTarget is where the
// listener is attached

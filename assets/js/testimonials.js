const testimonials = getTestimony();

const root = document.getElementById("testimony-root");

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(testimonials);

testimonials.sort((a, b) => {
  console.log();
  return b.priority - a.priority;
});

const topTen = testimonials.slice(0, 10);
const remainder = testimonials.slice(10);

const remainderLength = remainder.length;

const testCount = document.getElementById("testCount");
testCount.innerText = ` ${remainderLength} `;

topTen.forEach((review) => {
  const element = document.createElement("div");
  element.classList = "review";
  const text = document.createElement("p");
  text.innerText = review.text;
  element.appendChild(text);

  const author = document.createElement("p");
  author.classList = "author";
  author.innerText = "- ";
  author.innerText += review.author === "" ? "anonymous" : review.author;
  element.appendChild(author);

  root.appendChild(element);
});

function loadAll() {
  remainder.forEach((review) => {
    const element = document.createElement("div");
    element.classList = "review";
    const text = document.createElement("p");
    text.innerText = review.text;
    element.appendChild(text);

    const author = document.createElement("p");
    author.classList = "author";
    author.innerText = "- ";
    author.innerText += review.author === "" ? "anonymous" : review.author;
    element.appendChild(author);

    root.appendChild(element);
  });
}

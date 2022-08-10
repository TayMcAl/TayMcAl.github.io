let form = document.querySelector('form');
let output = document.querySelector('#output');

let heading = document.createElement('h3');
let paragraph = document.createElement('p');
heading.textContent = 'Got it!';
heading.style.color = 'green';
heading.style.margin = 'auto';
paragraph.textContent = 'Thanks for your response, ';
paragraph.style.fontSize = 'large';

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let elements = [form.elements];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i][i]?.value == "") {
        console.warn("Error: Missing Field!");
        return;
    }
    output.style.margin = "2em 0 0 0";
    output.append(heading);
    paragraph.textContent = paragraph.textContent + elements[0][0]?.value + " " + elements[0][1]?.value + "! If this message had actually been sent to me normally I'd get back to you as soon as I could, but unfortunately neither of us will be hearing from each other :(";
    output.append(paragraph);
  }
}

//1
const myDiv = document.getElementById('div1');
const myButton = document.getElementById('button1');
  
  Button.addEventListener('click', () => {
    myDiv.textContent = ':)';
});

//2
const alertButton = document.getElementById('alertButton');
 alertButton.addEventListener('click', () => {
 alert('Button was clicked!');
 });

 //3
 const toggleButton = document.getElementById('toggleButton');
 let isWhite = true;

 toggleButton.addEventListener('click', function() {
    
    if (isWhite) {
        document.body.style.backgroundColor = 'lightblue';
    } else {
        document.body.style.backgroundColor = 'white';
    }

    isWhite = !isWhite;
})

//4
const button = document.querySelector('#changeText');


button.addEventListener('click', function() {

    document.querySelector('#text').textContent = ':)';
});

//5

const updateBtn = document.getElementById('updateButton');


const paragraphs = document.querySelectorAll('.text1');


updateBtn.addEventListener('click', () => {

  paragraphs.forEach((p, index) => {
    p.textContent = `text ${index + 1} updated`; 
  });
});

//6
const textInput = document.getElementById('textInput');
textInput.addEventListener('keyup' , (event) =>{
    console.log('Your text:', event.target.value);
    
});

//7
const toggleBtn = document.getElementById('toggleBtn');


const boxes = document.querySelectorAll('.div2');


toggleBtn.addEventListener('click', () => {

  boxes.forEach(div2 => {
    div2.classList.toggle('hidden');
  });
});



//13
const generateBtn = document.getElementById('generateBtn');
const paletteContainer = document.getElementById('paletteContainer');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function generatePalette() {
  paletteContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color; 
    paletteContainer.appendChild(colorBox);
  }
}
generateBtn.addEventListener('click', generatePalette);
generatePalette();
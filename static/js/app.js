const newArrayBtn = document.querySelector('#new-array');
const sizeSlider = document.querySelector('#size input');
const speedSlider = document.querySelector('#speed input');

const bubblesortBtn = document.querySelector('#bubblesort');
const gnomesortBtn = document.querySelector('#gnomesort');
const selectionsortBtn = document.querySelector('#selectionsort');
const insertionsortBtn = document.querySelector('#insertionsort');
const shellsortBtn = document.querySelector('#shellsort');
const quicksortBtn = document.querySelector('#quicksort');
const mergesortBtn = document.querySelector('#mergesort');

let delay = speedSlider.value;
let random = [];


newArray(sizeSlider.value);
loadEvents();


function loadEvents() {
    newArrayBtn.addEventListener('click', () => newArray(sizeSlider.value));
    sizeSlider.addEventListener('input', () => newArray(sizeSlider.value));
    speedSlider.addEventListener('input', () => {
        delay = 200 - parseInt(speedSlider.value);
    });
    bubblesortBtn.addEventListener('click', () => {
        sortArray(bubblesort);
        bubblesortBtn.classList.remove('alg-btn');
        bubblesortBtn.classList.add('selection-btn');
    });
    gnomesortBtn.addEventListener('click', () => {
        sortArray(gnomesort);
        gnomesortBtn.classList.remove('alg-btn');
        gnomesortBtn.classList.add('selection-btn');
    });
    selectionsortBtn.addEventListener('click', () => {
        sortArray(selectionsort);
        selectionsortBtn.classList.remove('alg-btn');
        selectionsortBtn.classList.add('selection-btn');
    });
    insertionsortBtn.addEventListener('click', () => {
        sortArray(insertionsort);
        insertionsortBtn.classList.remove('alg-btn');
        insertionsortBtn.classList.add('selection-btn');
    });
    shellsortBtn.addEventListener('click', () => {
        sortArray(shellsort);
        shellsortBtn.classList.remove('alg-btn');
        shellsortBtn.classList.add('selection-btn');
    });
}


function newArray(numElem) {
    const bars = document.querySelector('#array');
    bars.innerHTML = '';
    for (let i=0; i<numElem; i++) {
        const bar = document.createElement('span');
        random[i] = Math.floor(Math.random() * 500) + 5;
        bar.style.height = `${random[i]}px`;
        bar.classList.add('bar');
        bars.appendChild(bar);
    }
    const sizeText = document.querySelector('#size-text');
    sizeText.textContent = numElem + ' elements.';

    const algbtn = document.querySelectorAll('#algorithms button');
    for (let button of algbtn) {
        button.classList.remove('selection-btn');
        button.classList.add('alg-btn');
    }

    const timeText = document.querySelector('#time-text');
    timeText.textContent = '';
}

// Se usa para animar el ordenamiento. Para la ejecución
// y después de n milisegundos, llama a resolve, la
// cual simplemente retorna su argumento.
function delayExec(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {resolve()}, milisec);
    });
}
async function sortArray(func) {
    disableOptions();
    const start = new Date();
    await func();  // No avanza hasta que termine func().
    const diff = new Date().getTime() - start.getTime();
    enableOptions();

    const timeText = document.querySelector('#time-text');
    timeText.textContent = `${Number(diff / 1000).toFixed(2)} s (delay: ${delay} ms)`;
}


function disableOptions(){
    document.querySelector('#bubblesort').disabled = true;
    document.querySelector('#selectionsort').disabled = true;
    document.querySelector('#insertionsort').disabled = true;
    document.querySelector('#mergesort').disabled = true;
    document.querySelector('#quicksort').disabled = true;
    document.querySelector('#size input').disabled = true;
    document.querySelector('#new-array').disabled = true;
}

function enableOptions(){
    document.querySelector('#bubblesort').disabled = false;
    document.querySelector('#selectionsort').disabled = false;
    document.querySelector('#insertionsort').disabled = false;
    document.querySelector('#mergesort').disabled = false;
    document.querySelector('#quicksort').disabled = false;
    document.querySelector('#size input').disabled = false;
    document.querySelector('#new-array').disabled = false;
}

function swap(elem1, elem2) {
    let temp = elem1.style.height;
    elem1.style.height = elem2.style.height;
    elem2.style.height = temp;
}
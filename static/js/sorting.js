async function bubblesort() {
    const elems = document.querySelectorAll('.bar');
    const n = elems.length;
    for (let elem of elems) {
        elem.style.background = '#E1E5EA';
    }
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<(n-i-1); j++) {
            elems[j].style.background = '#F55C47';
            elems[j+1].style.background = '#F55C47';
            if (parseInt(elems[j].style.height) > parseInt(elems[j+1].style.height)) {
                await delayExec(delay);
                swap(elems[j], elems[j+1]);
            }
            elems[j].style.background = '#E1E5EA';
        }
        elems[n-1-i].style.background = '#4AA96C';
    }
    elems[0].style.background = '#4AA96C';
}


async function gnomesort() {
    const elems = document.querySelectorAll('.bar');
    const n = elems.length;
    for (let elem of elems) {
        elem.style.background = '#E1E5EA';
    }
    for (let i=0; i<n;) {
        elems[i].style.background = '#4AA96C';
        if (i === 0 || parseInt(elems[i-1].style.height) <= parseInt(elems[i].style.height)) {
            i++;
        } else {
            elems[i].style.background = '#F55C47';
            elems[i-1].style.background = '#F55C47';
            await delayExec(delay);
            swap(elems[i], elems[i-1]);
            i--;
            elems[i+1].style.background = '#4AA96C';
        }
    }
}


async function selectionsort() {
    const elems = document.querySelectorAll('.bar');
    const n = elems.length;
    for (let elem of elems) {
        elem.style.background = '#E1E5EA';
    }
    for (let i=0; i<n; i++) {
        let min_index = i;
        elems[i].style.background = '#FDCA40';
        for (let j=i+1; j<n; j++) {
            elems[j].style.background = '#F55C47';
            await delayExec(delay);
            if (parseInt(elems[j].style.height) < parseInt(elems[min_index].style.height)) {
                min_index = j;
                if (min_index !== i) {
                    elems[min_index].style.background = '#E1E5EA';
                }
            } else {
                elems[j].style.background = '#E1E5EA';
            }
        }
        await delayExec(delay);
        swap(elems[min_index], elems[i]);
        elems[min_index].style.background = '#E1E5EA';
        elems[i].style.background = '#4AA96C';
    }
}


async function insertionsort() {
    const elems = document.querySelectorAll('.bar');
    const n = elems.length;
    for (let elem of elems) {
        elem.style.background = '#E1E5EA';
    }
    for (let i=1; i<n; i++) {
        let current = elems[i].style.height;
        let j = i;
        elems[i].style.background = '#FDCA40';
        await delayExec(delay);
        while (j > 0 && parseInt(current) < parseInt(elems[j-1].style.height)) {
            elems[j-1].style.background = '#F55C47';
            elems[j].style.height = elems[j-1].style.height;
            j--;
            await delayExec(delay);
            for (let k=i; k>=0; k--) {
                elems[k].style.background = '#4AA96C';
            }
        }
        elems[j].style.height = current;
        elems[i].style.background = '#4AA96C';
    }
}

// --> añadir colores
async function shellsort() {
    const elems = document.querySelectorAll('.bar');
    const n = elems.length;
    for (let elem of elems) {
        elem.style.background = '#E1E5EA';
    }
    for (let gap=Math.trunc(n/2); gap>0; gap=Math.trunc(gap/2)) {
        for (let i=gap; i<n; i++) {
            let current = elems[i].style.height;
            let j = i;
            while (j >= gap && parseInt(current) < parseInt(elems[j-gap].style.height)) {
                await delayExec(delay);
                swap(elems[j], elems[j-gap]);
                j -= gap;
            }
            elems[j].style.height = current;
        }
    }
}
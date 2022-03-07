let upperCase = document.getElementById("upper-case")
upperCase.addEventListener("click", () => {
    let words = document.querySelector('textarea').value.toUpperCase().split(' ');
    document.querySelector('textarea').value = words.join(' ');
});

let lowerCase = document.getElementById('lower-case');
lowerCase.addEventListener('click', () => {
    let words = document.querySelector('textarea').value.toLowerCase().split(' ');
    document.querySelector('textarea').value = words.join(' ');
});

let properCase = document.getElementById('proper-case');
properCase.addEventListener('click', () => {
    let words = document.querySelector('textarea').value.toLowerCase()
    let upper = words.split(' ');
    for (let i = 0; i < upper.length; i++) {
        upper[i] = upper[i].charAt(0).toUpperCase() + upper[i].substring(1);
    }
    words = upper.join(' ')
    document.querySelector('textarea').value = words;
});

let sentenceCase = document.getElementById("sentence-case")
sentenceCase.addEventListener("click", () => {
    let sentence = document.querySelector("textarea").value.toLowerCase();
    let string = sentence.split ('. ')
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }
    sentence = string.join('. ')
    document.querySelector("textarea").value = sentence;
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById('save-text-file').addEventListener('click', () => {
    let text = document.getElementById('text').value;
    let filename = "text.txt";
    download(filename,text);
})

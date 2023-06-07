const loadKanye = () => {
fetch('https://api.kanye.rest/')
.then(response => response.json())
.then(data => displayKanye(data))
}

// array function

const displayKanye = (kanye) => {
    document.getElementById('quote').innerText = kanye.quote;


}
const section = document.getElementById('response');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const img = document.createElement('img');
section.appendChild(img);
function randomQuotes(){
        fetch('https://thatsthespir.it/api')
        .then((response) => response.json())
        .then((data) => {
            quote.textContent = `${data.quote}`;
            author.textContent =  `${data.author}`;
            img.setAttribute('src', `${data.photo}`);

        })
        .catch((error) => {
            const errorParaph = document.createElement('p');
            section.appendChild(errorParaph);
            errorParaph.textContent = ("Error fetching quote: ", error);
        })
}

randomQuotes();
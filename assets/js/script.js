const quote = document.getElementById('quote');
const author = document.getElementById('author');
const img = document.getElementById('img-author');
async function randomQuotes(){
    try{
        const response = await fetch('https://thatsthespir.it/api');
        const data = await response.json();

            quote.textContent = `${data.quote}`;
            author.textContent =  `${data.author}`;
            img.setAttribute('src', `${data.photo}`);
            img.setAttribute('alt', `image of ${data.author}`);

        }
        catch(error) {
            const errorParaph = document.createElement('p');
            section.appendChild(errorParaph);
            errorParaph.textContent = ("Error fetching quote: ", error);
        }
}
const btn = document.getElementById('generate-quote');
btn.addEventListener('click', randomQuotes);

randomQuotes();
const div = document.getElementById('mid-part')
const button = document.getElementById('get-quote')
const title = document.getElementById('title')

// TO-DO: make move elements through mouse.
document.addEventListener('mousemove', (e) => {
    const objects = document.querySelectorAll('.object').forEach((move) => {
        var moving_val = move.getAttribute('data-value')
        var x = (e.clientX * moving_val) / 90
        var y = (e.clientY * moving_val) / 90
        move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
    })
})

const ul = document.createElement('ul')

button.addEventListener('click', () => {
    fetch('https://api.portkey.uk/quote')
    .then((response) => {
        return response.json()
    }).then ((data) => {
        console.log(data)
        const quote = document.createElement('li')
        quote.innerText = '"' + data.quote + '"'
        quote.style = "background-color:#ffdc4f;border-radius:10px"
        ul.append(quote)
        const author = document.createElement('li')
        author.innerText = "— " + data.speaker + "."
        author.style = "color:#8b1717;font-weight:bold;text-decoration:underline;"
        ul.append(author)
        const story = document.createElement('li')
        story.innerText = data.story
        story.style = "font-style:italic;font-size:3vh"
        ul.append(story)
    })
    title.style = 'font-size:6vh;text-shadow: 0 2px 0 #4b3018;'
    button.style = 'font-size:3vh;'
    ul.innerHTML = ''
    ul.style = 'list-style: none;font-size:4vh;background-color:white;border-radius:40px;box-shadow: 0 8px 12px #0000008c;'
    div.append(ul)
})
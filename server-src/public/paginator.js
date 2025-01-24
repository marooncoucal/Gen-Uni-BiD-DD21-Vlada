let pages = [
    'index.html', //0
    'index2.html',
    'index3.html',
    'index4.html',
    'index5.html', // 4
] //length = 5

let next = () => location.href = pages[((currentAnimation + 1) % pages.length)];
let prev = () => {
    let nextIndex = currentAnimation == 0 ? currentAnimation = pages.length - 1 : currentAnimation - 1;
    location.href = pages[nextIndex];
}

document.addEventListener('keydown', e => {
    if (e.code === 'ArrowRight') next()
    if (e.code === 'ArrowLeft') prev()
})

if (button1Listeners) button1Listeners.push(next)
if (button2Listeners) button2Listeners.push(prev)

setTimeout(next, 30000)
/************************************************** MOUSE *************************************************/

document.addEventListener("mousemove", (e) => {
    const x = e.clientX + 'px'
    const y = e.clientY + 'px'
    document.documentElement.style.setProperty('--mouse-x', x)
    document.documentElement.style.setProperty('--mouse-y', y)
});
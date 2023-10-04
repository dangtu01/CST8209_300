function setTitle(text) {
    let h1 = document.querySelector("h1");
    h1.textContent = text;
    return "Title has been updated";
}

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    return "Background color has been updated";
}

function setFontcolor(color) {
    document.body.style.color = color;
    return "Font color has been updated";
}

function setTheme(theme) {
    let body = document.body;
    body.classList.remove("grey","pink","green");
    body.style.background = "";
    body.style.color = "";
    const themes = ["grey", "pink", "green"];

    for(let i = 0; i < themes.length; i++) {
        if (theme == themes[i]) {
            body.classList.add(theme)
            return `The current theme is ${theme}`
        }
    }

}


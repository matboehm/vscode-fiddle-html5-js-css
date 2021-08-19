function helloWorld() {
    const element = document.createElement('p');
    element.textContent = '< Your content goes here >';
    return element;
}

document.body.appendChild(helloWorld());
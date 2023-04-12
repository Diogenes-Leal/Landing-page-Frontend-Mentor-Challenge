function fetchSvg(image, id) {
    fetch(image.src)
    .then((response) => response.text())
    .then((response) => {
        const span = document.createElement('span');
        span.innerHTML = response;
        const inlineSvg = span.getElementsByTagName('svg')[id];
        image.parentNode.replaceChild(inlineSvg, image);
        return true;
    });
}

function onMouseEnter(tag){
    getPath(tag).style.fill = "#ffffff";
}

function onMouseLeave(tag){
    getPath(tag).style.fill = "#2C7566";
}

function getPath(tag){
    const svg = tag.children[0];
    const path = svg.children[0];
    return path;
}

function toggleMenu(){
    const menu = document.getElementById('id-menu-temporario');
    
    if(menu.style.opacity == 0){
        menu.style.opacity = 1;
        menu.style.pointerEvents = 'all';
    } else {
        menu.style.opacity = 0;
        menu.style.pointerEvents = 'none';
    }
}
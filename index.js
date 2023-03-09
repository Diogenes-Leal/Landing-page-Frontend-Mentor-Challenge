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
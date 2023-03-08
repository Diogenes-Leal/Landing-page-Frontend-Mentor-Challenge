function toggleMenu(){
    const menu = document.getElementById('id-menu-temporario');
    
    if(menu.style.display=='none'){
        menu.style.display='flex';
    } else {
        menu.style.display='none';
    }
}
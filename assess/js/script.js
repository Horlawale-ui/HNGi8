    // Access DOM elemnts //
const menuIcon = document.getElementById('menu-icon');
const navBtns = document.getElementById('nav-btns');


// menu toggle //
menuIcon.addEventListener('click', () => {
    if(navBtns.style.display == 'none' && searchArea.style.display == 'none') {
        navBtns.style.display = 'inline';
        searchArea.style.display = 'inline';
        menuIcon.setAttribute('name', 'close-outline'); /* change the menu icon */
        
    }else {
        navBtns.style.display = 'none';
        searchArea.style.display = 'none';
        menuIcon.setAttribute('name', 'menu-outline');
    }
});
window.onload = function () {
    const profile = document.getElementById('profile')
    profile.addEventListener('click', () => {
        const menu = document.getElementById('menu')
        if(menu.style.display == 'none') {
            menu.style.display = 'flex'
        }else{
            menu.style.display = 'none'
        }
    })
}
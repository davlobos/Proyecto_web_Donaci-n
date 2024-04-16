const navTabs = document.querySelectorAll('.btabbar-item');

navTabs.forEach(navTab => {
    navTab.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navTab.classList.add('active');
    });
});
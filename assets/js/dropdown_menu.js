
  document.addEventListener('DOMContentLoaded', function () {
    const submenus = document.querySelectorAll('.submenu');

    submenus.forEach(submenu => {
      submenu.addEventListener('mouseenter', function () {
        const submenuMenu = submenu.querySelector('.submenu-menu');
        const rect = submenuMenu.getBoundingClientRect();

        // Check if submenu overflows the viewport width
        if (rect.right > window.innerWidth) {
          submenuMenu.classList.add('left-side');
        } else {
          submenuMenu.classList.remove('left-side');
        }
      });
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const greedyDropdown = document.querySelector(".greedy-dropdown");
    const greedyMenu = document.querySelector(".greedy-menu");
    
    let menuWidth = menu.offsetWidth;
    let items = Array.from(menu.children).filter(item => !item.classList.contains("greedy-dropdown"));

    function checkOverflow() {
        let availableSpace = menu.offsetWidth - greedyDropdown.offsetWidth;
        let totalWidth = 0;

        // Check how much space all items take
        items.forEach(item => {
            totalWidth += item.offsetWidth;
        });

        // Move items to greedy menu if they overflow
        if (totalWidth > availableSpace) {
            let lastItem = items.pop();
            greedyMenu.insertBefore(lastItem, greedyMenu.firstChild);
            greedyDropdown.style.display = "block";
            checkOverflow();
        } else if (greedyMenu.children.length > 0 && totalWidth + greedyMenu.children[0].offsetWidth <= availableSpace) {
            let firstGreedyItem = greedyMenu.children[0];
            menu.insertBefore(firstGreedyItem, greedyDropdown);
            if (greedyMenu.children.length === 0) {
                greedyDropdown.style.display = "none";
            }
        }
    }

    window.addEventListener("resize", checkOverflow);
    checkOverflow();
});


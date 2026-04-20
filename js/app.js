const App = {
    // All of our selected HTML elements
    $: {
        menu: document.querySelector('.menu'),
        menuItems: document.querySelector('.items'),
        icon: document.querySelector('.menu i'),
    },

    init() {
        App.$.menu.addEventListener("click", (event) => {
          App.$.menuItems.classList.toggle('hidden');
          App.$.icon.classList.toggle('fa-chevron-down');
          App.$.icon.classList.toggle('fa-chevron-up');
        });
    },
};

window.addEventListener('load', App.init);
class Menu {
    constructor() {
        this.initButtons();
    }

    initButtons() {
        var botao = document.querySelector("#menu-button");

        botao.addEventListener("click", e => {
            console.log('click');
            this.mostrarMenu(); // Chama a função mostrarMenu() quando o botão é clicado
        });
    }

    mostrarMenu() {
        var menu = document.querySelector('.menu-list');
        var currentRight = parseInt(window.getComputedStyle(menu).right);

        if (currentRight < 0) {
            menu.style.right = '0'; // Traga o menu para dentro da página
        } else {
            menu.style.right = '-80%'; // Envie o menu para fora da página
        }
    }
}

var menu = new Menu();

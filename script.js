// Estructura de datos del menú en JSON
const menuData = {
    "menu": [
        {
            "id": 1,
            "title": "Inicio",
            "url": "index.html"
        },
        {
            "id": 2,
            "title": "Productos",
            "url": "productos.html"
        },
        {
            "id": 3,
            "title": "Acerca de",
            "url": "acerca.html"
        },
        {
            "id": 4,
            "title": "Contacto",
            "url": "contacto.html"
        }
    ]
};

// Función para generar dinámicamente el menú
function generateMenu(menuData) {
    const menuList = document.getElementById("menu-list");

    menuData.menu.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = item.url;
        a.textContent = item.title;

        li.appendChild(a);
        menuList.appendChild(li);
    });
}

// Llama a la función para generar el menú
generateMenu(menuData);

import ProductPage from "./pages/product.page.js";
import { CartPage } from "./pages/cart.page.js";
import { HomePage } from "./pages/home.page.js";

const root = document.getElementById("root")

function initNavBar(){
    const pageLinks = document.querySelectorAll("header a");

    pageLinks.forEach((link) => {
        const dest = link.getAttribute("data-page");        
        
        link.addEventListener("click", async (e) => {
            e.preventDefault();
            console.log("event listener")
            await renderPage(dest)
        })
    })    
}

async function renderPage(dest){
    root.removeChild(root.firstChild)

    let page = undefined;

    switch(dest){
        case "cart": page = CartPage();
            break;
        case "products": page = await ProductPage();
            break;
        default:  page = HomePage();
    }

    console.log("updating page")
    root.appendChild(page)
}

// renderPage("home");
initNavBar();
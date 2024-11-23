import ProductCard from "../components/productCard.js";
import Product from "../models/product.model.js";

async function getProducts(){
    const response = await fetch("https://fakestoreapi.com/products");
    const prods = await response.json()    
    const products = prods.map((prod) => new Product(prod.id, prod.title, prod.price, prod.description, prod.category, prod.image, prod.rating.rate))
    
    return products
}

async function displayProducts(){    
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("product-container");
    
    const products = await getProducts();
    products.forEach((product) => {
        const card = ProductCard(product);
        productsContainer.appendChild(card);
    });
    
    return productsContainer;
}

export default displayProducts
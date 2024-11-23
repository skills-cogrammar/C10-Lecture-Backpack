import Product from "../models/product.model.js"

/**
 * 
 * @param {Product} product 
 */
function ProductCard(product){
    const card = document.createElement("div");        
    card.classList.add("card")

    // Adding image
    const imageContainer = document.createElement("div")    
    imageContainer.classList.add("image-container");

    const productImage = document.createElement("img");
    productImage.src = product.image;

    imageContainer.appendChild(productImage);

    // Adding text
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    const productName = document.createElement("h3");
    productName.innerText = product.title;

    const productPrice = document.createElement("h6");
    productPrice.innerText = product.price;

    const productDesc = document.createElement("p");
    productDesc.innerText = product.description;
    
    textContainer.appendChild(productName);
    textContainer.appendChild(productPrice);
    textContainer.appendChild(productDesc);

    card.appendChild(imageContainer);
    card.appendChild(textContainer)

    return card;
}

export default ProductCard
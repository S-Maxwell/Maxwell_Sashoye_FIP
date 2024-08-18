console.log('JavaScript is running!');

// Store the content in a JavaScript object
const contentText = {
    friendly: "Quatro, a healthy soda drink, is environmentally friendly due to its use of sustainable packaging, natural ingredients, and eco-conscious production practices.",
    Jamaica: "Quatro, a healthy soda drink, is crafted with natural ingredients sourced directly from Jamaica, ensuring both a refreshing taste and an environmentally friendly choice.",
    relationship: "Quatro, a healthy soda drink, strengthens customer relationships by offering a unique, refreshing beverage made from natural Jamaican ingredients, fostering trust and loyalty through its commitment to quality and sustainability."
};


function displayContent(id) {
    const pElement = document.querySelector(`#${id} p`);
    
    if (pElement.innerHTML.trim() === '') {
        pElement.innerHTML = contentText[id];
    } else {
        pElement.innerHTML = ''; 
    }
}

document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        const id = arrow.previousElementSibling.id;
        displayContent(id);
    });
});

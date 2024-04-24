const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart");
const cartModal = document.getElementById("cart-Modal");
const cartItemsContainers = document.getElementById("cart-items");
const cartTotal = document.getElementById("total");
const checkout = document.getElementById("finalizar");
const closer = document.getElementById("fechar");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("endereço");
const addressAlert = document.getElementById("alerta-endereço");
const clientNameInput = document.getElementById("nome");



    
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const weekMenu = {
        "domingo": [
            {
            "name": "Mão de Vaca",
            "description": "Mão De Vaca, Porção De Arroz, Feijão macassar,e Salada",
            "price": "20",
            "image": "./assets/vaca.jpg",
            },
 
            {
            "name": "Costelinha ao molho",
            "description": "Costelinha ao molho, Porção De Arroz, Feijão macassar,e Salada",
            "price": "18",
            "image": "./assets/costelinha.png" 
            },
            {
            "name": "Frango ao molho",
            "description": "Frango ao molho, Porção De Arroz, Feijão macassar,e Salada",
            "price": "18",
            "image": "./assets/guisado.png"
            },
            {
            "name": "Isca de Carne",
            "description": "Isca de Carne, Porção De Arroz, Feijão macassar,e Salada",
            "price": "18",
            "image": "./assets/iscas.jpg"
            },
            {
            "name": "Galeto na Brasa",
            "description": "Galeto Na Brasa, Porção De Arroz, Feijão macassar,e Salada",
            "price": "18",
            "image": "./assets/galeto.jpeg"
            },
            {
            "name": "Toscana na Brasa",
            "description": "Toscana na Brasa, Porção De Arroz, Feijão macassar,e Salada",
            "price": "18",
            "image": "./assets/toscana.jpg"
            },
            {
            "name": "⁠Lasanha de Carne",
            "description": "⁠Lasanha de Carne, Porção De Arroz, Feijão macassar,e Salada",
            "price": "18",
            "image": "./assets/lasanha.png"
            },
        ],
        "segunda-feira": [
            {
            "name": "⁠Galeto na Brasa",
            "description": "⁠Galeto na Brasa, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/galeto.jpeg"
            },
            {
              "name": "Toscana na Brasa",
            "description": "Toscana na Brasa, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",                "image": "./assets/toscana.jpg"
            }, 
            {
            "name": "Frango ao Molho",
            "description": "Frango ao Molho, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/guisado.png"
            },
            {
            "name": "Filé de Frango",
            "description": "Filé de Frango, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",                "image": "./assets/filedefrango.jpg"
            },

        ],
        "terça-feira": [
            {
            "name": "⁠Strogonoff de Frango",
            "description": "⁠Strogonoff de Frango, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/strogonoff.png"
            },
            {
            "name": "Galeto na Brasa",
            "description": "Galeto na Brasa, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/galeto.jpeg"
            },
            {
            "name": "⁠Costelinha ao molho",
            "description": "⁠Costelinha ao molho, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/costelinha.png"
            },
            {
            "name": "Toscana na Brasa",
            "description": "Toscana na Brasa, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/toscana.jpg"
            },
            {
                "name": "⁠Frango ao molho",
                "description": "⁠Frango ao molho, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/guisado.png"
            },

        ],
        "quarta-feira":[
            {
            "name": "⁠Galeto na Brasa",
            "description": "⁠Galeto na Brasa, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/galeto.jpeg"
            },
            {
            "name": "Toscana na Brasa",
            "description": "Toscana na Brasa, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/toscana.jpg"
            },
            {
            "name": "Costelinha ao molho",
            "description": "Costelinha ao molho, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/costelinha.png"
            },
            {
            "name": "Bisteca Suína",
            "description": "Bisteca Suína, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/bisteca.jpg"
            },
            {
            "name": "⁠Frango ao molho",
            "description": "⁠Frango ao molho, Porção De Arroz, Feijão macassar,e Salada",
            "price": "15",
            "image": "./assets/guisado.png"
            },
        ],
        "quinta-feira":[
            {
                "name": "⁠Fígado Acebolado",
                "description": "⁠Fígado Acebolado, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/figado.png"
            },
            {
                "name": "⁠Galeto na Brasa",
                "description": "⁠Galeto na Brasa, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/galeto.jpeg"
            },
            {
                "name": "Toscana na Brasa",
                "description": "Toscana na Brasa, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/toscana.jpg"
            },
            {
                "name": "⁠Costelinha ao molho",
                "description": "⁠Costelinha ao molho, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/costelinha.png"
            },
            {
                "name": "⁠Frango ao molho",
                "description": "⁠Frango ao molho, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/guisado.png"
            },

        ],
        "sexta-feira":[
            {
                "name": "Moqueca de Peixe",
                "description": "Moqueca de Peixe, Porção De Arroz,e Salada",
                "price": "15",
                "image": "./assets/camarao.png"
            },
            {
                "name": "Camarão ao Molho",
                "description": "Camarão ao Molho, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/camarao.png"
            },
            {
                "name": "⁠Galeto na Brasa",
                "description": "⁠Galeto na Brasa, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/galeto.jpeg"
            },
            {
                "name": "⁠Toscana na Brasa",
                "description": "⁠Toscana na Brasa, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/toscana.jpg"
            },
            {
                "name": "⁠Costelinha ao molho",
                "description": "⁠Costelinha ao molho, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/costelinha.png"
            },
            {
                "name": "⁠Frango ao molho",
                "description": "⁠Frango ao molho, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/guisado.png"
            },
        ],
        "sabado":[
            {
                "name": "⁠Galeto na Brasa",
                "description": "⁠Galeto na Brasa, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/galeto.jpeg"
            },
            {
                "name": "⁠Toscana na Brasa",
                "description": "⁠Toscana na Brasa, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/toscana.jpg"
            },
            {
                "name": "⁠Fígado Acebolado",
                "description": "⁠Fígado Acebolado, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/figado.png"
            },
            {
                "name": "⁠Galinha de Cabidela",
                "description": "⁠Galinha de Cabidela, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/cabidela.jpg"
            },
            {
                "name": "Costelinha ao molho",
                "description": "Costelinha ao molho, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/costelinha.png"
            },
            {
                "name": "⁠Frango ao molho",
                "description": "⁠Frango ao molho, Porção De Arroz, Feijão macassar,e Salada",
                "price": "15",
                "image": "./assets/guisado.png"
            }

        ],
        
    };

    const currentDay = new Date().toLocaleString('pt-BR', { weekday: 'long' }).toLowerCase();
    const currentMenu = weekMenu[currentDay];
    console.log("Dia atual:", currentDay);
    menu.innerHTML = '';

    if (currentMenu) {
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-7', 'md:gap-10', 'mx-auto', 'max-w-7xl', 'px-2', 'mb-20');  
        
        currentMenu.forEach(item => {
            const menuItem = `
                <div class="flex gap-2">
                    <img src="${item.image}" alt="${item.name}" class="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-1 duration-200"/>
                    <div>
                        <p class="font-bold">${item.name}</p>
                        <p class="text-sm">${item.description}</p>
                        
                        <div class="flex items-center gap-2 justify-between mt-3">
                            <p class="font-bold text-lg">R$ ${item.price}</p>

                            <button class="bg-black px-5 rounded add-add-to-card-btn"
                                data-name="${item.name}"
                                data-price="${item.price}">
                                <i class="fa fa-cart-plus text-lg text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>`;
            
            menuContainer.innerHTML += menuItem;
        });
        
        menu.appendChild(menuContainer);
    } else {
        console.log("Cardápio do dia não encontrado.");
    }


});

//começo do codigo origial ---------------------------
let cart = [];


//abrir carrinho
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
    updateCartModal();

})

//fechar clicando fora do modal
cartModal.addEventListener("click", function(event){
    if(event.target == cartModal){
        cartModal.style.display="none"
    }    
})

//fechar modal no botao
closer.addEventListener("click",function(){
    cartModal.style.display= "none"

})
// verificando se estar clicando no icone do carrinho
menu.addEventListener("click",function(event){
    let parentButton = event.target.closest(".add-add-to-card-btn")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parentButton.getAttribute("data-price")

        addToCart(name,price)
    }
})

function addToCart(name,price){
    const ConsultItems = cart.find(item => item.name == name)
    if(ConsultItems){
        ConsultItems.quantidade += 1;
    }else{
        cart.push({
            name,
            price,
            quantidade: 1,
    
        })
         }
    
         updateCartModal()

    }
       
    

//adicionar no carrinho
function updateCartModal(){
    cartItemsContainers.innerHTML = "";
    let total=0;
    cart.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("flex","justify-between","mb-4","flex-col")
    cartItemElement.innerHTML =  `
    <div class="flex items-center justify-between">
    <div>
    <p class="font-medium">${item.name}</p>
    <p>Qtd: ${item.quantidade}</p>
     <p class="font-medium mt-2">R$ ${item.price}</p>
    </div>

  
    <button class="remove-from-cart" data-name="${item.name}">
    Remover
    </button>

    </div>
    `;

    total += item.price * item.quantidade;
    cartItemsContainers.appendChild(cartItemElement)
        
    });
    
    cartTotal.textContent = total.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
        
    });
    

    cartCounter.innerHTML = cart.length;

}

// Remover do carrinho
cartItemsContainers.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-from-cart")){
        const name = event.target.getAttribute("data-name")
        RemoveItem(name);
    }

})
function RemoveItem(nome){
    const index = cart.findIndex(item => item.name === nome);

    if(index !== -1){
        const items = cart[index];

        if(items.quantidade > 1){
            items.quantidade -= 1;
            updateCartModal();
           
        }else{ 
        cart.splice(index, 1);
        updateCartModal();
         }
    }
}

// verificação do endereço
addressInput.addEventListener("input", function(event){
    let  inputValue = event.target.value;
    
    if(inputValue !== ""){
        addressInput.classList.remove("border-red-600")
        addressAlert.classList.add("hidden")
    }
})
// finalizar pedido 

checkout.addEventListener("click", function(){

    const isOpen =  checkTime();
    if(!isOpen){
        Toastify({
            text: "O restaurante está fechado. Abriremos as 11hrs",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
    }).showToast();
    return;
     }
            
        


    if(cart.length === 0 ) { 
        Toastify({
            text: "O carrinho está vazio!",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
    }).showToast();
    return;
     }

    
    if(addressInput.value === ""){
        addressAlert.classList.remove("hidden");
        addressInput.classList.add("border-red-600")
        return;
    }

   
    console.log("Detalhes do Carrinho:", cart);
  
  
    
    // enviar API
    const total = cart.map((item)  => {
     return(
            `${item.name} quantidade:|(${item.quantidade})\n | preço: R$ ${item.price}\n | ` 
        )

    }).join("")

   const message = encodeURIComponent(total); 
   const phone = "8195263599"
   window.open(`https://wa.me/${phone}?text=${message}\n \n\nendereço: \t \n${addressInput.value}\n\n, \n\n     nome:  \n ${clientNameInput.value}\n`, "_black");
    
   cart.length = 0;
 updateCartModal();
 Toastify({
    text: "Pedido realizado com sucesso!! ",
    duration: 3000,
    close: true,
    gravity: "center", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#008000",
    },
}).showToast();
})
    
// Verificar hora
function checkTime(){
    const data = new Date();
    const hora = data.getHours();
    return hora >= 11 && hora < 23,30;

}

const spanitem = document.getElementById("date-span")
const isOpen = checkTime();

if(isOpen){
    spanitem.classList.remove("bg-red-500");
    spanitem.classList.add("bg-green-600");
    }else{
        spanitem.classList.remove("bg-green-600")
        spanitem.classList.add("bg-red-500")

    }
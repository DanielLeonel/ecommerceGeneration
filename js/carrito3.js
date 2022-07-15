setTimeout(function(){
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((addToCartButton) => {
        addToCartButton.addEventListener('click', addToCartClicked);
    });
},2000);

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked)

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');
    
    function addToCartClicked(event){
        const button = event.target;
        const item = button.closest('.card');
        
        const itemTitle= item.querySelector('.card-title').textContent;
        const itemPrice= item.querySelector('.card-price').textContent;
        const itemImage= item.querySelector('.card-img-top').src;
        addItemToShoppingCart(itemTitle, itemPrice, itemImage);
        Swal.fire(
            '¡Tu producto se añadio al carrito!',
            '',
            'success'
          )
    }
    
    function addItemToShoppingCart(itemTitle, itemPrice, itemImage){

        const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');

        for (let i = 0; i < elementsTitle.length; i++) {
            if(elementsTitle[i].innerText === itemTitle){
                let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
                elementQuantity.value++;
                updateTotalPrice();
                return;
            }
            
            
        }

        const shoppingCartRow = document.createElement('div');
        const shoppingCartContent = `
        <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);


    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItme);

    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

    updateTotalPrice();
    };

function updateTotalPrice() {
    let total= 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal')
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach((shoppingCartItem) =>{
        const  shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const  shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$','').replace('.MXN',''));
        
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');

        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        total= total + shoppingCartItemPrice * shoppingCartItemQuantity;

    });
    shoppingCartTotal.innerHTML = `$${total}.MXN`;

}
    function removeShoppingCartItme(event){
        const buttonClicked = event.target;
        buttonClicked.closest('.shoppingCartItem').remove();
        updateTotalPrice();
    }
    
    function quantityChanged(event){
       const input = event.target;
       input.value <= 0 ? (input.value=1) :null;
       updateTotalPrice();

    }

    function comprarButtonClicked(){
        shoppingCartItemsContainer.innerHTML = '';
        updateTotalPrice();
        Swal.fire(
            'tu compra se realizó con éxito ¡FELICIDADES!!!',
            '',
            'success'
          )
    }
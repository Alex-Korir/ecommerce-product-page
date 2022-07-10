const btn_images = document.querySelectorAll(".small-images");
const dis_img = document.querySelector("#display-image");
const thumbnails = document.querySelectorAll("#thumbnails");
/*MAKING ONE BUTTON BECOME ACTIVE AT A TIME*/

const selection = document.querySelector("#select");
//selecting all the buttons and giving them an event
btn_images.forEach((div) => {
  div.addEventListener("click", function () {
    // Bubbling inside the whole div
    selection.querySelector(".active").classList.remove("active");
    div.classList.add("active");
  });
});

/*SELECT ONE BUTTON AND MAKE IT CHANGE THE LARGER ELEMENT*/

for (i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", runAway);
  function runAway() {
    const house = this.dataset.value;
    const image_one =
      "url('/ecommerce-product-page-main/images/image-product-1.jpg')";
    const image_two =
      "url('/ecommerce-product-page-main/images/image-product-2.jpg')";
    const image_three =
      "url('/ecommerce-product-page-main/images/image-product-3.jpg')";
    const image_four =
      "url('/ecommerce-product-page-main/images/image-product-4.jpg')";
    if (house === "1") {
      console.log("looming");
      dis_img.style.backgroundImage = image_one;
    } else if (house === "2") {
      dis_img.style.backgroundImage = image_two;
    } else if (house === "3") {
      dis_img.style.backgroundImage = image_three;
    } else if (house === "4") {
      dis_img.style.backgroundImage = image_four;
    } else {
      dis_img.style.backgroundImage = image_one;
    }
  }
}

// CLICKING A CERTAIN DIV IMAGE AND DISPLAYING THE OVERLAY

dis_img.addEventListener("click", overlay);

function overlay() {
  const over = document.getElementById("Overlay");
  const middle_cont = document.getElementById("containerOverlay");
  over.classList.add("actives");
  middle_cont.classList.add("actives");
}
// THE MODAL SECTION
const modal = document.querySelector("#containerOverlay");
const slider = document.querySelector(".slider");
const modal_images = document.querySelectorAll(".modal-images");
const modal_thumb = document.querySelectorAll(".modal-Thumb");

// Targeting the buttons
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


let slidePosition = 0;
const totalSlides = modal_images.length;
console.log(totalSlides);

// Assigning the button slider's events
next.addEventListener('click', () => {
  moveToNextSlide();
});
prev.addEventListener('click', () => {
  moveToPrevSlide();
});

// Removing the display's and making them viscible only if they are on the particular position
function updateSliderPosition(){
  modal_images.forEach((img) => {
    console.log(img);
    img.classList.remove("viscible");
    img.classList.add("hidden");
  });
  modal_images[slidePosition].classList.add("viscible");
}
function updateActiveState(){
  modal_thumb.forEach((img) => {
    img.classList.remove("activated");
  });
  modal_thumb[slidePosition].classList.add("activated");
}
function updateClickThumbnails(){
  modal_thumb.forEach((imgs) => {
    imgs.addEventListener('click', () => {
      updateSliderPosition();
    })
  })
}

// Functions belonging to the next button slider(it updates the position)
const moveToNextSlide = () => {
  if(slidePosition === totalSlides - 1){
    slidePosition = 0;
  }else{
    slidePosition++;
  }
  updateSliderPosition();
  updateActiveState();
}
// Function belonging to the previous button slider
const moveToPrevSlide = () => {
  if(slidePosition === 0){
    slidePosition = totalSlides - 1;
  }else{
    slidePosition--;
  }
  updateSliderPosition();
  updateActiveState();
}
// function for returning the overlay to its original position after its clicked
const returnOrginal = () => {
  slidePosition = 0;
}

// The close button function
const close_button = document.querySelector(".close-btn");
close_button.addEventListener('click', () => {
  const over = document.getElementById("Overlay");
  const middle_cont = document.getElementById("containerOverlay");
  over.classList.remove("actives");
  middle_cont.classList.remove("actives");
});

// ACTIVATING SELECTION

// The Zero and empty cart container

//Target the container holding the number, cart and Add button
const zeroNumber = document.querySelector(".zero-num");
const  cart_button = document.querySelector(".cart-button");
const cart_container = document.getElementById("cartContainer");
const addToCart = document.querySelector(".right-bar");
cart_button.addEventListener("click", toggleEmptyCart);
// addToCart.addEventListener("click", toggleEmptyCart);
  function toggleEmptyCart(){
    let count = 0;
    const numb = parseInt(zeroNumber.innerHTML = count);
    if(numb === 0){
      cart_container.classList.toggle("showing");
      updateCart.style.display = "none";
    }
    else{
      cart_container.classList.toggle("cart-container");
    }
  }
  
addToCart.addEventListener("click", function lotery(){
  if(zeroNumber.innerHTML > 0){
    cartTrue.style.display = "block";
  }
  toggleEmptyCart();
})

//..This is the plus and minus button svg
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const updateCart = document.querySelector(".updateNumber");

const cartTrue = document.querySelector(".cart-true");


plusBtn.addEventListener("click", increament);
minusBtn.addEventListener("click", decreament);
let count = 0;
const numbe = parseInt(zeroNumber.innerHTML = count);
updateCart.innerHTML = count;

function increament(){
  count++;
  parseInt(zeroNumber.innerHTML = count);
  updateCart.innerHTML = count;
  updatingCartContainer();
}
function decreament(){
  count--;
  parseInt(zeroNumber.innerHTML = count);
  updateCart.innerHTML = count;
  updatingCartContainer();
  // console.log("numbe");
} 

const updatingCartContainer = () => {
  if(zeroNumber.innerHTML > 0){
    console.log("Hello World!");
    updateCart.style.display = "flex";
    const cartBox = document.querySelector(".cart-box");
    cart_container.style.display = "none";
    // cartTrue.style.display = "block"
  }
  else{
    updateCart.style.display = "none";
  }
}
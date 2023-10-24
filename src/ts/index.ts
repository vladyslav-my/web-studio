

const burgerButton = document.querySelector(".burger-button");

const burgerMenu = document.querySelector(".header__burger-menu");



burgerButton?.addEventListener("click", () => {
   const isOpenBurgerButton = burgerButton?.classList.contains("burger-button_open")
   const isOpenBurgerMenu = burgerMenu?.classList.contains("header__burger-menu_open")

   if (!isOpenBurgerButton && !isOpenBurgerMenu) {
      burgerButton.classList.add("burger-button_open");
      burgerMenu?.classList.add("header__burger-menu_open");
   }

   if (isOpenBurgerButton) {
      burgerButton.classList.remove("burger-button_open");
      burgerMenu?.classList.remove("header__burger-menu_open");
   }
})
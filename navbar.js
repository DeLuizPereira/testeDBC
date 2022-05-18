class Navbar {
  constructor(menu, navList, navLinks) {
    this.menu = document.querySelector(menu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.menu.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.menu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.menu) {
      this.addClickEvent();
    }
    return this;
  }
}

const navbar = new Navbar(
  ".menu",
  ".navList",
  ".navList li",
);
navbar.init();
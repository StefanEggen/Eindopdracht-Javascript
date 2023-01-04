// DONE > As a user I can click on the hamburger icon and it will show me a menu of color choices.
// DONE > As a user I am allowed to pick a color from the menu (The colors are described in the menu as text). Each item in the menu is a different color.
// DONE > As a user I can only click on one color from of the menu.
// DONE > When the color is clicked on the menu, the background of the webpage will change into the picked color.
// DONE > After the color has been picked, the menu will close.
// Bonus Requirements:
// DONE > As a user I don't want the colors in the menu described in text. I want to see them also with their corresponding color. Each "row " has a different color.
// As a user I want to click onto a radio button in the color menu, so I can see which color is "active" on that moment.
// As a user I want to open the menu when I hover over the Hamburger icon with the mouse instead of clicking on it. The menu closes when the mouse is not hovering on the hamburger icon.
// DONE > As a user I want to see the picked color name described into my webpage and it changes after changing color.
// DONE > As a user I want to see the menu sliding in and out smoothly into the screen, instead of popping out suddenly.(Use CSS transition and the direction doesn't matter)
// Done >  As a user I am able to change the color with the keyboard.(1 for home, 2 for red, 3 for orange, etc.) ⇒ ****Here you need new Event Type...

// Kleuren array
const colors = ["grey", "red", "orange", "purple", "green"];

// Openen en sluiten menu
function toggleMenu() {
  let element = document.getElementById("menu-items");
  if (element.className === "collapsed") {
    element.className = "expanded";
  } else {
    element.className = "collapsed";
  }
}

// Achtergrond wijzigen na klik op menu-item
function setColor(backgroundColor) {
  document.body.className = `${backgroundColor}-background`;
  document.getElementById("colorname").innerHTML = backgroundColor;
}

const setColorOnClick = (backgroundColor) => {
  document
    .querySelector(`#${backgroundColor}`)
    .addEventListener("click", function () {
      setColor(backgroundColor);
      toggleMenu();
    });
};

colors.forEach(setColorOnClick);

// Achtergrond wijzigen na intoetsen cijfer
document.addEventListener("keydown", (e) => {
  if (e.key == 1) {
    setColor(colors[0]);
  } else if (e.key == 2) {
    setColor(colors[1]);
  } else if (e.key == 3) {
    setColor(colors[2]);
  } else if (e.key == 4) {
    setColor(colors[3]);
  } else if (e.key == 5) {
    setColor(colors[4]);
  }
});

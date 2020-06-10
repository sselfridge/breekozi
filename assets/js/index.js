function clickHamburger() {
  console.log("clicked Burger");
  const checkbox = document.getElementById("menuCheck");
  checkbox.checked = !checkbox.checked;
}

// https://stackoverflow.com/a/57380820/901311
function checkWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

checkWebP(function (support) {
  if (support) {
    //Do what you whant =)
    document.documentElement.classList.remove("noWebp");
    document.documentElement.classList.add("webp");
    console.log("work webp");
  } else {
    //Do what you whant =)
    console.log("not work, use jgp/png");
  }
});

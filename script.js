const portfolioItems = document.querySelectorAll(".portfolio-item");
console.log(portfolioItems);

portfolioItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.childNodes[1].classList.add("img-darken");
  });
  item.addEventListener("mouseout", () => {
    item.childNodes[1].classList.remove("img-darken");
  });
});

// Add class animation to headings
const headings = Array.from(
  document.querySelectorAll(".special-heading h2 , .special-heading p")
);
headings.forEach((item, index) => {
  item.className += ` wow animate__animated  animate__fadeInDown`;
  item.setAttribute("data-wow-duration", ".7s ");

  let itemTag = item.tagName.toLowerCase();
  if (itemTag === "p") {
    item.setAttribute("data-wow-delay", ".2s");
  }
});

// Add Animation class to terms items
const termsItems = Array.from(
  document.querySelectorAll("#terms .terms-row .term-item")
);
termsItems.forEach((element, index) => {
  element.className += ` wow animate__animated animate__flipInY`;
  element.setAttribute("data-wow-duration", "2s");
  element.setAttribute("data-wow-delay", `${(index + 1) * 0.2}s`);
});

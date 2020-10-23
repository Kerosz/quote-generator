function Component({
  type = "div",
  inner = null,
  cssClass = null,
  id = null,
  to = null,
}) {
  const element = document.createElement(`${type}`);
  inner ? (element.innerText = `${inner}`) : null;
  id ? element.setAttribute("id", id) : null;
  cssClass ? element.classList.add(...cssClass) : null;

  type === "a" && to ? element.setAttribute("href", to) : null;

  return element;
}

export default Component;

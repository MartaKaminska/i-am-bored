export const appendElement = (
  element: HTMLElement,
  child: string,
  text: string
): void => {
  const baseElem: HTMLElement = element.appendChild(
    document.createElement(child)
  );

  child !== "a"
    ? (baseElem.textContent = text)
    : (baseElem.innerHTML = "LINK") && baseElem.setAttribute("href", text);
};

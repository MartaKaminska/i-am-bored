import { FRIENDS, MORE_INFO } from "../consts";
import { fetchApiData } from "../data";

class Options {
  showOptions = async (): Promise<void> => {
    const response = JSON.stringify(await fetchApiData());
    const idea = await JSON.parse(response);

    const ideasContainer: HTMLElement | null = document.getElementById("ideas");
    if (ideasContainer) {
      ideasContainer.innerHTML = "";
      idea.participants > 1 &&
        this.appendElement(ideasContainer, "h4", FRIENDS);
      this.appendElement(
        ideasContainer,
        "h3",
        `you can ${idea.activity.toLowerCase()}`
      );
      idea.link && this.appendElement(ideasContainer, "h4", MORE_INFO);
      idea.link && this.appendElement(ideasContainer, "a", `${idea.link}`);
    }
  };

  private appendElement = (
    element: HTMLElement,
    child: string,
    text: string
  ): void => {
    const baseElem: HTMLElement = element.appendChild(
      document.createElement(child)
    );

    child !== "a"
      ? (baseElem.textContent = text)
      : (baseElem.innerHTML = text) && baseElem.setAttribute("href", text);
  };
}

export default Options;

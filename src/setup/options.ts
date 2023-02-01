import { fetchApiData } from "../data";

class Options {
  showOptions = async (): Promise<void> => {
    const response = JSON.stringify(await fetchApiData());
    const idea = await JSON.parse(response);

    const ideasContainer: HTMLElement | null = document.getElementById("ideas");
    if (ideasContainer) {
      idea.participants > 1 &&
        this.appendElement(ideasContainer, "h4", "you can invite friends and");
      this.appendElement(ideasContainer, "h3", `you can ${idea.activity}`);
      idea.link &&
        this.appendElement(
          ideasContainer,
          "h4",
          `you can find useful information here ${idea.link}`
        );
    }
  };

  private appendElement = (
    element: HTMLElement,
    child: string,
    text: string
  ): void => {
    element.appendChild(document.createElement(child)).textContent = text;
  };
}

export default Options;

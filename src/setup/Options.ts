import { FRIENDS, MORE_INFO } from "../consts";
import { fetchApiData } from "../data";
import { appendElement } from "../utils/appendElement";
import Questionmark from "./Questionmark";

class Options implements OptionsInterface {
  private questionmark: QuestionmarkInterface = new Questionmark();

  showOptions = async (): Promise<void> => {
    const response = JSON.stringify(await fetchApiData());
    const idea = await JSON.parse(response);

    const ideasContainer: HTMLElement | null = document.getElementById("ideas");
    if (ideasContainer) {
      ideasContainer.innerHTML = "";
      idea.participants > 1 && appendElement(ideasContainer, "h4", FRIENDS);
      appendElement(
        ideasContainer,
        "h3",
        `you can ${idea.activity.toLowerCase()}`
      );
      idea.link && appendElement(ideasContainer, "h4", MORE_INFO);
      idea.link && appendElement(ideasContainer, "a", `${idea.link}`);
    }
    this.questionmark.hiddenQuestionmark();
  };
}

export default Options;

import { appendElement } from "../utils/appendElement";

class Questionmark implements QuestionmarkInterface {
  private questionmarkConteiner: HTMLElement | null =
    document.getElementById("questionmark");

  showQusetionmark = (): void => {
    this.questionmarkConteiner &&
      appendElement(this.questionmarkConteiner, "h5", "?");
  };

  hiddenQuestionmark = (): void => {
    this.questionmarkConteiner && (this.questionmarkConteiner.style.display = "none");
  };
}

export default Questionmark;

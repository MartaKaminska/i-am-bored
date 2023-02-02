import { VIDEO } from "../consts";
import Options from "./Options";
import Questionmark from "./Questionmark";

class App implements AppInterface {
  private options: OptionsInterface = new Options();
  private questionmark: QuestionmarkInterface = new Questionmark();

  async setup(): Promise<void> {
    this.showViedeo();
    this.askOption();
    this.questionmark.showQusetionmark();
  }

  private askOption = (): void => {
    const button: HTMLElement | null = document.getElementById("button");
    button?.addEventListener("click", this.options.showOptions);
  };

  private showViedeo = (): void => {
    const videoContainer = document.getElementById("videoContainer");
    videoContainer && (videoContainer.innerHTML = VIDEO);
  };
}

export default App;

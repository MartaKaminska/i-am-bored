import Options from "./options";

class App {
  private options = new Options();

  async setup(): Promise<void> {
    this.askingButton();
  }

  private askingButton = () => {
    const button: HTMLElement | null = document.getElementById("button");
    button?.addEventListener("click", this.options.showOptions);
  };
}

export default App;

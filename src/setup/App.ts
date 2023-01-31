import { fetchApiData } from "../data";


class App {
  private appElement: HTMLElement | null= document.getElementById("app");
  async setup(): Promise<void> {
    // await fetchApiData();
    this.showWelcomeImg();
  }

  private showWelcomeImg = () => {
    // const img: HTMLImageElement = document.createElement("img");
    // const imgSrc: string = "assets/img.jpg";
    // img.setAttribute("src", imgSrc);
    // img.setAttribute("id", "welcomeImg")
    // this.appElement?.appendChild(img);
  };

  private askingButton = () => {
    const button = document.getElementById("button");
    // button?.addEventListener('click', this.showOptions())
  };

  private showOptions = () => {

  }
}

export default App;

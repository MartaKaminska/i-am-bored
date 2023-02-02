interface AppInterface {
  setup: () => Promise<void>;
}

interface OptionsInterface {
  showOptions: () => Promise<void>;
}

interface QuestionmarkInterface {
  showQusetionmark: () => void;
  hiddenQuestionmark: () => void;
}

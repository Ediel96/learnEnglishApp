export interface Task {
  _id: string;
  userId?: string;
  title?: string;
  active?: boolean;
  urlGif?: string;
  language?: string;
  content?: string;
  words?: Words[];
}

export interface Words {
  word: string;
  wordT: string[];
}

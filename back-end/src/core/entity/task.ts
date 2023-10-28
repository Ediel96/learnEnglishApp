export interface Task {
  _id: string;
  userId?: string;
  title?: string;
  active?: boolean;
  urlGif?: string;
  language?: string;
  content?: string;
  words?: Word[];
}

export interface Word {
  word: string;
  wordT: string;
}

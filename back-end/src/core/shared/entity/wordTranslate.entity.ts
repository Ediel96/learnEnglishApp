export interface ResponseTranslate {
  word: string;
  wordT: string[];
  partOfSpeech: string;
  typeLanguage: string;
  audio: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string;
  example: string;
}

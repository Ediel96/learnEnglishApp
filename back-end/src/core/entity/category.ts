export interface category {
  _id: string;

  IdTitle: string;

  title: string;

  userId: string;

  urlGif: string;

  active: boolean;

  description: string;

  subCategory: SubCategory[];
}

export interface SubCategory {
  IdTitle: string;

  title: string;

  urlGif: string;

  description: string;
}

export type Pizza = {
  name: string;
  price: number;
  imageUrl: string;
  imageCredit: string;
  extras: string[];
};
export type PizzaArray = Pizza[];

export type ExtraIngredient = {
  name: string;
  price: number;
};

export type ExtraIngredients = {
  [key: string]: ExtraIngredient;
};

export type ItemOrdered = {
  name: string;
  price: number;
  extras: ExtraIngredient[];
};

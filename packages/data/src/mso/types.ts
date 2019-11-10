export type Property = {
  syntax: string;
  description?: string;
  initial: string | number | null;
  inherited: boolean;
  shorthand: boolean;
  features: string[];
};

export type Properties = Record<string, Readonly<Property>>;

export interface Syntax {
  syntax: string;
}

export type Syntaxes = Record<string, Readonly<Syntax>>;

export interface Feature {
  title: string;
  url: string;
}

export type Features = Record<string, Readonly<Feature>>;

export type MSOProperty = {
  syntax: string;
  description?: string;
  initial: string | number | null;
  inherited: boolean;
  shorthand: boolean;
  features: string[];
};

export type MSOProperties = Record<string, Readonly<MSOProperty>>;

export interface MSOSyntax {
  syntax: string;
}

export type MSOSyntaxes = Record<string, Readonly<MSOSyntax>>;

export interface MSOFeature {
  title: string;
  url: string;
}

export type MSOFeatures = Record<string, Readonly<MSOFeature>>;

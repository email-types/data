export type Link = {
  title: 'Microsoft' | 'MDN' | 'W3C' | 'Wikipedia' | (string & {});
  url: string;
};

export type DeveloperName =
  | 'Apple'
  | 'Google'
  | 'IBM'
  | 'Microsoft'
  | 'Mozilla'
  | 'Verizon';

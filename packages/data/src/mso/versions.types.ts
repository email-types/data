type Name =
  | 'ie'
  | 'mso'
  | 'mso9'
  | 'mso10'
  | 'mso11'
  | 'mso12'
  | 'mso14'
  | 'mso15'
  | 'mso16';

export type Version = {
  syntax: string;
  /* TODO: Use actual Outlook version types */
  versions: string[];
};

export type Versions = Record<Name, Version>;

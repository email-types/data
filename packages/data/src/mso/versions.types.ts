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

type OutlookVersion =
  | 2000
  | 2002
  | 2003
  | 2007
  | 2009
  | 2010
  | 2013
  | 2016
  | 2019;

export type Version = {
  syntax: string;
  // TODO: Use actual Outlook versions from client data
  // Should probably be moved there anyway?
  versions: OutlookVersion[];
};

export type Versions = Record<Name, Version>;

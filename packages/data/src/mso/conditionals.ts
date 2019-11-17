import { Operators, Versions } from '../types/mso';

export const operators: Operators = {
  and: {
    syntax: '&',
    description:
      'The AND operator. Returns true if all subexpressions evaluate to true',
    links: [
      {
        title: 'Microsoft',
        url:
          'https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v=vs.85)',
      },
    ],
  },
  greaterThan: {
    syntax: 'gt',
    description:
      'The greater-than operator. Returns true if the first argument is greater than the second argument.',
    links: [
      {
        title: 'Microsoft',
        url:
          'https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v=vs.85)',
      },
    ],
  },
  greaterThanOrEqual: {
    syntax: 'gte',
    description:
      'The greater-than or equal operator. Returns true if the first argument is greater than or equal to the second argument.',
    links: [
      {
        title: 'Microsoft',
        url:
          'https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v=vs.85)',
      },
    ],
  },
  lessThan: {
    syntax: 'lt',
    description:
      'The less-than operator. Returns true if the first argument is less than the second argument.',
    links: [
      {
        title: 'Microsoft',
        url:
          'https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v=vs.85)',
      },
    ],
  },
  lessThanOrEqual: {
    syntax: 'lte',
    description:
      'The less-than or equal operator. Returns true if the first argument is less than or equal to the second argument.',
    links: [
      {
        title: 'Microsoft',
        url:
          'https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v=vs.85)',
      },
    ],
  },
  not: {
    syntax: '!',
    description:
      'The NOT operator. This is placed immediately in front of the feature, operator, or subexpression to reverse the Boolean meaning of the expression.',
    links: [
      {
        title: 'Microsoft',
        url:
          'https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v=vs.85)',
      },
    ],
  },
  or: {
    syntax: '|',
    description:
      'The OR operator. Returns true if any of the subexpressions evaluates to true.',
    links: [
      {
        title: 'Microsoft',
        url:
          'https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537512(v=vs.85)',
      },
    ],
  },
};

export const versions: Versions = {
  ie: {
    syntax: 'IE',
    versions: ['2000', '2002', '2003'],
  },
  mso: {
    syntax: 'mso',
    versions: ['2000', '2002', '2003', '2007', '2010', '2013', '2016'],
  },
  mso9: {
    syntax: 'mso 9',
    versions: ['2000'],
  },
  mso10: {
    syntax: 'mso 10',
    versions: ['2002'],
  },
  mso11: {
    syntax: 'mso 11',
    versions: ['2003'],
  },
  mso12: {
    syntax: 'mso 12',
    versions: ['2007'],
  },
  mso14: {
    syntax: 'mso 14',
    versions: ['2010'],
  },
  mso15: {
    syntax: 'mso 15',
    versions: ['2013'],
  },
  mso16: {
    syntax: 'mso 16',
    versions: ['2016'],
  },
};

import { Operators } from './operators.types';

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
  greater: {
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
  greaterOrEqual: {
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
  less: {
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
  lessOrEqual: {
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

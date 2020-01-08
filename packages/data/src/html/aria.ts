import { Aria } from './aria.types';

export const aria: Aria[] = [
  {
    name: 'aria-activedescendant',
    description:
      'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-atomic',
    description:
      'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
    syntax: 'true | false',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-autocomplete',
    description:
      "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would bepresented if they are made.",
    syntax: 'none | inline | list | both',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-busy',
    description:
      'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
    syntax: 'true | false',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-checked',
    description:
      'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. @see aria-pressed @see aria-selected.',
    syntax: 'false | mixed | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-colcount',
    description:
      'Defines the total number of columns in a table, grid, or treegrid. @see aria-colindex.',
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-colindex',
    description:
      "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. @see aria-colcount @see aria-colspan.",
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-colspan',
    description:
      'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. @see aria-colindex @see aria-rowspan.',
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-controls',
    description:
      'Identifies the element (or elements) whose contents or presence are controlled by the current element. @see aria-owns.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-current',
    description:
      'Indicates the element that represents the current item within a container or set of related elements.',
    syntax: 'false | true | page | step | location | date | time',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-describedby',
    description:
      'Identifies the element (or elements) that describes the object. @see aria-labelledby',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-details',
    description:
      'Identifies the element that provides a detailed, extended description for the object. @see aria-describedby.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-disabled',
    description:
      'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. @see aria-hidden @see aria-readonly.',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-dropeffect',
    description:
      'Indicates what functions can be performed when a dragged object is released on the drop target. @deprecated in ARIA 1.1 1.1',
    syntax: 'none | copy | execute | link | move | popup',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-errormessage',
    description:
      'Identifies the element that provides an error message for the object. @see aria-invalid @see aria-describedby.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-expanded',
    description:
      'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-flowto',
    description:
      "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,allows assistive technology to override the general default of reading in document source order.",
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-grabbed',
    description:
      'Indicates an element\'s "grabbed" state in a drag-and-drop operation. @deprecated in ARIA 1.1 1.1',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-haspopup',
    description:
      'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
    syntax: 'false | true | menu | listbox | tree | grid | dialog',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-hidden',
    description:
      'Indicates whether the element is exposed to an accessibility API. @see aria-disabled.',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-invalid',
    description:
      'Indicates the entered value does not conform to the format expected by the application. @see aria-errormessage.',
    syntax: 'false | true | grammar | spelling',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-keyshortcuts',
    description:
      'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-label',
    description:
      'Defines a string value that labels the current element. @see aria-labelledby.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-labelledby',
    description:
      'Identifies the element (or elements) that labels the current element. @see aria-describedby.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-level',
    description:
      'Defines the hierarchical level of an element within a structure.',
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-live',
    description:
      'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
    syntax: 'off | assertive | polite',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-modal',
    description: 'Indicates whether an element is modal when displayed.',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-multiline',
    description:
      'Indicates whether a text box accepts multiple lines of input or only a single line.',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-multiselectable',
    description:
      'Indicates that the user may select more than one item from the current selectable descendants.',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-orientation',
    description:
      "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. ",
    syntax: 'horizontal | vertical',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-owns',
    description:
      'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationshipbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship. @see aria-controls.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-placeholder',
    description:
      'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.A hint could be a sample value or a brief description of the expected format.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-posinset',
    description:
      "Defines an element's '<number>'or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. @see aria-setsize.",
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-pressed',
    description:
      'Indicates the current "pressed" state of toggle buttons. @see aria-checked @see aria-selected.',
    syntax: 'false | mixed | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-readonly',
    description:
      'Indicates that the element is not editable, but is otherwise operable. @see aria-disabled.',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-relevant',
    description:
      'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. @see aria-atomic.',
    syntax: 'additions | additions text | all | removals | text',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-required',
    description:
      'Indicates that user input is required on the element before a form may be submitted.',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-roledescription',
    description:
      'Defines a human-readable, author-localized description for the role of an element.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-rowcount',
    description:
      "Defines the total '<number>'of rows in a table, grid, or treegrid. @see aria-rowindex.",
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-rowindex',
    description:
      "Defines an element's row index or position with respect to the total '<number>'of rows within a table, grid, or treegrid. @see aria-rowcount @see aria-rowspan.",
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-rowspan',
    description:
      "Defines the '<number>'of rows spanned by a cell or gridcell within a table, grid, or treegrid. @see aria-rowindex @see aria-colspan.",
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-selected',
    description:
      'Indicates the current "selected" state of various widgets. @see aria-checked @see aria-pressed.',
    syntax: 'false | true',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-setsize',
    description:
      "Defines the '<number>'of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. @see aria-posinset.",
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-sort',
    description:
      'Indicates if items in a table or grid are sorted in ascending or descending order.',
    syntax: 'none | ascending | descending | other',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-valuemax',
    description: 'Defines the maximum allowed value for a range widget.',
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-valuemin',
    description: 'Defines the minimum allowed value for a range widget.',
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-valuenow',
    description:
      'Defines the current value for a range widget. @see aria-valuetext.',
    syntax: '<number>',
    groups: ['ARIA 1.1'],
  },
  {
    name: 'aria-valuetext',
    description:
      'Defines the human readable text alternative of aria-valuenow for a range widget.',
    syntax: '<string>',
    groups: ['ARIA 1.1'],
  },
];

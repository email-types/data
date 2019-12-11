import { Product } from './types';

export const ibmNotes: Product = {
  name: 'IBM Notes',
  links: [
    {
      title: 'IBM.com',
      url:
        'https://www.ibm.com/support/knowledgecenter/en/SSKTMJ_8.5.3/com.ibm.help.domino.admin85.doc/H_HTML_RENDERING_FOR_MAIL_6565.html',
    },
  ],
  clients: [
    {
      name: 'IBM Notes for macOS',
      description: '',
      kind: 'Mac App',
      engine: 'WebKit',
    },
    {
      name: 'IBM Notes for Windows',
      description: '',
      kind: 'Windows App',
      engine: 'Trident',
    },
    {
      name: 'IBM Notes for Linux',
      description: '',
      kind: 'Linux App',
      engine: 'Gecko',
    },
  ],
};

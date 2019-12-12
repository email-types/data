import { Client } from '../general/client.types';

export const ibmNotes: Client = {
  name: 'IBM Notes',
  developer: 'IBM',
  protocols: [],
  links: [
    {
      title: 'IBM.com',
      url:
        'https://www.ibm.com/support/knowledgecenter/en/SSKTMJ_8.5.3/com.ibm.help.domino.admin85.doc/H_HTML_RENDERING_FOR_MAIL_6565.html',
    },
  ],
  platforms: [
    {
      name: 'IBM Notes for macOS',
      description: '',
      kind: 'App.Mac',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'IBM Notes for Windows',
      description: '',
      kind: 'App.Windows',
      engine: 'Trident',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'IBM Notes for Linux',
      description: '',
      kind: 'App.Linux',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};

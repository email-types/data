import { EmailClient } from './types';

export const ibmNotes: EmailClient = {
  name: 'IBM Notes',
  description: '',
  links: [
    {
      title: 'IBM.com',
      url:
        'https://www.ibm.com/support/knowledgecenter/en/SSKTMJ_8.5.3/com.ibm.help.domino.admin85.doc/H_HTML_RENDERING_FOR_MAIL_6565.html',
    },
  ],
  platforms: [
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'macOS',
      engine: 'WebKit',
    },
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'Windows',
      engine: 'Trident',
    },
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'Linux',
      engine: 'Gecko',
    },
  ],
};

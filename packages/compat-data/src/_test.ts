export const clients = {
  agents: {
    outlook: {
      client: 'Outlook',
      aliases: ['outlook', 'outlook.win'], // derived from the name + 'kind' of application / webmail
      prefix: 'ms', // derived from the engine
      devices: ['desktop'], // taken directly from data
      doctype: {}, // taken directly from data
      versions: [
        {
          name: 'Outlook 2000',
          version: 9,
          release: '1999-06-27',
          prefix: 'ms', // derived from the engine
          notes:
            'Included in Office 2000 and bundled with Exchange 2000 Server',
        },
        {
          name: 'Outlook 2002',
          version: 10,
          release: '2001-05-31',
          prefix: 'ms', // derived from the engine
          notes: 'Included in Office XP',
        },
        {
          name: 'Outlook 2003',
          version: 11,
          release: '2003-11-20',
          prefix: 'ms', // derived from the engine
          notes:
            'Included in Office 2003 and bundled with Exchange Server 2003',
        },
        {
          name: 'Outlook 2007',
          version: 12,
          release: '2007-01-27',
          prefix: 'mso', // derived from the engine
          notes:
            'Included in Office 2007, except Office Home and Student edition',
        },
        {
          name: 'Outlook 2010',
          version: 14,
          release: '2010-07-15',
          prefix: 'mso', // derived from the engine
          notes:
            'Included in Office 2010 Home and Business, Standard, Professional and Professional Plus',
        },
        {
          name: 'Outlook 2013',
          version: 15,
          release: '2013-01-29',
          prefix: 'mso', // derived from the engine
          notes: 'Included in Office 2013, except Home & Student edition',
        },
        {
          name: 'Outlook 2016',
          version: 16,
          release: '2015-09-22',
          prefix: 'mso', // derived from the engine
          notes: 'Included in Office 2016 and Office 365',
        },
        {
          name: 'Outlook 2019',
          version: 16,
          release: '2018-09-24',
          prefix: 'mso', // derived from the engine
          notes: 'Included in Office 2019 and Office 365',
        },
      ],
      usage: {},
    },
  },
};

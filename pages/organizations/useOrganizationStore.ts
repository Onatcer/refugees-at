type InitiativeType = 'donations' | 'participate'

interface MapPosition {
    lon: number,
    lat: number
}

interface Initiative {
    name: string,
    slug: string,
    website: string,
    description: string,
    content?: string,
    type?: InitiativeType[]
    position?: MapPosition
}

interface Organization {
    'name': string,
    'slug': string,
    'logo': string,
    'website': string,
    'description': string,
    initiatives: Initiative[]
}

export const organizations: Organization[] = [{
    'name': 'Caritas',
    'slug': 'caritas',
    'logo': 'https://www.caritas.at/typo3conf/ext/theme/Resources/Public/Images/logos/logo-caritas.svg',
    'website': 'https://www.caritas.at/',
    'description': 'Im Jahr 1903 gegründete Soziale Hilfs- und Dienstleistungsorganisation der römisch-katholischen Kirche',
    'initiatives': [{
        'name': 'Lerncafés - Unterstützung beim Lernen',
        'slug': 'lerncafes',
        'website': 'https://www.caritas.at/hilfe-angebote/flucht-integration/projekte/lerncafes',
        'description': 'In österreichweit insgesamt 62 Lerncafés werden Kinder und Jugendliche im Alter von 6 bis 15 Jahren beim Lernen unterstützt.'
    },
        {
            'name': 'ProLehRe',
            'slug': 'prolehre',
            'website': 'https://www.caritas.at/hilfe-angebote/flucht-integration/projekte/prolehre',
            'description': 'Mit einem Buddy System werden junge Menschen mit Fluchthintergrund die eine Lehre absolvieren unterstützt.',
            'type': ['participate']
        },
        {
            'slug': 'krise-in-der-ukraine',
            'name': 'Krise in der Ukraine',
            'website': 'https://www.caritas.at/spenden-helfen/auslandshilfe/katastrophenhilfe/laender-brennpunkte/ukraine',
            'description': 'Die Caritas unterstützt mit Kolleg:innen und Partnern vor Ort Nothilfe im Ukraine Krieg.',
            'type': ['donations']
        },
    ],
},
    {
        'name': 'Ärzte ohne Grenzen',
        'slug': 'aerzte-ohne-grenzen',
        'logo': '/aog.svg',
        'website': 'https://www.aerzte-ohne-grenzen.at/',
        'description': 'Die im Jahr 1971 größte unabhängige Organisation für medizinische Nothilfe',
        'initiatives': [{
            'name': 'UNSERE HILFE IN DER UKRAINE',
            'slug': 'unsere-hilfe-in-der-ukraine',
            'website': 'https://www.aerzte-ohne-grenzen.at/ukraine',
            'description': '"Ärzte ohne Grenzen" bereiten Nothilfeaktivitäten in der Ukraine vor und entsenden Teams nach Polen, Moldawien, Ungarn, Rumänien und in die Slowakei.',
            'content': `Im Blog auf [https://www.aerzte-ohne-grenzen.at/artikel/ukraine-wir-bereiten-uns-vor](https://www.aerzte-ohne-grenzen.at/artikel/ukraine-wir-bereiten-uns-vor) 
            berichtet "Ärzte ohne Grenzen" über den Fortschritt bei den Vorbereitungen`,
            'type': ['donations']
        }]
    },
    {
        'name': 'CARE',
        'slug': 'care',
        'logo': '/care-logo.png',
        'website': 'https://www.care.at/',
        'description': '1968 gegründete internationale Hilfsorganisation mit Sitz in Genf, welche in Österreich und Deutschland durch die in der Nachkriegszeit versandten CARE-Pakete bekannt ist',
        'initiatives': [{
            'name': 'Nothilfe Ukraine',
            'slug': 'nothilfe-ukraine',
            'website': 'https://www.care.at/online-spenden/nothilfe-ukraine',
            'description': 'CARE Österreich leistet sofortige Nothilfe und unterstützt die von der Eskalation schwer betroffene ukrainische Bevölkerung.',
            'type': ['donations']
        }]
    },
    {
        'name': 'Diakonie',
        'slug': 'diakonie',
        'logo': '/diakonie-logo.svg',
        'website': 'https://www.diakonie.at/',
        'description': 'Die Diakonie Österreich ist ein 1968 gegründeter Dachverband aller diakonischen evangelischen Anbieter in Österreich mit Sitz in Wien',
        'initiatives': [{
            'name': 'Ukraine Nothilfe',
            'slug': 'urkaine-nothilfe',
            'website': 'https://www.diakonie.at/unsere-themen/katastrophenhilfe/ukraine-nothilfe-spenden',
            'description': 'Die Diakonie versort u.a. Geflüchtete mit Lebensmitteln, Trinkwasser, Decken und Kleidung.',
            'type': ['donations']
        }]
    },
    {
        'name': 'St. Barbara Kirche in Wien',
        'slug': 'st-barbara-kirche',
        'logo': '/st-barbara-kirche-logo.png',
        'website': 'https://st-barbara-austria.org/de/',
        'description': 'Griech.-kath. Zentralpfarramt zu St. Barbara organisierte zusammen mit der ukrainischen Gemeinde ein Zentrum, ' +
            'um den Opfern des Krieges zwischen Russland und der Ukraine zu helfen.',
        'initiatives': [{
            'name': 'Homes for Ukraine',
            'slug': 'homes-for-ukraine',
            'website': 'https://homesforukraine.eu/de/help-deu/',
            'description': 'Homes for Ukraine koordiniert und organisiert den Transport von Sachspenden sowie dringend benötigte Güter in die Ukraine.' +
                'Außerdem koordinieren sie die Aufnahme von Flüchtlingen aus der Ukraine.',
            'type': ['donations', 'participate'],
            'position': {'lon': 16.3768922, 'lat': 48.2096574}
        }]
    },

    ]

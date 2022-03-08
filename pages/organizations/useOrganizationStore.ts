import {Initiative, Organization} from "~/types";


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
        },
            {
                'name': 'Diakonie Wohnraumspende',
                'slug': 'diakonie-wohnraumspende',
                'website': 'https://www.instagram.com/p/CarN25Zq7Zo',
                'description': 'Die Diakonie sucht Wohnraum in Wien für kriegsvertriebene Menschen aus der Ukraine.',
                'type': ['accommodation']
            },
        ]
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
    {
        'name': 'Volkshilfe',
        'slug': 'volkshilfe',
        'logo': '/volkshilfe-logo.png',
        'website': 'https://www.volkshilfe.at/',
        'description': 'Die Volkshilfe ist eine gemeinnützige und überkonfessionelle Wohlfahrtsorganisation, die in Österreich und international professionelle soziale und sozialmedizinische Einrichtungen und Projekte plant, errichtet, betreibt und unterstützt..',
        'initiatives': [{
            'name': 'Volkshilfe Ukraine Hilfe',
            'slug': 'volkshilfe-ukraine-hilfe',
            'website': 'https://www.volkshilfe.at/meine-spende/jetzt-spenden/donations/nothilfe-ukraine/',
            'description': 'Die Volkshilfe hilft  Verteilung von Notfallpaketen (z.B. Nahrungsmittel, Decken, Hygieneartikel, Medikamente)' +
                'Soziale Unterstützung der Betroffenen, um die traumatisierende Situation besser zu verkraften' +
                'Notunterkünfte für die Geflüchteten. Zumindest ein Dach über dem Kopf.',
            'type': ['donations'],
        },
            {
                'name': 'Unterstützen Sie Kriegsflüchtlinge mit Raum und Zeit',
                'slug': 'volkshilfe-raum-und-zeit',
                'website': 'https://www.volkshilfe-wien.at/unterstuetzen-sie-kriegsfluechtlinge-mit-raum-und-zeit/',
                'description': 'Wohnraum, Sachspenden, Übersetzungsdienste.',
                'type': ['commodity-contributions', "participate"],
            },
        ]
    },
    {
        'name': 'Train of Hope',
        'slug': 'train-of-hope',
        'logo': '/train-of-hope-logo.png',
        'website': 'http://www.trainofhope.at/',
        'facebook': 'https://www.facebook.com/trainofhope.wien/',
        'description': '' +
            'Train of Hope ist ein humanitärer Verein mit Sitz in Wien welcher im Zuge der Flüchtlingskrise in Europa 2015, als in Wien zahlreiche Flüchtlinge in Wien ankamen entstand. Während der Fokus der organisierten Hilfe sich auf den Wiener Westbahnhof lag, kamen zahlreiche Flüchtlinge auch auf dem neuen Wiener Hauptbahnhof an.',
        'initiatives': [{
            'name': 'Train of Hope',
            'slug': 'train-of-hope',
            'website': 'http://www.trainofhope.at/_www_/jetzthelfen/',
            'description': 'Die Volkshilfe hilft  Verteilung von Notfallpaketen (z.B. Nahrungsmittel, Decken, Hygieneartikel, Medikamente)' +
                'Soziale Unterstützung der Betroffenen, um die traumatisierende Situation besser zu verkraften' +
                'Notunterkünfte für die Geflüchteten. Zumindest ein Dach über dem Kopf.',
            'type': ['donations', 'participate'],
        },
            {
                'name': 'House of Hope - Social Bazar',
                'slug': 'house-of-hope',
                'website': 'https://www.facebook.com/bazar.houseofhope/',
                'description': 'Der Social Bazar stellt Flüchtlingen u.a. Kleidung, Handtücher, Bettwäsche, Kinderwägen, Spielzeug, Geschirr, kleinen Hausrat zur Verfügung. Wahlmöglichkeit ist dabei besondere Priorität.',
                'type': ['commodity-contributions'],
                'position': {
                    lon: 16.2981397,
                    lat: 48.1473589
                }
            }
        ]
    },
    {
        'name': 'Fonts Soziales Wien',
        'slug': 'fonds-soziales-wien',
        'logo': '/where2help-logo.svg',
        'website': 'https://www.fsw.at/',
        'description': '' +
            'Der Fonds Soziales Wien (FSW) ist ein im Jahr 2000 nach den Bestimmungen des Wiener Landes-Stiftungs- und Fondsgesetzes geschaffener Fonds der Stadt Wien. Er ist privatwirtschaftlich organisiert und dient der Erfüllung gemeinnütziger Zwecke.',
        'initiatives': [{
            'name': 'Where2Help',
            'slug': 'where-2-help',
            'website': 'https://where2help.wien/',
            'description': 'Where2Help koordiniert NGOs und NPOs sowie Freiwillige. Freiwillige können sich anmelden um einmalig oder regelmäßig bei Projekten mitzuhelfen.',
            'type': ['participate'],
        },
        ]
    },
    {
        'name': 'Austria helps Ukraine',
        'slug': 'austria-helps-ukraine',
        'logo': '/austria-helps-ukraine.png',
        'website': 'https://www.instagram.com/austria_helps_ukraine/',
        'description': '' ,
        'initiatives': [{
            'name': 'Austria helps Ukraine',
            'slug': 'austria-helps-ukraine',
            'website': 'https://t.me/austria_helps_ukraine',
            'description': 'Emergency support chat (see pinned msg) for Ukrainians in Austria, who need help in times of Military Invasion.',
            'type': ['commodity-contributions'],
            position: {
                lat: 48.2016389,
                lon: 16.369795
            },
            content: 'Bösendorferstrasse 1/1/18-19, 1010 Vienna'
        },
        ]
    },

    {
        'name': 'Ute Bock',
        'slug': 'ute-bock',
        'logo': '/ute-bock-logo.svg',
        'website': 'https://www.fraubock.at/de/',
        'description': 'Das Flüchtlingsprojekt Ute Bock ist ein gemeinnütziger, nicht gewinnorientierter Verein für Flüchtlingshilfe in Wien. Der Arbeitsfokus liegt auf der Beratung und Betreuung in Wien lebender und meist obdachloser Asylwerber und anderer hilfsbedürftiger Flüchtlinge.' ,
        'initiatives': [{
            'name': 'Sachspenden im Ute Bock Haus',
            'slug': 'Sachspenden-im-ute-bock-haus',
            'website': 'https://www.fraubock.at/images/Infozettel_Sachspenden_bei_Ute_Bock.pdf',
            'description': 'Das Flüchtlingsprojekt Ute Bock sammelt im Ute Bock Haus diverse Sachspenden',
            'type': ['commodity-contributions'],
            position: {
                lat: 48.168033,
                lon: 16.3607703
            },
        },
            {
                'name': 'Ute Bock Freiwilligenarbeit',
                'slug': 'ute-bock-freiwilligenarbeit',
                'website': 'https://www.fraubock.at/de/unterstuetze-uns/freiwilligenarbeit',
                'description': 'Bei "Ute Bock" kann man Volunteer werden und in diversen Bereichen u.a. Lebensmittelausgabe, Nachhilft, Transportdienste engagieren.',
                'type': ['participate'],
                position: {
                    lat: 48.168033,
                    lon: 16.3607703
                },
            }

        ],
    },
    {
        'name': 'Marktgemeinde Guntramsdorf',
        'slug': 'marktgemeinde-guntramsdorf',
        'logo': '/guntramsdorf-logo.gif',
        'website': 'https://www.guntramsdorf.at/',
        'description': 'Guntramsdorf ist eine Marktgemeinde mit 9152 Einwohnern (Stand 1. Jänner 2021) im Industrieviertel in Niederösterreich.' ,
        'initiatives': [{
            'name': 'Guntramsdorf hilft!',
            'slug': 'guntramsdorf-hilft',
            'website': 'https://www.guntramsdorf.at/cgi-bin/ONLWYSIWYG2008/ONL.cgi?WHAT=INFOSHOW&INFONUMMER=89191601&ONLFA=GUN&KAPNUMMER=1',
            'description': 'Die Marktgemeinde Guntramsdorf sammelt Sachspenden für die Bevölkerung in der Ukraine.',
            'type': ['commodity-contributions'],
            position: {
                lat: 48.0457878,
                lon: 16.3115164
            },
        }],
    },
    {
        'name': 'Gmünd hilft',
        'slug': 'gmuend-hilft',
        'logo': '/gmuend-hilft-logo.png',
        'website': 'http://gmuend-hilft.at/',
        'description': 'Guntramsdorf ist eine Marktgemeinde mit 9152 Einwohnern (Stand 1. Jänner 2021) im Industrieviertel in Niederösterreich.' ,
        'initiatives': [{
            'name': 'Begegnungscafé',
            'slug': 'gmuend-begegnungscafe',
            'website': 'http://gmuend-hilft.at/?page_id=56',
            'description': 'Das Begegnungscafé bietet die Möglichkeit, in entspannter Atmosphäre und bei Kaffee, Tee und Kuchen ins Gespräch zu kommen.',
            'type': ['participate'],
            position: {
                lat: 48.761792,
                lon: 14.9701254
            },
        }],
    },
    {
        'name': 'SPÖ Wiener Neustadt',
        'slug': 'spoe-wiener-neustadt',
        'logo': '/spoe-wn-logo.png',
        'website': 'http://gmuend-hilft.at/',
        'description': 'Die SPÖ in Wiener Neustadt.' ,
        'initiatives': [{
            'name': 'Rot hilft Blau-Gelb',
            'slug': 'rot-hilft-blau-gelb',
            'website': 'https://www.spwn.at/82/rot-hilft-blau-gelb-380.html',
            'description': 'Neustadtweite Sammelaktion der SPÖ Wiener Neustadt',
            'type': ['commodity-contributions'],
            position: {
                lat: 47.8416586,
                lon: 16.2801568
            },
        }],
    },
    {
        'name': '2-getthere',
        'slug': '2-getthere',
        'logo': '/2-getthere-logo.png',
        'website': 'http://mattersburg.2-getthere.at/',
        'description': 'Der Verein 2getthere hat' +
            'sich zum Ziel gemacht,' +
            'Jugendliche in verschiedenen' +
            'Lebenslagen zu begleiten, zu unterstützen und' +
            'sie für das Leben vorzubereiten.' ,
        'initiatives': [{
            'name': 'Hilfsaktion für die Ukraine',
            'slug': '2-getthere-hilfsaktion-ukraine',
            'website': 'http://mattersburg.2-getthere.at/index.php/projekte-news/56-hilfsaktion-fuer-die-ukraine',
            'description': 'In enger Zusammenarbeit mit der Freiwilligen Feuerwehr des Bezirks Eisenstadt und der Freiwilligen Feuerwehr Gattendorf hilft 2getthere Mattersburg in der derzeitigen Krisensituation in der Ukraine.',
            'type': ['commodity-contributions', "donations"],
            position: {
                lat: 47.7395364,
                lon: 16.4012879
            },
        }],
    },
    {
        'name': 'MUT',
        'slug': 'mut',
        'logo': '/mut-logo.jpeg',
        'website': 'https://verein-mut.eu/aktuelles/not-und-obdachlosenhilfe/mut-fuer-die-ukraine/',
        'description': 'Der Verein steht für "die Einheit von Mensch, Umwelt und Tier."' ,
        'initiatives': [{
            'name': 'MUT für die Ukraine',
            'slug': 'mut-fuer-die-ukraine',
            'website': 'https://verein-mut.eu/ukraine/',
            'description': 'MUT schnürt Hilfspakete mit den Dingen, die am dringendsten gebraucht werden. Pakete werden entweder in die Slowakei oder nach Polen direkt an die Grenze zur Ukraine gebracht. Dort werden sie an eine große Hilfsorganisation, die vor Ort vernetzt ist und die die dringend benötigten Sachspenden an die betroffenen Menschen verteilt übergeben.',
            'type': ['commodity-contributions', "donations"],
            position: {
                lat: 48.1967588,
                lon: 16.3580635
            },
        }],
    },
    {
        'name': 'Marktgemeinde Sollenau',
        'slug': 'marktgemeinde-sollenau',
        'logo': '/marktgemeinde-sollenau-logo.png',
        'website': 'https://www.sollenau.noe.gv.at/news.html',
        'description': 'Sollenau ist eine Marktgemeinde mit 5231 Einwohnern (Stand 1. Jänner 2021) im Bezirk Wiener Neustadt-Land in Niederösterreich.',
        'initiatives': [{
            'name': 'Humanitäre Hilfe im Ukraine-Konflikt',
            'slug': 'humanitaere-hilfe-im-ukraine-konflikt',
            'website': 'https://www.sollenau.noe.gv.at/news.html',
            'description': 'Die Gemeinde Sollenau koordiniert Unterkunfsmöglichkeite, Übersetzer:innen und Sachspenden um in der Ukraine zu helfen.',
            'type': ['commodity-contributions', "participate", 'accommodation'],
            position: {
                lat: 47.89647,
                lon: 16.2461637
            },
        }],
    },
    {
        'name': 'Marktgemeinde Lanzenkirchen',
        'slug': 'marktgemeinde-lanzenkirchen',
        'logo': '/marktgemeinde-lanzenkirchen-logo.jpeg',
        'website': 'https://www.lanzenkirchen.gv.at/',
        'description': 'Lanzenkirchen ist eine Marktgemeinde mit 4012 Einwohnern (Stand 1. Jänner 2021) im Industrieviertel von Niederösterreich, im Bezirk Wiener Neustadt-Land.',
        'initiatives': [{
            'name': 'Humanitäre Hilfe im Ukraine-Konflikt',
            'slug': 'humanitaere-hilfe-im-ukraine-konflikt',
            'website': 'https://www.lanzenkirchen.gv.at/Lanzenkirchen_hilft_-_Sammelaktion_fuer_die_Ukraine',
            'description': 'Die Gemeinde Lanzenkirchen sammelt diverse Artikel, welche von den Feuerwehren anschließend zu größeren Verteilerpunkten transportiert werden.',
            'type': ['commodity-contributions',],
            position: {
                lat: 47.7426373,
                lon: 16.2393379
            },
        }],
    },

    {
        'name': 'Marktgemeinde Zellerndorf',
        'slug': 'marktgemeinde-zellerndorf',
        'logo': '/marktgemeinde-zellerndorf-logo.jpeg',
        'website': 'https://zellerndorf.riskommunal.net/Startseite',
        'description': 'Zellerndorf ist eine Marktgemeinde mit 2424 Einwohnern (Stand 1. Jänner 2021) im Bezirk Hollabrunn in Niederösterreich.',
        'initiatives': [{
            'name': 'Zellerndorf hilft!',
            'slug': 'zellerndorf-hilft',
            'website': 'http://www.zellerndorf.gv.at/Zellerndorf_hilft_1',
            'description': 'Die Gemeinde Zellerndorf sammelt diverse Artikel und bringt diese mit Hilfe des Zivilschutzverbandes NÖ in die Ukraine.',
            'type': ['commodity-contributions',],
            position: {
                lat: 48.6947101,
                lon: 15.9551008
            },
        }],
    },
    {
        'name': 'füreinand',
        'slug': 'fuereinand',
        'logo': '/fuereinand-logo.svg',
        'website': 'https://fuereinand.at/',
        'description': 'Österreichs Community für Mitmenschlichkeit.',
        'initiatives': [{
            'name': 'nachbarschafft\' Ukraine',
            'slug': 'nachbarschafft-ukraine',
            'website': 'https://fuereinand.at/',
            'description': 'füreinand koordiniert freiwilliger Hilfe, Sachspenden und Unterkünfte.',
            'type': ['commodity-contributions', 'participate', 'accommodation'],
        }],
    },
    {
        'name': 'Flüchtlinge Willkommen',
        'slug': 'fluechtlinge-willkommen',
        'logo': '/fluewi-logo.jpeg',
        'website': 'https://www.fluechtlinge-willkommen.at/',
        'description': 'Flüchtlinge Willkommen Österreich (kurz: FlüWi) findet geflüchteten Personen ein neues Zuhause in Privatunterkünften, also in WGs oder bei Familien, die ein freies Zimmer zur Verfügung stellen.',
        'initiatives': [{
            'name': 'Flüchtline Willkommen',
            'slug': 'fluechtlinge-willkommen',
            'website': 'https://www.fluechtlinge-willkommen.at/',
            'description': 'Flüchtlinge Willkommen ist eine Plattform zur Vermittlung von Privatunterkünften für Flüchtlinge.',
            'type': ['accommodation'],
        }],
    },


]


export function getAllInitiatives() : Initiative[]{
    return organizations.reduce((previousValue, currentValue) => {
        currentValue.initiatives.forEach((initiative) => {
            previousValue.push(initiative)
        })
        return previousValue;
    }, [])
}


export function getOrganizationForInitiative(initiative:Initiative){

    return organizations.find((organization) => {
        return organization.initiatives.includes(initiative)
    })

}
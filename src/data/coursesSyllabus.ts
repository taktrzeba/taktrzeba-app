export interface DayContent {
  title: string;
  skills: string[];
  tools: string[];
}

export interface CourseData {
  icon: string;
  name: string;
  goal: string;
  days: DayContent[];
  mainTools: string[];
}

export const coursesSyllabus: CourseData[] = [
  {
    icon: '🔧',
    name: 'MECHANIK ROWEROWY',
    goal: 'nauczyć logicznej diagnostyki i podstaw mechaniki ruchu',
    mainTools: [
      'stojak serwisowy rowerowy (regulowany)',
      'zestaw kluczy imbusowych: 2 / 2.5 / 3 / 4 / 5 / 6 / 8 mm',
      'klucze płaskie: 8 / 10 / 13 / 15 mm',
      'łyżki do opon (plastikowe)',
      'pompka ręczna i pompka podłogowa z manometrem',
      'szczypce uniwersalne',
      'smar do łańcucha i czyścik do łańcucha'
    ],
    days: [
      {
        title: 'Budowa roweru i stanowisko pracy',
        skills: [
          'identyfikacja głównych podzespołów roweru',
          'rozróżnianie elementów stałych i regulowanych',
          'bezpieczne mocowanie roweru w stojaku',
          'prawidłowe trzymanie i odkładanie narzędzi',
          'organizacja stanowiska pracy'
        ],
        tools: [
          'stojak serwisowy',
          'zestaw kluczy imbusowych (2–8 mm)',
          'klucze płaskie (8–15 mm)',
          'śrubokręty płaskie i krzyżakowe',
          'smary techniczne (pokaz zastosowania)'
        ]
      },
      {
        title: 'Koła, opony, dętki',
        skills: [
          'demontaż i montaż koła',
          'zdejmowanie opony bez jej uszkodzenia',
          'lokalizowanie przebicia',
          'prawidłowe osadzanie dętki',
          'kontrola ciśnienia i centryczności koła'
        ],
        tools: [
          'łyżki do opon (plastikowe)',
          'pompki ręczne i podłogowe',
          'zestawy naprawcze',
          'klucz do osi kół (15 mm)'
        ]
      },
      {
        title: 'Hamulce',
        skills: [
          'rozróżnianie typów hamulców',
          'regulacja siły hamowania',
          'ustawianie symetrii klocków',
          'testowanie skuteczności',
          'rozumienie konsekwencji błędnej regulacji'
        ],
        tools: [
          'klucze imbusowe',
          'szczypce',
          'klucze regulacyjne',
          'stanowisko testowe'
        ]
      },
      {
        title: 'Napęd i przerzutki',
        skills: [
          'regulacja zakresu pracy przerzutki',
          'napięcie linki',
          'ustawianie precyzji zmiany biegów',
          'diagnozowanie typowych usterek',
          'cierpliwa korekta błędów'
        ],
        tools: [
          'klucze imbusowe',
          'śrubokręty precyzyjne',
          'smary do napędu',
          'czyściki techniczne'
        ]
      },
      {
        title: 'Pełny serwis',
        skills: [
          'planowanie kolejności prac',
          'kontrola całościowa',
          'test końcowy',
          'odpowiedzialność za efekt'
        ],
        tools: [
          'wszystkie narzędzia z poprzednich dni',
          'checklista kontrolna',
          'stanowisko testowe'
        ]
      }
    ]
  },
  {
    icon: '🪚',
    name: 'STOLARKA',
    goal: 'precyzja, cierpliwość, planowanie pracy',
    mainTools: [
      'miarka stalowa (3–5 m)',
      'kątownik stolarski',
      'piła ręczna do drewna',
      'piła grzbietnica',
      'papier ścierny (80 / 120 / 180)',
      'wkrętarka akumulatorowa',
      'ściski stolarskie',
      'imadło warsztatowe'
    ],
    days: [
      {
        title: 'Materiał i pomiary',
        skills: [
          'rozpoznawanie rodzaju drewna',
          'pomiar i trasowanie',
          'czytanie prostego rysunku technicznego',
          'bezpieczne trzymanie narzędzi'
        ],
        tools: [
          'miarki stalowe',
          'kątowniki',
          'ołówki stolarskie',
          'piły ręczne',
          'imadła'
        ]
      },
      {
        title: 'Cięcie i obróbka',
        skills: [
          'prowadzenie cięcia po linii',
          'kontrola siły nacisku',
          'szlifowanie płaszczyzn i krawędzi',
          'korygowanie błędów'
        ],
        tools: [
          'piły ręczne',
          'papier ścierny (różne gradacje: 80 / 120 / 180)',
          'klocki szlifierskie',
          'ściski stolarskie'
        ]
      },
      {
        title: 'Łączenia',
        skills: [
          'planowanie kolejności montażu',
          'wiercenie otworów prowadzących',
          'wkręcanie bez rozszczepienia drewna',
          'stabilizacja konstrukcji'
        ],
        tools: [
          'wkrętarki',
          'wiertła do drewna (3–8 mm)',
          'wkręty do drewna',
          'ściski'
        ]
      },
      {
        title: 'Montaż i wykończenie (Dzień 4)',
        skills: [
          'składanie konstrukcji',
          'korekta niedokładności',
          'estetyczne wykończenie'
        ],
        tools: [
          'wszystkie narzędzia montażowe',
          'klej stolarski',
          'papier ścierny wykończeniowy'
        ]
      },
      {
        title: 'Projekt końcowy (Dzień 5)',
        skills: [
          'samodzielna realizacja projektu',
          'kontrola jakości',
          'ocena własnej pracy',
          'prezentacja efektu'
        ],
        tools: [
          'pełny warsztat stolarski',
          'materiały do wykończenia'
        ]
      }
    ]
  },
  {
    icon: '🚰',
    name: 'HYDRAULIKA',
    goal: 'samodzielność i myślenie przyczynowo–skutkowe',
    mainTools: [
      'klucz nastawny (mały i średni)',
      'klucz hydrauliczny („żabka")',
      'szczypce uniwersalne',
      'nożyce do rur plastikowych',
      'rury PVC / PEX (szkoleniowe)',
      'złączki i syfony',
      'taśma teflonowa',
      'instalacja wodna demo'
    ],
    days: [
      {
        title: 'System wodny',
        skills: [
          'rozumienie obiegu wody',
          'rozpoznawanie elementów instalacji',
          'bezpieczna praca z wodą'
        ],
        tools: [
          'klucze nastawne',
          'szczypce',
          'modele instalacji'
        ]
      },
      {
        title: 'Połączenia',
        skills: [
          'skręcanie rur',
          'uszczelnianie połączeń',
          'kontrola szczelności'
        ],
        tools: [
          'taśmy teflonowe',
          'klucze hydrauliczne',
          'rury i złączki'
        ]
      },
      {
        title: 'Syfony i zawory',
        skills: [
          'montaż i demontaż',
          'czyszczenie',
          'poprawne ustawienie spadków'
        ],
        tools: [
          'syfony',
          'zawory',
          'uszczelki gumowe',
          'nożyce do rur'
        ]
      },
      {
        title: 'Awarie i diagnostyka (Dzień 4)',
        skills: [
          'diagnoza przecieków',
          'logiczne usuwanie problemów',
          'naprawa typowych usterek'
        ],
        tools: [
          'instalacja demo',
          'narzędzia naprawcze',
          'pojemniki na wodę'
        ]
      },
      {
        title: 'Instalacja demo (Dzień 5)',
        skills: [
          'montaż kompletnej instalacji',
          'test końcowy',
          'odpowiedzialność za szczelność',
          'dokumentacja pracy'
        ],
        tools: [
          'wszystkie narzędzia hydrauliczne',
          'pełna instalacja wodna demo'
        ]
      }
    ]
  },
  {
    icon: '⚡',
    name: 'ELEKTRYKA',
    goal: 'zrozumienie zasad i odpowiedzialność',
    mainTools: [
      'śrubokręty izolowane (płaski i krzyżakowy)',
      'szczypce izolowane',
      'obcinaczki boczne izolowane',
      'próbnik napięcia',
      'miernik uniwersalny (multimetr)',
      'ściągacz izolacji',
      'tablica szkoleniowa',
      'zasilanie zabezpieczone (RCD)'
    ],
    days: [
      {
        title: 'Bezpieczeństwo',
        skills: [
          'rozróżnianie przewodów (L / N / PE)',
          'zasady BHP w elektrotechnice',
          'praca na niskim napięciu',
          'rozpoznawanie zagrożeń'
        ],
        tools: [
          'próbnik napięcia',
          'szczypce izolowane',
          'przewody szkoleniowe',
          'tablica demonstracyjna'
        ]
      },
      {
        title: 'Gniazdka i włączniki',
        skills: [
          'poprawne podłączenie przewodów',
          'dokręcanie zacisków',
          'testowanie obwodu',
          'kontrola bezpieczeństwa'
        ],
        tools: [
          'śrubokręty izolowane',
          'gniazdka szkoleniowe (230V demo)',
          'puszki instalacyjne',
          'multimetr'
        ]
      },
      {
        title: 'Oświetlenie',
        skills: [
          'montaż opraw oświetleniowych',
          'tworzenie prostych obwodów',
          'test funkcjonalny',
          'bezpieczne łączenie'
        ],
        tools: [
          'oprawy oświetleniowe',
          'włączniki światła',
          'listwy montażowe',
          'narzędzia izolowane'
        ]
      },
      {
        title: 'Schematy elektryczne (Dzień 4)',
        skills: [
          'czytanie schematów instalacyjnych',
          'identyfikacja elementów',
          'tworzenie prostego obwodu według schematu',
          'wykrywanie błędów'
        ],
        tools: [
          'schematy papierowe',
          'tablica szkoleniowa',
          'multimetr',
          'próbnik napięcia'
        ]
      },
      {
        title: 'Projekt końcowy (Dzień 5)',
        skills: [
          'montaż kompletnej instalacji',
          'testowanie wszystkich obwodów',
          'odpowiedzialność za działanie',
          'dokumentacja instalacji'
        ],
        tools: [
          'wszystkie narzędzia elektryczne',
          'tablica szkoleniowa do instalacji',
          'zasilanie zabezpieczone RCD'
        ]
      }
    ]
  }
];

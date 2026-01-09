export interface DayContent {
  title: string;
  skills: string[];
  tools: string[];
  techniques: string[];
  methods: string[];
}

export interface CourseData {
  icon: string;
  name: string;
  goal: string;
  mainTools: string[];
  days: DayContent[];
}

export const coursesSyllabus: CourseData[] = [
  {
    icon: '🔧',
    name: 'MECHANIK ROWEROWY',
    goal: 'Rozwinięcie logicznej diagnostyki technicznej, zrozumienie mechaniki ruchu oraz samodzielnej obsługi i serwisu roweru.',
    mainTools: [
      'stojak serwisowy rowerowy (regulowany)',
      'zestaw kluczy imbusowych 2–8 mm',
      'klucze płaskie 8 / 10 / 13 / 15 mm',
      'łyżki do opon (tworzywo)',
      'pompka ręczna i podłogowa z manometrem',
      'szczypce uniwersalne',
      'śrubokręty płaskie i krzyżakowe',
      'smar do łańcucha',
      'czyścik i szczotki do napędu'
    ],
    days: [
      {
        title: 'Dzień 1 – Budowa roweru i organizacja stanowiska',
        skills: [
          'identyfikacja wszystkich głównych podzespołów roweru',
          'rozróżnianie elementów stałych, regulowanych i eksploatacyjnych',
          'bezpieczne osadzanie roweru w stojaku serwisowym',
          'prawidłowa organizacja stanowiska pracy',
          'świadome i bezpieczne operowanie narzędziami'
        ],
        tools: [
          'stojak serwisowy',
          'klucze imbusowe',
          'klucze płaskie',
          'śrubokręty'
        ],
        techniques: [
          'analiza konstrukcji mechanicznej',
          'praca sekwencyjna',
          'zasady ergonomii'
        ],
        methods: [
          'instruktaż demonstracyjny',
          'samodzielna eksploracja podzespołów',
          'praca indywidualna z korektą instruktora'
        ]
      },
      {
        title: 'Dzień 2 – Koła, opony i dętki',
        skills: [
          'demontaż i montaż kół',
          'zdejmowanie i zakładanie opony bez uszkodzeń',
          'lokalizacja i naprawa przebicia dętki',
          'kontrola i regulacja ciśnienia',
          'ocena stanu obręczy i osi'
        ],
        tools: [
          'łyżki do opon',
          'pompki z manometrem',
          'zestawy naprawcze',
          'klucz do osi kół'
        ],
        techniques: [
          'praca na elementach elastycznych',
          'kontrola naprężeń',
          'testy funkcjonalne'
        ],
        methods: [
          'ćwiczenia powtarzalne',
          'symulacja usterek',
          'samodzielne wykonanie pełnej procedury'
        ]
      },
      {
        title: 'Dzień 3 – Hamulce i bezpieczeństwo',
        skills: [
          'rozróżnianie systemów hamulcowych',
          'regulacja siły hamowania',
          'ustawianie symetrii klocków',
          'testowanie skuteczności hamulców',
          'ocena wpływu regulacji na bezpieczeństwo'
        ],
        tools: [
          'klucze imbusowe',
          'szczypce',
          'narzędzia regulacyjne',
          'stanowisko testowe'
        ],
        techniques: [
          'regulacja precyzyjna',
          'testy dynamiczne',
          'kontrola tolerancji'
        ],
        methods: [
          'instruktaż krok po kroku',
          'samodzielna regulacja',
          'testy praktyczne'
        ]
      },
      {
        title: 'Dzień 4 – Napęd i przerzutki',
        skills: [
          'regulacja zakresów pracy przerzutek',
          'ustawianie napięcia linek',
          'diagnozowanie problemów z napędem',
          'czyszczenie i konserwacja elementów ruchomych',
          'cierpliwa korekta błędów regulacji'
        ],
        tools: [
          'klucze imbusowe',
          'śrubokręty precyzyjne',
          'smary techniczne',
          'czyściki do napędu'
        ],
        techniques: [
          'regulacja iteracyjna',
          'obserwacja mechanizmu w ruchu',
          'diagnostyka przyczynowo-skutkowa'
        ],
        methods: [
          'ćwiczenia problemowe',
          'analiza błędów',
          'samodzielna korekta'
        ]
      },
      {
        title: 'Dzień 5 – Pełny serwis i test końcowy',
        skills: [
          'planowanie kolejności prac serwisowych',
          'kompleksowa kontrola techniczna roweru',
          'test funkcjonalny całości',
          'odpowiedzialność za efekt końcowy',
          'prezentacja wykonanej pracy'
        ],
        tools: [
          'pełen zestaw narzędzi serwisowych',
          'checklista kontrolna',
          'stanowisko testowe'
        ],
        techniques: [
          'praca kompleksowa',
          'kontrola jakości',
          'test końcowy'
        ],
        methods: [
          'samodzielny projekt serwisowy',
          'ocena instruktorska',
          'omówienie efektów'
        ]
      }
    ]
  },

  {
    icon: '🪚',
    name: 'STOLARKA',
    goal: 'Rozwinięcie precyzji, cierpliwości i planowania pracy poprzez praktyczną obróbkę drewna.',
    mainTools: [
      'miarka stalowa 3–5 m',
      'kątownik stolarski',
      'ołówek stolarski',
      'piła ręczna do drewna',
      'piła grzbietnica',
      'papier ścierny 80 / 120 / 180',
      'klocek szlifierski',
      'wkrętarka akumulatorowa',
      'wiertła do drewna 3–8 mm',
      'ściski stolarskie',
      'imadło warsztatowe'
    ],
    days: [
      {
        title: 'Dzień 1 – Drewno, pomiary i planowanie',
        skills: [
          'rozpoznawanie gatunków drewna',
          'prawidłowe pomiary i trasowanie',
          'czytanie prostych rysunków technicznych',
          'bezpieczna obsługa narzędzi ręcznych'
        ],
        tools: [
          'miarki stalowe',
          'kątowniki',
          'ołówki stolarskie',
          'imadła'
        ],
        techniques: [
          'trasowanie',
          'planowanie pracy',
          'kontrola wymiarów'
        ],
        methods: [
          'instruktaż praktyczny',
          'ćwiczenia indywidualne',
          'korekta instruktorska'
        ]
      },
      {
        title: 'Dzień 2 – Cięcie i obróbka powierzchni',
        skills: [
          'prowadzenie cięcia po linii',
          'kontrola nacisku i stabilności',
          'szlifowanie płaszczyzn i krawędzi',
          'korygowanie niedokładności'
        ],
        tools: [
          'piły ręczne',
          'papier ścierny',
          'klocki szlifierskie',
          'ściski'
        ],
        techniques: [
          'cięcie kontrolowane',
          'obróbka stopniowa',
          'wykańczanie powierzchni'
        ],
        methods: [
          'ćwiczenia powtarzalne',
          'samodzielna praca',
          'analiza błędów'
        ]
      },
      {
        title: 'Dzień 3 – Łączenia stolarskie',
        skills: [
          'planowanie kolejności montażu',
          'wiercenie otworów prowadzących',
          'wkręcanie bez rozszczepienia materiału',
          'stabilizacja konstrukcji'
        ],
        tools: [
          'wkrętarki',
          'wiertła do drewna',
          'wkręty',
          'ściski'
        ],
        techniques: [
          'łączenie mechaniczne',
          'kontrola osiowości',
          'wzmacnianie konstrukcji'
        ],
        methods: [
          'praca projektowa',
          'montaż etapowy',
          'kontrola instruktorska'
        ]
      },
      {
        title: 'Dzień 4 – Montaż i korekty',
        skills: [
          'składanie kompletnej konstrukcji',
          'korygowanie błędów montażowych',
          'przygotowanie do wykończenia'
        ],
        tools: [
          'narzędzia montażowe',
          'klej stolarski',
          'papier ścierny wykończeniowy'
        ],
        techniques: [
          'montaż finalny',
          'korekta precyzyjna',
          'wykańczanie'
        ],
        methods: [
          'samodzielna realizacja',
          'konsultacje z instruktorem',
          'kontrola jakości'
        ]
      },
      {
        title: 'Dzień 5 – Projekt końcowy i prezentacja',
        skills: [
          'samodzielna realizacja projektu',
          'kontrola jakości wykonania',
          'ocena własnej pracy',
          'prezentacja gotowego przedmiotu'
        ],
        tools: [
          'pełny warsztat stolarski',
          'materiały wykończeniowe'
        ],
        techniques: [
          'wykończenie estetyczne',
          'kontrola końcowa',
          'dokumentacja pracy'
        ],
        methods: [
          'projekt indywidualny',
          'omówienie efektów',
          'prezentacja pracy'
        ]
      }
    ]
  },
  {
    icon: '🚰',
    name: 'HYDRAULIKA',
    goal: 'Samodzielność w podstawowych pracach hydraulicznych, myślenie przyczynowo–skutkowe, diagnoza usterek i kontrola szczelności.',
    mainTools: [
      'klucz nastawny 6–8" (mały) i 10–12" (średni)',
      'klucz hydrauliczny nastawny („żabka")',
      'szczypce nastawne typu „cobra"',
      'szczypce uniwersalne',
      'śrubokręt płaski',
      'nożyce do rur z tworzyw (PEX/PVC)',
      'obcinak do rur',
      'taśma teflonowa (PTFE)',
      'pasta/nić uszczelniająca (pokaz)',
      'rury PVC / PEX (szkoleniowe)',
      'złączki, kolanka, trójniki (szkoleniowe)',
      'syfony (butelkowy i rurowy) oraz elementy odpływu',
      'zawory odcinające (kulowe) i uszczelki',
      'instalacja wodna demo w obiegu zamkniętym'
    ],
    days: [
      {
        title: 'Dzień 1 – Instalacja wodna w domu i zasady bezpieczeństwa',
        skills: [
          'rozpoznawanie elementów instalacji: doprowadzenie, zawory, odpływ',
          'rozumienie różnicy: woda pod ciśnieniem vs grawitacyjny odpływ',
          'prawidłowe użycie klucza nastawnego i szczypiec nastawnych',
          'ochrona stanowiska pracy przed zalaniem',
          'zasada: zakręć–spuść–rozkręć–zmontuj–testuj'
        ],
        tools: [
          'klucz nastawny (mały/średni)',
          'klucz hydrauliczny („żabka")',
          'szczypce nastawne typu „cobra"',
          'modele instalacji i instalacja demo'
        ],
        techniques: [
          'praca sekwencyjna',
          'kontrola momentu dokręcenia',
          'organizacja stanowiska mokrego'
        ],
        methods: [
          'instruktaż demonstracyjny na instalacji demo',
          'ćwiczenia na „suchych" łączeniach',
          'test szczelności po każdym kroku'
        ]
      },
      {
        title: 'Dzień 2 – Rury i połączenia: uszczelnianie i szczelność',
        skills: [
          'przygotowanie połączeń i kontrola gwintu',
          'prawidłowe stosowanie taśmy PTFE',
          'dobór i kontrola uszczelek',
          'składanie prostych odcinków instalacji (linia + kolanko + trójnik)',
          'wykrywanie mikrowycieków i poprawki'
        ],
        tools: [
          'taśma teflonowa (PTFE)',
          'rury i złączki szkoleniowe',
          'klucz nastawny',
          'szczypce nastawne'
        ],
        techniques: [
          'uszczelnianie gwintów',
          'kontrola szczelności',
          'praca z tolerancjami połączeń'
        ],
        methods: [
          'praca w parach (kontrola wzajemna)',
          'checklista szczelności',
          'symulowane błędy: za mało/za dużo PTFE'
        ]
      },
      {
        title: 'Dzień 3 – Syfony, odpływy i zasada spadku',
        skills: [
          'rozróżnianie syfonu butelkowego i rurowego',
          'montaż i demontaż syfonu',
          'prawidłowe ustawienie spadku odpływu',
          'czyszczenie syfonu i diagnoza „zapachu" / zatorów',
          'dobór uszczelek i dokręcenie bez pęknięć'
        ],
        tools: [
          'syfony szkoleniowe',
          'uszczelki gumowe',
          'nożyce do rur',
          'klucz nastawny',
          'śrubokręt płaski'
        ],
        techniques: [
          'montaż odpływów',
          'kontrola spadków',
          'test przepływu'
        ],
        methods: [
          'ćwiczenia na makiecie „zlew + odpływ"',
          'symulacje usterek (nieszczelność, zator)',
          'testy przepływu i szczelności'
        ]
      },
      {
        title: 'Dzień 4 – Awarie i diagnostyka: przeciek, kapanie, brak przepływu',
        skills: [
          'lokalizacja źródła przecieku w instalacji demo',
          'dobór metody naprawy: uszczelka / uszczelnienie / dokręcenie / wymiana elementu',
          'bezpieczne rozłożenie i ponowny montaż połączenia',
          'weryfikacja naprawy przez test szczelności i przepływu',
          'dokumentowanie naprawy: co było przyczyną i co zrobiono'
        ],
        tools: [
          'instalacja wodna demo',
          'pojemniki na wodę i chłonne maty',
          'klucze nastawne',
          'szczypce nastawne',
          'taśma PTFE',
          'zapasowe uszczelki'
        ],
        techniques: [
          'diagnostyka przyczynowo-skutkowa',
          'praca iteracyjna (test–popraw–test)',
          'kontrola szczelności pod ciśnieniem'
        ],
        methods: [
          'zadania problemowe (scenariusze awarii)',
          'praca w małych zespołach',
          'omówienie przyczyn i dobrych praktyk'
        ]
      },
      {
        title: 'Dzień 5 – Projekt końcowy: kompletna instalacja i odbiór',
        skills: [
          'złożenie kompletnego układu: zawór odcinający + odcinek rury + rozgałęzienie + odpływ',
          'planowanie kolejności montażu',
          'test szczelności i test przepływu według checklisty',
          'korekta błędów na podstawie obserwacji',
          'odpowiedzialność za efekt końcowy i prezentacja'
        ],
        tools: [
          'pełny zestaw narzędzi hydraulicznych',
          'instalacja wodna demo',
          'checklista odbioru',
          'zapasowe elementy: uszczelki, złączki, PTFE'
        ],
        techniques: [
          'montaż kompleksowy',
          'kontrola jakości',
          'procedura odbioru (testy końcowe)'
        ],
        methods: [
          'projekt zespołowy z podziałem ról',
          'odbiór techniczny przez instruktora',
          'prezentacja: jak działa układ i jak go testowano'
        ]
      }
    ]
  },

  {
    icon: '⚡',
    name: 'ELEKTRYKA',
    goal: 'Zrozumienie zasad działania obwodu, bezpieczna praca na stanowisku szkoleniowym oraz odpowiedzialność za poprawność połączeń i testów.',
    mainTools: [
      'śrubokręt izolowany płaski 3.0–4.0 mm (1000V)',
      'śrubokręt izolowany krzyżakowy PH1/PH2 (1000V)',
      'kombinerki izolowane (1000V)',
      'obcinaczki boczne izolowane (1000V)',
      'ściągacz izolacji do przewodów',
      'próbnik napięcia',
      'multimetr (miernik uniwersalny)',
      'kostki/złączki instalacyjne',
      'tablica szkoleniowa do instalacji',
      'zasilanie zabezpieczone RCD',
      'gniazdka, włączniki, puszki instalacyjne (szkoleniowe)',
      'oprawy oświetleniowe (szkoleniowe)'
    ],
    days: [
      {
        title: 'Dzień 1 – Bezpieczeństwo i podstawy obwodu',
        skills: [
          'rozróżnianie przewodów L / N / PE (kolory i funkcje)',
          'zrozumienie pojęć: obwód, obciążenie, zabezpieczenie',
          'bezpieczne przygotowanie przewodu: cięcie i zdejmowanie izolacji',
          'prawidłowe zaciskanie i prowadzenie przewodów na tablicy',
          'zasada pracy: odłącz–sprawdź–zabezpiecz–połącz–testuj'
        ],
        tools: [
          'ściągacz izolacji',
          'obcinaczki boczne izolowane',
          'kombinerki izolowane',
          'próbnik napięcia',
          'tablica szkoleniowa'
        ],
        techniques: [
          'przygotowanie przewodów',
          'prowadzenie przewodów w sposób uporządkowany',
          'kontrola wizualna połączeń'
        ],
        methods: [
          'instruktaż demonstracyjny',
          'ćwiczenia na przewodach szkoleniowych',
          'checklista bezpieczeństwa przed zasileniem'
        ]
      },
      {
        title: 'Dzień 2 – Gniazdka i włączniki: poprawne połączenia',
        skills: [
          'prawidłowe podłączenie przewodów do zacisków gniazdka',
          'montaż włącznika jednobiegunowego',
          'dokręcanie zacisków z wyczuciem',
          'test ciągłości i test poprawności połączeń',
          'rozumienie skutków: luźny zacisk = grzanie = ryzyko'
        ],
        tools: [
          'śrubokręty izolowane',
          'gniazdka i włączniki szkoleniowe',
          'puszki instalacyjne',
          'multimetr',
          'próbnik napięcia'
        ],
        techniques: [
          'łączenie w zaciskach',
          'kontrola momentu dokręcenia',
          'testy przed zasileniem'
        ],
        methods: [
          'praca krok po kroku',
          'peer-review w parach (wzajemna kontrola)',
          'testy funkcjonalne na tablicy szkoleniowej'
        ]
      },
      {
        title: 'Dzień 3 – Oświetlenie: obwody i oprawy',
        skills: [
          'podłączenie oprawy oświetleniowej do obwodu',
          'budowa obwodu: zasilanie → włącznik → lampa',
          'czytelne prowadzenie przewodów i porządek w instalacji',
          'test działania i interpretacja objawów błędów',
          'bezpieczne rozłączanie i poprawki'
        ],
        tools: [
          'oprawy oświetleniowe szkoleniowe',
          'włączniki',
          'złączki instalacyjne',
          'śrubokręty izolowane',
          'multimetr'
        ],
        techniques: [
          'budowa obwodu sterowania oświetleniem',
          'test funkcjonalny',
          'eliminacja błędów po objawach'
        ],
        methods: [
          'mini-projekty na stanowiskach',
          'symulowane błędy (zamiana przewodów, luźny zacisk)',
          'szybkie iteracje: test–popraw–test'
        ]
      },
      {
        title: 'Dzień 4 – Schematy: czytanie i budowanie według rysunku',
        skills: [
          'czytanie prostych schematów instalacyjnych',
          'identyfikacja elementów na schemacie i na stanowisku',
          'budowa obwodu zgodnie ze schematem',
          'systematyczne wykrywanie błędów',
          'prowadzenie „dziennika testów"'
        ],
        tools: [
          'schematy papierowe',
          'tablica szkoleniowa',
          'multimetr',
          'próbnik napięcia',
          'złączki instalacyjne'
        ],
        techniques: [
          'mapowanie schematu na rzeczywiste połączenia',
          'diagnostyka krokowa',
          'test ciągłości i test obecności napięcia'
        ],
        methods: [
          'zadania problemowe (schematy o rosnącej trudności)',
          'praca w parach: budowa + kontrola',
          'korekta na podstawie wyników pomiarów'
        ]
      },
      {
        title: 'Dzień 5 – Projekt końcowy: instalacja na tablicy i odbiór',
        skills: [
          'zaprojektowanie i wykonanie kompletnego układu na tablicy szkoleniowej',
          'prowadzenie przewodów w sposób czytelny i bezpieczny',
          'testowanie wszystkich obwodów według checklisty',
          'lokalizacja i poprawa błędów bez zgadywania',
          'prezentacja: co zrobiono, jak testowano i dlaczego to działa'
        ],
        tools: [
          'pełny zestaw narzędzi izolowanych',
          'tablica szkoleniowa',
          'multimetr',
          'próbnik napięcia',
          'RCD (zasilanie zabezpieczone)',
          'gniazdka, włączniki, oprawy'
        ],
        techniques: [
          'montaż kompleksowy',
          'kontrola jakości i bezpieczeństwa',
          'procedura odbioru technicznego'
        ],
        methods: [
          'projekt zespołowy z podziałem ról',
          'odbiór techniczny przez instruktora',
          'prezentacja końcowa i omówienie dobrych praktyk'
        ]
      }
    ]
  }
];

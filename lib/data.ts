export type Player = {
  id: string;
  number: number;
  name: string;
  position: "Portero" | "Cierre" | "Ala" | "Pívot" | "";
  isCaptain?: boolean;
};

export type Team = {
  id: string;
  name: string;
  short: string;
  group: string;
  color: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  points: number;
  coach: string;
  players: Player[];
};

export const teams: Team[] = [
  {
    id: "warriors",
    name: "Warriors FC",
    short: "WFC",
    color: "#ff3fa4",
    group: "A",
    logo: "/logos/WarriorsFC.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Oscar Almonte",
    players: [
      { id: "sp1", number: 1, name: "Samuel Pirela", position: "" },
      { id: "sp2", number: 2, name: "Jose Molina", position: "" },
      { id: "sp3", number: 3, name: "Cristian Omaña", position: "" },
      { id: "sp4", number: 4, name: "Jesus Bermudez", position: "" },
      { id: "sp5", number: 5, name: "Nelwin Araujo", position: "" },
      { id: "sp6", number: 6, name: "Jose Miguel Mequita", position: "" },
      {
        id: "sp7",
        number: 7,
        name: "Yuangel Guerrero",
        position: "",
        isCaptain: true,
      },
      { id: "sp8", number: 8, name: "Arnaldo Granda", position: "" },
      { id: "sp9", number: 9, name: "Anderson Ferrara", position: "" },
      { id: "sp10", number: 10, name: "Rafael Ramirez", position: "" },
      { id: "sp11", number: 11, name: "Ulises Cordoba", position: "" },
      { id: "sp12", number: 12, name: "Decius Denis", position: "" },
      { id: "sp13", number: 13, name: "Cristian Bacca", position: "" },
      { id: "sp14", number: 14, name: "Ivan Prado", position: "" },
      { id: "sp15", number: 15, name: "Victor Divardo", position: "" },
    ],
  },
  {
    id: "lightning",
    name: "Lightning FC",
    short: "LFC",
    color: "#22e07a",
    group: "A",
    logo: "/logos/LightningFC.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Pierluiggi Di Tonto",
    players: [
      { id: "l10", number: 1, name: "Orlando Jacobo", position: "" },
      { id: "l11", number: 2, name: "Luis Estevez", position: "" },
      { id: "l12", number: 3, name: "Brian Hernández Valencia", position: "" },
      { id: "l13", number: 4, name: "Divo Silvestri", position: "" },
      { id: "l14", number: 5, name: "Raelth Macario", position: "" },
      { id: "l15", number: 6, name: "Naim Manigat", position: "" },
      { id: "l16", number: 7, name: "Tetsuo Arai", position: "" },
      { id: "l17", number: 8, name: "Elyam Jiménez", position: "" },
      { id: "l18", number: 9, name: "Arnaldo Fernández", position: "" },
      { id: "l19", number: 10, name: "Ariel Saint Clair", position: "" },
      { id: "l20", number: 11, name: "Anthony Moreno", position: "" },
      { id: "l21", number: 12, name: "Jhonny Arrieche", position: "" },
      { id: "l22", number: 13, name: "Daniel Rodríguez", position: "" },
      { id: "l23", number: 14, name: "Manuel Valdez", position: "" },
      { id: "l24", number: 15, name: "Douglas Rojas", position: "" },
    ],
  },
  {
    id: "joseo-a",
    name: "Joseo FC A",
    short: "JOSA",
    color: "#3fb8ff",
    group: "A",
    logo: "/logos/Joseo.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Héctor Jiménez",
    players: [
      {
        id: "j1",
        number: 1,
        name: "Pedro Guzmán",
        position: "",
        isCaptain: true,
      },
      { id: "j2", number: 22, name: "Tomás Silva", position: "" },
      { id: "j3", number: 4, name: "Gonzalo Ramos", position: "" },
      { id: "j4", number: 5, name: "Ignacio Navarro", position: "" },
      { id: "j5", number: 7, name: "Sebastián Delgado", position: "" },
      { id: "j6", number: 10, name: "Felipe Romero", position: "" },
      { id: "j7", number: 17, name: "Lucas Benítez", position: "" },
      { id: "j8", number: 9, name: "Rodrigo Flores", position: "" },
      { id: "j9", number: 15, name: "Matías Acosta", position: "" },
    ],
  },
  {
    id: "joseo-b",
    name: "Joseo FC B",
    short: "JOSB",
    color: "#3fb8ff",
    group: "A",
    logo: "/logos/Joseo.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Héctor Jiménez",
    players: [
      {
        id: "j1",
        number: 1,
        name: "Pedro Guzmán",
        position: "",
        isCaptain: true,
      },
      { id: "j2", number: 22, name: "Tomás Silva", position: "" },
      { id: "j3", number: 4, name: "Gonzalo Ramos", position: "" },
      { id: "j4", number: 5, name: "Ignacio Navarro", position: "" },
      { id: "j5", number: 7, name: "Sebastián Delgado", position: "" },
      { id: "j6", number: 10, name: "Felipe Romero", position: "" },
      { id: "j7", number: 17, name: "Lucas Benítez", position: "" },
      { id: "j8", number: 9, name: "Rodrigo Flores", position: "" },
      { id: "j9", number: 15, name: "Matías Acosta", position: "" },
    ],
  },
  {
    id: "space",
    name: "Space FC",
    short: "SFC",
    color: "#a58cff",
    group: "A",
    logo: "/logos/SpaceFC.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Gabriel Núñez",
    players: [
      { id: "s1", number: 1, name: "Esteban Molina", position: "" },
      { id: "s2", number: 12, name: "David Suárez", position: "" },
      {
        id: "s3",
        number: 2,
        name: "Joaquín Cabrera",
        position: "",
        isCaptain: true,
      },
      { id: "s4", number: 6, name: "Martín Paredes", position: "" },
      { id: "s5", number: 8, name: "Nicolás Rios", position: "" },
      { id: "s6", number: 10, name: "Alejandro Vega", position: "" },
      { id: "s7", number: 11, name: "Emilio Fuentes", position: "" },
      { id: "s8", number: 9, name: "Bruno Valenzuela", position: "" },
      { id: "s9", number: 19, name: "Santino Bravo", position: "" },
    ],
  },
  {
    id: "alpha",
    name: "Alpha FC",
    short: "AFC",
    color: "#ffcf3f",
    group: "B",
    logo: "/logos/AlphaFC.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Steven De Los Santos",
    players: [
      { id: "a1", number: 1, name: "Moisés Cabrera Feliz", position: "" },
      { id: "a2", number: 13, name: "Giancarlo Franco", position: "" },
      { id: "a3", number: 4, name: "Josue Cabrera", position: "" },
      { id: "a4", number: 5, name: "Kelvis Grullon", position: "" },
      { id: "a5", number: 7, name: "Angel Payano", position: "" },
      { id: "a6", number: 10, name: "Victor Feliz", position: "" },
      { id: "a7", number: 14, name: "Oscar Vasquez", position: "" },
      { id: "a8", number: 9, name: "Bryan Reyes", position: "" },
      {
        id: "a9",
        number: 11,
        name: "Vladimir Francisco Guerrero Tallaj",
        position: "",
      },
      { id: "a10", number: 12, name: "George Bonnelly Soriano", position: "" },
      { id: "a11", number: 13, name: "Moisés Crespo", position: "" },
      { id: "a12", number: 14, name: "Enmanuel De la Cruz", position: "" },
    ],
  },
  {
    id: "sporting",
    name: "Sporting Claret SD",
    short: "SPO",
    color: "#42e8d0",
    group: "B",
    logo: "/logos/SportingFC.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Xavier Reyes",
    players: [
      { id: "sp1", number: 1, name: "Omar Hasan", position: "" },
      { id: "sp2", number: 2, name: "Edwin Abelard", position: "" },
      { id: "sp3", number: 3, name: "Hector Molano", position: "" },
      { id: "sp4", number: 4, name: "Jose Baez", position: "" },
      { id: "sp5", number: 5, name: "Ricardo Portal", position: "" },
      { id: "sp6", number: 6, name: "Jhonny Sousa", position: "" },
      { id: "sp7", number: 7, name: "Jhon Lopez", position: "" },
      { id: "sp8", number: 8, name: "Apolinar Rodriguez", position: "" },
      { id: "sp9", number: 9, name: "Jose Rodriguez", position: "" },
      { id: "sp10", number: 10, name: "Leonardo Eve", position: "" },
      { id: "sp11", number: 11, name: "Jean Lazala", position: "" },
      { id: "sp12", number: 12, name: "Gonzalo Giner", position: "" },
      { id: "sp13", number: 13, name: "Jose Gonzalez", position: "" },
      { id: "sp14", number: 14, name: "Manuel Rodriguez", position: "" },
      { id: "sp15", number: 15, name: "Charles Sanchez", position: "" },
      { id: "sp16", number: 16, name: "Diego Beras", position: "" },
      { id: "sp17", number: 17, name: "Jose Almanzar", position: "" },
      { id: "sp18", number: 18, name: "Andres Sanchez", position: "" },
      { id: "sp19", number: 19, name: "Cesar Muñoz", position: "" },
      { id: "sp20", number: 20, name: "Franklin Castillo", position: "" },
    ],
  },
  {
    id: "union",
    name: "Unión CF",
    short: "UFC",
    color: "#ff5b5b",
    group: "B",
    logo: "/logos/UnionFC.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Dario Méndez",
    players: [
      { id: "u1", number: 1, name: "Agustín Cordero", position: "" },
      { id: "u2", number: 25, name: "Facundo Lira", position: "" },
      {
        id: "u3",
        number: 4,
        name: "Mauricio Bustos",
        position: "",
        isCaptain: true,
      },
      { id: "u4", number: 6, name: "Luciano Salinas", position: "" },
      { id: "u5", number: 7, name: "Jerónimo Vera", position: "" },
      { id: "u6", number: 10, name: "Bautista Corvalán", position: "" },
      { id: "u7", number: 11, name: "Valentín Santillán", position: "" },
      { id: "u8", number: 9, name: "Iván Leguizamón", position: "" },
      { id: "u9", number: 18, name: "Thiago Farias", position: "" },
    ],
  },
  {
    id: "valpa",
    name: "Valpa FC",
    short: "VFC",
    color: "#8fdc4a",
    group: "B",
    logo: "/logos/ValpaFC.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Esteban Valenzuela",
    players: [
      { id: "v1", number: 5, name: "Melvin Vallejo", position: "" },
      { id: "v2", number: 13, name: "Sergio Laguia", position: "" },
      { id: "v3", number: 12, name: "Dumas Frontal", position: "" },
      { id: "v4", number: 4, name: "Jose Luis Ventura", position: "" },
      { id: "v5", number: 6, name: "Willber Joseph", position: "" },
      { id: "v6", number: 10, name: "Kervin Jeanlouis", position: "" },
      { id: "v7", number: 11, name: "Erns Joseph", position: "" },
      { id: "v8", number: 7, name: "Andy Bayo", position: "" },
      { id: "v9", number: 17, name: "Brasmil Marte", position: "" },
      { id: "v10", number: 18, name: "Yan Rojas", position: "" },
      { id: "v11", number: 15, name: "Eduardo Frontal", position: "" },
      { id: "v12", number: 19, name: "Jhonny Moricette", position: "" },
      { id: "v13", number: 9, name: "Junior Anotnio", position: "" },
      { id: "v14", number: 8, name: "Pedro Gabriel", position: "" },
      { id: "v15", number: 23, name: "Ubaldinho Espejo", position: "" },
    ],
  },
  {
    id: "buho",
    name: "Búho FC",
    short: "BFC",
    color: "#ff8a3f",
    group: "B",
    logo: "/logos/BuhoFC.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Carlos Domínguez",
    players: [
      { id: "b1", number: 1, name: "Álvaro Soria", position: "" },
      { id: "b2", number: 13, name: "Sergio Villalba", position: "" },
      {
        id: "b3",
        number: 3,
        name: "Ezequiel Quiroga",
        position: "",
        isCaptain: true,
      },
      { id: "b4", number: 6, name: "Milton Báez", position: "" },
      { id: "b5", number: 7, name: "Axel Barrios", position: "" },
      { id: "b6", number: 10, name: "n Cáceres", position: "" },
      { id: "b7", number: 14, name: "Leonel Galeano", position: "" },
      { id: "b8", number: 9, name: "Elias Insaurralde", position: "" },
      { id: "b9", number: 22, name: "Tiziano Benítez", position: "" },
    ],
  },
  {
    id: "ataraxia",
    name: "Ataraxia FC",
    short: "ATFC",
    color: "#ff3fa4",
    group: "A",
    logo: "/logos/AtaraxiaFC.png",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: "Oscar Almonte",
    players: [
      { id: "sp1", number: 1, name: "Samuel Pirela", position: "" },
      { id: "sp2", number: 2, name: "Jose Molina", position: "" },
      { id: "sp3", number: 3, name: "Cristian Omaña", position: "" },
      { id: "sp4", number: 4, name: "Jesus Bermudez", position: "" },
      { id: "sp5", number: 5, name: "Nelwin Araujo", position: "" },
      { id: "sp6", number: 6, name: "Jose Miguel Mequita", position: "" },
      {
        id: "sp7",
        number: 7,
        name: "Yuangel Guerrero",
        position: "",
        isCaptain: true,
      },
      { id: "sp8", number: 8, name: "Arnaldo Granda", position: "" },
      { id: "sp9", number: 9, name: "Anderson Ferrara", position: "" },
      { id: "sp10", number: 10, name: "Rafael Ramirez", position: "" },
      { id: "sp11", number: 11, name: "Ulises Cordoba", position: "" },
      { id: "sp12", number: 12, name: "Decius Denis", position: "" },
      { id: "sp13", number: 13, name: "Cristian Bacca", position: "" },
      { id: "sp14", number: 14, name: "Ivan Prado", position: "" },
      { id: "sp15", number: 15, name: "Victor Divardo", position: "" },
    ],
  },
];

export type Scorer = {
  rank: number;
  player: string;
  team: string;
  goals: number;
  assists: number;
};

export const topScorers: Scorer[] = [];

export type Match = {
  id: string;
  home: string;
  away: string;
  homeScore?: number;
  awayScore?: number;
  status: "live" | "upcoming" | "finished";
  minute?: string;
  date: string;
  time: string;
  viewers?: string;
};

export const liveMatches: Match[] = [
  {
    id: "m1",
    home: "Warriors FC",
    away: "Lightning FC",
    homeScore: 0,
    awayScore: 0,
    status: "upcoming",
    date: "HOY",
    time: "19:00",
  },
  {
    id: "m2",
    home: "Joseo FC A",
    away: "Space FC",
    homeScore: 0,
    awayScore: 0,
    status: "upcoming",
    date: "HOY",
    time: "20:30",
  },
];

export type CalendarMatch = {
  id: string;
  home: string;
  homeShort: string;
  away: string;
  awayShort: string;
  day: string;
  date: string;
  time: string;
  round: string;
};

export const calendar: CalendarMatch[] = [
  {
    id: "c1",
    home: "Alpha FC",
    homeShort: "AFC",
    away: "Sporting FC",
    awayShort: "SPO",
    day: "VIE",
    date: "24 ENE",
    time: "18:00",
    round: "Jornada 1",
  },
  {
    id: "c2",
    home: "Unión CF",
    homeShort: "UFC",
    away: "Valpa FC",
    awayShort: "VFC",
    day: "VIE",
    date: "24 ENE",
    time: "20:00",
    round: "Jornada 1",
  },
  {
    id: "c3",
    home: "Búho FC",
    homeShort: "BFC",
    away: "Joseo FC A",
    awayShort: "JOS",
    day: "SÁB",
    date: "25 ENE",
    time: "17:00",
    round: "Jornada 1",
  },
  {
    id: "c4",
    home: "Warriors FC",
    homeShort: "WFC",
    away: "Joseo FC A",
    awayShort: "JOS",
    day: "SÁB",
    date: "25 ENE",
    time: "19:30",
    round: "Jornada 1",
  },
  {
    id: "c5",
    home: "Lightning FC",
    homeShort: "LFC",
    away: "Space FC",
    awayShort: "SFC",
    day: "DOM",
    date: "26 ENE",
    time: "18:00",
    round: "Jornada 1",
  },
  {
    id: "c6",
    home: "Sporting FC",
    homeShort: "SPO",
    away: "Valpa FC",
    awayShort: "VFC",
    day: "DOM",
    date: "26 ENE",
    time: "20:00",
    round: "Jornada 1",
  },
];

export type InstagramPost = {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
};

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig1",
    image: "/ig-1.png",
    caption: "¡Todo listo para el inicio de la temporada! 🔥",
    likes: "1,240",
    comments: "82",
  },
  {
    id: "ig2",
    image: "/ig-2.png",
    caption: "Presentación oficial de los equipos de la Liga Premier ⚽",
    likes: "1,890",
    comments: "96",
  },
  {
    id: "ig3",
    image: "/ig-3.png",
    caption: "Listos para darlo todo en la cancha 🧤",
    likes: "2,510",
    comments: "134",
  },
  {
    id: "ig4",
    image: "/ig-4.png",
    caption: "Unidos por la gloria. #FutsalRD",
    likes: "4,020",
    comments: "221",
  },
];

export const goals = [];

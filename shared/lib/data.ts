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
    played: 2,
    won: 1,
    drawn: 1,
    lost: 0,
    gf: 11,
    ga: 10,
    points: 4,
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
    played: 2,
    won: 1,
    drawn: 0,
    lost: 1,
    gf: 11,
    ga: 6,
    points: 3,
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
      { id: "l20", number: 11, name: "Víctor Rodríguez", position: "" },
      { id: "l21", number: 12, name: "Jhonny Arrieche", position: "" },
      { id: "l22", number: 13, name: "Daniel Rodríguez", position: "" },
      { id: "l23", number: 14, name: "Manuel Valdez", position: "" },
      { id: "l24", number: 15, name: "Douglas Rojas", position: "" },
      { id: "l25", number: 16, name: "Greison Dayeth", position: "" },
      { id: "l26", number: 17, name: "Gregory Fermín", position: "" },
    ],
  },
  {
    id: "joseo-a",
    name: "Joseo FC A",
    short: "JOSA",
    color: "#3fb8ff",
    group: "A",
    logo: "/logos/Joseo.png",
    played: 2,
    won: 2,
    drawn: 0,
    lost: 0,
    gf: 8,
    ga: 0,
    points: 6,
    coach: "Roger Asiático",
    players: [
      { id: "ja1", number: 1, name: "Ismael", position: "" },
      { id: "ja2", number: 2, name: "Julio Fuentes", position: "" },
      { id: "ja3", number: 3, name: "John", position: "", isCaptain: true },
      { id: "ja4", number: 4, name: "Jolon", position: "" },
      { id: "ja5", number: 5, name: "Robert Rodríguez", position: "" },
      { id: "ja6", number: 6, name: "Kendry", position: "" },
      { id: "ja7", number: 7, name: "Doraemon", position: "" },
      { id: "ja8", number: 8, name: "Junior Dicent", position: "" },
      { id: "ja9", number: 9, name: "Daniel Feng", position: "" },
      { id: "ja10", number: 10, name: "Francisco", position: "" },
      { id: "ja11", number: 11, name: "Lebron", position: "" },
      { id: "ja12", number: 12, name: "Jorge Ramírez", position: "" },
      { id: "ja13", number: 13, name: "Evan", position: "" },
      { id: "ja14", number: 14, name: "Payano", position: "" },
      { id: "ja15", number: 15, name: "Novita", position: "" },
      { id: "ja16", number: 16, name: "Chichi", position: "" },
      { id: "ja17", number: 17, name: "Pitri", position: "" },
      { id: "ja18", number: 18, name: "Darien", position: "" },
    ],
  },
  {
    id: "joseo-b",
    name: "Joseo FC B",
    short: "JOSB",
    color: "#3fb8ff",
    group: "B",
    logo: "/logos/Joseo.png",
    played: 2,
    won: 1,
    drawn: 0,
    lost: 1,
    gf: 6,
    ga: 5,
    points: 3,
    coach: "Roger Asiático",
    players: [
      { id: "jb1", number: 1, name: "Jabes", position: "" },
      { id: "jb2", number: 2, name: "Gean Marco", position: "" },
      { id: "jb3", number: 3, name: "Esteban", position: "", isCaptain: true },
      { id: "jb4", number: 4, name: "Yves", position: "" },
      { id: "jb5", number: 5, name: "Zironi", position: "" },
      { id: "jb6", number: 6, name: "Nicolás Cuadra", position: "" },
      { id: "jb7", number: 7, name: "Alexander Domínguez", position: "" },
      { id: "jb8", number: 8, name: "Ricardo Elías", position: "" },
      { id: "jb9", number: 9, name: "Alan Montero", position: "" },
      { id: "jb10", number: 10, name: "Carlos Liriano", position: "" },
      { id: "jb11", number: 11, name: "Patico", position: "" },
      { id: "jb12", number: 12, name: "Reynoso", position: "" },
      { id: "jb13", number: 13, name: 'Darling "Jumbo"', position: "" },
      { id: "jb14", number: 14, name: "Oscar Avellino", position: "" },
      { id: "jb15", number: 15, name: "Rafael Fradera", position: "" },
      { id: "jb16", number: 16, name: "Dembele", position: "" },
      { id: "jb17", number: 17, name: "Benjamin", position: "" },
      { id: "jb18", number: 18, name: "Yury", position: "" },
    ],
  },
  {
    id: "space",
    name: "Space FC",
    short: "SFC",
    color: "#a58cff",
    group: "A",
    logo: "/logos/SpaceFC.png",
    played: 2,
    won: 1,
    drawn: 0,
    lost: 1,
    gf: 8,
    ga: 8,
    points: 3,
    coach: "Enrique Cascante",
    players: [
      { id: "s1", number: 1, name: "Gabriel Martínez", position: "" },
      { id: "s2", number: 2, name: "Alberto González Hernández", position: "" },
      { id: "s3", number: 3, name: "Gonzalo Aponte", position: "" },
      { id: "s4", number: 4, name: "Axel alma", position: "" },
      { id: "s5", number: 5, name: "Jesús Morillo", position: "" },
      { id: "s6", number: 6, name: "Jonathan González", position: "" },
      { id: "s7", number: 7, name: "Omar Domínguez", position: "" },
      { id: "s8", number: 8, name: "Gabriel Brugal", position: "" },
      { id: "s9", number: 9, name: "Abraham Rivera", position: "" },
      { id: "s10", number: 10, name: "Alvin Rivera", position: "" },
      { id: "s11", number: 11, name: "Jeffry Pierre", position: "" },
      { id: "s12", number: 12, name: "Miguel Anton Encarnación", position: "" },
      { id: "s13", number: 13, name: "Luis Daniel Caminero", position: "" },
      { id: "s14", number: 14, name: "Emilio López", position: "" },
      { id: "s15", number: 15, name: "Aiser Ramirez", position: "" },
      { id: "s16", number: 16, name: "Armando Lora", position: "" },
      { id: "s17", number: 17, name: "Óscar Guillen", position: "" },
      { id: "s18", number: 18, name: "Diego Muñoz", position: "" },
      { id: "s19", number: 19, name: "Luis Pérez", position: "" },
    ],
  },
  {
    id: "alpha",
    name: "Alpha FC",
    short: "AFC",
    color: "#ffcf3f",
    group: "B",
    logo: "/logos/AlphaFC.png",
    played: 2,
    won: 0,
    drawn: 1,
    lost: 1,
    gf: 6,
    ga: 8,
    points: 1,
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
      { id: "a13", number: 15, name: "Ramon Enrique Capellán Lerebours", position: "" },
      { id: "a14", number: 16, name: "Jeremy Acosta", position: "" },
      { id: "a15", number: 17, name: "Angel Hiciano Joga", position: "" },
    ],
  },
  {
    id: "sporting",
    name: "Sporting Claret SD",
    short: "SPO",
    color: "#42e8d0",
    group: "B",
    logo: "/logos/SportingFC.png",
    played: 2,
    won: 0,
    drawn: 2,
    lost: 0,
    gf: 6,
    ga: 6,
    points: 2,
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
    played: 2,
    won: 1,
    drawn: 0,
    lost: 1,
    gf: 9,
    ga: 12,
    points: 3,
    coach: "Juan Machado",
    players: [
      { id: "u1", number: 1, name: "Juan Zambrano", position: "" },
      { id: "u2", number: 2, name: "Newman Baptista", position: "" },
      { id: "u3", number: 3, name: "Beiker Lozano", position: "" },
      { id: "u4", number: 4, name: "Martin Lopez", position: "" },
      { id: "u5", number: 5, name: "Sayner Rivas", position: "" },
      { id: "u6", number: 6, name: "Julio César Gavarrete", position: "" },
      { id: "u7", number: 7, name: "Victor Gaspar", position: "" },
      { id: "u8", number: 8, name: "Eliot De León", position: "" },
      { id: 'u9', number: 9, name: "Mauro Saldarriaga", position: ""},
      { id: "u10", number: 9, name: "Anderson Kun", position: "" },
      { id: "u11", number: 10, name: "Alexis Padilla", position: "" },
      { id: "u12", number: 11, name: "Flobert Eugene", position: "" },
      { id: "u13", number: 12, name: "Andrés Castellanos", position: "" },
      { id: "u14", number: 13, name: "Josué Lorenzo", position: "" },
      { id: "u15", number: 14, name: "Pelé", position: "" },
      { id: "u16", number: 15, name: "Daniel Pérez", position: "" },
    ],
  },
  {
    id: "valpa",
    name: "Valpa FC",
    short: "VFC",
    color: "#8fdc4a",
    group: "B",
    logo: "/logos/ValpaFC.png",
    played: 2,
    won: 0,
    drawn: 1,
    lost: 1,
    gf: 3,
    ga: 7,
    points: 1,
    coach: "Wandy Pierrez",
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
    group: "A",
    logo: "/logos/BuhoFC.png",
    played: 2,
    won: 0,
    drawn: 0,
    lost: 2,
    gf: 2,
    ga: 15,
    points: 0,
    coach: "Pedro Dipp / Mera Darling / José Flores",
    players: [
      { id: "b1", number: 1, name: "Julio A Mejía Quezada", position: "" },
      { id: "b2", number: 2, name: "Cristopher Ovalles", position: "" },
      { id: "b3", number: 3, name: "Deyvis Leo Encarnacion", position: "" },
      { id: "b4", number: 4, name: "mariano Alberto García sanquintin", position: "" },
      { id: "b5", number: 5, name: "Marcos Antonio Marte Furment", position: "" },
      { id: "b6", number: 6, name: "Angel Camilo Medina Fernández", position: "" },
      { id: "b7", number: 7, name: "Eduardo Antonio Marte Furment", position: "" },
      { id: "b8", number: 8, name: "Justin Steven Uceta Montero", position: "" },
      { id: "b9", number: 9, name: "B. Camilo Torres H.", position: "" },
      { id: "b10", number: 10, name: "Joan Ureña", position: "" },
      { id: "b11", number: 11, name: "Ronny Almonte", position: "" },
      { id: "b12", number: 12, name: "Aldrin Hernández", position: "" },
      { id: "b13", number: 13, name: "dalton Hernández", position: "" },
      { id: "b14", number: 14, name: "Luis Ricardo", position: "" },
      { id: "b15", number: 15, name: "Cristian espinosa", position: "" },
      { id: "b16", number: 16, name: "Félix Fonseca", position: "" },
      { id: "b17", number: 17, name: "kelvin García", position: "" },
      { id: "b18", number: 18, name: "Edin Jiménez", position: "" },
      { id: "b19", number: 19, name: "Julián Cabreja", position: "" },
      { id: "b20", number: 20, name: "Augustin", position: "" },
    ],
  },
  {
    id: "mallixia",
    name: "Mallixia FC",
    short: "MFC",
    color: "#ff3fa4",
    group: "B",
    logo: "/logos/AtaraxiaFC.png", // Using AtaraxiaFC.png or generic as logo
    played: 2,
    won: 2,
    drawn: 0,
    lost: 0,
    gf: 15,
    ga: 7,
    points: 6,
    coach: "",
    players: [
      { id: "m1", number: 20, name: "Anthony Lixandro M.", position: "" },
      { id: "m2", number: 27, name: "Eduardo Viloria", position: "" },
      { id: "m4", number: 7, name: "Jenaro Montes", position: "" },
      { id: "m5", number: 15, name: "José Perez", position: "" },
      { id: "m6", number: 6, name: "José Antonio Del Riego", position: "" },
      { id: "m7", number: 28, name: "Gossin Paulny", position: "" },
      { id: "m8", number: 19, name: "Gabriel Torres", position: "" },
      { id: "m9", number: 67, name: "Guillermo Sousa", position: "" },
      { id: "m10", number: 8, name: "Dinio Charles", position: "" },
      { id: "m11", number: 96, name: "Ianfranco Cabral", position: "Portero" },
      { id: "m12", number: 13, name: "Floreal Hedsen", position: "Portero" },
      { id: "m13", number: 42, name: "Erick Reyes", position: "" },
      { id: "m14", number: 11, name: "Junior mansse", position: "" },
      { id: "m15", number: 1, name: 'Johnnie Pérez "CHOCO"', position: "" },
    ],
  },
  {
    id: "pelicula",
    name: "Pelicula FC",
    short: "PFC",
    color: "#e2e8f0",
    group: "A",
    logo: "/logos/PeliculaFC.png",
    played: 2,
    won: 0,
    drawn: 1,
    lost: 1,
    gf: 6,
    ga: 7,
    points: 1,
    coach: "",
    players: [
      { id: "p1", number: 1, name: "Diego Morales", position: "" },
      { id: "p2", number: 2, name: "Steven Cruz", position: "" },
      { id: "p3", number: 3, name: "Ernesto Burgos", position: "" },
      { id: "p4", number: 4, name: "Abel Álvarez", position: "" },
      { id: "p5", number: 5, name: "Fermín Durán", position: "" },
      { id: "p6", number: 6, name: "Aaron", position: "" },
      { id: "p7", number: 7, name: "Kristian", position: "" },
      { id: "p8", number: 8, name: "Enmanuel Acosta", position: "" },
      { id: "p9", number: 9, name: "Sebastián Aubi", position: "" },
      { id: "p10", number: 10, name: "José aybar", position: "" },
      { id: "p11", number: 11, name: "José Valenzuela", position: "" },
      { id: "p12", number: 12, name: "Ian Zaiek", position: "" },
      { id: "p13", number: 13, name: "Bryan pumarol", position: "" },
      { id: "p14", number: 14, name: "Frank Jesús", position: "" },
      { id: "p15", number: 15, name: "Carlos monta", position: "" },
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

export const topScorers: Scorer[] = [
  { rank: 1, player: "Johnnie Pérez", team: "Mallixia FC", goals: 5, assists: 0 },
  { rank: 2, player: "Orlando Jacobo", team: "Lightning FC", goals: 4, assists: 0 },
  { rank: 3, player: "José Mequita", team: "Warriors FC", goals: 3, assists: 0 },
  { rank: 4, player: "Gonzalo Aponte", team: "Space FC", goals: 3, assists: 0 },
  { rank: 5, player: "Ramon Capellán", team: "Alpha FC", goals: 3, assists: 0 },
  { rank: 6, player: "José Antonio Del Riego", team: "Mallixia FC", goals: 3, assists: 0 },
  { rank: 7, player: "Douglas Rojas", team: "Lightning FC", goals: 3, assists: 0 },
  { rank: 8, player: "Anderson Ferrara", team: "Warriors FC", goals: 3, assists: 0 },
  { rank: 9, player: "Juan Zambrano", team: "Unión CF", goals: 3, assists: 0 },
  { rank: 10, player: "Samuel Pirela", team: "Warriors FC", goals: 2, assists: 0 },
  { rank: 11, player: "Andrés Castellanos", team: "Unión CF", goals: 2, assists: 0 },
  { rank: 12, player: "Dinio Charles", team: "Mallixia FC", goals: 2, assists: 0 },
  { rank: 13, player: "Dumas Frontal", team: "Valpa FC", goals: 2, assists: 0 },
  { rank: 14, player: "Cristian Bacca", team: "Warriors FC", goals: 2, assists: 0 },
  { rank: 15, player: "Julio Jolon", team: "Joseo FC A", goals: 2, assists: 0 },
  { rank: 16, player: "Leonardo Eve", team: "Sporting Claret SD", goals: 2, assists: 0 },
  { rank: 17, player: "Jean Lazala", team: "Sporting Claret SD", goals: 2, assists: 0 },
  { rank: 18, player: "Ángel Payano", team: "Alpha FC", goals: 2, assists: 0 },
  { rank: 19, player: "Oscar Avelino", team: "Joseo FC B", goals: 2, assists: 0 },
  { rank: 20, player: "Gossin Paulny", team: "Mallixia FC", goals: 1, assists: 0 },
  { rank: 21, player: "Gabriel Torres", team: "Mallixia FC", goals: 1, assists: 0 },
  { rank: 22, player: "Jenaro Montes", team: "Mallixia FC", goals: 1, assists: 0 },
  { rank: 23, player: "Junior Manasse", team: "Mallixia FC", goals: 1, assists: 0 },
  { rank: 24, player: "Guillermo Sousa", team: "Mallixia FC", goals: 1, assists: 0 },
  { rank: 25, player: "Martín Lopez", team: "Unión CF", goals: 1, assists: 0 },
  { rank: 26, player: "Alexis Padilla", team: "Unión CF", goals: 1, assists: 0 },
  { rank: 27, player: "Sayner Rivas", team: "Unión CF", goals: 1, assists: 0 },
  { rank: 28, player: "Josué Lorenzo", team: "Unión CF", goals: 1, assists: 0 },
  { rank: 29, player: "Daniel Rodríguez", team: "Lightning FC", goals: 1, assists: 0 },
  { rank: 30, player: "Victor Rodríguez", team: "Lightning FC", goals: 1, assists: 0 },
  { rank: 31, player: "Tetsuo Arai", team: "Lightning FC", goals: 1, assists: 0 },
  { rank: 32, player: "Brian Hernández (Valencia)", team: "Lightning FC", goals: 1, assists: 0 },
  { rank: 33, player: "Luis Ricardo", team: "Búho FC", goals: 1, assists: 0 },
  { rank: 34, player: "Julián Cabreja", team: "Búho FC", goals: 1, assists: 0 },
  { rank: 35, player: "Francois Peterson", team: "Joseo FC B", goals: 1, assists: 0 },
  { rank: 36, player: "Nicolás Cuadra", team: "Joseo FC B", goals: 1, assists: 0 },
  { rank: 37, player: "Darling Jumbo", team: "Joseo FC B", goals: 1, assists: 0 },
  { rank: 38, player: "Zironi", team: "Joseo FC B", goals: 1, assists: 0 },
  { rank: 39, player: "Andy Bayo", team: "Valpa FC", goals: 1, assists: 0 },
  { rank: 40, player: "Decius Denis", team: "Warriors FC", goals: 1, assists: 0 },
  { rank: 41, player: "Jonathan Gonzales", team: "Space FC", goals: 1, assists: 0 },
  { rank: 42, player: "Alvin Rivera", team: "Space FC", goals: 1, assists: 0 },
  { rank: 43, player: "Jeffry Pierre", team: "Space FC", goals: 1, assists: 0 },
  { rank: 44, player: "Luis Caminero", team: "Space FC", goals: 1, assists: 0 },
  { rank: 45, player: "Gabriel Martínez", team: "Space FC", goals: 1, assists: 0 },
  { rank: 46, player: "Omar Hassan", team: "Sporting Claret SD", goals: 1, assists: 0 },
  { rank: 47, player: "José Rodríguez", team: "Sporting Claret SD", goals: 1, assists: 0 },
  { rank: 48, player: "Josué Cabrera", team: "Alpha FC", goals: 1, assists: 0 },
  { rank: 49, player: "Juan Martínez (Chichi)", team: "Joseo FC A", goals: 1, assists: 0 },
  { rank: 50, player: "Pitri", team: "Joseo FC A", goals: 1, assists: 0 },
  { rank: 51, player: "Josué Payano", team: "Joseo FC A", goals: 1, assists: 0 },
  { rank: 52, player: "Lebron", team: "Joseo FC A", goals: 1, assists: 0 },
  { rank: 53, player: "Kendry", team: "Joseo FC A", goals: 1, assists: 0 },
  { rank: 54, player: "Doraemon", team: "Joseo FC A", goals: 1, assists: 0 },
];

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

// Helper to parse date/time from calendar formats (e.g. "25 JUL", "17:00") into a JS Date object
export function parseMatchDateTime(dateStr: string, timeStr: string): Date {
  const currentYear = new Date().getFullYear();
  // Example dateStr: "25 JUL" or "2 AGO"
  const parts = dateStr.trim().split(" ");
  const day = parseInt(parts[0], 10);
  const monthStr = parts[1]?.toUpperCase() ?? "";

  let month = 0; // JAN is 0
  if (monthStr.startsWith("ENE")) month = 0;
  else if (monthStr.startsWith("FEB")) month = 1;
  else if (monthStr.startsWith("MAR")) month = 2;
  else if (monthStr.startsWith("ABR")) month = 3;
  else if (monthStr.startsWith("MAY")) month = 4;
  else if (monthStr.startsWith("JUN")) month = 5;
  else if (monthStr.startsWith("JUL")) month = 6;
  else if (monthStr.startsWith("AGO")) month = 7;
  else if (monthStr.startsWith("SEP")) month = 8;
  else if (monthStr.startsWith("OCT")) month = 9;
  else if (monthStr.startsWith("NOV")) month = 10;
  else if (monthStr.startsWith("DIC")) month = 11;

  // Example timeStr: "17:00" or "5:00 PM"
  let hours = 0;
  let minutes = 0;
  const isPM = timeStr.toUpperCase().includes("PM");
  const isAM = timeStr.toUpperCase().includes("AM");

  // Strip PM/AM and split
  const cleanTime = timeStr.replace(/(PM|AM)/gi, "").trim();
  const timeParts = cleanTime.split(":");
  hours = parseInt(timeParts[0], 10);
  minutes = parseInt(timeParts[1], 10) || 0;

  if (isPM && hours < 12) hours += 12;
  if (isAM && hours === 12) hours = 0;

  return new Date(currentYear, month, day, hours, minutes);
}

export function getActiveLiveMatches(): Match[] {
  const now = new Date();

  // Find matches that started less than 2 hours ago
  return calendar
    .filter(m => {
      const matchTime = parseMatchDateTime(m.date, m.time);
      const diffMs = now.getTime() - matchTime.getTime();
      const diffHours = diffMs / (1000 * 60 * 60);
      return diffHours >= 0 && diffHours < 2; // Active for 2 hours
    })
    .map(m => {
      const matchTime = parseMatchDateTime(m.date, m.time);
      const diffMs = now.getTime() - matchTime.getTime();
      const currentMinute = Math.min(Math.floor(diffMs / (1000 * 60)), 90);

      return {
        id: m.id,
        home: m.home,
        away: m.away,
        homeScore: m.homeScore ?? 0,
        awayScore: m.awayScore ?? 0,
        status: "live",
        minute: `${currentMinute}'`,
        date: "HOY",
        time: m.time,
        viewers: `${Math.floor(Math.random() * 800) + 150}`
      };
    });
}


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
  group: string;
  homeScore?: number;
  awayScore?: number;
  status?: "finished" | "upcoming" | "live";
};

export const calendar: CalendarMatch[] = [
  // ── Jornada 1 · Sábado 25 Jul 2026 ──────────────────────────────
  { id: 'c1', home: 'Sporting Claret SD', homeShort: 'SPO', away: 'Alpha FC', awayShort: 'AFC', day: 'SÁB', date: '25 JUL', time: '17:00', round: 'Jornada 1', group: 'B', homeScore: 4, awayScore: 4, status: 'finished' },
  { id: 'c2', home: 'Lightning FC', homeShort: 'LFC', away: 'Búho FC', awayShort: 'BFC', day: 'SÁB', date: '25 JUL', time: '18:00', round: 'Jornada 1', group: 'A', homeScore: 8, awayScore: 2, status: 'finished' },
  { id: 'c3', home: 'Joseo FC B', homeShort: 'JOSB', away: 'Valpa FC', awayShort: 'VFC', day: 'SÁB', date: '25 JUL', time: '19:00', round: 'Jornada 1', group: 'B', homeScore: 5, awayScore: 1, status: 'finished' },
  { id: 'c4', home: 'Warriors RD FC', homeShort: 'WFC', away: 'Space FC', awayShort: 'SFC', day: 'SÁB', date: '25 JUL', time: '20:00', round: 'Jornada 1', group: 'A', homeScore: 5, awayScore: 4, status: 'finished' },
  { id: 'c5', home: 'Unión CF', homeShort: 'UFC', away: 'Mallixia FC', awayShort: 'MFC', day: 'SÁB', date: '25 JUL', time: '21:00', round: 'Jornada 1', group: 'B', homeScore: 5, awayScore: 11, status: 'finished' },
  { id: 'c6', home: 'Joseo FC A', homeShort: 'JOSA', away: 'Pelicula FC', awayShort: 'PFC', day: 'SÁB', date: '25 JUL', time: '22:00', round: 'Jornada 1', group: 'A', homeScore: 1, awayScore: 0, status: 'finished' },

  // ── Jornada 2 · Domingo 2 Ago 2026 ──────────────────────────────
  { id: 'c7', home: 'Lightning FC', homeShort: 'LFC', away: 'Space FC', awayShort: 'SFC', day: 'DOM', date: '2 AGO', time: '17:00', round: 'Jornada 2', group: 'A', homeScore: 3, awayScore: 4, status: 'finished' },
  { id: 'c8', home: 'Sporting Claret SD', homeShort: 'SPO', away: 'Valpa FC', awayShort: 'VFC', day: 'DOM', date: '2 AGO', time: '18:00', round: 'Jornada 2', group: 'B', homeScore: 2, awayScore: 2, status: 'finished' },
  { id: 'c9', home: 'Búho FC', homeShort: 'BFC', away: 'Joseo FC A', awayShort: 'JOSA', day: 'DOM', date: '2 AGO', time: '19:00', round: 'Jornada 2', group: 'A', homeScore: 0, awayScore: 7, status: 'finished' },
  { id: 'c10', home: 'Alpha FC', homeShort: 'AFC', away: 'Mallixia FC', awayShort: 'MFC', day: 'DOM', date: '2 AGO', time: '20:00', round: 'Jornada 2', group: 'B', homeScore: 2, awayScore: 4, status: 'finished' },
  { id: 'c11', home: 'Joseo FC B', homeShort: 'JOSB', away: 'Unión CF', awayShort: 'UFC', day: 'DOM', date: '2 AGO', time: '21:00', round: 'Jornada 2', group: 'B', homeScore: 1, awayScore: 4, status: 'finished' },
  { id: 'c12', home: 'Warriors RD FC', homeShort: 'WFC', away: 'Pelicula FC', awayShort: 'PFC', day: 'DOM', date: '2 AGO', time: '22:00', round: 'Jornada 2', group: 'A', homeScore: 6, awayScore: 6, status: 'finished' },

  // ── Jornada 3 · Sábado 15 Ago 2026 ──────────────────────────────
  { id: 'c13', home: 'Pelicula FC', homeShort: 'PFC', away: 'Búho FC', awayShort: 'BFC', day: 'SÁB', date: '15 AGO', time: '17:00', round: 'Jornada 3', group: 'A' },
  { id: 'c14', home: 'Alpha FC', homeShort: 'AFC', away: 'Unión CF', awayShort: 'UFC', day: 'SÁB', date: '15 AGO', time: '18:00', round: 'Jornada 3', group: 'B' },
  { id: 'c15', home: 'Mallixia FC', homeShort: 'MFC', away: 'Valpa FC', awayShort: 'VFC', day: 'SÁB', date: '15 AGO', time: '19:00', round: 'Jornada 3', group: 'B' },
  { id: 'c16', home: 'Joseo FC A', homeShort: 'JOSA', away: 'Space FC', awayShort: 'SFC', day: 'SÁB', date: '15 AGO', time: '20:00', round: 'Jornada 3', group: 'A' },
  { id: 'c17', home: 'Sporting Claret SD', homeShort: 'SPO', away: 'Joseo FC B', awayShort: 'JOSB', day: 'SÁB', date: '15 AGO', time: '21:00', round: 'Jornada 3', group: 'B' },
  { id: 'c18', home: 'Warriors RD FC', homeShort: 'WFC', away: 'Lightning FC', awayShort: 'LFC', day: 'SÁB', date: '15 AGO', time: '22:00', round: 'Jornada 3', group: 'A' },

  // ── Jornada 4 · Sábado 22 Ago 2026 ──────────────────────────────
  { id: 'c19', home: 'Space FC', homeShort: 'SFC', away: 'Búho FC', awayShort: 'BFC', day: 'SÁB', date: '22 AGO', time: '17:00', round: 'Jornada 4', group: 'A' },
  { id: 'c20', home: 'Valpa FC', homeShort: 'VFC', away: 'Alpha FC', awayShort: 'AFC', day: 'SÁB', date: '22 AGO', time: '18:00', round: 'Jornada 4', group: 'B' },
  { id: 'c21', home: 'Pelicula FC', homeShort: 'PFC', away: 'Lightning FC', awayShort: 'LFC', day: 'SÁB', date: '22 AGO', time: '19:00', round: 'Jornada 4', group: 'A' },
  { id: 'c22', home: 'Unión CF', homeShort: 'UFC', away: 'Sporting Claret SD', awayShort: 'SPO', day: 'SÁB', date: '22 AGO', time: '20:00', round: 'Jornada 4', group: 'B' },
  { id: 'c23', home: 'Mallixia FC', homeShort: 'MFC', away: 'Joseo FC B', awayShort: 'JOSB', day: 'SÁB', date: '22 AGO', time: '21:00', round: 'Jornada 4', group: 'B' },
  { id: 'c24', home: 'Joseo FC A', homeShort: 'JOSA', away: 'Warriors RD FC', awayShort: 'WFC', day: 'SÁB', date: '22 AGO', time: '22:00', round: 'Jornada 4', group: 'A' },

  // ── Jornada 5 · Sábado 29 Ago 2026 ──────────────────────────────
  { id: 'c25', home: 'Space FC', homeShort: 'SFC', away: 'Pelicula FC', awayShort: 'PFC', day: 'SÁB', date: '29 AGO', time: '17:00', round: 'Jornada 5', group: 'A' },
  { id: 'c26', home: 'Alpha FC', homeShort: 'AFC', away: 'Joseo FC B', awayShort: 'JOSB', day: 'SÁB', date: '29 AGO', time: '18:00', round: 'Jornada 5', group: 'B' },
  { id: 'c27', home: 'Valpa FC', homeShort: 'VFC', away: 'Unión CF', awayShort: 'UFC', day: 'SÁB', date: '29 AGO', time: '19:00', round: 'Jornada 5', group: 'B' },
  { id: 'c28', home: 'Sporting Claret SD', homeShort: 'SPO', away: 'Mallixia FC', awayShort: 'MFC', day: 'SÁB', date: '29 AGO', time: '20:00', round: 'Jornada 5', group: 'B' },
  { id: 'c29', home: 'Lightning FC', homeShort: 'LFC', away: 'Joseo FC A', awayShort: 'JOSA', day: 'SÁB', date: '29 AGO', time: '21:00', round: 'Jornada 5', group: 'A' },
  { id: 'c30', home: 'Búho FC', homeShort: 'BFC', away: 'Warriors RD FC', awayShort: 'WFC', day: 'SÁB', date: '29 AGO', time: '22:00', round: 'Jornada 5', group: 'A' },
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
    image: "/instagramPost/FaseDeGrupo.png",
    caption: "🔥 ¡LLEGÓ EL MOMENTO: ASÍ QUEDAN DEFINIDOS LOS GRUPOS! 🔥",
    likes: "1,240",
    comments: "82",
  },
  {
    id: "ig2",
    image: "/instagramPost/Calendario.png",
    caption: "🔥 ¡LLEGÓ EL DÍA: ASÍ SE JUEGA LA JORNADA 1! 🔥",
    likes: "1,890",
    comments: "96",
  },
];

export const goals = [];

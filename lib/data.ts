export type Player = {
  id: string
  number: number
  name: string
  position: 'Portero' | 'Cierre' | 'Ala' | 'Pívot'
  isCaptain?: boolean
}

export type Team = {
  id: string
  name: string
  short: string
  color: string
  logo: string
  played: number
  won: number
  drawn: number
  lost: number
  gf: number
  ga: number
  points: number
  coach: string
  players: Player[]
}

export const teams: Team[] = [
  {
    id: 'warriors',
    name: 'Warriors FC',
    short: 'WFC',
    color: '#ff3fa4',
    logo: '/logos/WarriorsFC.png',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: 'Marcos Peralta',
    players: [
      { id: 'w1', number: 1, name: 'Carlos Medina', position: 'Portero', isCaptain: true },
      { id: 'w2', number: 12, name: 'Juan Pérez', position: 'Portero' },
      { id: 'w3', number: 4, name: 'Andrés Feliz', position: 'Cierre' },
      { id: 'w4', number: 5, name: 'Roberto Sánchez', position: 'Cierre' },
      { id: 'w5', number: 7, name: 'Luis Henríquez', position: 'Ala' },
      { id: 'w6', number: 10, name: 'Gabriel Santos', position: 'Ala' },
      { id: 'w7', number: 8, name: 'Mateo Gómez', position: 'Ala' },
      { id: 'w8', number: 9, name: 'Julio Ramírez', position: 'Pívot' },
      { id: 'w9', number: 11, name: 'Miguel Santana', position: 'Pívot' },
    ],
  },
  {
    id: 'lightning',
    name: 'Lightning FC',
    short: 'LFC',
    color: '#22e07a',
    logo: '/logos/LightningFC.png',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: 'Rafael Castro',
    players: [
      { id: 'l1', number: 1, name: 'Diego Morales', position: 'Portero' },
      { id: 'l2', number: 13, name: 'Erick Guzmán', position: 'Portero' },
      { id: 'l3', number: 3, name: 'Javier Vargas', position: 'Cierre', isCaptain: true },
      { id: 'l4', number: 6, name: 'Kevin Rosario', position: 'Cierre' },
      { id: 'l5', number: 8, name: 'Fernando Reyes', position: 'Ala' },
      { id: 'l6', number: 10, name: 'Samuel Cruz', position: 'Ala' },
      { id: 'l7', number: 14, name: 'Oscar Ortiz', position: 'Ala' },
      { id: 'l8', number: 9, name: 'Adrián Mendoza', position: 'Pívot' },
      { id: 'l9', number: 11, name: 'Pablo Domínguez', position: 'Pívot' },
    ],
  },
  {
    id: 'joseo',
    name: 'Joseo FC',
    short: 'JOS',
    color: '#3fb8ff',
    logo: '/logos/Joseo.png',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: 'Héctor Jiménez',
    players: [
      { id: 'j1', number: 1, name: 'Pedro Guzmán', position: 'Portero', isCaptain: true },
      { id: 'j2', number: 22, name: 'Tomás Silva', position: 'Portero' },
      { id: 'j3', number: 4, name: 'Gonzalo Ramos', position: 'Cierre' },
      { id: 'j4', number: 5, name: 'Ignacio Navarro', position: 'Cierre' },
      { id: 'j5', number: 7, name: 'Sebastián Delgado', position: 'Ala' },
      { id: 'j6', number: 10, name: 'Felipe Romero', position: 'Ala' },
      { id: 'j7', number: 17, name: 'Lucas Benítez', position: 'Ala' },
      { id: 'j8', number: 9, name: 'Rodrigo Flores', position: 'Pívot' },
      { id: 'j9', number: 15, name: 'Matías Acosta', position: 'Pívot' },
    ],
  },
  {
    id: 'space',
    name: 'Space FC',
    short: 'SFC',
    color: '#a58cff',
    logo: '/logos/SpaceFC.png',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: 'Gabriel Núñez',
    players: [
      { id: 's1', number: 1, name: 'Esteban Molina', position: 'Portero' },
      { id: 's2', number: 12, name: 'David Suárez', position: 'Portero' },
      { id: 's3', number: 2, name: 'Joaquín Cabrera', position: 'Cierre', isCaptain: true },
      { id: 's4', number: 6, name: 'Martín Paredes', position: 'Cierre' },
      { id: 's5', number: 8, name: 'Nicolás Rios', position: 'Ala' },
      { id: 's6', number: 10, name: 'Alejandro Vega', position: 'Ala' },
      { id: 's7', number: 11, name: 'Emilio Fuentes', position: 'Ala' },
      { id: 's8', number: 9, name: 'Bruno Valenzuela', position: 'Pívot' },
      { id: 's9', number: 19, name: 'Santino Bravo', position: 'Pívot' },
    ],
  },
  {
    id: 'alpha',
    name: 'Alpha FC',
    short: 'AFC',
    color: '#ffcf3f',
    logo: '/logos/AlphaFC.png',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: 'Santiago Almonte',
    players: [
      { id: 'a1', number: 1, name: 'Victor Peña', position: 'Portero' },
      { id: 'a2', number: 13, name: 'Marcos Arias', position: 'Portero' },
      { id: 'a3', number: 4, name: 'Daniel Espinal', position: 'Cierre', isCaptain: true },
      { id: 'a4', number: 5, name: 'Jorge Castillo', position: 'Cierre' },
      { id: 'a5', number: 7, name: 'Raúl Fernández', position: 'Ala' },
      { id: 'a6', number: 10, name: 'Hugo Soto', position: 'Ala' },
      { id: 'a7', number: 14, name: 'Cristian Herrera', position: 'Ala' },
      { id: 'a8', number: 9, name: 'Alfonso Márquez', position: 'Pívot' },
      { id: 'a9', number: 11, name: 'César Tejada', position: 'Pívot' },
    ],
  },
  {
    id: 'sporting',
    name: 'Sporting FC',
    short: 'SPO',
    color: '#42e8d0',
    logo: '/logos/SportingFC.png',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: 'Leonardo Martínez',
    players: [
      { id: 'sp1', number: 1, name: 'Guillermo Vidal', position: 'Portero' },
      { id: 'sp2', number: 12, name: 'Simón Pineda', position: 'Portero' },
      { id: 'sp3', number: 3, name: 'Claudio Miranda', position: 'Cierre' },
      { id: 'sp4', number: 5, name: 'Enrique Gallegos', position: 'Cierre', isCaptain: true },
      { id: 'sp5', number: 8, name: 'Renato Godoy', position: 'Ala' },
      { id: 'sp6', number: 10, name: 'Benjamín Lagos', position: 'Ala' },
      { id: 'sp7', number: 16, name: 'Alonso Sepúlveda', position: 'Ala' },
      { id: 'sp8', number: 9, name: 'Vicente Palma', position: 'Pívot' },
      { id: 'sp9', number: 21, name: 'Emanuel Orellana', position: 'Pívot' },
    ],
  },
  {
    id: 'union',
    name: 'Unión FC',
    short: 'UFC',
    color: '#ff5b5b',
    logo: '/logos/UnionFC.png',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: 'Dario Méndez',
    players: [
      { id: 'u1', number: 1, name: 'Agustín Cordero', position: 'Portero' },
      { id: 'u2', number: 25, name: 'Facundo Lira', position: 'Portero' },
      { id: 'u3', number: 4, name: 'Mauricio Bustos', position: 'Cierre', isCaptain: true },
      { id: 'u4', number: 6, name: 'Luciano Salinas', position: 'Cierre' },
      { id: 'u5', number: 7, name: 'Jerónimo Vera', position: 'Ala' },
      { id: 'u6', number: 10, name: 'Bautista Corvalán', position: 'Ala' },
      { id: 'u7', number: 11, name: 'Valentín Santillán', position: 'Ala' },
      { id: 'u8', number: 9, name: 'Iván Leguizamón', position: 'Pívot' },
      { id: 'u9', number: 18, name: 'Thiago Farias', position: 'Pívot' },
    ],
  },
  {
    id: 'valpa',
    name: 'Valpa FC',
    short: 'VFC',
    color: '#8fdc4a',
    logo: '/logos/ValpaFC.png',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: 'Esteban Valenzuela',
    players: [
      { id: 'v1', number: 1, name: 'Ignacio Parra', position: 'Portero', isCaptain: true },
      { id: 'v2', number: 12, name: 'Hernán Carrizo', position: 'Portero' },
      { id: 'v3', number: 2, name: 'Fabián Mansilla', position: 'Cierre' },
      { id: 'v4', number: 5, name: 'Gaston Ojeda', position: 'Cierre' },
      { id: 'v5', number: 8, name: 'Máximo Ibarra', position: 'Ala' },
      { id: 'v6', number: 10, name: 'Franco Maidana', position: 'Ala' },
      { id: 'v7', number: 15, name: 'Ramiro Pereyra', position: 'Ala' },
      { id: 'v8', number: 9, name: 'Joaquín Godoy', position: 'Pívot' },
      { id: 'v9', number: 20, name: 'Lautaro Esquivel', position: 'Pívot' },
    ],
  },
  {
    id: 'buho',
    name: 'Búho FC',
    short: 'BFC',
    color: '#ff8a3f',
    logo: '/logos/BuhoFC.png',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    points: 0,
    coach: 'Carlos Domínguez',
    players: [
      { id: 'b1', number: 1, name: 'Álvaro Soria', position: 'Portero' },
      { id: 'b2', number: 13, name: 'Sergio Villalba', position: 'Portero' },
      { id: 'b3', number: 3, name: 'Ezequiel Quiroga', position: 'Cierre', isCaptain: true },
      { id: 'b4', number: 6, name: 'Milton Báez', position: 'Cierre' },
      { id: 'b5', number: 7, name: 'Axel Barrios', position: 'Ala' },
      { id: 'b6', number: 10, name: 'Alan Cáceres', position: 'Ala' },
      { id: 'b7', number: 14, name: 'Leonel Galeano', position: 'Ala' },
      { id: 'b8', number: 9, name: 'Elias Insaurralde', position: 'Pívot' },
      { id: 'b9', number: 22, name: 'Tiziano Benítez', position: 'Pívot' },
    ],
  },
]

export type Scorer = {
  rank: number
  player: string
  team: string
  goals: number
  assists: number
}

export const topScorers: Scorer[] = []

export type Match = {
  id: string
  home: string
  away: string
  homeScore?: number
  awayScore?: number
  status: 'live' | 'upcoming' | 'finished'
  minute?: string
  date: string
  time: string
  viewers?: string
}

export const liveMatches: Match[] = [
  { id: 'm1', home: 'Warriors FC', away: 'Lightning FC', homeScore: 0, awayScore: 0, status: 'upcoming', date: 'HOY', time: '19:00' },
  { id: 'm2', home: 'Joseo FC', away: 'Space FC', homeScore: 0, awayScore: 0, status: 'upcoming', date: 'HOY', time: '20:30' },
]

export type CalendarMatch = {
  id: string
  home: string
  homeShort: string
  away: string
  awayShort: string
  day: string
  date: string
  time: string
  round: string
}

export const calendar: CalendarMatch[] = [
  { id: 'c1', home: 'Alpha FC', homeShort: 'AFC', away: 'Sporting FC', awayShort: 'SPO', day: 'VIE', date: '24 ENE', time: '18:00', round: 'Jornada 1' },
  { id: 'c2', home: 'Unión FC', homeShort: 'UFC', away: 'Valpa FC', awayShort: 'VFC', day: 'VIE', date: '24 ENE', time: '20:00', round: 'Jornada 1' },
  { id: 'c3', home: 'Búho FC', homeShort: 'BFC', away: 'Joseo FC', awayShort: 'JOS', day: 'SÁB', date: '25 ENE', time: '17:00', round: 'Jornada 1' },
  { id: 'c4', home: 'Warriors FC', homeShort: 'WFC', away: 'Joseo FC', awayShort: 'JOS', day: 'SÁB', date: '25 ENE', time: '19:30', round: 'Jornada 1' },
  { id: 'c5', home: 'Lightning FC', homeShort: 'LFC', away: 'Space FC', awayShort: 'SFC', day: 'DOM', date: '26 ENE', time: '18:00', round: 'Jornada 1' },
  { id: 'c6', home: 'Sporting FC', homeShort: 'SPO', away: 'Valpa FC', awayShort: 'VFC', day: 'DOM', date: '26 ENE', time: '20:00', round: 'Jornada 1' },
]

export type InstagramPost = {
  id: string
  image: string
  caption: string
  likes: string
  comments: string
}

export const instagramPosts: InstagramPost[] = [
  { id: 'ig1', image: '/ig-1.png', caption: '¡Todo listo para el inicio de la temporada! 🔥', likes: '1,240', comments: '82' },
  { id: 'ig2', image: '/ig-2.png', caption: 'Presentación oficial de los equipos de la Liga Premier ⚽', likes: '1,890', comments: '96' },
  { id: 'ig3', image: '/ig-3.png', caption: 'Listos para darlo todo en la cancha 🧤', likes: '2,510', comments: '134' },
  { id: 'ig4', image: '/ig-4.png', caption: 'Unidos por la gloria. #FutsalRD', likes: '4,020', comments: '221' },
]

export const goals = []

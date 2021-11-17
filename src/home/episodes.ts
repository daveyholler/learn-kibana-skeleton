export interface Episode {
  id: string;
  seasonNumber: string;
  episodeNumber: string;
  title: string;
  image: string;
  year: string;
  released: string;
  plot: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export interface Show {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  episodes: Episode[];
  errorMessage: string;
}

export const EPISODES: Show = {
  "imDbId": "tt0053502",
  "title": "The Flintstones",
  "fullTitle": "The Flintstones (1960–1966)",
  "type": "TVSeries",
  "year": "1960",
  "episodes": [
    {
      "id": "tt0768677",
      "seasonNumber": "1",
      "episodeNumber": "1",
      "title": "The Flagstones",
      "image": "https://imdb-api.com/images/original/MV5BNmNkZjYxMDctYjZjNi00YzVlLWFmYTYtODIwYWUwZTE5YTIyXkEyXkFqcGdeQXVyMTQxMjk0Mg@@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "1 May 1960",
      "plot": "The plot of this very brief pilot would be used and expanded upon in one of the early Flintstones episodes, \"The Swimming Pool.\" Fred Flagstone floats in his pool on a tube and his wife Wilma brings his lunch. Barney startles her with his weird scuba-diving gear, which includes a bow and arrow. Barney accidentally shoots Fred's tube with his arrow, Fred sinks into the pool, and Barney rescues Fred's lunch.",
      "imDbRating": "7.2",
      "imDbRatingCount": "194"
    },
    {
      "id": "tt0815592",
      "seasonNumber": "1",
      "episodeNumber": "2",
      "title": "The Flintstone Flyer",
      "image": "https://imdb-api.com/images/original/MV5BMTk1NDkzMTQ1MV5BMl5BanBnXkFtZTgwODc1MDIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "30 Sep. 1960",
      "plot": "Barney has invented something that looks to Fred like a giant egg beater, but it's a flying machine. Fred feigns illness so that he and Barney can get out of \"opera night\" with the girls and use the Flyer to go bowling instead.",
      "imDbRating": "7.4",
      "imDbRatingCount": "366"
    },
    {
      "id": "tt0580191",
      "seasonNumber": "1",
      "episodeNumber": "3",
      "title": "Hot Lips Hannigan",
      "image": "https://imdb-api.com/images/original/MV5BMjAzODU3NDIxN15BMl5BanBnXkFtZTgwNzMzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "7 Oct. 1960",
      "plot": "It's Fred's responsibility this time around to assemble an act for Amateur Night at his and Barney's club.",
      "imDbRating": "7.4",
      "imDbRatingCount": "283"
    },
    {
      "id": "tt0580284",
      "seasonNumber": "1",
      "episodeNumber": "4",
      "title": "The Swimming Pool",
      "image": "https://imdb-api.com/images/original/MV5BNTg3ODg1NDM0M15BMl5BanBnXkFtZTgwNzgyMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "14 Oct. 1960",
      "plot": "Fred is mad at Barney for calling him stupid. Then Barney decides to build a swimming pool, and Fred talks his neighbor into sharing the pool with the Flintstones.",
      "imDbRating": "7.8",
      "imDbRatingCount": "279"
    },
    {
      "id": "tt0580212",
      "seasonNumber": "1",
      "episodeNumber": "5",
      "title": "No Help Wanted",
      "image": "https://imdb-api.com/images/original/MV5BMjM4NzYwMTgzN15BMl5BanBnXkFtZTgwODUzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "21 Oct. 1960",
      "plot": "After causing Barney to get fired, Fred gets his friend a job as a \"repo man.\" But Barney's first repossession case is at the Flintstones' house.",
      "imDbRating": "7.6",
      "imDbRatingCount": "250"
    },
    {
      "id": "tt0580280",
      "seasonNumber": "1",
      "episodeNumber": "6",
      "title": "The Split Personality",
      "image": "https://imdb-api.com/images/original/MV5BMTc0ODI0MTUwN15BMl5BanBnXkFtZTgwODkxMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "28 Oct. 1960",
      "plot": "Fred gets hit on the head with a bottle, changing his personality into a sophisticated gentleman.",
      "imDbRating": "7.4",
      "imDbRatingCount": "241"
    },
    {
      "id": "tt0580271",
      "seasonNumber": "1",
      "episodeNumber": "7",
      "title": "The Monster from the Tar Pits",
      "image": "https://imdb-api.com/images/original/MV5BMjgyMzA2NzA2Ml5BMl5BanBnXkFtZTgwMDIzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "4 Nov. 1960",
      "plot": "When movie-makers come to Bedrock, the girls are all excited, but it's Fred who lands a role in the film.",
      "imDbRating": "7.4",
      "imDbRatingCount": "231"
    },
    {
      "id": "tt0580238",
      "seasonNumber": "1",
      "episodeNumber": "8",
      "title": "The Babysitters",
      "image": "https://imdb-api.com/images/original/MV5BMTU5OTIyOTc5N15BMl5BanBnXkFtZTgwODcyMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "11 Nov. 1960",
      "plot": "Fred and Barney reluctantly agree to babysit a neighbor's baby.",
      "imDbRating": "7.2",
      "imDbRatingCount": "219"
    },
    {
      "id": "tt0580144",
      "seasonNumber": "1",
      "episodeNumber": "9",
      "title": "At the Races",
      "image": "https://imdb-api.com/images/original/MV5BZDQwNGZjMTQtOTM2Ni00NDBkLTg5YzUtNzRiYzE4MTk5YzY2XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "18 Nov. 1960",
      "plot": "Fred wants to buy his friend's pool hall. He intends to finance the purchase by betting a week's paycheck at the dinosaur races.",
      "imDbRating": "7.2",
      "imDbRatingCount": "216"
    },
    {
      "id": "tt0580246",
      "seasonNumber": "1",
      "episodeNumber": "10",
      "title": "The Engagement Ring",
      "image": "https://imdb-api.com/images/original/MV5BNTkyMzYxODk2OF5BMl5BanBnXkFtZTgwMTAzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "25 Nov. 1960",
      "plot": "In order to get BACK the money, Fred has Barney do boxing.",
      "imDbRating": "7.7",
      "imDbRatingCount": "223"
    },
    {
      "id": "tt0580190",
      "seasonNumber": "1",
      "episodeNumber": "11",
      "title": "Hollyrock, Here I Come",
      "image": "https://imdb-api.com/images/original/MV5BYmZhNjc5MTYtMGU2My00N2IyLWIzNmUtMDQwOTJiNGE2YjllXkEyXkFqcGdeQXVyMTQxMjk0Mg@@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "2 Dec. 1960",
      "plot": "Wilma and Betty win an all-expenses-paid trip to Hollyrock, which gets even better when Wilma is offered a part in a show.",
      "imDbRating": "7.3",
      "imDbRatingCount": "210"
    },
    {
      "id": "tt0580251",
      "seasonNumber": "1",
      "episodeNumber": "12",
      "title": "The Golf Champion",
      "image": "https://imdb-api.com/images/original/MV5BMTQxNDg1NDEwNV5BMl5BanBnXkFtZTgwMTIzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "9 Dec. 1960",
      "plot": "When Barney, in his official capacity, cites Fred for violation of the rules and strips Fred of a club championship he won, Fred declares war on his old friend.",
      "imDbRating": "7.4",
      "imDbRatingCount": "202"
    },
    {
      "id": "tt0580283",
      "seasonNumber": "1",
      "episodeNumber": "13",
      "title": "The Sweepstakes Ticket",
      "image": "https://imdb-api.com/images/original/MV5BMTQ4NDgzMjYwMV5BMl5BanBnXkFtZTgwNzMyMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "16 Dec. 1960",
      "plot": "Fred buys a sweepstakes ticket and decides to share it with Barney and give it to him for safekeeping; then Fred decides he can't trust his old pal.",
      "imDbRating": "7.4",
      "imDbRatingCount": "204"
    },
    {
      "id": "tt0580245",
      "seasonNumber": "1",
      "episodeNumber": "14",
      "title": "The Drive - In",
      "image": "https://imdb-api.com/images/original/MV5BMTcyMjgzNDM4OV5BMl5BanBnXkFtZTgwNDgyMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "23 Dec. 1960",
      "plot": "Fred and Barney buy a drive-in without telling Wilma and Betty.",
      "imDbRating": "7.8",
      "imDbRatingCount": "225"
    },
    {
      "id": "tt0829738",
      "seasonNumber": "1",
      "episodeNumber": "15",
      "title": "The Prowler",
      "image": "https://imdb-api.com/images/original/MV5BMjA1MzYxNzYwNF5BMl5BanBnXkFtZTgwMjM2MjIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1960",
      "released": "30 Dec. 1960",
      "plot": "A burglar is on the loose in Bedrock. Betty and Wilma take judo classes from Mr Hashimoto, and Fred decides to play a trick on Wilma by disguising himself as a prowler.",
      "imDbRating": "7.7",
      "imDbRatingCount": "204"
    },
    {
      "id": "tt0580250",
      "seasonNumber": "1",
      "episodeNumber": "16",
      "title": "The Girls' Night Out",
      "image": "https://imdb-api.com/images/original/MV5BMjA3MzI1MDUzOV5BMl5BanBnXkFtZTgwMTAyMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "6 Jan. 1961",
      "plot": "Fred records a record in an amusement-park booth and by mistake leaves it behind. When the record is found and played on the airwaves, it becomes a big hit, and Fred's a star.",
      "imDbRating": "7.4",
      "imDbRatingCount": "209"
    },
    {
      "id": "tt0580143",
      "seasonNumber": "1",
      "episodeNumber": "17",
      "title": "Arthur Quarry's Dance Class",
      "image": "https://imdb-api.com/images/original/MV5BMTQ5NTkxOTc4M15BMl5BanBnXkFtZTgwNTYzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "13 Jan. 1961",
      "plot": "Fred and Barney are sneaking out at night--to take dance lessons, so they won't embarrass the girls at an upcoming ball.",
      "imDbRating": "7.3",
      "imDbRatingCount": "194"
    },
    {
      "id": "tt0580240",
      "seasonNumber": "1",
      "episodeNumber": "18",
      "title": "The Big Bank Robbery",
      "image": "https://imdb-api.com/images/original/MV5BMjMzNTY4NTgzNV5BMl5BanBnXkFtZTgwMDEyMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "20 Jan. 1961",
      "plot": "Fred and Barney are mistaken for the bank robbers when they find the bag of stolen money.",
      "imDbRating": "7.1",
      "imDbRatingCount": "189"
    },
    {
      "id": "tt0580278",
      "seasonNumber": "1",
      "episodeNumber": "19",
      "title": "The Snorkasaurus Hunter",
      "image": "https://imdb-api.com/images/original/MV5BMTQ2MzUwNjM2Ml5BMl5BanBnXkFtZTgwODEyMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "27 Jan. 1961",
      "plot": "To save money on meat, Fred decides to turn his vacation into a hunting trip, where the Flintstones and Rubbles meet up with a talking dinosaur.",
      "imDbRating": "7.3",
      "imDbRatingCount": "213"
    },
    {
      "id": "tt0580260",
      "seasonNumber": "1",
      "episodeNumber": "20",
      "title": "The Hot Piano",
      "image": "https://imdb-api.com/images/original/MV5BMTY1ODAyNzk5OF5BMl5BanBnXkFtZTgwMjEzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "3 Feb. 1961",
      "plot": "Fred would love to give Wilma a real stunner of an anniversary gift--a baby grand piano--but its cost is way out of his league, until \"Eighty-Eight Fingers Louie\" offers him a real steal of a deal.",
      "imDbRating": "7.8",
      "imDbRatingCount": "210"
    },
    {
      "id": "tt0580262",
      "seasonNumber": "1",
      "episodeNumber": "21",
      "title": "The Hypnotist",
      "image": "https://imdb-api.com/images/original/MV5BMTQ1NTIxMjI2M15BMl5BanBnXkFtZTgwODAzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "10 Feb. 1961",
      "plot": "Barney is hypnotized into thinking he is a dog.",
      "imDbRating": "7.1",
      "imDbRatingCount": "200"
    },
    {
      "id": "tt0580206",
      "seasonNumber": "1",
      "episodeNumber": "22",
      "title": "Love Letters on the Rocks",
      "image": "https://imdb-api.com/images/original/MV5BMjMyMzg4NDAyNF5BMl5BanBnXkFtZTgwMzUzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "17 Feb. 1961",
      "plot": "Fred finds old love letters to Wilma, and, failing to recognize them as his own, he hires a detective to track down Wilma's \"secret lover.\"",
      "imDbRating": "7.5",
      "imDbRatingCount": "195"
    },
    {
      "id": "tt0580287",
      "seasonNumber": "1",
      "episodeNumber": "23",
      "title": "The Tycoon",
      "image": "https://imdb-api.com/images/original/MV5BMTk0MzI0ODUzOF5BMl5BanBnXkFtZTgwMjkxMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "24 Feb. 1961",
      "plot": "Fred is hired to impersonate a rich business man look-alike temporarily, leading to confusion and friction from his wife and the Rubbles.",
      "imDbRating": "7.2",
      "imDbRatingCount": "190"
    },
    {
      "id": "tt0580237",
      "seasonNumber": "1",
      "episodeNumber": "24",
      "title": "The Astra' Nuts",
      "image": "https://imdb-api.com/images/original/MV5BMDkwOTU1YmMtMGJmYS00MmE0LWEyZDYtMzc4ODY1ZDM2Mjg2XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "4 Mar. 1961",
      "plot": "Fred and Barney go to a recruitment center by mistake and find themselves signed up for three years of military service.",
      "imDbRating": "7.3",
      "imDbRatingCount": "176"
    },
    {
      "id": "tt0833347",
      "seasonNumber": "1",
      "episodeNumber": "25",
      "title": "The Long, Long Weekend",
      "image": "https://imdb-api.com/images/original/MV5BMjMxMTcxMDU1OF5BMl5BanBnXkFtZTgwMzI3MzEzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "10 Mar. 1961",
      "plot": "The Flintstones and the Rubbles are invited to a free vacation at a beach hotel by Fred's old friend the owner. Unaware there is a motive for the generosity.",
      "imDbRating": "7.3",
      "imDbRatingCount": "179"
    },
    {
      "id": "tt0580194",
      "seasonNumber": "1",
      "episodeNumber": "26",
      "title": "In the Dough",
      "image": "https://imdb-api.com/images/original/MV5BMTQ4NDcyMDg3MF5BMl5BanBnXkFtZTgwNzIzMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "17 Mar. 1961",
      "plot": "Wilma's \"Flint-Rubble-Double-Bubble Cake\" wins a baking contest, but when her sudden illness keeps her from competing at the next level, Fred decides to disguise himself and take his wife's place.",
      "imDbRating": "7.3",
      "imDbRatingCount": "178"
    },
    {
      "id": "tt0580252",
      "seasonNumber": "1",
      "episodeNumber": "27",
      "title": "The Good Scout",
      "image": "https://imdb-api.com/images/original/MV5BMTAxOTQ5NzYzNjZeQTJeQWpwZ15BbWU4MDE5MjEyMzIx._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "24 Mar. 1961",
      "plot": "Barney and Fred forsake bowling to become leaders of scout troops.",
      "imDbRating": "7.1",
      "imDbRatingCount": "175"
    },
    {
      "id": "tt0580223",
      "seasonNumber": "1",
      "episodeNumber": "28",
      "title": "Rooms for Rent",
      "image": "https://imdb-api.com/images/original/MV5BMjI5MjQ2MzM2NV5BMl5BanBnXkFtZTgwOTkxMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "31 Mar. 1961",
      "plot": "The Flintstones and the Rubbles rent a spare room in their home to earn extra money, but Fred and Barney aren't happy with their new boarders.",
      "imDbRating": "7.2",
      "imDbRatingCount": "178"
    },
    {
      "id": "tt0580174",
      "seasonNumber": "1",
      "episodeNumber": "29",
      "title": "Fred Flintstone: Before and After",
      "image": "https://imdb-api.com/images/original/MV5BMjIyNDkzNDMxNF5BMl5BanBnXkFtZTgwNjkyMTIzMjE@._V1_Ratio1.7778_AL_.jpg",
      "year": "1961",
      "released": "7 Apr. 1961",
      "plot": "Used without his consent as the \"before\" picture in a weight-loss pitch, Fred decides to accept the challenge to lose thirty pounds in thirty days when told of the money that can be his.",
      "imDbRating": "7.5",
      "imDbRatingCount": "179"
    }
  ],
  "errorMessage": ""
}

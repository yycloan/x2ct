export interface MultipleDownload {
  label: string
  url: string
  embedCode?: string
}

export interface Movie {
  id: string
  title: string
  poster: string
  backdrop?: string
  genre: string[]
  year: number
  rating: number
  views: number
  quality: string
  slug: string
  duration?: string
  description: string
  cast?: string[]
  director?: string
  country: string
  language: string
  downloadUrl?: string
  videoUrl?: string
  multipleDownloads?: MultipleDownload[]
  isFeatured?: boolean
  isNew?: boolean
  isTrending?: boolean
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Skincare (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/09/Skincare-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/09/Skincare-2024-Download-NetNaija.xyz_.webp",
    genre: ["Drama", "Thriller"],
    year: 2024,
    rating: 7.2,
    views: 125000,
    quality: "HD",
    slug: "skincare-2024",
    duration: "1h 38m",
    description:
      "Famed aesthetician Hope's skincare business faces sabotage when longtime rival Angel opens a boutique across the street. Aided by her friend Jordan, Hope seeks to uncover who's trying to ruin her reputation.",
    cast: ["Elizabeth Banks", "Lewis Pullman", "Luis Gerardo Méndez"],
    director: "Austin Peters",
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/9729b9572899b0fe/Skincare_(2024)_(NetNaija.xyz).mkv",
    isFeatured: true,
    isNew: true,
    isTrending: true,
  },
  {
    id: "2",
    title: "Dìdi (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/09/Didi-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/09/Didi-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy", "Drama"],
    year: 2024,
    rating: 8.1,
    views: 89000,
    quality: "HD",
    slug: "didi-2024",
    duration: "1h 33m",
    description:
      "In 2008, during the last month of summer before high school begins, an impressionable 13-year-old Taiwanese American boy learns what his family can't teach him: how to skate, how to flirt, and how to love your mom.",
    cast: ["Izaac Wang", "Joan Chen", "Shirley Chen"],
    director: "Sean Wang",
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/d523df2f71926118/D%C3%ACdi_(2024)_(NetNaija.xyz).mkv",
    isNew: true,
  },
  {
    id: "3",
    title: "Lady Scorpions (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/09/Lady-Scorpions-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/09/Lady-Scorpions-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action"],
    year: 2024,
    rating: 6.8,
    views: 156000,
    quality: "HD",
    slug: "lady-scorpions-2024",
    duration: "1h 21m",
    description:
      "An ex-FBI agent's fight against a crime syndicate becomes personal when they kidnap her granddaughter. She and her daughter, both martial arts masters, form an unstoppable team.",
    cast: ["Cynthia Rothrock", "Caitlin Dechelle", "Jeff Fahey"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/b4ba3ec4cd6566e0/Lady_Scorpions_(2024)_(NetNaija.xyz).mkv",
    isTrending: true,
  },
  {
    id: "4",
    title: "While You Were Sleeping (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/09/While-You-Were-Sleeping-2024-Download-NetNaija.xyz_.webp",
    backdrop:
      "https://netnaija.xyz/wp-content/uploads/2024/09/While-You-Were-Sleeping-2024-Download-NetNaija.xyz_.webp",
    genre: ["Drama", "Mystery"],
    year: 2024,
    rating: 7.5,
    views: 67000,
    quality: "HD",
    slug: "while-you-were-sleeping-2024",
    duration: "1h 40m",
    description:
      "A woman who has selective amnesia loses her husband to a car accident. Overwhelmed with sorrow, she traces his journey and faces the unexpected truth.",
    cast: ["Choo Ja-hyun", "Lee Moo-saeng", "Son Sook"],
    country: "South Korea",
    language: "Korean",
    downloadUrl: "https://netnaijafiles.xyz/1c7d9610ecc99340/While_You_Were_Sleeping_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "5",
    title: "The Good Half (2023)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/09/The-Good-Half-2023-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/09/The-Good-Half-2023-Download-NetNaija.xyz_.webp",
    genre: ["Comedy", "Drama"],
    year: 2023,
    rating: 7.0,
    views: 45000,
    quality: "HD",
    slug: "the-good-half-2023",
    duration: "1h 36m",
    description:
      "An emotionally distant writer returns to his hometown for his beloved mother's funeral, after having spent years successfully avoiding interactions with his family.",
    cast: ["Nick Jonas", "Brittany Snow", "Matt Walsh"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/532898988bebc2dc/The_Good_Half_(2023)_(NetNaija.xyz).mkv",
  },
  {
    id: "6",
    title: "Trap (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Trap-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Trap-2024-Download-NetNaija.xyz_.webp",
    genre: ["Crime", "Horror", "Mystery", "Thriller"],
    year: 2024,
    rating: 8.3,
    views: 234000,
    quality: "4K",
    slug: "trap-2024",
    duration: "1h 45m",
    description:
      "A father and teen daughter attend a pop concert, where they realize they're at the center of a dark and sinister event.",
    cast: ["Josh Hartnett", "Ariel Donoghue", "Saleka"],
    director: "M. Night Shyamalan",
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/0e91dec87ca03aef/Trap_(2024)_(NetNaija.xyz).mkv",
    isFeatured: true,
    isTrending: true,
  },
  {
    id: "7",
    title: "Borderlands (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Borderlands-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Borderlands-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    year: 2024,
    rating: 6.9,
    views: 189000,
    quality: "4K",
    slug: "borderlands-2024",
    duration: "1h 41m",
    description:
      "Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes.",
    cast: ["Cate Blanchett", "Kevin Hart", "Jack Black"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/246e0d453cb2f29b/Borderlands_(2024)_(NetNaija.xyz).mkv",
    isTrending: true,
  },
  {
    id: "8",
    title: "Inside Out 2 (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Inside-Out-2-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Inside-Out-2-2024-Download-NetNaija.xyz_.webp",
    genre: ["Animation", "Family", "Adventure", "Comedy"],
    year: 2024,
    rating: 9.1,
    views: 456000,
    quality: "4K",
    slug: "inside-out-2-2024",
    duration: "1h 36m",
    description:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions!",
    cast: ["Amy Poehler", "Maya Hawke", "Kensington Tallman"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/21a58a24f55d5b92/Inside_Out_2_(2024)_(NetNaija.xyz).mkv",
    isFeatured: true,
    isTrending: true,
  },
  {
    id: "9",
    title: "First Shift (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/First-Shift-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/First-Shift-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    year: 2024,
    rating: 6.5,
    views: 78000,
    quality: "HD",
    slug: "first-shift-2024",
    duration: "1h 29m",
    description:
      "NYPD veteran Mike and rookie Angela tackle a high-stakes day on New York's toughest streets, diving headfirst into a vortex of danger and action.",
    cast: ["Gino Anthony Pesi", "Kristen Renton", "James McMenamin"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/6a6ab0e23be34978/First_Shift_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "10",
    title: "Out Come the Wolves (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Out-Come-the-Wolves-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Out-Come-the-Wolves-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action", "Horror", "Thriller"],
    year: 2024,
    rating: 7.1,
    views: 92000,
    quality: "HD",
    slug: "out-come-the-wolves-2024",
    duration: "1h 27m",
    description:
      "At a cabin deep in the wilderness, a weekend of hunting turns to mayhem and a fight for survival when a pack of wolves attack.",
    cast: ["Damon Runyan", "Joris Jarsky", "Missy Peregrym"],
    country: "Canada",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/d9a1db4587d0c91d/Out_Come_the_Wolves_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "11",
    title: "Freedom Hair (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Trap-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Trap-2024-Download-NetNaija.xyz_.webp",
    genre: ["Drama", "History"],
    year: 2024,
    rating: 7.8,
    views: 54000,
    quality: "HD",
    slug: "freedom-hair-2024",
    duration: "1h 42m",
    description:
      "When a mother decides to start a natural hair braiding business to achieve financial independence, she must overcome obstacles imposed by a powerful cosmetology cartel.",
    cast: ["Sophia Bush", "Erica Tazel", "Catherine Dyer"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/ef1bb9ef0fa7f68c/Freedom_Hair_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "12",
    title: "The Deliverance (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/The-Deliverance-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/The-Deliverance-2024-Download-NetNaija.xyz_.webp",
    genre: ["Horror", "Thriller"],
    year: 2024,
    rating: 6.9,
    views: 167000,
    quality: "HD",
    slug: "the-deliverance-2024",
    duration: "1h 52m",
    description:
      "Single parent Ebony Jackson moves her family to a new home for a fresh start, but something evil already lives there.",
    cast: ["Andra Day", "Glenn Close", "Aunjanue Ellis-Taylor"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/6a5c8600f0c9a9ea/The_Deliverance_(2024)_(NetNaija.xyz).mkv",
    isTrending: true,
  },
  {
    id: "13",
    title: "A Legend (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/A-Legend-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/A-Legend-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    year: 2024,
    rating: 7.3,
    views: 134000,
    quality: "HD",
    slug: "a-legend-2024",
    duration: "2h 9m",
    description:
      "An archeologist noticed that the texture of the relics discovered during the excavation of a glacier closely resembled a jade pendant seen in one of his dreams.",
    cast: ["Jackie Chan", "Zhang Yixing", "Guli Nazha"],
    country: "China",
    language: "Chinese",
    downloadUrl: "https://netnaijafiles.xyz/891b61cc660965c0/A_Legend_(2024)_(NetNaija.xyz).mp4",
  },
  {
    id: "14",
    title: "Buddy (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Buddy-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Buddy-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    year: 2024,
    rating: 6.4,
    views: 87000,
    quality: "HD",
    slug: "buddy-2024",
    duration: "2h 3m",
    description:
      "A teddy bear named Buddy is in trouble and asks pilot Aditya Ram for help. Can the duo join forces and help each other out?",
    cast: ["Allu Sirish", "Ajmal Ameer", "Sriram Reddy Polasane"],
    country: "India",
    language: "Telugu",
    downloadUrl: "https://netnaijafiles.xyz/54ba7af8a2d9234d/Buddy_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "15",
    title: "Bad Newz (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Bad-Newz-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Bad-Newz-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy", "Drama", "Romance"],
    year: 2024,
    rating: 6.8,
    views: 112000,
    quality: "HD",
    slug: "bad-newz-2024",
    duration: "2h 22m",
    description:
      "After a whirlwind marriage with social media influencer Akhil Chadha that ends in divorce, chef Saloni Bagga meets hotelier Gurbir Pannu.",
    cast: ["Vicky Kaushal", "Triptii Dimri", "Ammy Virk"],
    country: "India",
    language: "Hindi",
    downloadUrl: "https://netnaijafiles.xyz/021f4c6e18a49231/Bad_Newz_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "16",
    title: "Buzz House: The Movie (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Buzz-House_-The-Movie-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Buzz-House_-The-Movie-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy", "Horror"],
    year: 2024,
    rating: 5.9,
    views: 43000,
    quality: "HD",
    slug: "buzz-house-the-movie-2024",
    duration: "1h 47m",
    description:
      "The next season of Buzz House is the most ambitious yet. Selly has prepared many surprises for the participants.",
    cast: ["Costi Max", "Andrei Șelaru", "Erika Isac"],
    country: "Romania",
    language: "Romanian",
    downloadUrl: "https://netnaijafiles.xyz/338f16e04a980fba/Buzz_House_The_Movie_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "17",
    title: "Escape (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Escape-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Escape-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action", "Drama", "Thriller"],
    year: 2024,
    rating: 8.2,
    views: 198000,
    quality: "HD",
    slug: "escape-2024",
    duration: "1h 34m",
    description:
      "After completing his required decade of military service and being honored as a hero, a North Korean sergeant makes a sudden shocking attempt to defect to the South.",
    cast: ["Lee Je-hoon", "Koo Kyo-hwan", "Hong Xa-bin"],
    country: "South Korea",
    language: "Korean",
    downloadUrl: "https://netnaijafiles.xyz/7289f1494d403738/Escape_(2024)_(NetNaija.xyz).mkv",
    isTrending: true,
  },
  {
    id: "18",
    title: "Harold and the Purple Crayon (2024)",
    poster:
      "https://netnaija.xyz/wp-content/uploads/2024/08/Harold-and-the-Purple-Crayon-2024-Download-NetNaija.xyz_.webp",
    backdrop:
      "https://netnaija.xyz/wp-content/uploads/2024/08/Harold-and-the-Purple-Crayon-2024-Download-NetNaija.xyz_.webp",
    genre: ["Adventure", "Animation", "Comedy", "Fantasy", "Kids"],
    year: 2024,
    rating: 6.1,
    views: 89000,
    quality: "HD",
    slug: "harold-and-the-purple-crayon-2024",
    duration: "1h 30m",
    description:
      "Inside of his book, adventurous Harold can make anything come to life simply by drawing it. After he grows up and draws himself off the book's pages and into the physical world.",
    cast: ["Zachary Levi", "Zooey Deschanel", "Lil Rel Howery"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/46273e4b1b280fc9/Harold_and_the_Purple_Crayon_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "19",
    title: "Ride (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Ride-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Ride-2024-Download-NetNaija.xyz_.webp",
    genre: ["Crime", "Drama"],
    year: 2024,
    rating: 6.7,
    views: 76000,
    quality: "HD",
    slug: "ride-2024",
    duration: "1h 36m",
    description:
      "Desperate to raise money for his daughter's cancer treatment, a retired bull rider teams up with his estranged son and resorts to robbery.",
    cast: ["C. Thomas Howell", "Jake Allyn", "Annabeth Gish"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/ca1387a98264019a/Ride_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "20",
    title: "Someone Like You (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Someone-Like-You-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Someone-Like-You-2024-Download-NetNaija.xyz_.webp",
    genre: ["Drama", "Romance"],
    year: 2024,
    rating: 7.4,
    views: 65000,
    quality: "HD",
    slug: "someone-like-you-2024",
    duration: "1h 58m",
    description:
      "Shocking news hits after young architect Dawson loses his best friend London. In his heartbreak, Dawson is compelled to launch an impossible search for London's secret sister.",
    cast: ["Sarah Fisher", "Jake Allyn", "Lynn Collins"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/f779eaebd39a5a60/Someone_Like_You_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "21",
    title: "Adam Sandler: Love You (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Adam-Sandler_-Love-You-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Adam-Sandler_-Love-You-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy"],
    year: 2024,
    rating: 7.6,
    views: 234000,
    quality: "HD",
    slug: "adam-sandler-love-you-2024",
    duration: "1h 4m",
    description:
      "Adam Sandler hits the stage for a thrillingly unpredictable comedy special featuring songs, jokes, party-crashing dogs and plenty of love.",
    cast: ["Adam Sandler", "Dan Bulla"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/e8aaab26518bdf8e/Adam_Sandler_Love_You_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "22",
    title: "The Lockdown (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/The-Lockdown-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/The-Lockdown-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action"],
    year: 2024,
    rating: 6.3,
    views: 98000,
    quality: "HD",
    slug: "the-lockdown-2024",
    duration: "1h 58m",
    description:
      "Siblings Charlie and Jack are trapped in Myanmar's toughest prison and accused of a crime they didn't commit. Forced into televised fights against other inmates.",
    cast: ["Caity Lotz", "Leo Howard", "Hon Ping Tang"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/c7c8aed7876d3b84/The_Lockdown_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "23",
    title: "Running on Empty (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Running-on-Empty-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Running-on-Empty-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy", "Romance"],
    year: 2024,
    rating: 6.8,
    views: 72000,
    quality: "HD",
    slug: "running-on-empty-2024",
    duration: "1h 29m",
    description:
      "When Mort finds out he has less than a year to live, his fiancé Nicole leaves him and he's forced to accept his fate.",
    cast: ["Keir Gilchrist", "Lucy Hale", "Jay Pharoah"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/83ffb52e3b08a902/Running_on_Empty_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "24",
    title: "Wallbanger (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Wallbanger-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Wallbanger-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy", "Romance"],
    year: 2024,
    rating: 6.2,
    views: 58000,
    quality: "HD",
    slug: "wallbanger-2024",
    duration: "1h 47m",
    description:
      "Caroline is a young, single interior designer living in San Francisco who has been without a boyfriend for some time. She moves into an apartment that seems perfect.",
    cast: ["Amadeus Serafini", "Kelli Berglund", "Ryan McPartlin"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/cff4423426605ba5/Wallbanger_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "25",
    title: "Kinds of Kindness (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Kinds-of-Kindness-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Kinds-of-Kindness-2024-Download-NetNaija.xyz_.webp",
    genre: ["Drama", "Comedy"],
    year: 2024,
    rating: 7.9,
    views: 145000,
    quality: "HD",
    slug: "kinds-of-kindness-2024",
    duration: "2h 44m",
    description:
      "A triptych fable following a man without choice who tries to take control of his own life; a policeman who is alarmed that his wife who was missing-at-sea has returned.",
    cast: ["Emma Stone", "Jesse Plemons", "Willem Dafoe"],
    country: "Ireland",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/0efb4fef3368f6c4/Kinds_of_Kindness_(2024)_(NetNaija.xyz).mkv",
    isTrending: true,
  },
  {
    id: "26",
    title: "The Greatest Ever (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/The-Greatest-Ever-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/The-Greatest-Ever-2024-Download-NetNaija.xyz_.webp",
    genre: ["Drama", "Family"],
    year: 2024,
    rating: 6.9,
    views: 34000,
    quality: "HD",
    slug: "the-greatest-ever-2024",
    duration: "1h 32m",
    description:
      "Riley Waters, a young girl with the heart of a champion, strives to leave her mark on the world despite having all odds stacked against her.",
    cast: ["Alexandra Bradley", "Cate Elefante", "Bradley Stryker"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/b1f7102762c04550/The_Greatest_Ever_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "27",
    title: "The Supremes at Earl's All-You-Can-Eat (2024)",
    poster:
      "https://netnaija.xyz/wp-content/uploads/2024/08/The-Supremes-at-Earls-All-You-Can-Eat-2024-Download-NetNaija.xyz_.webp",
    backdrop:
      "https://netnaija.xyz/wp-content/uploads/2024/08/The-Supremes-at-Earls-All-You-Can-Eat-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy", "Drama"],
    year: 2024,
    rating: 7.5,
    views: 89000,
    quality: "HD",
    slug: "the-supremes-at-earls-all-you-can-eat-2024",
    duration: "2h 4m",
    description:
      "Three lifelong best friends known as 'The Supremes' share the unbreakable bonds of sisterhood from decades of weathering life's storms.",
    cast: ["Aunjanue Ellis-Taylor", "Sanaa Lathan", "Uzo Aduba"],
    country: "United States",
    language: "English",
    downloadUrl:
      "https://netnaijafiles.xyz/17795809e5714e7f/The_Supremes_at_Earls_All-You-Can-Eat_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "28",
    title: "Munjya (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Munjya-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Munjya-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy", "Horror"],
    year: 2024,
    rating: 7.1,
    views: 156000,
    quality: "HD",
    slug: "munjya-2024",
    duration: "2h 3m",
    description:
      "A young man's visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married.",
    cast: ["Sharvari Wagh", "Abhay Verma", "Ayush Ulagadde"],
    country: "India",
    language: "Hindi",
    downloadUrl: "https://netnaijafiles.xyz/97c64f32a60bd991/Munjya_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "29",
    title: "Tòkunbọ̀ (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Tokunbo%CC%80-2024-Download-NetNaija.xyz_-1.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Tokunbo%CC%80-2024-Download-NetNaija.xyz_-1.webp",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2024,
    rating: 7.8,
    views: 123000,
    quality: "HD",
    slug: "tokunbo-2024",
    duration: "1h 54m",
    description:
      "An ex-car smuggler is given three hours to deliver a government official's daughter to her captor – or else his family will suffer the consequences.",
    cast: ["Gideon Okeke", "Funlola Aofiyebi-Raimi", "Darasimi Nadi"],
    country: "Nigeria",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/741acbe829427537/Tokunbo_(2024)_(NetNaija.xyz).mkv",
    isTrending: true,
  },
  {
    id: "30",
    title: "The Killer (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/The-Killer-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/The-Killer-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action", "Crime", "Thriller"],
    year: 2024,
    rating: 7.6,
    views: 187000,
    quality: "HD",
    slug: "the-killer-2024",
    duration: "2h 6m",
    description:
      "Zee is a feared contract killer known as 'the Queen of the Dead,' but when she refuses to murder a young blind woman, she finds herself hunted.",
    cast: ["Nathalie Emmanuel", "Omar Sy", "Sam Worthington"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/34cae48ac31704b5/The_Killer_(2024)_(NetNaija.xyz).mkv",
    isTrending: true,
  },
  {
    id: "31",
    title: "Incoming (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Incoming-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Incoming-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy"],
    year: 2024,
    rating: 6.4,
    views: 98000,
    quality: "HD",
    slug: "incoming-2024",
    duration: "1h 31m",
    description: "Four incoming freshmen navigate the terrors of adolescence at their first-ever high school party.",
    cast: ["Mason Thames", "Isabella Ferreira", "Ali Gallo"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/32647cc111f6b401/Incoming_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "32",
    title: "Hell Hole (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Hell-Hole-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Hell-Hole-2024-Download-NetNaija.xyz_.webp",
    genre: ["Horror"],
    year: 2024,
    rating: 6.1,
    views: 76000,
    quality: "HD",
    slug: "hell-hole-2024",
    duration: "1h 33m",
    description:
      "Far away, in the desolate Serbian wilderness, a U.S.-led fracking crew uncover a dormant monster gestating inside a centuries-old French soldier.",
    cast: ["Toby Poser", "John Adams", "Max Portman"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/69afc6a3b4dc819c/Hell_Hole_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "33",
    title: "Raayan (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Raayan-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Raayan-2024-Download-NetNaija.xyz_.webp",
    genre: ["Action", "Drama", "Thriller"],
    year: 2024,
    rating: 8.4,
    views: 234000,
    quality: "HD",
    slug: "raayan-2024",
    duration: "2h 25m",
    description:
      "Raayan, a simpleton patriarch has to protect his family when they inadvertently get muddled in a violent world with whirlpool of murder, debauchery, feud, politics and power.",
    cast: ["Dhanush", "Dushara Vijayan", "Sundeep Kishan"],
    country: "India",
    language: "Tamil",
    downloadUrl: "https://netnaijafiles.xyz/20c40b5ac33470f8/Raayan_(2024)_(NetNaija.xyz).mkv",
    isFeatured: true,
    isTrending: true,
  },
  {
    id: "34",
    title: "Greedy People (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Greedy-People-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Greedy-People-2024-Download-NetNaija.xyz_.webp",
    genre: ["Comedy", "Crime", "Mystery"],
    year: 2024,
    rating: 7.2,
    views: 145000,
    quality: "HD",
    slug: "greedy-people-2024",
    duration: "1h 52m",
    description:
      "The eclectic residents of a small, picturesque island town must navigate a sensational murder and the discovery of a million dollars.",
    cast: ["Himesh Patel", "Lily James", "Joseph Gordon-Levitt"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/278a3774d7752871/Greedy_People_(2024)_(NetNaija.xyz).mkv",
  },
  {
    id: "35",
    title: "Longlegs (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Longlegs-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Longlegs-2024-Download-NetNaija.xyz_.webp",
    genre: ["Crime", "Horror", "Thriller"],
    year: 2024,
    rating: 8.7,
    views: 298000,
    quality: "HD",
    slug: "longlegs-2024",
    duration: "1h 41m",
    description:
      "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
    cast: ["Maika Monroe", "Nicolas Cage", "Blair Underwood"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/c0443ae209ee19e7/Longlegs_(2024)_(NetNaija.xyz).mkv",
    isFeatured: true,
    isTrending: true,
  },
  {
    id: "36",
    title: "Kalki 2898 AD (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/08/Kalki-2898-AD-2024-Download-NetNaija.xyz_.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/08/Kalki-2898-AD-2024-Download-NetNaija.xyz_.webp",
    genre: ["Drama", "Action", "Fantasy", "Sci-Fi"],
    year: 2024,
    rating: 8.9,
    views: 456000,
    quality: "4K",
    slug: "kalki-2898-ad-2024",
    duration: "3h 1m",
    description:
      "Bhairava, tired of the oppressive confines of his homeland and the perilous life of a bounty hunter, yearns for a more comfortable existence in the Complex.",
    cast: ["Amitabh Bachchan", "Prabhas", "Deepika Padukone"],
    country: "India",
    language: "Telugu",
    downloadUrl: "https://netnaijafiles.xyz/159f3e0823e78f29/Kalki_2898_AD_(2024)_(NetNaija.xyz).mkv",
    isFeatured: true,
    isTrending: true,
  },
  {
    id: "37",
    title: "The Wolf of Wall Street (2013)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/07/The-Wolf-of-Wall-Street-2013-download-netnaija.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/07/The-Wolf-of-Wall-Street-2013-download-netnaija.webp",
    genre: ["Crime", "Drama", "Comedy"],
    year: 2013,
    rating: 8.2,
    views: 1234000,
    quality: "HD",
    slug: "the-wolf-of-wall-street-2013",
    duration: "3h 0m",
    description:
      "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration.",
    cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/e086a8ee5d38f833/The_Wolf_of_Wall_Street_(2013)_(NetNaija.xyz).mkv",
    isFeatured: true,
  },
  {
    id: "38",
    title: "American Gangster (2007)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/07/American-Gangster-2007-download-netnaija.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/07/American-Gangster-2007-download-netnaija.webp",
    genre: ["Crime", "Drama"],
    year: 2007,
    rating: 7.8,
    views: 987000,
    quality: "HD",
    slug: "american-gangster-2007",
    duration: "2h 37m",
    description:
      "Following the death of his employer and mentor, Bumpy Johnson, Frank Lucas establishes himself as the number one importer of heroin in the Harlem district of Manhattan.",
    cast: ["Russell Crowe", "Denzel Washington", "Chiwetel Ejiofor"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/6026e3686379b02d/American_Gangster_(2007)_(NetNaija.xyz).mkv",
  },
  {
    id: "39",
    title: "Joker (2019)",
    poster: "https://netnaija.xyz/wp-content/uploads/2020/06/882HHK.jpg",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2020/06/882HHK.jpg",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2019,
    rating: 8.4,
    views: 2345000,
    quality: "4K",
    slug: "joker-2019",
    duration: "2h 2m",
    description:
      "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks — the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    country: "United States",
    language: "English",
    downloadUrl: "https://www.downloadbetter.com/YwpcEElGt63/joker-2019-netnaija-com-mp4.html",
    isFeatured: true,
    isTrending: true,
  },
  {
    id: "40",
    title: "The Irishman (2019)",
    poster: "https://netnaija.xyz/wp-content/uploads/2020/06/xl7HHK.jpg",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2020/06/xl7HHK.jpg",
    genre: ["Crime", "Drama"],
    year: 2019,
    rating: 7.8,
    views: 1876000,
    quality: "4K",
    slug: "the-irishman-2019",
    duration: "3h 29m",
    description:
      "Frank 'The Irishman' Sheeran is a man with a lot on his mind. The former labor union high official and hitman, learned to kill serving in Italy during the Second World War.",
    cast: ["Robert De Niro", "Al Pacino", "Joe Pesci"],
    director: "Martin Scorsese",
    country: "United States",
    language: "English",
    downloadUrl: "https://www.downloadbetter.com/hrnTlIlCy56/the-irishman-2019-netnaija-com-mp4.html",
    isFeatured: true,
  },
  {
    id: "41",
    title: "John Wick: Chapter 3 – Parabellum (2019)",
    poster: "https://netnaija.xyz/wp-content/uploads/2020/06/JgcHHK.jpg",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2020/06/JgcHHK.jpg",
    genre: ["Action", "Crime", "Thriller"],
    year: 2019,
    rating: 7.4,
    views: 1567000,
    quality: "4K",
    slug: "john-wick-chapter-3-parabellum-2019",
    duration: "2h 11m",
    description:
      "Super-assassin John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head – he is the target of hit men and women everywhere.",
    cast: ["Keanu Reeves", "Halle Berry", "Ian McShane"],
    country: "United States",
    language: "English",
    downloadUrl: "https://www.downloadbetter.com/VeEmbQTcn42/john-wick-chapter-3-parabellum-2019-netnaija-com-mp4.html",
    isTrending: true,
  },
  {
    id: "42",
    title: "Spider-Man: Far from Home (2019)",
    poster: "https://netnaija.xyz/wp-content/uploads/2020/06/qX1HHK.jpg",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2020/06/qX1HHK.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    year: 2019,
    rating: 7.4,
    views: 2134000,
    quality: "4K",
    slug: "spider-man-far-from-home-2019",
    duration: "2h 9m",
    description:
      "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission.",
    cast: ["Tom Holland", "Samuel L. Jackson", "Jake Gyllenhaal"],
    country: "United States",
    language: "English",
    downloadUrl: "https://www.downloadbetter.com/fviyiyMfa61/spider-man-far-from-home-2019-netnaija-com-mp4.html",
    isTrending: true,
  },
  {
    id: "43",
    title: "Avengers: Endgame (2019)",
    poster: "/placeholder.svg?height=450&width=300",
    backdrop: "/placeholder.svg?height=450&width=300",
    genre: ["Action", "Adventure", "Drama"],
    year: 2019,
    rating: 8.4,
    views: 5678000,
    quality: "4K",
    slug: "avengers-endgame-2019",
    duration: "3h 1m",
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    country: "United States",
    language: "English",
    isFeatured: true,
    isTrending: true,
  },
  {
    id: "44",
    title: "Coco (2017)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/07/Coco-2017-download-netnaija.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/07/Coco-2017-download-netnaija.webp",
    genre: ["Animation", "Adventure", "Drama", "Family", "Musical"],
    year: 2017,
    rating: 8.4,
    views: 1876000,
    quality: "4K",
    slug: "coco-2017",
    duration: "1h 45m",
    description:
      "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz.",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/437d3adff0e0c587/Coco_(2017)_(NetNaija.xyz).mkv",
  },
  {
    id: "45",
    title: "The Garfield Movie (2024)",
    poster: "https://netnaija.xyz/wp-content/uploads/2024/07/The-Garfield-Movie-2024-download-netnaija.webp",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2024/07/The-Garfield-Movie-2024-download-netnaija.webp",
    genre: ["Adventure", "Animation", "Comedy", "Family"],
    year: 2024,
    rating: 6.1,
    views: 234000,
    quality: "HD",
    slug: "the-garfield-movie-2024",
    duration: "1h 41m",
    description:
      "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure!",
    cast: ["Chris Pratt", "Samuel L. Jackson", "Hannah Waddingham"],
    country: "United States",
    language: "English",
    downloadUrl: "https://netnaijafiles.xyz/8e2b185b469f5a93/The_Garfield_Movie_(2024)_(NetNaija.xyz).mkv",
    isNew: true,
  },
  {
    id: "46",
    title: "Fast & Furious Presents: Hobbs & Shaw (2019)",
    poster: "https://netnaija.xyz/wp-content/uploads/2020/06/7V1HHK.jpg",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2020/06/7V1HHK.jpg",
    genre: ["Action", "Adventure"],
    year: 2019,
    rating: 6.5,
    views: 1234000,
    quality: "4K",
    slug: "fast-furious-presents-hobbs-shaw-2019",
    duration: "2h 17m",
    description:
      "Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
    cast: ["Dwayne Johnson", "Jason Statham", "Idris Elba"],
    country: "United States",
    language: "English",
    downloadUrl:
      "https://www.downloadbetter.com/DYxndmVjw07/fast-furious-presents-hobbs-shaw-2019-netnaija-com-mp4.html",
  },
  {
    id: "47",
    title: "Toy Story 4 (2019)",
    poster: "https://netnaija.xyz/wp-content/uploads/2020/06/771HHK.jpg",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2020/06/771HHK.jpg",
    genre: ["Animation", "Adventure", "Comedy", "Family"],
    year: 2019,
    rating: 7.7,
    views: 1876000,
    quality: "4K",
    slug: "toy-story-4-2019",
    duration: "1h 40m",
    description:
      "Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky.",
    cast: ["Tom Hanks", "Tim Allen", "Annie Potts"],
    country: "United States",
    language: "English",
    downloadUrl: "https://www.downloadbetter.com/mwPXPpqOE25/toy-story-4-2019-netnaija-com-mp4.html",
  },
  {
    id: "48",
    title: "The Lion King (2019)",
    poster: "https://netnaija.xyz/wp-content/uploads/2020/06/J9qHHK.jpg",
    backdrop: "https://netnaija.xyz/wp-content/uploads/2020/06/J9qHHK.jpg",
    genre: ["Animation", "Adventure", "Drama", "Family"],
    year: 2019,
    rating: 6.8,
    views: 2345000,
    quality: "4K",
    slug: "the-lion-king-2019",
    duration: "1h 58m",
    description:
      "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
    cast: ["Donald Glover", "Beyoncé", "James Earl Jones"],
    country: "United States",
    language: "English",
    downloadUrl: "https://www.downloadbetter.com/AqcSlFtGP01/the-lion-king-2019-netnaija-com-mp4.html",
  },
  {
    id: "49",
    title: "Sinners (2025)",
    poster: "https://9jarocks.net/wp-content/uploads/2025/05/Sinners_Poster.jpg",
    backdrop: "https://9jarocks.net/wp-content/uploads/2025/05/Sinners_Poster.jpg",
    genre: ["Thriller", "Horror", "Drama"],
    year: 2025,
    rating: 7.2,
    views: 45000,
    quality: "HD",
    slug: "sinners-2025",
    duration: "1h 47m",
    description:
      "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
    country: "United States",
    language: "English",
    downloadUrl: "https://loadedfiles.org/6b2b50ea61eab6fc",
    isNew: true,
    isTrending: true,
  },
  {
    id: "50",
    title: "Fountain of Youth (2025)",
    poster:
      "https://9jarocks.net/wp-content/uploads/2025/05/MV5BNWRlZmU3ZTItM2JlYi00YTg1LTgxNTItMjMyNzIyZWY5YWJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdrop:
      "https://9jarocks.net/wp-content/uploads/2025/05/MV5BNWRlZmU3ZTItM2JlYi00YTg1LTgxNTItMjMyNzIyZWY5YWJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genre: ["Adventure", "Fantasy", "Action"],
    year: 2025,
    rating: 6.8,
    views: 32000,
    quality: "HD",
    slug: "fountain-of-youth-2025",
    duration: "2h 3m",
    description:
      "Two estranged siblings join forces to seek the legendary Fountain of Youth. Using historical clues, they embark on an epic quest filled with adventure. If successful, the mythical fountain could grant them immortality.",
    country: "United States",
    language: "English",
    downloadUrl: "https://loadedfiles.org/735610e25bc81d95",
    isNew: true,
  },
  {
    id: "51",
    title: "Murderbot (2025) Season 1",
    poster: "https://9jarocks.net/wp-content/uploads/2025/05/Murderbot_Poster.jpg",
    backdrop: "https://9jarocks.net/wp-content/uploads/2025/05/Murderbot_Poster.jpg",
    genre: ["Sci-Fi", "Action", "Drama"],
    year: 2025,
    rating: 8.1,
    views: 78000,
    quality: "HD",
    slug: "murderbot-2025-season-1",
    duration: "Episode 3 Added",
    description:
      "A security android struggles with emotions and free will while balancing dangerous missions and desire for isolation, evading detection of its self-hacking as it finds its place.",
    country: "United States",
    language: "English",
    downloadUrl: "https://loadedfiles.org/6c349edf3aed4a21",
    isNew: true,
    isTrending: true,
  },
  {
    id: "52",
    title: "Beyoncé Bowl (2024)",
    poster: "https://9jarocks.net/wp-content/uploads/2025/05/Beyonc-Bowl_Poster.jpg",
    backdrop: "https://9jarocks.net/wp-content/uploads/2025/05/Beyonc-Bowl_Poster.jpg",
    genre: ["Music", "Documentary"],
    year: 2024,
    rating: 8.5,
    views: 156000,
    quality: "4K",
    slug: "beyonce-bowl-2024",
    duration: "1h 15m",
    description: "Beyoncé's halftime performance during Netflix's first-ever NFL Christmas Gameday.",
    cast: ["Beyoncé"],
    country: "United States",
    language: "English",
    downloadUrl: "https://loadedfiles.org/77b482226dc11e54",
    isTrending: true,
  },
  {
    id: "53",
    title: "Squid Game Season 3 (2025)",
    poster: "https://9jarocks.net/wp-content/uploads/2025/06/Squid-Game_Poster.jpg",
    backdrop: "https://9jarocks.net/wp-content/uploads/2025/06/Squid-Game_Poster.jpg",
    genre: ["Drama", "Thriller", "Survival", "Mystery"],
    year: 2025,
    rating: 8.6,
    views: 210000,
    quality: "HD",
    slug: "squid-game-season-3-2025",
    duration: "6 Episodes Available",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. A tempting prize awaits, but with deadly high stakes. Season 3 raises the danger and suspense to terrifying new levels.",
    cast: ["Lee Jung-jae", "Wi Ha-joon", "HoYeon Jung"],
    director: "Hwang Dong-hyuk",
    country: "South Korea",
    language: "Korean / English",
    multipleDownloads: [
      {
        label: "Episode 1",
        url: "https://strtape.tech/v/p4xXyxXj7Rfr31y/Squid.Game.S03E01.Dual.540p.x265.AAC.%5B9jaRocks.Com%5D_%282%29.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/p4xXyxXj7Rfr31y/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
      {
        label: "Episode 2",
        url: "https://strtape.tech/v/w60QaqzRjwSJqYy/Squid.Game.S03E02.Dual.540p.x265.AAC.%5B9jaRocks.Com%5D_%282%29.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/w60QaqzRjwSJqYy/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
      {
        label: "Episode 3",
        url: "https://strtape.tech/v/4qw0eBwzlXIK3P2/Squid.Game.S03E03.Dual.540p.x265.AAC.%5B9jaRocks.Com%5D_%282%29.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/4qw0eBwzlXIK3P2/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
      {
        label: "Episode 4",
        url: "https://strtape.tech/v/6e94m1mmGKC9aGO/Squid.Game.S03E04.Dual.540p.x265.AAC.%5B9jaRocks.Com%5D_%282%29.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/6e94m1mmGKC9aGO/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
      {
        label: "Episode 5",
        url: "https://strtape.tech/v/dQ6LrMpwR6uGYO/Squid.Game.S03E05.Dual.540p.x265.AAC.%5B9jaRocks.Com%5D_%282%29.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/dQ6LrMpwR6uGYO/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
      {
        label: "Episode 6",
        url: "https://strtape.tech/v/dkMLzxO0a7HkpXl/Squid.Game.S03E06.Dual.540p.x265.AAC.%5B9jaRocks.Com%5D_%282%29.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/dkMLzxO0a7HkpXl/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
    ],
    videoUrl: "https://strtape.tech/e/p4xXyxXj7Rfr31y/",
    downloadUrl:
      "https://strtape.tech/v/p4xXyxXj7Rfr31y/Squid.Game.S03E01.Dual.540p.x265.AAC.%5B9jaRocks.Com%5D_%282%29.mkv.mp4",
    isNew: true,
    isTrending: true,
    isFeatured: true,
  },
  {
    id: "54",
    title: "Kings of JoBurg Season 1",
    poster: "https://9jarocks.net/wp-content/uploads/2023/01/5fc9fa7aa0dcb.jpg",
    backdrop: "https://9jarocks.net/wp-content/uploads/2023/01/5fc9fa7aa0dcb.jpg",
    genre: ["Crime", "Drama", "Fantasy", "Thriller"],
    year: 2021,
    rating: 7.5,
    views: 160000,
    quality: "WEBRip",
    slug: "kings-of-joburg-season-1",
    duration: "6 Episodes Available",
    description:
      "The Masire brothers rule Johannesburg's criminal underworld, but a supernatural family curse and a tangled web of betrayal threaten to destroy them.",
    cast: ["Shona Ferguson", "Zolisa Xaluva", "Sello Sebotsane"],
    director: "Shona Ferguson",
    country: "South Africa",
    language: "English",
    multipleDownloads: [
      {
        label: "Episode 1",
        url: "https://strtape.tech/v/dOOw7wmeayHkJAk/Kings.of.JoBurg.S01E01.480p.WEBRip.x265.%5B9jaRocks.Com%5D.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/dOOw7wmeayHkJAk/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
      {
        label: "Episode 2",
        url: "https://strtape.tech/v/mDp3goQBqpUbgoM/Kings.of.JoBurg.S01E02.480p.WEBRip.x265.%5B9jaRocks.Com%5D.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/mDp3goQBqpUbgoM/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
      {
        label: "Episode 3",
        url: "https://strtape.tech/v/abvkYQZor0fxXKA/Kings.of.JoBurg.S01E03.480p.WEBRip.x265.%5B9jaRocks.Com%5D.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/abvkYQZor0fxXKA/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
      {
        label: "Episode 4",
        url: "https://strtape.tech/v/RBB6RoV2r7CdPdv/Kings.of.JoBurg.S01E04.480p.WEBRip.x265.%5B9jaRocks.Com%5D.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/RBB6RoV2r7CdPdv/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
      {
        label: "Episode 5",
        url: "https://strtape.tech/v/zKXmOXPgoDhYMJm/Kings.of.JoBurg.S01E05.480p.WEBRip.x265.%5B9jaRocks.Com%5D.mkv.mp4",
        embedCode:
          '<iframe src="https://strtape.tech/e/zKXmOXPgoDhYMJm/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
      },
    ],
    videoUrl: "https://strtape.tech/e/dOOw7wmeayHkJAk/",
    downloadUrl:
      "https://strtape.tech/v/dOOw7wmeayHkJAk/Kings.of.JoBurg.S01E01.480p.WEBRip.x265.%5B9jaRocks.Com%5D.mkv.mp4",
    isNew: false,
    isTrending: true,
    isFeatured: false,
  },
  [
  {
    "id": "56",
    "title": "Heads of State",
    "poster": "https://netnaija.xyz/wp-content/uploads/2025/07/Heads-of-State-2025-Download-NetNaija.xyz_-683x1024.webp",
    "backdrop": "https://netnaija.xyz/wp-content/uploads/2025/07/Heads-of-State-2025-Download-NetNaija.xyz_-683x1024.webp",
    "genre": ["Action", "Comedy", "Thriller"],
    "year": 2025,
    "rating": 7.2,
    "views": 115000,
    "quality": "WEBRip",
    "slug": "heads-of-state-2025",
    "duration": "01:50:00",
    "description": "The UK Prime Minister and US President have a public rivalry that risks their countries’ alliance. But when they become targets of a powerful enemy, they must team up to thwart a conspiracy threatening the free world.",
    "cast": ["John Cena", "Idris Elba", "Priyanka Chopra Jonas", "Jack Quaid", "Carla Gugino"],
    "director": "Ilya Naishuller",
    "country": "United States of America",
    "language": "English",
    "multipleDownloads": [],
    "videoUrl": "https://strtape.tech/e/vWaVdQaoGbHay7/",
    "downloadUrl": "https://strtape.tech/v/vWaVdQaoGbHay7/Heads.of.State.2025.mkv",
    "isNew": true,
    "isTrending": true,
    "isFeatured": false,
    "embedCode": "<iframe src=\"https://strtape.tech/e/vWaVdQaoGbHay7/\" width=\"800\" height=\"600\" allowfullscreen allowtransparency allow=\"autoplay\" scrolling=\"no\" frameborder=\"0\"></iframe>"
  },
  {
    "id": "57",
    "title": "Ice Road: Vengeance",
    "poster": "https://netnaija.xyz/wp-content/uploads/2025/07/Ice-Road_-Vengeance-2025-Download-NetNaija.xyz_-683x1024.webp",
    "backdrop": "https://netnaija.xyz/wp-content/uploads/2025/07/Ice-Road_-Vengeance-2025-Download-NetNaija.xyz_-683x1024.webp",
    "genre": ["Action", "Thriller"],
    "year": 2025,
    "rating": 6.8,
    "views": 94000,
    "quality": "WEBRip",
    "slug": "ice-road-vengeance-2025",
    "duration": "01:42:00",
    "description": "Big rig driver Mike McCann travels to Nepal to scatter his brother’s ashes, only to confront mercenaries on the treacherous 'Road to the Sky'.",
    "cast": ["Liam Neeson", "Fan Bingbing", "Mahesh Jadu", "Bernard Curry"],
    "director": "Jonathan Hensleigh",
    "country": "United States of America",
    "language": "English",
    "multipleDownloads": [],
    "videoUrl": "https://strtape.tech/e/jgl7Loo909uz9lX/",
    "downloadUrl": "https://strtape.tech/v/jgl7Loo909uz9lX/Ice.Road.Vengeance.2025.mkv",
    "isNew": true,
    "isTrending": true,
    "isFeatured": false,
    "embedCode": "<iframe src=\"https://strtape.tech/e/jgl7Loo909uz9lX/\" width=\"800\" height=\"600\" allowfullscreen allowtransparency allow=\"autoplay\" scrolling=\"no\" frameborder=\"0\"></iframe>"
  },
  {
    "id": "58",
    "title": "Thunderbolts*",
    "poster": "https://netnaija.xyz/wp-content/uploads/2025/06/Thunderbolts-2025-Download-NetNaija.xyz_-683x1024.webp",
    "backdrop": "https://netnaija.xyz/wp-content/uploads/2025/06/Thunderbolts-2025-Download-NetNaija.xyz_-683x1024.webp",
    "genre": ["Action", "Adventure", "Crime", "Fantasy", "Sci-Fi"],
    "year": 2025,
    "rating": 7.9,
    "views": 180000,
    "quality": "WEBRip",
    "slug": "thunderbolts-2025",
    "duration": "02:05:00",
    "description": "Seven disillusioned heroes are forced into a deadly mission that makes them confront the darkest parts of their pasts.",
    "cast": ["Florence Pugh", "Sebastian Stan", "Julia Louis-Dreyfus", "David Harbour", "Wyatt Russell"],
    "director": "Jake Schreier",
    "country": "United States of America",
    "language": "English",
    "multipleDownloads": [],
    "videoUrl": "https://strtape.tech/e/vQpdzXwwD0c4GLd/",
    "downloadUrl": "https://strtape.tech/v/vQpdzXwwD0c4GLd/Thunderbolts.2025.mkv",
    "isNew": true,
    "isTrending": true,
    "isFeatured": false,
    "embedCode": "<iframe src=\"https://strtape.tech/e/vQpdzXwwD0c4GLd/\" width=\"800\" height=\"600\" allowfullscreen allowtransparency allow=\"autoplay\" scrolling=\"no\" frameborder=\"0\"></iframe>"
  },
  {
    "id": "59",
    "title": "The Old Guard 2",
    "poster": "https://9jarocks.net/wp-content/uploads/2025/07/The-Old-Guard-2_Poster.jpg",
    "backdrop": "https://9jarocks.net/wp-content/uploads/2025/07/The-Old-Guard-2_Poster.jpg",
    "genre": ["Action", "Adventure", "Fantasy"],
    "year": 2025,
    "rating": 7.6,
    "views": 155000,
    "quality": "WEBRip",
    "slug": "the-old-guard-2",
    "duration": "01:46:43",
    "description": "Andy leads a group of immortal warriors against a powerful enemy while dealing with the return of a long-lost immortal.",
    "cast": ["Charlize Theron", "KiKi Layne", "Chiwetel Ejiofor", "Uma Thurman"],
    "director": "Victoria Mahoney",
    "country": "United States of America",
    "language": "English",
    "multipleDownloads": [],
    "videoUrl": "https://strtape.tech/e/0W104Zlk8Atbjjv/",
    "downloadUrl": "https://strtape.tech/v/0W104Zlk8Atbjjv/The.Old.Guard.2.2025.mkv",
    "isNew": true,
    "isTrending": true,
    "isFeatured": false,
    "embedCode": "<iframe src=\"https://strtape.tech/e/0W104Zlk8Atbjjv/\" width=\"800\" height=\"600\" allowfullscreen allowtransparency allow=\"autoplay\" scrolling=\"no\" frameborder=\"0\"></iframe>"
  },
  {
    "id": "60",
    "title": "Shaka iLembe Season 2",
    "poster": "https://9jarocks.net/wp-content/uploads/2025/06/Shaka-iLembe_Poster.jpg",
    "backdrop": "https://9jarocks.net/wp-content/uploads/2025/06/Shaka-iLembe_Poster.jpg",
    "genre": ["Action", "Drama", "History"],
    "year": 2025,
    "rating": 8.1,
    "views": 135000,
    "quality": "WEBRip",
    "slug": "shaka-ilembe-season-2",
    "duration": "3 Episodes Available",
    "description": "Explores the legendary rise of King Shaka Zulu, from childhood to kinghood in 1700s Africa.",
    "cast": ["Nomzamo Mbatha", "Wiseman Mncube", "Lemogang Tsipa", "Mondli Makhoba"],
    "director": "Teboho Mahlatsi",
    "country": "South Africa",
    "language": "Zulu",
    "multipleDownloads": [
      {
        "label": "Episode 1",
        "url": "https://strtape.tech/v/wPyZwPowyOS6gp/Shaka.iLembe.S02E01.mkv",
        "embedCode": "<iframe src=\"https://strtape.tech/e/wPyZwPowyOS6gp/\" width=\"800\" height=\"600\" allowfullscreen allowtransparency allow=\"autoplay\" scrolling=\"no\" frameborder=\"0\"></iframe>"
      },
      {
        "label": "Episode 2",
        "url": "https://strtape.tech/v/WbJQGA8rLmsbxdG/Shaka.iLembe.S02E02.mkv",
        "embedCode": "<iframe src=\"https://strtape.tech/e/WbJQGA8rLmsbxdG/\" width=\"800\" height=\"600\" allowfullscreen allowtransparency allow=\"autoplay\" scrolling=\"no\" frameborder=\"0\"></iframe>"
      },
      {
        "label": "Episode 3",
        "url": "https://strtape.tech/v/rxzZKzqZjVIb0JZ/Shaka.iLembe.S02E03.mkv",
        "embedCode": "<iframe src=\"https://strtape.tech/e/rxzZKzqZjVIb0JZ/\" width=\"800\" height=\"600\" allowfullscreen allowtransparency allow=\"autoplay\" scrolling=\"no\" frameborder=\"0\"></iframe>"
      }
    ],
    "videoUrl": "https://strtape.tech/e/wPyZwPowyOS6gp/",
    "downloadUrl": "https://strtape.tech/v/wPyZwPowyOS6gp/Shaka.iLembe.S02E01.mkv",
    "isNew": true,
    "isTrending": true,
    "isFeatured": false
  }
]


// Get recently added movies (same as new movies for now, but could be based on date added)
export const getRecentlyAddedMovies = () => movies.filter((movie) => movie.isNew || movie.year >= 2024).slice(0, 20)

export const getFeaturedMovies = () => movies.filter((movie) => movie.isFeatured)
export const getTrendingMovies = () => movies.filter((movie) => movie.isTrending)
export const getNewMovies = () => movies.filter((movie) => movie.isNew)
export const getMoviesByGenre = (genre: string) => movies.filter((movie) => movie.genre.includes(genre))

// Add this function to handle movie slug lookup
export const getMovieBySlug = (slug: string): Movie | null => {
  return movies.find((movie) => movie.slug === slug) || null
}

// Add this function to get related movies
export const getRelatedMovies = (movieId: string, genres: string[]): Movie[] => {
  return movies.filter((movie) => movie.id !== movieId && movie.genre.some((g) => genres.includes(g))).slice(0, 6)
}

export const getAllMovies = () => movies
export const searchMovies = (query: string) =>
  movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.some((g) => g.toLowerCase().includes(query.toLowerCase())) ||
      movie.cast?.some((c) => c.toLowerCase().includes(query.toLowerCase())),
  )

// Get movies by year
export const getMoviesByYear = (year: number) => movies.filter((movie) => movie.year === year)

// Get movies by country
export const getMoviesByCountry = (country: string) => movies.filter((movie) => movie.country === country)

// Get movies by quality
export const getMoviesByQuality = (quality: string) => movies.filter((movie) => movie.quality === quality)

// Get top rated movies
export const getTopRatedMovies = () => movies.filter((movie) => movie.rating >= 8.0).sort((a, b) => b.rating - a.rating)

// Get most viewed movies
export const getMostViewedMovies = () => movies.sort((a, b) => b.views - a.views).slice(0, 20)

// Get Bollywood movies (Indian movies)
export const getBollywoodMovies = () => movies.filter((movie) => movie.country === "India")

// Get Hollywood movies (US movies)
export const getHollywoodMovies = () => movies.filter((movie) => movie.country === "United States")

// Get Korean movies
export const getKoreanMovies = () => movies.filter((movie) => movie.country === "South Korea")

// Get Chinese movies
export const getChineseMovies = () => movies.filter((movie) => movie.country === "China")

// Get Japanese movies
export const getJapaneseMovies = () => movies.filter((movie) => movie.country === "Japan")

// Get Nigerian movies (Nollywood)
export const getNollywoodMovies = () => movies.filter((movie) => movie.country === "Nigeria")

// Get movies by decade
export const getMoviesByDecade = (decade: number) => {
  const startYear = decade
  const endYear = decade + 9
  return movies.filter((movie) => movie.year >= startYear && movie.year <= endYear)
}

// Get recent movies (last 2 years)
export const getRecentMovies = () => {
  const currentYear = new Date().getFullYear()
  return movies.filter((movie) => movie.year >= currentYear - 1)
}

// Get classic movies (older than 5 years)
export const getClassicMovies = () => {
  const currentYear = new Date().getFullYear()
  return movies.filter((movie) => movie.year <= currentYear - 5)
}

// Get movies with high ratings (7.5+)
export const getHighRatedMovies = () => movies.filter((movie) => movie.rating >= 7.5)

// Get action movies
export const getActionMovies = () => movies.filter((movie) => movie.genre.includes("Action"))

// Get comedy movies
export const getComedyMovies = () => movies.filter((movie) => movie.genre.includes("Comedy"))

// Get drama movies
export const getDramaMovies = () => movies.filter((movie) => movie.genre.includes("Drama"))

// Get horror movies
export const getHorrorMovies = () => movies.filter((movie) => movie.genre.includes("Horror"))

// Get thriller movies
export const getThrillerMovies = () => movies.filter((movie) => movie.genre.includes("Thriller"))

// Get sci-fi movies
export const getSciFiMovies = () => movies.filter((movie) => movie.genre.includes("Sci-Fi"))

// Get animation movies
export const getAnimationMovies = () => movies.filter((movie) => movie.genre.includes("Animation"))

// Get family movies
export const getFamilyMovies = () => movies.filter((movie) => movie.genre.includes("Family"))

// Get romance movies
export const getRomanceMovies = () => movies.filter((movie) => movie.genre.includes("Romance"))

// Get crime movies
export const getCrimeMovies = () => movies.filter((movie) => movie.genre.includes("Crime"))

// Get 4K quality movies
export const get4KMovies = () => movies.filter((movie) => movie.quality === "4K")

// Get HD quality movies
export const getHDMovies = () => movies.filter((movie) => movie.quality === "HD")

// Get random movies
export const getRandomMovies = (count = 10) => {
  const shuffled = [...movies].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Get similar movies (by genre)
export const getSimilarMovies = (movie: Movie, count = 6) => {
  return movies.filter((m) => m.id !== movie.id && m.genre.some((genre) => movie.genre.includes(genre))).slice(0, count)
}

// Get movies by rating range
export const getMoviesByRatingRange = (minRating: number, maxRating: number) => {
  return movies.filter((movie) => movie.rating >= minRating && movie.rating <= maxRating)
}

// Get movies by view count range
export const getMoviesByViewRange = (minViews: number, maxViews: number) => {
  return movies.filter((movie) => movie.views >= minViews && movie.views <= maxViews)
}

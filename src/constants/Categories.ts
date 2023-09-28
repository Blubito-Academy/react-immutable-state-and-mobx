export const categories = [
  "Science Fiction",
  "Mystery",
  "Romance",
  "Fantasy",
  "Thriller",
] as const;

export const subcategories = {
  "Science Fiction": ["Space Opera", "Cyberpunk", "Dystopian", "Time Travel"],
  Mystery: ["Detective", "Cozy Mystery", "Hardboiled", "Whodunit"],
  Romance: [
    "Historical Romance",
    "Contemporary Romance",
    "Paranormal Romance",
    "Erotic Romance",
  ],
  Fantasy: ["Epic Fantasy", "Urban Fantasy", "High Fantasy", "Dark Fantasy"],
  Thriller: [
    "Psychological Thriller",
    "Legal Thriller",
    "Political Thriller",
    "Spy Thriller",
  ],
} as const;

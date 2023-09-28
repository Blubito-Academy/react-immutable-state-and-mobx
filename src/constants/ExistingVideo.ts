import { Movie } from "../types/Movie";

export const existingFilm: Movie = {
    languages: {
      en: {
        title: "Harry Potter and the Sorcerer's Stone",
        subtitle: "The magic begins",
        excerpt:
          "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world.",
        description:
          "Harry Potter and the Sorcerer's Stone is a 2001 fantasy film directed by Chris Columbus, based on the novel of the same name by J.K. Rowling. It is the first installment in the Harry Potter film series.",
      },
      bg: {
        title: "Хари Потър и философският камък",
        subtitle: "Магията започва",
        excerpt:
          "Сиречко се записва в училище за магия, където научава истината за себе си, семейството си и ужасното зло, което обсажда магическия свят.",
        description:
          "Хари Потър и философският камък е фентъзи филм от 2001 г. в режисурата на Крис Колъмбъс, базиран на романа със същото име на Дж. К. Роулинг. Това е първият филм от поредицата Хари Потър.",
      },
    },
    category: "Fantasy",
    subCategory: "Adventure",
    duration: 152, // Duration in minutes
    featured: true,
    price: 6.99, // Price in USD
  };
  
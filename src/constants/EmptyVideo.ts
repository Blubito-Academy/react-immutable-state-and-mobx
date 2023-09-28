import { Movie } from "../types/Movie";

export  const getEmptyFilm = (): Movie =>({
    languages: {
      en: {
        title: "",
        subtitle: "",
        excerpt: "",
        description: "",
      },
      bg: {
        title: "",
        subtitle: "",
        excerpt: "",
        description: "",
      },
    },
    category: "",
    subCategory: "",
    duration: 0,
    featured: false,
    price: 0,
  })
  
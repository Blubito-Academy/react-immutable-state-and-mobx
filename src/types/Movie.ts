const Lang = {
  en: "en",
  bg: "bg",
} as const;

type Langs = keyof typeof Lang;

type Content = {
  title: string;
  subtitle: string;
  excerpt: string;
  description: string;
};

export interface Movie {
  languages: {
    [Key in Langs]: Content;
  };
  category: string;
  subCategory: string;
  duration: number;
  featured: boolean;
  price: number;
}

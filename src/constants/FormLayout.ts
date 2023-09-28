import { categories } from "./Categories";

export type Block = {
  name: string;
  component: "input" | "numInput" | "select" | "switch";
  field: string;
  options?: string[];
};

const formLayout: Block[] = [
  {
    name: "Title (BG)",
    component: "input",
    field: "languages.bg.title",
  },
  {
    name: "Title (EN)",
    component: "input",
    field: "languages.en.title",
  },
  {
    name: "Subtitle (BG)",
    component: "input",
    field: "languages.bg.subtitle",
  },
  {
    name: "Subtitle (EN)",
    component: "input",
    field: "languages.en.subtitle",
  },
  {
    name: "Excerpt (BG)",
    component: "input",
    field: "languages.bg.excerpt",
  },
  {
    name: "Excerpt (EN)",
    component: "input",
    field: "languages.en.excerpt",
  },
  {
    name: "Description (BG)",
    component: "input",
    field: "languages.bg.description",
  },
  {
    name: "Description (EN)",
    component: "input",
    field: "languages.en.description",
  },

  // The rest
  {
    name: "Select a Category",
    component: "select",
    field: "category",
    options: [...categories],
  },
  {
    name: "Select a Subcategory",
    component: "select",
    field: "subCategory",
  },
  {
    name: "Duration",
    component: "numInput",
    field: "duration",
  },
  {
    name: "Price",
    component: "numInput",
    field: "price",
  },
  {
    name: "Featured",
    component: "switch",
    field: "featured",
  },
];

export default formLayout;

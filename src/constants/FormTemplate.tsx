type Template = {
  label: string;
  field: string;
  component: 'text' | 'number' | 'switch' | 'select'
};

const formTemplate:Template[][] =  [
  [
    {
      label: "Title EN",
      field: "languages.en.title",
      component: 'text'
    },
    {
      label: "Title BG",
      field: "languages.bg.title",
      component: 'text'
    },
  ],
  [
    {
      label: "Subtitle EN",
      field: "languages.en.subtitle",
      component: 'text'
    },
    {
      label: "Subtitle BG",
      field: "languages.bg.subtitle",
      component: 'text'
    },
  ],
  [
    {
      label: "Description EN",
      field: "languages.en.description",
      component: 'text'
    },
    {
      label: "Description BG",
      field: "languages.bg.description",
      component: 'text'
    },
  ],
  [
    {
      label: "Description EN",
      field: "languages.en.description",
      component: 'text'
    },
    {
      label: "Description BG",
      field: "languages.bg.description",
      component: 'text'
    },
  ],
  [
    {
      label: "Category",
      field: "category",
      component: 'select'
    },
    {
      label: "Sub-category",
      field: "subCategory",
      component: 'select'
    },
  ],
  [
    {
      label: "Duration",
      field: "duration",
      component: 'number'
    },
    {
      label: "Featured",
      field: "featured",
      component: 'switch'
    },
    {
      label: "Price",
      field: "price",
      component: 'number'
    },
  ],
];


export default formTemplate
export interface Language {
  form: {
    submit: string,
  },
  modal: {
    confirm: string,
    cancel: string,
  },
  header: {
    logo: string,
    languageSwitcher: {
      title: string,
      label: string,
      engligh: string,
      ukrainian: string,
    },
    navigation: {
      recognitionPage: string,
      historyPage: string,
    },
  },
  footer: {
    label: string,
  },
  content: {
    form: {
      title: string,
      label: string,
      uploadedImageTitle: string,
    },
    results: {
      title: string,
      name: string,
      prediction: string,
    },
  },
  resultsContent: {
    withProbability: string,
    noResults: string,
  },
};
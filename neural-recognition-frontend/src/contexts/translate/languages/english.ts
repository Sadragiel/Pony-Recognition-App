import { Language } from "./language.interface";

export const english: Language = {
  form: {
    submit: 'Submit',
  },
  modal: {
    confirm: 'Confirm',
    cancel: 'Cancel',
  },
  header: {
    logo: 'MLP Recognition App',
    languageSwitcher: {
      title: 'Settings',
      label: 'Language',
      engligh: 'English',
      ukrainian: 'Ukrainian',
    },
    navigation: {
      recognitionPage: 'Recognition',
      historyPage: 'History',
    },
  },
  content: {
    form: {
      title: 'Upload picture of Pony witch you want to know',
      label: 'Upload picture',
      uploadedImageTitle: 'Uploaded Image',
    },
    results: {
      title: 'Results',
      name: `Name`,
      prediction: 'Prediction',
    },
  },
};
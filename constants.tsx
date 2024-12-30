import { TEXTS } from "./texts";

// URL
export const SERVER_URL = "https://api.alba-72.ru/api/v1";

// Settings
export const PRODUCTS_LIMIT = 8;
export const BLOG_LIMIT = 3;
export const COURIER_PRICE = 100;

// FORM_SETTINGS
export const FORM_SETTINGS = {
  email: {
    required: TEXTS.forms.errorText,
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: TEXTS.forms.incorrectEmail,
    },
  },
  phone: {
    required: TEXTS.forms.errorText,
    minLength: {
      message: TEXTS.forms.incorrectPhone,
      value: 16,
    },
  },
  mask: {
    mask: " (___) ___-__-__",
    replacement: { _: /\d/ },
  },
};

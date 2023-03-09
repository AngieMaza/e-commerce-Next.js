const EN_US = "en-US";
const ES_ES = "es-ES";
const PT_BR = "pt-BR";

export const defaultLocale = ES_ES;

export const locales = {
    EN_US,
    ES_ES,
    PT_BR,
};

export const localeNames = {
    [EN_US]: "English",
    [ES_ES]: "Español",
    [PT_BR]: "Português",
};

export const TEXTS_BY_LANGUAGE = {
    [EN_US]: {
        HEADER: {
            TYCS: "Terms and conditions",
            PRODUCTS: "Featured Products",
        },
        MAIN: {
            PRODUCTS: "Featured Products",
            TYCS: "Terms and conditions",
        },
    },
    [ES_ES]: {
        HEADER: {
            TYCS: "Términos y condiciones",
            PRODUCTS: "Productos destacados",
        },
        MAIN: {
            PRODUCTS: "Productos destacados",
            TYCS: "Términos y condiciones",
        },
    },
    [PT_BR]: {
        HEADER: {
            TYCS: "Termos e Condições",
            PRODUCTS: "Produtos em destaque",
        },
        MAIN: {
            PRODUCTS: "Produtos em destaque",
            TYCS: "Termos e Condições",
        },
    },
};
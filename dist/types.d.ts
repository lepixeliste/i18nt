export interface i18nJSON {
    [key: string]: string | undefined;
}
export interface i18nTranslation {
    [lang: string]: i18nJSON | undefined;
}
export interface i18nParameters {
    locale?: string;
    tokens?: any[];
    count?: number;
    reversed?: boolean;
}
export function getLocale(): string;
export function setLocale(locale?: string | null): void;
export function addTranslation(locale: string, translation?: i18nJSON): void;
export function getSupportedLocales(): string[];
export function addSupportedLocale(locale: string): void;
export function _t(message: string, params?: i18nParameters): string;

//# sourceMappingURL=types.d.ts.map

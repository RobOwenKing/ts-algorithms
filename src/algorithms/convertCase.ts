export const camelToKebab = (str: string): string => {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};

export const kebabToCamel = (str: string): string => {
  return str.replace(/-[a-z]/g, (match) => match[1].toUpperCase());
};

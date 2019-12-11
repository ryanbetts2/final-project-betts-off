export function capitalizeCamelCase(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function getFormDataFromIds(formEls) {
  return Array.from(formEls)
    .filter(element => element.id)
    .map(({ id, value }) => ({
      [id]: value
    }))
    .reduce((accumulator, data) => ({ ...accumulator, ...data }));
}

export function trimSlash(str) {
  return str.slice(1);
}

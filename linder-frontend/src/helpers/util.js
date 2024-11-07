export function mergeClassNames(...classNames) {
  return classNames.filter((className) => !!className).join(" ");
}

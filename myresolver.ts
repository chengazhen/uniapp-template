export default (componentName) => {
  if (componentName.startsWith('U')) {
    const name = convertCamelCaseToDash(componentName)
    return { as: componentName, from: `uview-plus/components/${name}/${name}.vue` }
  }
}

function convertCamelCaseToDash(str: string) {
  return str.replace(/([A-Z])/g, (match, letter, index) =>
    index === 0 ? letter.toLowerCase() : `-${letter.toLowerCase()}`)
}

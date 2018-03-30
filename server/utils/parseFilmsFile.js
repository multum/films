module.exports = function (string) {
  const elements = string.trim().split(/^\s*[\r\n]/gm);
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    const lines = element.trim().split(/[\r\n]+/g);
    const elementObject = {};
    for (let k = 0; k < lines.length; k++) {
      let line = lines[k];
      const index = line.indexOf(':');
      elementObject[`${line.substring(0, index).toLowerCase().trim()}`] = line.substring(index + 1).trim();
    }
    elements[i] = elementObject;
  }
  return elements;
};
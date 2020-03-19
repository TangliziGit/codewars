const cipher = (x) => {
  const offset = ((x === x.toUpperCase())? 'A' : 'a').charCodeAt(0);
  return String.fromCharCode((x.charCodeAt(0) - offset + 13)%26 + offset);
}

const rot13 = (message) =>
  message.replace(/[a-zA-Z]/g, cipher);
const range = (x) => Math.max(Math.min(x, 255), 0);

const rgb = (r, g, b) => [r, g, b]
    .map(range)
    .map(x => x.toString(16))
    .map(x => ("0" + x).slice(-2))
    .map(x => x.toUpperCase())
    .join('');
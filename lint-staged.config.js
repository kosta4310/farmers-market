module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'git add'],
  '*.{json,md,css,scss,html}': ['prettier --write', 'git add'],
};

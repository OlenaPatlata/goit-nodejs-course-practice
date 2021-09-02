module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'rules': {
    'comma-dangle': 'off',
    'max-len': 'off',
    'require-jsdoc': 'off'// TODO: refactor code
  },
};

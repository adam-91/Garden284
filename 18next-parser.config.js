module.exports = {
    defaultNamespace: 'translation',
    lexers: {
        tsx: ['JsxLexer'], 
        ts: ['JavascriptLexer'],
        default: ['JavascriptLexer'],
    },
    locales: ['en', 'pl'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    input: [ 'src/*.js', ],
  }
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
        'vue' // lint .vue
    ],
    ignorePatterns: [ // z lintování ignorované umístění
        'static/**', // statické buildy mj. i minimalizované js
        'assets/js/vendor/**', // zdroje vnější knihovny
        'app/' // js pro kompilování scroll behaviour
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4, { SwitchCase: 1 }], // odsazeni javascriptu, tab = 4 mezery
        'vue/html-indent': ['error', 4, { // odsazeni html v template, tab = 4 mezery
            attribute: 1, // atributy tagu na vice radku jsou odsazene
            closeBracket: 0, // zaviraci zavorka tagu na vice radku neni odsazena
            alignAttributesVertically: false, // zarovnavat atributy o tabulator a ne pod sebe
            ignores: []
        }],
        // bud jeden atribut na radku nebo kazdy atribut na samostatnem radku
        'vue/max-attributes-per-line': ['warn', {
            singleline: 1, // pokud ma jeden atribut, tak jej nechat na jednom radku
            multiline: 1 // pokud ma vice atributu 1 na řádek
        }],
        // pokud je tag rozdeleny na vice radku, tak ukoncovaci zavorku dat na novy radek
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'always'
        }],
        // pridat mezeru pred lomitko v self-closing tagu (aby to vypadalo jako <div />)
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'always'
        }],
        // preferovat self-closing tagy (<div></div> prepise na <div />)  https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md#rule-details
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'always',
                component: 'always'
            },
            svg: 'always',
            math: 'always'
        }],
        // vynutit mezeru u dvou chlupatych zavorek ({{text}} => {{ text }})
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        // u atributu nedavat mezery okolo rovnitka
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'],

        // vue 3 v zájmu konfliktu se základními komponentami vyžaduje víceslovné komponenty >> potlačení
        'vue/multi-word-component-names': 'off',

        // vue přepisuje atributy html komponent dataNeco do data-neco a prop vyžaduje jako dataNeco >> pak je prolbém v dohledávání vyskytů (jiný tvar) // funkčně ale ničemu nevadí
        'vue/attribute-hyphenation': 0,
        'vue/prop-name-casing': 0,

        // JS proměnné by měly být pojmenovány jako nejakaPromenna, ale z DB často dojde nejaka_promenna se kterou se pak pracuje jako parametrem >> pro jednutu vypnutí
        camelcase: 0,

        // řádkování komponenty, slotu by v někerých případadech způsobilo mezery před/za slotem / v component např. <a href=""> slot </a>
        'vue/multiline-html-element-content-newline': ['warn', {
            ignoreWhenEmpty: true,
            ignores: ['fileDownload', 'pre', 'textarea', 'component', 'comment', 'slot', 'iconSVG', 'a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data', 'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark', 'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video'] // elementy z eslint-plugin-vue\lib\utils\inline-non-void-elements.json
        }],

        // nestandard nbsp přímo znak přímo ve stringu, html >> warn
        'no-irregular-whitespace': 1

    }
}

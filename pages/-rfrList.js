module.exports = [
    {
        key: 'wf',
        label: 'web FAST VUT',
        tech: ['NuxtJS', 'Express.js', 'node.js', 'MSSQL', 'Gitlab CI/CD', 'IIS'],
        info: 'SPA aplikace na NuxtJS se SSR, backend běží na node.js a Express.js, vizuální styl je předepsán VUT (HTML šablony a obslužné JS).',
        link: 'https://www.fce.vutbr.cz/',
        imgsCount: 1
    }, {
        key: 'wv',
        label: 'interní Vue.js aplikace Intranetu FAST VUT',
        tech: ['Vue.js', 'Bootstrap-vue', 'Webpack', 'classic ASP', 'MSSQL'],
        info: 'Rozšíření původního systému o Vue.js aplikace vkládané zavedením webpackem zkompilovaných JS a CSS, načítání jednotlivých aplikací zavaděčem na základě jména aplikace. Backend vždy formou classic ASP resp. Jsciptu (MS implementace javascriptu specifikace ECMA3)',
        link: 'https://intranet.fce.vutbr.cz/',
        imgsCount: 1
    }, {
        key: 'dc',
        label: 'interní systém pro doplňkovou činnost FAST VUT',
        tech: ['SketchUp', 'classic ASP', 'jQuery', 'MSSQL', 'Bootstrap'],
        info: 'Aplikace pro správu zakázek fakulty, základem jsou na serveru validované formy (jQuery.ajax), s následným schvalovacím procesem a exportem do celounivezitního finančního API.',
        link: 'https://intranet.fce.vutbr.cz/',
        imgsCount: 2
    }, {
        key: 'ts',
        label: 'Webová mikroaplikace',
        tech: ['NuxtJS', 'Vuetify'],
        info: 'Aplikace pracující výhradně s localStorage browseru pro studijní účely.',
        link: 'https://evb.fce.vutbr.cz/time-spent/',
        imgsCount: 1
    }, {
        key: 'pb',
        label: 'kód a grafika, editace plánů budov FAST VUT',
        tech: ['SketchUp', 'Blender', 'jQuery', 'classic ASP', 'MSSQL'],
        info: 'Aplikace z roku 2015 zahrnovala zpracování různorodých schémat a plánku budov fakulty do jednoduchého 3D modelu budov a render podlaží, programování editačního rozhraní a rozhraní pro veřejný přístup.',
        link: 'https://www.fce.vutbr.cz/o-fakulte/plany-budov/',
        imgsCount: 2
    }, {
        key: 'wi',
        label: 'tvorba aplikací intranetu FAST VUT',
        tech: ['classic ASP', 'MSSQL', 'IIS'],
        info: 'Původní systém z konce 90. let byl rozšiřován o nové aplikace, zprvu tradičnimi technologiemi.'
    }, {
        key: 'wm',
        label: 'správa Moodle Fakulty stavební VUT v Brně',
        tech: ['IIS'],
        link: 'https://lms.fce.vutbr.cz/'
    }, {
        key: 'gl',
        label: 'správa lokální instalace Gitlab',
        link: 'https://gitlab.fce.vutbr.cz/'
    }, {
        key: 'wp',
        label: 'správa Wordpres pro weby ústavů, součástí, pravidelných akcí; vývoj interních pluginů',
        tech: ['PHP', 'MariaDB', 'IIS', 'Let\'s Encrypt'],
        info: 'Sity součástí běží na Wordpress v režimu multisite se sdíleným prostředím, '
    }
]

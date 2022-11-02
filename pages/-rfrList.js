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
        linkLock: true,
        imgsCount: 1
    }, {
        key: 'dc',
        label: 'interní systém pro doplňkovou činnost FAST VUT',
        tech: ['SketchUp', 'classic ASP', 'jQuery', 'MSSQL', 'Bootstrap'],
        info: 'Aplikace pro správu zakázek fakulty, základem jsou na serveru validované formy (jQuery.ajax), s následným schvalovacím procesem a exportem do celounivezitního finančního API.',
        link: 'https://intranet.fce.vutbr.cz/',
        linkLock: true,
        imgsCount: 2
    }, {
        key: 'ts',
        label: 'mikroaplikace Time-Spent EVB',
        tech: ['NuxtJS', 'Vuetify'],
        info: 'Aplikace pracující výhradně s localStorage browseru pro oientační sběr dat pro studijní účely.',
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
        key: 'sl',
        label: 'stavební slovník',
        tech: ['jQuery', 'classic ASP', 'MSSQL'],
        info: 'Stavební slovník pro zlepšení odborné kvality zejména prací studentů. Aplikace byla dostupná v intranetu při zadávání anglických abstraktů a klíčových slov, přístupná je i veřejně.',
        link: 'https://www.fce.vutbr.cz/pro-studenty/slovnik',
        imgsCount: 1
    }, {
        key: 'wi',
        label: 'aplikace intranetu FAST VUT',
        tech: ['classic ASP', 'MSSQL', 'IIS'],
        info: 'Původní systém z konce 90. let byl rozšiřován o nové aplikace, zprvu tradičnimi technologiemi.',
        link: 'https://intranet.fce.vutbr.cz/',
        linkLock: true,
        imgsCount: 2
    }, {
        key: 'wm',
        label: 'Moodle Fakulty stavební VUT v Brně',
        info: 'údržba Moodle a tvorba Intranetové aplikace pro prási s Moodle API, import studentů a export hodnocení.',
        tech: ['IIS', 'classic ASP'],
        link: 'https://lms.fce.vutbr.cz/'
    }, {
        key: 'wp',
        label: 'sity Wordpres',
        tech: ['PHP', 'MariaDB', 'IIS', 'Let\'s Encrypt'],
        info: 'Správa Wordpess instalací pro weby ústavů, součástí, pravidelných akcí; vývoj interních pluginů pro jednotné prostředí (cookie lišta), načínání dat Intranetu, ...',
        linkItems: ['https://www.zel.fce.vutbr.cz/zamestnanci/', 'https://admas.eu/']
    }
]

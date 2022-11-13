module.exports = [
    {
        rfrKey: 'wf',
        label: 'Web FAST VUT',
        tech: ['NuxtJS', 'Express.js', 'node.js', 'MSSQL', 'Gitlab CI/CD', 'IIS'],
        info: 'SPA aplikace na NuxtJS se SSR, backend běží na node.js a Express.js, vizuální styl je předepsán VUT (HTML šablony a klientské JS).',
        link: 'https://www.fce.vutbr.cz/',
        imgsCount: 1
    }, {
        rfrKey: 'wv',
        label: 'Interní Vue.js aplikace Intranetu FAST VUT',
        short: 'Vue.js aplikace',
        tech: ['Vue.js', 'Bootstrap-vue', 'Webpack', 'classic ASP', 'MSSQL'],
        info: 'Rozšíření původního systému o Vue.js aplikace vkládané zavedením Webpackem zkompilovaných JS a CSS, načítání jednotlivých aplikací zavaděčem na základě jména aplikace. Backend vždy formou classic ASP resp. Jsciptu (MS implementace javascriptu specifikace ECMA3).',
        link: 'https://intranet.fce.vutbr.cz/',
        linkLock: true,
        imgsCount: 1
    }, {
        rfrKey: 'dc',
        label: 'Interní systém pro evidence a schvalování zakázek FAST VUT',
        short: 'Systém pro zakázky',
        tech: ['classic ASP', 'jQuery', 'MSSQL', 'Bootstrap'],
        info: 'Aplikace pro správu zakázek fakulty, základem jsou na serveru validované formy (jQuery.ajax), s následným schvalovacím procesem a exportem do celounivezitního finančního API.',
        link: 'https://intranet.fce.vutbr.cz/',
        linkLock: true,
        imgsCount: 2
    }, {
        rfrKey: 'pb',
        label: 'Kód, grafika a editační rozhraní plánů budov FAST VUT',
        short: 'Plány budov FAST',
        tech: ['SketchUp', 'Blender', 'jQuery', 'classic ASP', 'MSSQL'],
        info: 'Aplikace z roku 2015 zahrnovala zpracování různorodých schémat a plánku budov fakulty do jednoduchého 3D modelu budov a render podlaží, programování editačního rozhraní a rozhraní pro veřejný přístup.',
        link: 'https://www.fce.vutbr.cz/o-fakulte/plany-budov/',
        imgsCount: 2
    }, {
        rfrKey: 'sl',
        label: 'Stavební slovník',
        tech: ['jQuery', 'classic ASP', 'MSSQL'],
        info: 'Stavební slovník pro zlepšení odborné kvality zejména prací studentů. Aplikace byla dostupná ve Studentském Intranetu při zadávání anglických abstraktů a klíčových slov, přístupná je i veřejně.',
        link: 'https://www.fce.vutbr.cz/pro-studenty/slovnik',
        imgsCount: 1
    }, {
        rfrKey: 'ts',
        label: 'Mikroaplikace Time-Spent EVB',
        short: 'Vuetify aplikace',
        tech: ['NuxtJS', 'Vuetify'],
        info: 'Aplikace pracující výhradně s localStorage browseru pro orientační sběr dat pro studijní účely.',
        link: 'https://evb.fce.vutbr.cz/time-spent/',
        imgsCount: 1
    }, {
        rfrKey: 'wi',
        label: 'Aplikace Intranetu FAST',
        short: 'Aplikace Intranetu',
        tech: ['classic ASP', 'jQuery', 'MSSQL'],
        info: 'Původní systém z konce 90. let byl rozšiřován o nové aplikace, zprvu tradičnimi technologiemi.',
        link: 'https://intranet.fce.vutbr.cz/',
        linkLock: true,
        imgsCount: 2
    }, {
        rfrKey: 'wm',
        label: 'Moodle FAST VUT',
        info: 'Údržba Moodle a tvorba Intranetové aplikace pro práci s Moodle API, import studentů a export hodnocení.',
        tech: ['PHP', 'classic ASP', 'IIS', 'MSSQL'],
        link: 'https://lms.fce.vutbr.cz/',
        imgsCount: 3
    }
]

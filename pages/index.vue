<template>
    <div>
        <h1>CV CHUCHMA Lukáš</h1>
        <div
            v-for="s in cvSekce"
            :key="s.title"
        >
            <h2>{{ s.title }}</h2>
            <template v-if="s.rows">
                <cvRow
                    v-for="r in s.rows"
                    :key="r.label"
                    v-bind="r"
                />
            </template>
            <template v-else-if="s.blocks">
                <cvBlock
                    v-for="(b, bi) in s.blocks"
                    :key="bi"
                    :items="b"
                />
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cvSekce: [
                {
                    title: 'Osobní informace',
                    rows: [
                        { label: 'Jméno', value: 'CHUCHMA Lukáš' },
                        { label: 'Adresa', value: 'Halasovo nám. 257/4, 638 00 Brno-Lesná' },
                        { label: 'E-mail', value: 'chuchma.lukas@gmail.com', link: 'mailto:chuchma.lukas@gmail.com' },
                        { label: 'Telefon', value: '+420 604 826 188', link: 'tel:+420604826188' },
                        { label: 'Národnost', value: 'česká' },
                        { label: 'Datum narození', value: '13. srpna 1985' }
                    ]
                }, {
                    title: 'Pracovní zkušenosti',
                    blocks: [
                        [
                            { label: 'Období', value: '2014 – 2022' },
                            { label: 'Zaměstnavatel', value: 'Vysoké učení technické v Brně, Fakulta stavební' },
                            { label: 'Odvětví', value: 'IT – správa webu a webových aplikací, správa serverů' },
                            { label: 'Pracovní náplň', value: 'tvorba a údržba webu fakulty a jejich součástí, tvorba a správa interních aplikací, správa webových serverů' }
                        ], [
                            { label: 'Období', value: '2013 – 2014' },
                            { label: 'Zaměstnavatel', value: 'Vysoké učení technické v Brně, Fakulta stavební' },
                            { label: 'Odvětví', value: 'IT – správa PC stanic, správa sítě' },
                            { label: 'Pracovní náplň', value: 'instalace a údržba PC stanic (SW i HW) a tiskáren a tiskových serverů, správa sítě, automatizace instalace SW, design tiskových materiálů školy' }
                        ], [
                            { label: 'Období', value: '2011' },
                            { label: 'Zaměstnavatel', value: 'OSVČ' },
                            { label: 'Odvětví', value: 'interiérový design / grafický design / stavebnictví' },
                            { label: 'Pracovní náplň', value: 'zpracovávání dokumentace pro provedení interiéru bytů, dílčí designové návrhy, návrhy detailů, konzultace proveditelnosti navrhovaných změn' }
                        ], [
                            { label: 'Období', value: '2010' },
                            { label: 'Zaměstnavatel', value: 'doc. Ing. Miloš Kalousek, Ph.D., Pod nemocnicí 493/3, 625 00 Brno' },
                            { label: 'Odvětví', value: 'stavebnictví' },
                            { label: 'Pracovní náplň', value: 'vypracovávání projektů k dotačnímu programu Zelená úsporám' }
                        ]
                    ]
                }, {
                    title: 'Vzdělání a kurzy',
                    blocks: [
                        [
                            { label: 'Období', value: '2012 – 2015' },
                            { label: 'Název a typ organizace', value: 'Vysoké učení technické v Brně, Fakulta stavební' },
                            { label: 'Studijní obor a zaměření', value: '(doktorský, 4-letý, studium nedokončeno) Stavební inženýrství, Pozemní stavby' }
                        ], [
                            { label: 'Období', value: '2004 – 2011' },
                            { label: 'Název a typ organizace', value: 'Vysoké učení technické v Brně, Fakulta stavební' },
                            { label: 'Studijní obor a zaměření', value: '(bakalářský + magisterský, 4-letý + 1,5-letý) Stavební inženýrství, Pozemní stavby; následně Stavební inženýrství, Pozemní stavby, Navrhování pozemních staveb' },
                            { label: 'Získaný titul', value: 'Ing.' }
                        ], [
                            { label: 'Období', value: '2000 – 2004' },
                            { label: 'Název a typ organizace', value: 'Střední průmyslová škola stavební Valašské Meziříčí' },
                            { label: 'Studijní obor a zaměření', value: 'Stavebnictví, Pozemní stavitelství' }
                        ]
                    ]
                }, {
                    title: 'Osobní schopnosti a dovednosti',
                    rows: [
                        {
                            label: 'IT programování',
                            list: [
                                {
                                    label: 'NuxtJS',
                                    link: 'https://nuxtjs.org/',
                                    info: 'zkušenosti s v2 (SSR, API pro SPA)',
                                    reference: [
                                        { title: 'web Fakulty stavební', url: 'https://www.fce.vutbr.cz/' }
                                    ]
                                }, {
                                    label: 'Vue.js',
                                    link: 'https://vuejs.org/',
                                    info: 'zkušenosti s v2',
                                    reference: [{ title: 'moduly Intranetu Fakulty stavební' }]
                                }, {
                                    label: 'node.js',
                                    link: 'https://nodejs.org/en/',
                                    reference: [
                                        { title: 'serverová strana webu Fakulty stavební', url: 'https://www.fce.vutbr.cz/' }
                                    ]
                                }, {
                                    label: 'MSSQL',
                                    reference: [
                                        { title: 'web a aplikace Fakulty stavební', url: 'https://www.fce.vutbr.cz/' }
                                    ]
                                }, {
                                    label: 'MySQL / MariaDB',
                                    reference: [
                                        { title: '', url: 'https://www.fce.vutbr.cz/' }
                                    ]
                                }, {
                                    label: 'PHP',
                                    reference: [
                                        { title: 'pluginy Wordpressu pro jednotné prostředí a přenos dat z DB Intranetu', url: 'https://esf-most.fce.vutbr.cz/akce/kurzy/archiv-kurzu-a2/' }
                                    ]
                                }, {
                                    label: 'classic ASP',
                                    info: 'později hlavně JScript (MS implementace javascriptu, úroveň ECMA3)',
                                    reference: [
                                        { title: 'web a aplikace Intranetu Fakulty stavební', url: 'https://intranet.fce.vutbr.cz/' },
                                        { title: 'web a aplikace Intranetu Fakulty stavební', url: 'https://spravazeleznic.fce.vutbr.cz/' }
                                    ]
                                }, {
                                    label: 'GitLab CI/CD',
                                    reference: [
                                        { title: 'web Fakulty stavební', url: 'https://www.fce.vutbr.cz/' }
                                    ]
                                }, {
                                    label: 'Bootstrap',
                                    info: 'zkušenosti s v3, v4',
                                    link: 'https://getbootstrap.com/'
                                }, {
                                    label: 'Bootstrap-vue',
                                    link: 'https://bootstrap-vue.org/'
                                }, {
                                    label: 'jQuery',
                                    link: 'https://jquery.com/'
                                }, {
                                    label: 'CSS'
                                }, {
                                    label: 'HTML'
                                }
                            ]
                        }, {
                            label: 'správa IT',
                            list: [
                                {
                                    label: 'správa Windows Server a IIS',
                                    reference: [{ title: 'moduly Intranetu Fakulty stavební' }]
                                }, {
                                    label: 'správa Linux serverů',
                                    reference: [
                                        { title: 'gitlab.fce.vutbr.cz', url: 'https://gitlab.fce.vutbr.cz/' }
                                    ]
                                }
                            ]
                        }, {
                            label: 'Software',
                            list: [
                                { label: 'Visual Studio Code' },
                                { label: 'SketchUp' },
                                { label: 'CorelDRAW' },
                                { label: 'Microsoft Office' },
                                { label: 'Autodesk AutoCAD' },
                                { label: 'Blender' }
                            ]
                        },
                        { label: 'Mateřský jazyk', value: 'čeština' },
                        { label: 'Ostatní jazyky', value: 'angličtina' },
                        { label: 'Řidičský průkaz', value: 'skupina B' }
                    ]
                }, {
                    title: 'Doplňující informace',
                    rows: [
                        {
                            label: 'Záliby, koníčky',
                            list: [
                                { label: 'cyklistika, pěší turistika' }
                            ]
                        }, {
                            label: 'List referencí',
                            list: [
                                { rKey: 'wf', label: 'web FAST VUT', tech: ['NuxtJS', 'node.js', 'MSSQL', 'Gitlab CI/CD', 'IIS'], link: 'https://www.fce.vutbr.cz/' },
                                { rKey: 'wv', label: 'interní Vue.js aplikace Intranetu FAST VUT', tech: ['Bootstrap-vue', 'classic ASP', 'MSSQL'], link: 'https://intranet.fce.vutbr.cz/', imgs: [''] },
                                { rKey: 'dc', label: 'interní systém pro doplňkovou činnost FAST VUT', tech: ['SketchUp', 'classic ASP', 'jQuery', 'MSSQL', 'Bootstrap'], link: 'https://intranet.fce.vutbr.cz/', imgs: [''] },
                                { rKey: 'pb', label: 'kód a grafika plánů budov FAST VUT', tech: ['Blender', 'jQuery', 'classic ASP', 'MSSQL'], link: 'https://www.fce.vutbr.cz/o-fakulte/plany-budov/', imgs: [''] },
                                { rKey: 'wi', label: 'údržba intranetu FAST VUT', tech: ['classic ASP', 'MSSQL'], link: 'https://intranet.fce.vutbr.cz/' },
                                { rKey: 'wp', label: 'správa Wordpres ústavů a součástí, vývoj interních pluginů', tech: ['PHP'], link: 'https://lms.fce.vutbr.cz/' },
                                { rKey: 'wm', label: 'správa Moodle Fakulty stavební VUT v Brně', link: 'https://lms.fce.vutbr.cz/' },
                                { rKey: 'gl', label: 'správa lokální instalace Gitlab', link: 'https://gitlab.fce.vutbr.cz/' }
                            ]
                        }
                    ]
                }

            ]
        }
    }
}
</script>

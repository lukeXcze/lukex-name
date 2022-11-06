const techList = require('./-techList')
const softList = require('./-softList')
const rfrList = require('./-rfrList')

module.exports = {
    sekce: [
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
                    label: 'IT technologie',
                    list: techList
                }, {
                    label: 'Software',
                    list: softList
                }, {
                    label: 'správa IT',
                    list: [
                        {
                            label: 'správa Windows Server a IIS',
                            rfr: ['wf', 'wi', 'wm']
                        }, {
                            label: 'správa Linux serverů',
                            rfr: ['gl']
                        }
                    ]
                },
                { label: 'Mateřský jazyk', value: 'čeština' },
                { label: 'Ostatní jazyky', value: 'angličtina (psaná forma: dobře , mluvené slovo: základy)' },
                { label: 'Řidičský průkaz', value: 'skupina B' }
            ]
        }, {
            title: 'Doplňující informace',
            rows: [
                {
                    label: 'Vybrané reference',
                    list: rfrList
                }, {
                    label: 'Záliby, koníčky',
                    list: [
                        { label: 'cyklistika, pěší turistika' }
                    ]
                }, {
                    label: 'CV on-line',
                    link: 'https://lukex.name/',
                    print: 'only'
                }, {
                    label: 'Web git repo',
                    link: 'https://github.com/lukeXcze/lukex-name',
                    print: 'none'
                }
            ]
        }
    ]
}

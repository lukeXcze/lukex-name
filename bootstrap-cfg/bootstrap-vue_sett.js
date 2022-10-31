// soubor mění nastavení obsahové nastavení bootstrap-vue // mění hlavně nastavení pro české prostředí
// komplat popis:  https://bootstrap-vue.org/docs/reference/settings
module.exports = {
    BAlert: {
        dismissLabel: 'Zavřít'
    },
    BButtonClose: {
        ariaLabel: 'Zavřít'
    },
    BCalendar: {
        labelPrevDecade: 'Předchozí dekáda',
        labelPrevYear: 'Předchozí rok',
        labelPrevMonth: 'Předchozí měsíc',
        labelCurrentMonth: 'Aktuální měsíc',
        labelNextMonth: 'Další měsíc',
        labelNextYear: 'Další rok',
        labelNextDecade: 'Další dekáda',
        labelToday: 'Dnes',
        labelSelected: 'Vybrané datum',
        labelNoDateSelected: 'Datum není vybráno',
        labelCalendar: 'Kalendář',
        labelNav: 'Procházení kalendářem',
        labelHelp: 'Kurzorové klávesy pro procházení, ENTER pro výběr'
    },
    BDropdown: {
        toggleText: 'Otevřít podnabídku'
    },
    BFormDatepicker: {
        labelTodayButton: 'Vybrat dnešek',
        labelResetButton: 'Zrušit datum',
        labelCloseButton: 'Zavřít',
        startWeekday: 1
    },
    BFormFile: {
        browseText: 'Procházet',
        placeholder: 'Bez vybraných souborů',
        dropPlaceholder: 'Přetáhněte soubory'
    },
    BFormTag: {
        removeLabel: 'Ostranit šítek'
    },
    BFormTags: {
        addButtonText: 'Přidat',
        duplicateTagText: 'Kopírovat štíky',
        invalidTagText: 'Neplatné štítky',
        placeholder: 'Přidat šítek...',
        tagRemoveLabel: 'Odstranit šítek',
        tagRemovedLabel: 'Štítek odstraněn'
    },
    BFormTimepicker: {
        labelNowButton: 'Nastavit teď',
        labelResetButton: 'Zrušit čas',
        labelCloseButton: 'Zavřít'
    },
    BFormSpinbutton: {
        labelDecrement: 'Ubrat',
        labelIncrement: 'Přidat'
    },
    BModal: {
        cancelTitle: 'Zrušit',
        okTitle: 'OK',
        headerCloseLabel: 'Zavřít'
    },
    BNavbarToggle: {
        label: 'Přepínač navigace'
    },
    BTime: {
        labelNoTimeSelected: 'Čas nevybrán',
        labelSelected: 'Vybaný čas',
        labelHours: 'Hodiny',
        labelMinutes: 'Minuty',
        labelSeconds: 'Sekundy',
        labelAmpm: 'dop./odp.',
        labelAm: 'dop.',
        labelPm: 'odp.'
    },
    BPopover: { // vykreslování se standardně omezuje na scrollParenta (pokud je tabulka responsive > je to ona // popisky se hážou nepřehledně jen do oblasti tabulky)
        boundary: 'viewport'
    },
    BTooltip: {
        boundary: 'viewport'
    }
}

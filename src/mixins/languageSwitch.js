export const languageSwitch = {
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    },
    computed: {
        activeLanguage() {
            return this.$i18n.locale;
        }
    }
}

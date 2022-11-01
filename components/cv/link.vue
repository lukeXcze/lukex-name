<template>
    <a
        v-if="link"
        :href="link"
        :target="linkBlank ? '_blank' : null"
    >{{ label }}</a>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: null
        }
    },
    computed: {
        linkBlank () {
            return this.link && /^http(s|):\/\//.test(this.link)
        }
    }
}
</script>

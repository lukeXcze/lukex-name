<template>
    <span v-if="link">
        <a
            class="d-print-none"
            :href="link"
            :target="linkBlank ? '_blank' : null"
        >
            {{ label || link }}<template v-if="lock">, <b-icon-lock-fill /> uzavřený systém</template> <b-icon-arrow-up-right-square-fill v-if="linkBlank" />
        </a>
        <span class="d-none d-print-inline">
            {{ label || link }} <span v-if="linkBlank && label">({{ link }}<template v-if="lock">, <b-icon-lock-fill /> uzavřený systém</template>)</span>
        </span>
    </span>
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
        },
        lock: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        linkBlank () {
            return this.link && /^http(s|):\/\//.test(this.link)
        }
    }
}
</script>

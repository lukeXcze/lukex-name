<template>
    <b-modal
        v-model="visible"
        size="xl"
        title="Detail reference"
        hide-footer
    >
        <rfrBox v-bind="rfrData" />
    </b-modal>
</template>

<script>
import rfrList from '@/cvData/rfrList'

export default {
    props: {
        rfr: {
            type: Object,
            default: _ => ({ key: null })
        }
    },
    data: _ => ({
        visible: false
    }),
    computed: {
        rfrData () {
            const key = this.rfr && this.rfr.key ? this.rfr.key : null
            return rfrList.find(el => el.rfrKey === key)
        }
    },
    watch: {
        rfr () { this.visible = true }
    }
}
</script>

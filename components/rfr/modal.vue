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
        rfrKey: {
            type: String,
            default: null
        }
    },
    data: _ => ({
        visible: false
    }),
    computed: {
        rfrData () {
            return rfrList.find(el => el.rfrKey === this.rfrKey)
        }
    },
    watch: {
        rfrKey () { this.visible = true }
    }
}
</script>

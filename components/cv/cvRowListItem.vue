<template>
    <div class="mb-1">
        <b-btn
            v-if="rfrKey"
            class="d-print-none mr-1 py-0"
            size="sm"
            variant="info"
            @click="$emit('rfr-detail', rfrKey)"
        >
            <i class="fa fa-search fa-fw" />
        </b-btn>
        <cvLink
            v-if="link"
            :link="link"
            :label="label"
            :lock="linkLock"
        />
        <span v-else>{{ label }}</span>

        <cvTechItems
            v-if="tech && tech.length"
            :list="tech"
        />
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        },
        linkLock: {
            type: Boolean,
            default: false
        },
        info: {
            type: String,
            default: null
        },
        rfrKey: {
            type: String,
            default: null
        },
        tech: {
            type: Array,
            default: null
        }
    }
}
</script>

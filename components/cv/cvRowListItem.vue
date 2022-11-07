<template>
    <div class="mb-1">
        <b-btn
            v-if="rfrKey"
            v-b-tooltip.left.hover="'otevřít referenci'"
            class="d-print-none small mr-1 p-1"
            size="sm"
            variant="info"
            @click="$emit('rfr-detail', rfrKey)"
        >
            <b-icon-search />
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
            class="small"
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

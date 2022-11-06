<template>
    <div class="mb-1">
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
        <div
            v-if="info"
            class="small"
        >
            {{ info }}
        </div>
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
        reference: {
            type: Array,
            default: null
        },
        tech: {
            type: Array,
            default: null
        }
    }
}
</script>

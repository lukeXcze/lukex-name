<template>
    <div class="mb-1">
        <cvLink
            v-if="link"
            :link="link"
            :label="label"
        />
        <span v-else>{{ label }}</span>
        <template v-if="tech && tech.length">
            <b-badge
                v-for="t in tech"
                :key="t"
                variant="info"
                class="ml-2"
            >
                {{ t }}
            </b-badge>
        </template>
        <div
            v-if="info"
            class="small"
        >
            {{ info }}
        </div>
        <div v-if="reference && reference.length">
            {{ reference }}
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

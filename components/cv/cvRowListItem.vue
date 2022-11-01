<template>
    <div class="mb-1">
        <cvLink
            v-if="link"
            :link="link"
            :label="label"
        />
        <span v-else>{{ label }}</span>
        <small v-if="info">{{ info }}</small>
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
        <template v-if="reference && reference.length">
            <br>{{ reference }}
        </template>
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

<template>
    <span>
        <b-badge
            v-for="t in list"
            :key="t"
            variant="primary"
            class="mr-2"
        >
            {{ t }}
        </b-badge>
    </span>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: _ => []
        }
    }
}
</script>

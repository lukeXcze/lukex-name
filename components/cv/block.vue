<template>
    <div class="mb-3">
        <cvRow
            v-for="(r, i) in items"
            :key="i"
            v-bind="r"
        />
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: _ => []
        }
    }
}
</script>

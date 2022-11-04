<template>
    <div>
        <h1>Reference</h1>
        <div>{{ info }}</div>
    </div>
</template>

<script>
export default {
    props: {
        rfrKey: {
            type: String,
            default: '-'
        },
        label: {
            type: String,
            default: '-'
        },
        tech: {
            type: Array,
            default: _ => []
        },
        info: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        },
        imgsCount: {
            type: Number,
            default: 0
        }

    }
}
</script>

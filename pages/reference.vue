<template>
    <div>
        <h1>Reference</h1>
        <b-tabs
            vertical
            pills
        >
            <b-tab
                v-for="r in rfrList"
                :key="r.rfrKey"
                :title="r.short || r.label"
            >
                <rfrBox v-bind="r" />
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import rfrList from './-rfrList'

export default {
    data: _ => ({ rfrList })
}
</script>

<template>
    <div>
        <h1>CV CHUCHMA Lukáš</h1>
        <div
            v-for="s in sekce"
            :key="s.title"
            class="print-nbi"
        >
            <h2>{{ s.title }}</h2>
            <template v-if="s.rows">
                <cvRow
                    v-for="r in s.rows"
                    :key="r.label"
                    v-bind="r"
                />
            </template>
            <template v-else-if="s.blocks">
                <cvBlock
                    v-for="(b, bi) in s.blocks"
                    :key="bi"
                    :items="b"
                />
            </template>
        </div>
    </div>
</template>

<script>
import cvData from './-cvData'

export default {
    data: _ => cvData
}
</script>

<style>
@media print {
    .print-nbi { break-inside: avoid; }
}
</style>

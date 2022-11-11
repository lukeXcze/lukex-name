<template>
    <div>
        <div
            v-for="s in cvData.sekce"
            :key="s.title"
            class="print-nbi"
        >
            <h2 class="mt-3">
                {{ s.title }}
            </h2>
            <div
                v-if="s.fotoUrl"
                style="height:0;overflow:show;"
                class="text-right"
            >
                <b-img
                    :src="s.fotoUrl"
                    thumbnail
                    style="max-width:12%;"
                />
            </div>
            <template v-if="s.rows">
                <cvRow
                    v-for="r in s.rows"
                    :key="r.label"
                    v-bind="r"
                    @rfr-detail="openModal"
                />
            </template>
            <template v-else-if="s.blocks">
                <cvBlock
                    v-for="(b, bi) in s.blocks"
                    :key="bi"
                    :items="b"
                    @rfr-detail="openModal"
                />
            </template>
        </div>
        <rfrModal :rfr="rfr" />
        <div
            class="d-print-none"
            style="padding-top:15em;padding-bottom:5em"
        >
            <i class="fa fa-info-circle fa-fw text-info" />
            Některé řádky CV jsou zobrazena jen ve verzi pro tisk (odkaz na CV online), jiná jen v on-line (odkaz na zdroje), online verze obsahuje interaktivní prvky.
        </div>
    </div>
</template>

<script>
import cvData from '@/cvData'

export default {
    data: _ => ({
        cvData,
        rfr: { key: null }
    }),
    methods: {
        openModal (data) {
            this.rfr = { key: data }
        }
    }
}
</script>

<style>
@media print {
    .print-nbi { break-inside: avoid; }
    body { background-color: #fff; }
}
</style>

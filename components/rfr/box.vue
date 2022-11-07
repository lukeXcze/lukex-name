<template>
    <div>
        <h2>{{ label }}</h2>
        <p>{{ info }}</p>
        <b-table-simple
            borderless
            small
        >
            <b-tr v-if="tech && tech.length">
                <b-th>Technologie</b-th>
                <b-td>
                    <cvTechItems :list="tech" />
                </b-td>
            </b-tr>
            <b-tr>
                <b-th>Odkaz</b-th>
                <b-td>
                    <cvLink
                        :link="link"
                        :lock="linkLock"
                    />
                </b-td>
            </b-tr>
        </b-table-simple>
        <template v-if="imgsCount">
            <CoolLightBox
                :items="imgs"
                :index="imgIndex"
                effect="fade"
                useZoomBar
                fullScreen
                @close="imgIndex = null"
            />
            <b-row>
                <b-col
                    v-for="(imgObj, i) in imgs"
                    :key="i"
                    :md="6"
                    :sm="12"
                >
                    <b-img
                        thumbnail
                        :src="imgObj.src"
                        @click="imgIndex = i"
                    />
                </b-col>
            </b-row>
        </template>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    components: { CoolLightBox },
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
        linkLock: {
            type: Boolean,
            default: false
        },
        imgsCount: {
            type: Number,
            default: 0
        }
    },
    data () {
        return { imgIndex: null }
    },
    computed: {
        imgs () {
            return Array.from(
                { length: this.imgsCount }
                , (_, i) => ({
                    title: this.label,
                    src: `/rfrImg/${this.rfrKey}/${i}.png`
                })
            )
        }
    }
}
</script>

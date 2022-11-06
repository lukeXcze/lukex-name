<template>
    <b-row :class="[printClass, 'print-pgin']">
        <b-col sm="4">
            {{ label }}
        </b-col>
        <b-col sm="8">
            <cvLink
                v-if="link"
                :link="link"
                :label="value"
                :lock="linkLock"
            />
            <nuxt-link
                v-else-if="refKey"
                :to="`/reference/${refKey}`"
            >
                {{ value }}
            </nuxt-link>
            <template v-else-if="list">
                <cvRowListItem
                    v-for="i in list"
                    :key="i.label"
                    v-bind="i"
                />
            </template>
            <span v-else>{{ value }}</span>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: null
        },
        value: {
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
        refKey: {
            type: String,
            default: null
        },
        list: {
            type: Array,
            default: null
        },
        print: {
            type: String,
            default: null
        }
    },
    computed: {
        printClass () {
            switch (this.print) {
                case 'only': return 'd-none d-print-flex'
                case 'none': return 'd-print-none'
            }
            return null
        }
    }
}
</script>

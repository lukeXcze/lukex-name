<template>
    <b-row :class="printClass">
        <b-col sm="3">
            {{ label }}
        </b-col>
        <b-col sm="9">
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
                    @rfr-detail="$emit('rfr-detail', $event)"
                />
            </template>
            <span
                v-else
                v-text="value"
            /><template v-if="small">
                <small>, Ing.</small>
            </template>
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
        small: {
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
    data: _ => ({
        detail: null
    }),
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

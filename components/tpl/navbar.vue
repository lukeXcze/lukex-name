<template>
    <b-navbar
        type="dark"
        variant="primary"
        sticky
    >
        <b-container>
            <b-navbar-brand :to="{name: 'index'}">
                Chuchma Lukáš
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" />

            <b-collapse
                id="nav-collapse"
                is-nav
            >
                <b-navbar-nav>
                    <b-nav-item
                        v-for="(l, i) in menu"
                        :key="i"
                        :to="l.to"
                    >
                        {{ l.label }}
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            <b-container />
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    data () {
        return {
            menu: [
                { to: { name: 'index' }, label: 'CV' },
                { to: { name: 'reference' }, label: 'Reference' }
            ]
        }
    }
}
</script>

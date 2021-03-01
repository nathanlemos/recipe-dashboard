<template>
    <div class="breadcrumbs">
        <ul>
            <li>
                <router-link to="/dashboard">Home</router-link>
            </li>
            <li v-if="routerName || name">
                <router-link :to="{ name: routerName }">{{name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['routerName', 'name']
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        padding-bottom: 15px;

        li {
            display: inline-block;
            text-transform: uppercase;
            font-size: 12px;

            a {
                color: $primary;
            }

            &:after {
                content: '>';
                padding: 0 10px;
                font-weight: bold;
            }

            &:last-child {
                &:after {
                    content: none;
                }
            }
        }
    }
}
</style>

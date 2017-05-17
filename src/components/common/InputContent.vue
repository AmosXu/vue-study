<template>
    <div class='hight30'>
        <label>{{name}}：</label>

        <input v-if='type=="text"' type="text" :name="name" @change='change' v-model='inputModel' />
        <input v-if='type=="password"' type="password" :name="name" @change='change' v-model='inputModel' />
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'InputContent',
        data() {
            return {
                inputModel: ''
            }
        },
        props: {
            name: {
                type: String,
                default() {
                  return ''
                }
            },
            type: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        methods: {
            change() {
                this.$emit("change", this.inputModel)
            }
        }
    }
</script>

<style type="text/css" scoped>
    .hight30 {
        height: 30px;
        line-height: 30px;
    }
</style>
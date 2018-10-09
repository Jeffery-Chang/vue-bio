<template>
    <transition name="fade">
        <div class="loadingWrap" v-if="!loaded.loadFG">
            <div class="loading">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'loading',
        data () {
            return {
                loaded: this.$store.state
            }
        },
        mounted(){
            window.addEventListener('load', ()=> {
                this.$store.commit('changeFG', {
                    type: 'loadFG',
                    fg: true
                });
            });
        }
    }
</script>
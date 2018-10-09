<template>
    <div id="app" v-cloak>
        <loading></loading>
        <transbg></transbg>
        <menubar></menubar>
        <wrap></wrap>
        <pop></pop>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import loading from './component/loading.vue';
    import transbg from './component/transbg.vue';
    import menubar from './component/menu.vue';
    import wrap from './component/wrap.vue';
    import pop from './component/pop.vue';
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
    export default {
        name: 'app',
        data () {
            return {
                
            }
        },
        computed: {
            ...mapGetters({
                setFG: 'setFG'
            })
        },
        components:{
            loading,
            transbg,
            menubar,
            wrap,
            pop
        },
        mounted(){
            this.setOverFlow();
        },
        methods: {
            setOverFlow(){
                document.body.style.cssText = (this.setFG) ? 'overflow-y: hidden' : '';
            },
            scrollToY(scrollTargetY, speed, easing){
                var scrollY = window.scrollY || document.documentElement.scrollTop,
                    scrollTargetY = scrollTargetY || 0,
                    speed = speed || 2000,
                    easing = easing || 'easeOutSine',
                    currentTime = 0;

                var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
                var easingEquations = {
                        easeOutSine: function (pos) {
                            return Math.sin(pos * (Math.PI / 2));
                        },
                        easeInOutSine: function (pos) {
                            return (-0.5 * (Math.cos(Math.PI * pos) - 1));
                        },
                        easeInOutQuint: function (pos) {
                            if ((pos /= 0.5) < 1) {
                                return 0.5 * Math.pow(pos, 5);
                            }
                            return 0.5 * (Math.pow((pos - 2), 5) + 2);
                        }
                    };

                function tick() {
                    currentTime += 1 / 60;
                    var p = currentTime / time;
                    var t = easingEquations[easing](p);

                    if (p < 1) {
                        requestAnimFrame(tick);
                        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
                    } else {
                        window.scrollTo(0, scrollTargetY);
                    }
                }
                tick();
            }
        },
        watch:{
            setFG: 'setOverFlow'
        }
    }
</script>

<style>
    @import './css/style.css';
    @import './css/icon.css';
    @import './css/self.css';
</style>

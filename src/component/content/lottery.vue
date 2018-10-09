<template>
    <section class="lottery">
        <div class="center">
            <h1><img src="../../img/sign_title.png" alt=""></h1>
            <h2>想要體驗肌膚有氧運動帶來的年輕活力？</h2>
            <h3>即刻回填資料並分享，就有機會<span><b><img src="../../img/sign_draw.png" alt=""></b>女神的美麗秘密</span>唷～</h3>
            <div class="choose_block">
                <div class="border">
                    <div class="gold_box">
                        <p class="pdt"><img src="../../img/sign_pdt_gold.png" alt=""></p>
                        <h4>
                            <span>抗</span>初老
                        </h4>
                        <a href="" @click.prevent.self="showForm('goldFG', 'A');">我要透亮年輕</a>
                    </div>
                    <div class="purple_box">
                        <p class="pdt"><img src="../../img/sign_pdt_purple.png" alt=""></p>
                        <h4>
                            <span>超</span>彈潤
                        </h4>
                        <a href="" @click.prevent.self="showForm('purpleFG', 'B');">我要肌膚Q彈</a>
                    </div>
                    <p class="tt">兩堂肌膚有氧運動你想體驗哪一道呢？</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import WOW from 'wow.js'
    import isMobile from 'ismobilejs'
    export default {
        name: 'lottery',
        data () {
            return {
                
            }
        },
        methods: {
            showForm(evt, type){
                this.$store.commit('changeFG', {
                    type: evt,
                    fg: true
                });
                this.$store.commit('updataAPIdata', {
                    type: 'type',
                    val: type
                });
            }
        },
        mounted(){
            var speed = (isMobile.phone) ? 0 : 150;
            var h1 = document.querySelector('.lottery h1 img');
            var h2 = document.querySelector('.lottery h2');
            var h3 = document.querySelector('.lottery h3');
            var box = document.querySelector('.lottery .choose_block');
            var gbox = document.querySelector('.lottery .gold_box img');
            var pbox = document.querySelector('.lottery .purple_box img');
            var formTween = new TimelineMax({ paused: true, delay: .55 });
            var step1 = TweenMax.to(box, .5,{
                opacity: 1
            });
            var step2 = TweenMax.to([gbox, pbox], .5,{
                opacity: 1,
                x: 0,
            });
            formTween.add(step1);
            formTween.add(step2);

            TweenMax.set([box, gbox, pbox], { opacity: 0 });
            TweenMax.set(gbox, { x: -50 });
            TweenMax.set(pbox, { x: 50 });
            h1.classList.add('form_kv');
            h1.classList.add('fadeInDown');
            h1.setAttribute('data-wow-duration', '1s');
            h2.classList.add('form_kv');
            h2.classList.add('fadeInDown');
            h2.setAttribute('data-wow-duration', '1s');
            h3.classList.add('form_kv');
            h3.classList.add('fadeInDown');
            h3.setAttribute('data-wow-duration', '1s');
            
            window.addEventListener('load', ()=> {
                // form進場
                var wow = new WOW({
                    boxClass: 'form_kv',
                    offset: speed,
                    delay: .1,
                    callback: function(box) {
                        formTween.play();
                    }
                }).init();
            });
        }
    }
</script>
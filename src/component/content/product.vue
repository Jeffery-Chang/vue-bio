<template>
    <section class="pdt_block">
        <div class="center">
            <h1><img src="../../img/pdt_title.png" alt=""></h1>
            <!--第一咖-->
            <div class="cut_block c_1">
                <p class="triggle"><img src="../../img/big_title_triangle.png" alt=""></p>
                <p class="gold"><img src="../../img/pdt_gold.png" alt=""></p>
                <p class="purple"><img src="../../img/pdt_purple.png" alt=""></p>
                <p class="bubble_gold"><img src="../../img/b_gold.png" alt=""></p>
                <p class="bubble_purple"><img src="../../img/b_purple.png" alt=""></p>
            </div>
            <!--第二咖-->
            <div class="cut_block c_2" style="display:none;">
                <p class="triangle"><img src="../../img/patent_pdt.png" alt=""></p>
                <p class="board_gold">
                    <img src="../../img/pdt_gold_board.png" alt="">
                    <a :href="gUrl" target="_blank" class="gold"><span class="flash"></span>立即購買</a>
                </p>
                <p class="board_purple">
                    <img src="../../img/pdt_purple_board.png" alt="">
                    <a :href="pUrl" target="_blank" class="purple"><span class="flash"></span>立即購買</a>
                </p>
            </div>
            <!--for mobile-->
            <div class="m_pdtBlock">
                <!--金色-->
                <div class="gold_block">
                    <!--介紹-->
                    <div class="des">
                        <p class="pdt">
                            <img src="../../img/pdt_gold.png" alt="">
                        </p>
                        <div class="tt_box">
                            <p><img src="../../img/m_pdt_name_gold.png" alt=""></p>
                            <a href="" class="btn gold" @click.prevent.self="disImg($event, 'gold');">瞭解更多</a>
                        </div>
                    </div>
                    <!--要打開的-->
                    <div class="open">
                        <a :href="gUrl" target="_blank"><img src="../../img/m_pdt_des_gold.png" alt=""></a>
                    </div>
                </div>
                <!--紫色-->
                <div class="purple_block">
                    <!--介紹-->
                    <div class="des">
                        <p class="pdt">
                            <img src="../../img/pdt_purple.png" alt="">
                        </p>
                        <div class="tt_box">
                            <p><img src="../../img/m_pdt_name_purple.png" alt=""></p>
                            <a href="" class="btn purple" @click.prevent.self="disImg($event, 'purple');">瞭解更多</a>
                        </div>
                    </div>
                    <!--要打開的-->
                    <div class="open">
                        <a :href="pUrl" target="_blank"><img src="../../img/m_pdt_des_purple.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import WOW from 'wow.js'
    import isMobile from 'ismobilejs'
    import TweenMax from "gsap"
    export default {
        name: 'product',
        data () {
            return {
                gUrl: 'https://goo.gl/jzSrz2',
                pUrl: 'https://goo.gl/EBu9zs'
            }
        },
        methods:{
            disImg: function(evt, type){
                evt.preventDefault();
                var ctrlBox = (type === 'gold') ? document.querySelectorAll('.pdt_block .m_pdtBlock .open')[0] : document.querySelectorAll('.pdt_block .m_pdtBlock .open')[1];
                var refHeight = (type === 'gold') ? document.querySelectorAll('.pdt_block .m_pdtBlock .open img')[0].offsetHeight : document.querySelectorAll('.pdt_block .m_pdtBlock .open img')[1].offsetHeight;

                TweenMax.to(ctrlBox, .5,{
                    height: (ctrlBox.offsetHeight === 0) ? refHeight : 0 + 'px'
                });

                //(type === 'gold') ? gaclick('gold') :  gaclick('bounce');
            }
        },
        mounted(){
            window.addEventListener('load', ()=> {
                var title = document.querySelector('.pdt_block h1 img');
                title.classList.add('product_kv');
                title.classList.add('fadeInDown');
                title.setAttribute('data-wow-duration', '.5s');
                if(!isMobile.phone){
                    var speed = (isMobile.phone) ? 0 : 150;
                    var section1 = document.querySelector('.cut_block.c_1');
                    var section2 = document.querySelector('.cut_block.c_2');
                    var pdtIcon = document.querySelector('.pdt_block .triggle img');
                    var gold = document.querySelector('.pdt_block .gold img');
                    var goldBubble = document.querySelector('.pdt_block .bubble_gold img');
                    var goldBoard = document.querySelectorAll('.cut_block.c_2 .board_gold');
                    var purple = document.querySelector('.pdt_block .purple img');
                    var purpleBubble = document.querySelector('.pdt_block .bubble_purple img');
                    var purpleBoard = document.querySelectorAll('.cut_block.c_2 .board_purple');
                    var pdtTween = new TimelineMax({ paused: true, delay: .5 });
                    var step1 = TweenMax.to(pdtIcon, .5,{
                        scale: 1,
                        delay: .15
                    });
                    /*var step2 = TweenMax.to([gold, purple], .5,{
                        opacity: 1,
                        x: 0
                    });*/
                    var step3 = TweenMax.to([gold, purple, goldBubble, purpleBubble], .5,{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        delay: .15
                    });
                    var step4 = TweenMax.to(section1, .5,{
                        opacity: 0,
                        delay: .5,
                        onComplete: function(){
                            TweenMax.set(section1, { display: 'none' });
                            TweenMax.set(section2, { display: 'block' });
                        }
                    });
                    var step5 = TweenMax.to(section2, .5,{
                        opacity: 1
                    });
                    var step6 = TweenMax.to([goldBoard, purpleBoard], .5,{
                        opacity: 1,
                        x: 0
                    });
                    pdtTween.add(step1);
                    //pdtTween.add(step2);
                    pdtTween.add(step3);
                    pdtTween.add(step4);
                    pdtTween.add(step5);
                    pdtTween.add(step6);

                    TweenMax.set(pdtIcon, { scale: 0 });
                    TweenMax.set([gold, purpleBoard], { opacity: 0, x: -50 });
                    TweenMax.set([purple, goldBoard], { opacity: 0, x: 50 });
                    TweenMax.set(goldBubble, { opacity: 0, x: 75, y: 75, scale: .5 });
                    TweenMax.set(purpleBubble, { opacity: 0, x: -100, y: -100, scale: .5 });
                    TweenMax.set(section2, { opacity: 0 });

                    // product進場
                    var wow = new WOW({
                        boxClass: 'product_kv',
                        offset: speed,
                        delay: .1,
                        callback: function(box) {
                            
                            pdtTween.play();
                        }
                    }).init();
                }else{
                    var gbox = document.querySelector('.pdt_block .gold_block');
                    var pbox = document.querySelector('.pdt_block .purple_block');
                    var gimgbox = document.querySelectorAll('.pdt_block .m_pdtBlock .open')[0];
                    var pimgbox = document.querySelectorAll('.pdt_block .m_pdtBlock .open')[1];

                    gbox.classList.add('product_kv_g');
                    gbox.classList.add('fadeInDownSmall');
                    gbox.setAttribute('data-wow-duration', '.5s');
                    pbox.classList.add('product_kv_p');
                    pbox.setAttribute('data-wow-duration', '.5s');
                    pbox.classList.add('fadeInDownSmall');

                    TweenMax.set([gimgbox, pimgbox], { height: 0, overflow: 'hidden' });

                    // product進場
                    var wow = new WOW({
                        boxClass: 'product_kv',
                        offset: 0,
                        delay: .1,
                        callback: function(box) {
                            
                        }
                    }).init();
                    var wow = new WOW({
                        boxClass: 'product_kv_g',
                        offset: 0,
                        delay: .1
                    }).init();
                    var wow = new WOW({
                        boxClass: 'product_kv_p',
                        offset: 0,
                        delay: .1
                    }).init();
                }
            });
        }
    }
</script>
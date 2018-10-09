<template>
    <section class="easy">
        <div class="center">
            <div class="say_con">
                <h1>
                <p><img src="../../img/benefit_title.png" alt=""></p>
                <span>運動的風氣越來越盛行，但大多數的人都忘了幫肌膚做有氧運動！<br>肌膚吸飽了新鮮空氣，不化妝也能充滿元氣與活力！
                </span></h1>
                <div class="vivien">
                    <img class="easy_kv fadeInLeft" src="../../img/benefit_vivien.png" alt="">
                </div>
            </div>
            <h2>
                <img src="../../img/benefit_highlight.png" alt="">
            </h2>
            <ul class="bubble_block">
                <li>
                    <p><img src="../../img/benefit_bubble_1.png" alt=""></p>
                </li>
                <li>
                    <p><img src="../../img/benefit_bubble_2.png" alt=""></p>
                </li>
                <li>
                    <p><img src="../../img/benefit_bubble_3.png" alt=""></p>
                </li>
                <li>
                    <p><img src="../../img/benefit_bubble_4.png" alt=""></p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import WOW from 'wow.js'
    import TweenMax from "gsap"
    export default {
        name: 'easy',
        data () {
            return {
                
            }
        },
        mounted(){
            var word = document.querySelectorAll('.easy h1 p img, .easy h1 span, .easy h2 img');
            var bubbleArr = document.querySelectorAll('.bubble_block li p');
            var bubble = [bubbleArr[3], bubbleArr[2], bubbleArr[1], bubbleArr[0]];

            // 文字跟泡泡做成動畫lite
            var wordTween = new TimelineMax({ paused: true });
            var step1 = TweenMax.staggerTo(word, .5, {
                opacity: 1,
                y: 0,
                delay: .5
            }, .2);
            var step2 = TweenMax.staggerTo(bubble, .5, {
                scale: 1
            }, .2);
            wordTween.add(step1);
            wordTween.add(step2);

            TweenMax.set(word, { y: -50, opacity: 0 });
            TweenMax.set(bubble, { scale: 0 });
            
            window.addEventListener('load', ()=> {
                new WOW({
                    boxClass: 'easy_kv',
                    offset: 200,
                    callback: function(box) {
                        wordTween.play();
                    }
                }).init();
            });
        }
    }
</script>
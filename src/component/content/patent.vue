<template>
    <section class="patent">
        <div class="center">
            <div class="text_block">
                <h1><img class="patent_kv_m fadeInDown" src="../../img/patent_title.png" alt=""></h1>
                <h2><img src="../../img/patent_topic_1.png" alt=""></h2>
                <h3>透過「全新碧歐斯 生物能量複合素」，<br>加強肌膚自我修復更新的能力；<br>生物成分極致活化，讓有效成分超導吸收。<p><img src="../../img/patent_highlight_word.png" alt=""></p>現在你知道，女神的秘密武器是什麼了吧<br></h3>
                <div class="video">
                    <a href=""><span class="icon-play"></span><img src="../../img/video.png" alt=""></a>
                </div>
            </div>
            <div class="pdt"><img class="patent_kv_pc fadeInRight" src="../../img/patent_pdt.png" alt=""></div>
        </div>
    </section>
</template>

<script>
    import WOW from 'wow.js'
    import isMobile from 'ismobilejs'
    export default {
        name: 'patent',
        data () {
            return {
                
            }
        },
        mounted(){
            var speed = (isMobile.phone) ? 0 : 150;
            var word = document.querySelectorAll('.text_block h1, .text_block h2, .text_block h3, .text_block .video');
            var boxName = (isMobile.phone) ? 'patent_kv_m' : 'patent_kv_pc';
            var video = document.querySelector('.text_block .video');
            
            TweenMax.set(word, { opacity: 0, y: -50 });
            
            window.addEventListener('load', ()=> {
                var wow = new WOW({
                    boxClass: boxName,
                    offset: speed,
                    delay: .5,
                    callback: function(box) {
                        TweenMax.staggerTo(word, .5, {
                            opacity: 1,
                            y: 0
                        }, .2, function(){
                            TweenMax.set(word, { clearProps:"all" });
                        });
                    }
                }).init();
            });
        }
    }
</script>
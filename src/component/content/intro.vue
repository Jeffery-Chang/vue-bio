<template>
    <section class="index">
        <h1>
            <p><img src="../../img/big_title_triangle.png" alt=""></p>
            <p><img src="../../img/big_title.png" alt=""></p>
        </h1>
        <div class="bubble_block">
            <p class="b_1"><img class="one" src="../../img/bubble.png" alt=""></p>
            <p class="b_2"><img class="one" src="../../img/bubble.png" alt=""></p>
            <p class="b_3"><img class="one" src="../../img/bubble.png" alt=""></p>
            <p class="b_4"><img class="two" src="../../img/bubble.png" alt=""></p>
            <p class="b_5"><img class="two" src="../../img/bubble.png" alt=""></p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'intro',
        data () {
            return {
                
            }
        },
        mounted(){
            var bubbleAll = document.querySelectorAll('.one, .two');
            var bubbleDelay = ['.6', '.8', '.7', '1', '.6'];
            var bubbleDuration = ['2', '1.75', '2.25', '2', '1.75'];
            window.addEventListener('load', ()=> {
                for (var i = 0; i < bubbleAll.length; i++) {
                    bubbleAll[i].classList.remove('one');
                    bubbleAll[i].classList.remove('two');
                    bubbleAll[i].style.animation = 'floatDown '+bubbleDuration[i]+'s ease '+bubbleDelay[i]+'s infinite';
                }
            });
        }
    }
</script>
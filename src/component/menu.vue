<template>
    <header :class="{ 'fixed' : menuHeader }">
        <div class="logo" @click="setPosition(0, 500);"><img src="../img/logo.png" alt=""></div>
        <nav class="pc_mu">
            <ul>
                <li @click="moveToPdt();"><a href="" @click.prevent.self>產品介紹</a></li>
                <li @click="openAct();"><a href="" @click.prevent.self>活動辦法</a></li>
                <li class="fb">
                    <a href="https://www.facebook.com/Bioessence.tw/?fref=ts" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="圖層_1" x="0px" y="0px" width="7.483px" height="16px" viewBox="0 0 7.483 16" enable-background="new 0 0 7.483 16" xml:space="preserve">
                            <g>
                                <path d="M7.442,0v2.758h-1.5c-0.447,0-0.731,0.122-0.871,0.365C4.969,3.285,4.929,3.569,4.929,3.955v1.257h2.555   L7.18,7.991H4.929V16H1.623V7.991H0V5.212h1.623V3.549c0-1.704,0.588-2.799,1.744-3.265C3.935,0.061,4.421,0,4.929,0H7.442z" />
                            </g>    
                        </svg>粉絲團
                    </a>
                </li>
            </ul>
        </nav>
        <nav class="mobile_mu">
            <div class="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <div class="menu">
                    <div class="con">
                        <ul>
                            <li @click="moveToPdt();"><a href="" @click.prevent.self>產品介紹</a></li>
                            <li @click="openAct();"><a href="" @click.prevent.self>活動辦法</a></li>
                            <li><a href="https://www.facebook.com/Bioessence.tw/?fref=ts" target="_blank">粉絲團</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import isMobile from 'ismobilejs'
    export default {
        name: 'menubar',
        data () {
            return {
                menuHeader: false
            }
        },
        created: function () {
            window.addEventListener('scroll', this.scroll);
        },
        mounted(){
            this.scroll();
        },
        methods: {
            scroll(){
                var winTop = window.scrollY || document.documentElement.scrollTop;
                this.menuHeader = (winTop > document.querySelector('.index').offsetHeight - 100) ? true : false;
                (this.menuHeader) ? document.querySelector('header').classList.add('show') : document.querySelector('header').classList.remove('show');
            },
            moveToPdt(){
                var pos = document.querySelector('.bg_2').offsetTop + document.querySelector('header').offsetHeight;
                this.$parent.scrollToY(pos, 500);
                if(isMobile.phone) document.querySelector('.menuToggle input').click();
            },
            openAct(){
                this.$store.commit('changeFG', {
                    type: 'actFG',
                    fg: true
                });
            },
            setPosition(TargetY, speed, easing){
                this.$parent.scrollToY(TargetY, speed, easing);
            }
        },
        destroyed: function () {
            window.removeEventListener('scroll', this.scroll);
        }
    }
</script>
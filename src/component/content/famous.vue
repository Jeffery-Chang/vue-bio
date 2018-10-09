<template>
    <section class="famous">
        <div class="center">
            <h1><img src="../../img/commend_title.png" alt=""></h1>
            <h2>跟著達人們一起，讓肌膚動起來</h2>
            <div class="switch_block">
                <a href="" class="pre"><span class="icon-arrow"></span></a>
                <div class="hidden">
                    <ul>
                        <swiper :options="swiperOption" ref="mySwiper" v-if="isPC">
                            <swiper-slide v-for="item in swiperList" :key="item.name">
                                <li>
                                    <a :href="item.href" target="_blank">
                                        <p class="photo"><img :src="item.img" alt=""><span v-if="!item.isShow">Coming soon</span></p>
                                        <div class="tt">
                                            <span>{{ item.title }}</span>
                                            <p class="name">{{ item.name }}</p>
                                            <p class="shortWord" v-html="item.shortWord"></p>
                                            <b></b>
                                        </div>
                                    </a>
                                </li>
                            </swiper-slide>
                        </swiper>
                        <li v-for="item in swiperList" :key="item.name" v-if="!isPC">
                            <a :href="item.href" target="_blank">
                                <p class="photo"><img :src="item.img" alt=""><span v-if="!item.isShow">Coming soon</span></p>
                                <div class="tt">
                                    <span>{{ item.title }}</span>
                                    <p class="name">{{ item.name }}</p>
                                    <p class="shortWord" v-html="item.shortWord"></p>
                                    <b></b>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="" class="next"><span class="icon-arrow"></span></a>
            </div>
        </div>
    </section>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import isMobile from 'ismobilejs'
    export default {
        name: 'famous',
        data () {
            return {
                isPC: true,
                swiperList: [
                    { 
                        href: 'https://zh.cchan.tv/watch/fff8b7d0a1a94d34a31ad3d884c71e4d/', title: '「凱文瘋了」',
                        img: require('../../img/commend_pic_01.png'), 
                        name: '美容教父也動起來',
                        shortWord: '抗初老必看，<br>讓你突破保養瓶頸',
                        isShow: true
                    },
                    { 
                        href: 'http://www.elle.com.tw/beauty/news/bio_1129', title: 'Elle',
                        img: require('../../img/commend_pic_02.png'), 
                        name: '編輯部推薦',
                        shortWord: '開架必收的保養好物！',
                        isShow: true
                    },
                    { 
                        href: 'https://www.facebook.com/permalink.php?story_fbid=957731794382547&id=110678052421263', title: '人氣部落客',
                        img: require('../../img/commend_pic_05.png'), 
                        name: '芳瑜',
                        shortWord: '冬天肌膚也能充滿水光',
                        isShow: true
                    },
                    { 
                        href: 'https://www.facebook.com/sylwang/posts/2010701032273698', title: '人氣部落客',
                        img: require('../../img/commend_pic_04.png'), 
                        name: 'Sylvia',
                        shortWord: '法令紋和淚溝都變淡，<br>素顏也透亮',
                        isShow: true
                    },
                    { 
                        href: 'https://www.facebook.com/MandyGrass.tw/posts/1609208789126122', title: '人氣部落客',
                        img: require('../../img/commend_pic_06.png'), 
                        name: '夏曼娣',
                        shortWord: '保濕度提升，<br>妝更服貼',
                        isShow: true
                    },
                    { 
                        href: 'javascript: void(0);', title: '人氣部落客',
                        img: require('../../img/commend_pic_03.png'), 
                        name: 'Angelina',
                        shortWord: '',
                        isShow: false
                    }
                ],
                swiperOption:{
                    speed: 500,
                    autoplay: true,
                    autoplay:{
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    loop: true,
                    navigation:{
                        nextEl: '.next',
                        prevEl: '.pre',
                    }
                }
            }
        },
        components:{
            swiper,
            swiperSlide,
        },
        mounted(){
            if(isMobile.phone) this.isPC = false;
            
            window.addEventListener('load', ()=> {
                
            });
        }
    }
</script>
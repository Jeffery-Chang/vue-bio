<template>
    <div class="wrap">
        <!--主視覺-->
        <intro></intro>
        <!--==============最輕鬆的有氧運動==============-->
        <easy></easy>
        <!--==============有氧專利==============-->
        <patent></patent>
        <!--==============名人推薦==============-->
        <famous></famous>
        <div class="bg_2">
            <!--==============產品介紹==============-->
            <product></product>
            <!--==============有氧課程報名==============-->
            <lottery></lottery>
        </div>
    </div>
</template>

<script>
    import intro from './content/intro.vue';
    import easy from './content/easy.vue';
    import patent from './content/patent.vue';
    import famous from './content/famous.vue';
    import product from './content/product.vue';
    import lottery from './content/lottery.vue';
    export default {
        name: 'wrap',
        data () {
            return {
                
            }
        },
        components: {
            intro,
            easy,
            patent,
            famous,
            product,
            lottery
        },
        methods: {
            openForm(evt){
                this.$emit('changeFG', {
                    type: evt,
                    fg: true
                });
            }
        }
    }
</script>
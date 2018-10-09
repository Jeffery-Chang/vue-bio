import Vue from 'vue'
import Vuex from 'vuex'
import App from './main.vue'
import './img/favicon.ico'
import './img/600x315.png'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: false,
    state: {
        loadFG: false,
        actFG: false,
        goldFG: false,
        purpleFG: false,
        priFG: false,
        apiData:{
            name: '',
            phone: '',
            addr: '',
            type: ''
        }
    },
    mutations:{
        changeFG(state, data){
            state[data.type] = data.fg;
        },
        updataAPIdata(state, data){
            state.apiData[data.type] = data.val;
        },
        clearAPIdata(state, deep){
            state.apiData.name = state.apiData.phone = state.apiData.addr = '';
            if(deep) state.apiData.type = '';
        }
    },
    getters:{
        setFG: state => (state.loadFG   == false ||
                         state.actFG    == true  ||
                         state.goldFG   == true  ||
                         state.purpleFG == true  ||
                         state.priFG    == true) ? true : false
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    store
})
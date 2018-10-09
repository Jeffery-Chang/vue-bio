<template>
    <div id="pop">
        <transition name="fade">
            <div class="pop" v-show="popData.goldFG">
                <section class="gold">
                    <a href="" class="close" @click.prevent.self="popChgFG('goldFG', false);"></a>
                    <div class="border">
                        <!--填表單-->
                        <div class="form" v-show="goldStep == 1">
                            <h1>加入肌膚的有氧教室</h1>
                            <h2>就有機會獲得<b>Bio金萃黃金比例雙精華</b><br>一起抵抗初老，回復透亮美肌</h2>
                            <ul>
                                <li><span>姓名</span>
                                    <input type="text" v-model="name">
                                </li>
                                <li><span>手機</span>
                                    <input type="tel" placeholder="同一組手機號碼僅限參加一次" v-model="phone">
                                    <p>*同一組手機號碼僅限參加一次</p>
                                </li>
                                <li><span>地址</span>
                                    <input type="text" placeholder="中獎後依填寫地址寄送，請確實填寫" v-model="addr">
                                    <p>*中獎後依填寫地址寄送，請確實填寫</p>
                                </li>
                            </ul>
                            <p>
                                <input type="checkbox" class="checkbox-custom" name="checkbox" id="checkbox" />
                                <label for="checkbox" class="checkbox-custom-label">已詳閱 <a href="" @click.prevent.self="popChgFG('priFG', true);" style="text-decoration: underline;">約定事項</a> 並且同意遵守所有規定。</label>
                            </p>
                            <a href="" class="btn reset" @click.prevent.self="clearAPI">重新填寫</a>
                            <a href="" class="btn send_gold" @click.prevent.self="sendAPI('gold');">確認送出</a>
                        </div>
                        <!--完成-->
                        <div class="success" v-show="goldStep == 2">
                            <h1>成功送出資料！</h1>
                            <h2>感謝參加Bio essence<br>肌膚有氧教室活動<span><b><font>分享到個人Facebook</font></b><br><b><font>中獎機率更大喔！</font></b></span></h2>
                            <a href="" class="btn send_fb" @click.prevent.self="shareFB('?back=fb');">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="圖層_1" x="0px" y="0px" width="7.483px" height="16px" viewBox="0 0 7.483 16" enable-background="new 0 0 7.483 16" xml:space="preserve">
                                    <g>
                                        <path d="M7.442,0v2.758h-1.5c-0.447,0-0.731,0.122-0.871,0.365C4.969,3.285,4.929,3.569,4.929,3.955v1.257h2.555   L7.18,7.991H4.929V16H1.623V7.991H0V5.212h1.623V3.549c0-1.704,0.588-2.799,1.744-3.265C3.935,0.061,4.421,0,4.929,0H7.442z" />
                                    </g>
                                </svg>分享</a>
                        </div>
                        <!--已填寫過-->
                        <div class="fail" v-show="goldStep == 3">
                            <h1>你已參與過抽獎囉！</h1>
                            <h2>(同組手機號碼僅限參加一次)</h2>
                            <a href="" class="btn reset" @click.prevent.self="goldStep = 1">返回</a>
                        </div>
                    </div>
                    <div class="pdt"><img src="../img/pop_pdt_gold.png" alt=""></div>
                </section>
            </div>
        </transition>
        <transition name="fade">
            <div class="pop" v-show="popData.purpleFG">
                <section class="purple">
                    <a href="" class="close" @click.prevent.self="popChgFG('purpleFG', false);"></a>
                    <div class="border">
                        <!--填表單-->
                        <div class="form" v-show="purpleStep == 1">
                            <h1>加入肌膚的有氧教室</h1>
                            <h2>就有機會獲得<b>Bio金萃黃金比例雙精華</b><br>一起抵抗初老，回復透亮美肌</h2>
                            <ul>
                                <li><span>姓名</span>
                                    <input type="text" v-model="name">
                                </li>
                                <li><span>手機</span>
                                    <input type="tel" placeholder="同一組手機號碼僅限參加一次" v-model="phone">
                                    <p>*同一組手機號碼僅限參加一次</p>
                                </li>
                                <li><span>地址</span>
                                    <input type="text" placeholder="中獎後依填寫地址寄送，請確實填寫" v-model="addr">
                                    <p>*中獎後依填寫地址寄送，請確實填寫</p>
                                </li>
                            </ul>
                            <p>
                                <input type="checkbox" class="checkbox-custom" name="checkbox" id="checkbox_2" />
                                <label for="checkbox_2" class="checkbox-custom-label">已詳閱 <a href="" @click.prevent.self="popChgFG('priFG', true);"  style="text-decoration: underline;">約定事項</a> 並且同意遵守所有規定。</label>
                            </p>
                            <a href="" class="btn reset" @click.prevent.self="clearAPI">重新填寫</a>
                            <a href="" class="btn send_purple" @click.prevent.self="sendAPI('purple');">確認送出</a>
                        </div>
                        <!--完成-->
                        <div class="success" v-show="purpleStep == 2">
                            <h1>成功送出資料！</h1>
                            <h2>感謝參加Bio essence<br>肌膚有氧教室活動<span><b><font>分享到個人Facebook</font></b><br><b><font>中獎機率更大喔！</font></b></span></h2>
                            <a href="" class="btn send_purple" @click.prevent.self="shareFB('?back=fb');">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="圖層_1" x="0px" y="0px" width="7.483px" height="16px" viewBox="0 0 7.483 16" enable-background="new 0 0 7.483 16" xml:space="preserve">
                                    <g>
                                        <path d="M7.442,0v2.758h-1.5c-0.447,0-0.731,0.122-0.871,0.365C4.969,3.285,4.929,3.569,4.929,3.955v1.257h2.555   L7.18,7.991H4.929V16H1.623V7.991H0V5.212h1.623V3.549c0-1.704,0.588-2.799,1.744-3.265C3.935,0.061,4.421,0,4.929,0H7.442z" />
                                    </g>
                                </svg>分享</a>
                        </div>
                        <!--已填寫過-->
                        <div class="fail" v-show="purpleStep == 3">
                            <h1>你已參與過抽獎囉！</h1>
                            <h2>(同組手機號碼僅限參加一次)</h2>
                            <a href="" class="btn reset" @click.prevent.self="purpleStep = 1">返回</a>
                        </div>
                    </div>
                    <div class="pdt"><img src="../img/pop_pdt_purple.png" alt=""></div>
                </section>
            </div>
        </transition>
        <transition name="fade">
            <div class="activity" v-show="popData.actFG">
                <a href="" class="close" @click.prevent.self="popChgFG('actFG', false);"></a>
                <section>
                    <div class="center">
                        <h1>Bio essence 肌膚有氧運動</h1>
                        <h2>活動登錄抽獎活動辦法</h2>
                        <div class="item_block">
                            <span>活動方式</span>
                            <p>即日起1/14止，參與【Bio essence肌膚有氧運動】活動登錄抽獎活動，就有機會抽中好禮！</p>
                        </div>
                        <div class="item_block">
                            <span>活動期間</span>
                            <p>2017年12月8日至2018年1月14日,將於2018年1月25日公布在活動網站。</p>
                        </div>
                        <div class="item_block">
                        <span>贈品</span>
                            <ul class="prize">
                                <li>
                                    <p><img src="../img/pop_pdt_gold.png" alt=""></p>
                                    <span>BIO金萃黃金比例雙精華<b>30名</b></span>
                                </li>
                                <li>
                                    <p><img src="../img/pop_pdt_purple.png" alt=""></p>
                                    <span>BIO膠原彈潤超澎精華霜<b>30名</b></span>
                                </li>
                            </ul>
                        </div>
                        <div class="item_block">
                            <span>參加資格</span>
                            <ul class="list">
                                <li>本次活動僅限於寄送至台灣、金門、澎湖、馬祖等地區，主辦單位不處理郵寄獎品至海外地區之事宜。</li>
                                <li>一組手機號碼僅限抽獎一次。</li>
                                <li>若有贈品寄送或活動相關問題，請洽客服信箱或客服電話。
                                    <br>(客服專線 02-8712-8807 E-mail: beautytw@bioessence.com.sg)</li>
                            </ul>
                        </div>
                        <div class="item_block">
                            <span>贈品寄送</span>
                            <ul class="list">
                                <li>獎品在郵寄或運送過程中，所造成的毀壞、遲遞、錯遞或遺失，及所有獎品送出後之使用與維修，主辦單位恕不負責。</li>
                                <li>中獎者同意主辦單位對所有因使用或領取獎項之後果無須負責。</li>
                                <li>中獎者不得要求更改獎項或兌換現金，不得轉售獎項、獎品。</li>
                                <li>主辦單位保有最後中獎審核之權利。</li>
                                <li>其他未盡事宜，悉依主辦單位相關規定。</li>
                                <li>主辦單位擁有隨時取消、終止、修改或暫停本活動之權利，無須作事前通知，亦有權對本活動之所有事宜作出解釋或裁決。</li>
                                <li>主辦單位將依照於活動結束後填寫的基本資料寄送贈品。</li>
                                <li>請慎重填寫個人資料，若填寫不完整或不正確，無法符合本活動參加資格，將自動取消其得獎資格，並且不接受更改。</li>
                                <li>贈品或贈品憑證一律以掛號郵寄方式寄出，若因資料填寫錯誤，如：姓名/地址不正確，造成無法寄送或無人招領時，視同放棄得獎機會，贈品若遭退回、冒領、遺失者，恕不另行補發。</li>
                                <li>本活動不得重複得獎。若姓名、手機、地址無效，主辦單位有權將參加名額刪除。</li>
                                <li>本活動如有任何因電腦、網路、電話、技術或其他不可歸責於主辦單位之事由，使參與本活動者所登錄之資料有遺失、錯誤、無法辨識或毀損所導致資料無效之情況，主辦單位不負任何法律責任，參與本活動者或得獎者亦不得因此異議。</li>
                                <li>得獎者應依政府規定繳納所得稅並辦理扣繳手續。依中華民國稅法規定，機會中獎獎項價值超過新台幣二萬元，中獎者須支付10%機會中獎所得稅，不願繳交稅金者視同放棄得獎權利；獎項價值超過新台幣一千元者，主辦單位亦依法開立個人綜合所得稅憑證，以利中獎人申報之用。若中獎者為非本國居民則按給付全額扣取20%稅款。檢附之相關文件不全、有務和造假者，該中獎者應負相關法律責任，並須繳回已領之獎項。</li>
                                <li>本活動因故無法進行時，主辦單位有隨時修正、暫停或終止本活動之權利，並不另行公告通知。</li>
                                <li>對於透過任何不當方式進行活動者，主辦單位將保留取消其相關活動權益。</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </transition>
        <transition name="fade">
            <div class="activity private" v-show="popData.priFG">
            <a href="" class="close" @click.prevent.self="popChgFG('priFG', false);"></a>
            <section>
                <div class="center">
                    <h2>隱私權條款</h2>
                    <article>
                        歡迎您瀏覽使用本網站，依沃盛有限公司（以下稱「本公司」）隱私權保護政策與相關法令之規定，請您於填寫個人資料前，務必詳讀下列條款內容。若您勾選「同意」，即表示您同意遵守下列條款，並同意本公司依下列條款蒐集、處理、使用您於本網站提供之個人資料。
                    </article>
                    <div class="item_block">
                        <ul class="list">
                            <li>
                                本公司因舉辦「Bio essence ─ 肌膚有氧運動 活動登錄抽獎」，為活動後續贈獎相關聯繫，需請您提供以下個人資料：姓名、聯絡方式 (包括電話號碼與居住地址) 或其他得以直接或間接識別您個人之資料。
                            </li>
                            <li>
                                您所提供的個人資料，將僅於活動期間（2017年12月8日至2018年1月31日）做為本公司通知&#060; Bio essence ─ 肌膚有氧運動 活動登錄抽獎 &#062;領獎之確認身份、與您進行聯絡用，不會用作其它用途。活動結束後(2018年1月14日)，所有個人資料將以完整刪除不作他用。
                            </li>
                            <li>
                                個人資料利用之地區：台灣、金門、澎湖、馬祖地區。
                            </li>
                            <li>
                                個人資料利用之對象及方式：由執行本活動時之必要人員利用之，利用人員須依執行本活動作業所必要方式利用此個人資料。
                            </li>
                            <li>
                                您可自由選擇是否提供本公司您的個人資料，若您不願提供個人資料，仍可造訪本網站部分內容，但可能無法使用網站中特定服務等功能，敬請諒察。
                            </li>
                            <li>
                                若您所提供之個人資料，經檢舉或本公司發現不足以確認您的身分真實性或有冒用、盜用、資料不實等情形，本公司有權暫時停止提供對您的服務。
                            </li>
                            <li>
                                您瞭解此一同意符合個人資料保護法及相關法規之要求，具有書面同意本公司蒐集、處理及利用您的個人資料之效果。
                            </li>
                            <li>
                                依個人資料保護法第三條規定得行使之權利及方式：
                                <br> 活動參與者於身份獲確認後，得向透過Bio essence客服信箱或電話聯繫(客服專線 02-8712-8807 E-mail: beautytw@bioessence.com.sg
                                <br> (1) 提出申請，以查詢、閱覽、製給複製本；或補充／更正、請求停止蒐集、處理、利用或刪除個人資料內容之一部或全部。（註：參加人申請查詢、閱覽、製給複製本時，將酌收必要成本費用。）
                                <br> (2) 參與者填寫本活動參與所須個人資料後，以任何方式遞送至「沃盛有限公司」收執時，均視為已同意提供予「沃盛有限公司」辦理本活動之特定目的必要範圍內處理及利用；此外，參與者可決定是否填寫相關之個人資料欄位，若參加者不填寫相關欄位時，「沃盛有限公司」則於決定是否符合參與本活動之資格時，擁有自行判斷之權利。
                                <br> (3) 保護本活動參與者資料之安全措施：「沃盛有限公司」將依據相關法令之規定及業已建構之完善措施，保障本活動參與者個人資料之安全。
                            </li>
                        </ul>
                    </div>
                    <h2>隱私權保護政策修訂</h2>
                    <article>為因應社會環境及法令的變遷與科技的進步，為保障客戶個人資料安全及隱私，「沃盛有限公司」得隨時修訂本政策，並將儘速更新與公告。</article>
                </div>
            </section>
        </div>
        </transition>
    </div>
</template>

<script>
    import isMobile from 'ismobilejs'
    import v from 'validator'
    export default {
        name: 'pop',
        data () {
            return {
                popData: this.$store.state,
                goldStep: 1,
                purpleStep: 1
            }
        },
        computed: {
            name: {
                get() { return this.$store.state.apiData.name },
                set(value) { 
                    this.$store.commit('updataAPIdata', {
                        type: 'name',
                        val: value
                    });
                }
            },
            phone: {
                get() { return this.$store.state.apiData.phone },
                set(value) { 
                    this.$store.commit('updataAPIdata', {
                        type: 'phone',
                        val: value
                    });
                }
            },
            addr: {
                get() { return this.$store.state.apiData.addr },
                set(value) { 
                    this.$store.commit('updataAPIdata', {
                        type: 'addr',
                        val: value
                    });
                }
            }
        },
        methods:{
            popChgFG(evt, fg){
                this.$store.commit('changeFG', {
                    type: evt,
                    fg: fg
                });
            },
            shareFB(url, track){
                var fb_url = (isMobile.phone) ? 'http://m.facebook.com/sharer.php?u=' : 'http://www.facebook.com/sharer.php?u=';
                var fbBack_url = (track) ? track : '';
                var share_u;
                share_u = location.href + fbBack_url;
                window.open(fb_url + encodeURIComponent(share_u), 'sharer', 'toolbar=0,status=0,width=656,height=436');
            },
            clearAPI(){
                this.$store.commit('clearAPIdata', false);
            },
            sendAPI(type) {
                var err = '';
                var step = type + 'Step';
                const read = document.querySelector('.'+type+' input[type=checkbox]').checked;
                if(v.isEmpty(this.name)) err += "請填寫您的姓名\n";
                if(!v.isMobilePhone(this.phone, 'zh-TW')) err += "請填寫10碼的手機號碼(格式 0912345678)\n";
                if(v.isEmpty(this.addr)) err += "請填寫您的地址\n";
                if(!read) err += "請詳閱個人資料授權並同意";
                
                if(err.length > 0) {
                    alert(err);
                    return;
                }
                
                setTimeout(()=>{
                    this.$data[step] = 2;
                    this.$store.commit('clearAPIdata', true);
                }, 1000);
                
                /*setTimeout(()=>{
                    this.$data[step] = 3;
                }, 1000);*/
            }
        }
    }
</script>
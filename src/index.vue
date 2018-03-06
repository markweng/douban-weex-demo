<template>
        <div>
            <text class="contentText">{{header_text}}</text>

            <list class="list" @loadmore="fetch" loadmoreoffset="10">
                <cell class="cell" v-for="model in lists">
                    <div class="cellcontent">
                        <div class="imagebox">
                            <image class="image" :src="model.images.medium"></image>
                        </div>

                       <div class="textcontent">

                         <text class="titletext">{{model.title}}</text>
                         <text class="textdtl">评分：{{model.rating.average}}</text>
                         <text class="textdtl">导演：{{model.directors[0].name}}</text>
                         <text class="textdtl">主演：{{model.casts[0].name}} / {{model.casts[1].name}}</text>

                       </div>
                        <div class="buy">
                            <div class="contentbuy">
                                <text class="textbuy">{{parseInt(model.collect_count/10000)}}万人看过</text>
                                <text class="textbuy">购买</text>

                            </div>
                        </div>
                    </div>
                </cell>
            </list>
        </div>
</template>

<script>
    let stream = weex.requireModule('stream')
    let modal = weex.requireModule('modal')
    let navigator = weex.requireModule('navigator')
    let globalEvent = weex.requireModule('globalEvent');
    let apiHost = "http://api.douban.com/v2/movie/top250"
    export default {
        data () {
            return {
                header_text:"hahahhahahh",
                lists:[]
            }
        },
        methods: {
            getData (callback){
                return stream.fetch({
                    method: 'GET',
                    type: 'jsonp',
                    url: apiHost
                }, callback)
            },
            getAllData (){

                this.getData(res => {

                        this.header_text = res.data.title,
                        this.lists = res.data.subjects;

                })
            }
        },
        created () {
            this.getAllData();
        },
        mounted()
        {

        },
        components: {},

    }
</script>

<style scoped>

    .cellcontent {
       flex-direction: row;

    }
    .textcontent {
        margin-top: 30px;
        margin-left: 0px;
        margin-right: 30px;
        flex: auto;
        flex-wrap: wrap;

    }
    .titletext {

        font-size: 28px;
        color: black;
        text-align: left;
    }
    .contentText {
        font-size: 28px;
        color: black;
        text-align: center;
    }
    .textdtl {
        font-size: 20px;
        color: #999999;
        text-align: left;
        padding: 5px;
    }
    .imagebox {
        margin: 30px;
    }
    .image {
        width: 162px;
        height: 240px;
        background-color: #afddff;
    }
    .buy {
        justify-content: center;
        right: 30px;
        width: 150px;
        /*background-color: #afddff;*/
        margin-top: 30px;
        /*margin-left: 10px;*/


    }
    .contentbuy {
        background-color: red;
        width: 150px;
        border-radius: 10px;

    }
    .textbuy {
        font-size: 20px;
        color: white;
        text-align: center;
        padding: 5px;

    }
</style>
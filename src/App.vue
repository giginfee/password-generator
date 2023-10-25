<template>
    <div class="form-div-parent">
        <div class="form-div" >
            <p class="label">GENERATE RELIABLE PASSWORD</p>
            <range @setLen="getLen"/>
            <input @click="showResult" type="button" id="generate_button" value="Show">
            <result :result="result" @getK="showSnackbar"/>
        </div>
    </div>
    <div  class="bg-image">
    </div>
    <snackbar :k="k"/>

</template>

<script>
import Result from "@/components/Result.vue";
import Range from "@/components/Range.vue";
import Snackbar from "@/components/Snackbar.vue";
export default {
    name: "App",
    components:{
        Result,Range,Snackbar
    },
    data(){
        return{
            result:"",
            length:"5",
            datalist:[5,10,15,20],
            k:0
        }
    },
    methods: {
        showResult() {
            let resultDiv = document.getElementById("result")
            resultDiv.classList += " pointer"
            let len = parseInt(this.length)
            this.result = this.generatePassword(len)
        },

        generatePassword(len) {
            let res = ""
            let symbArr = this.getSymbolArr()
            for (let i = 1; i <= len; i++) {
                res += symbArr[this.getRandomInt(1, symbArr.length - 1)]
            }
            return res
        },

        getSymbolArr() {
            let arr = []
            for (let i = 33; i <= 125; i++) {
                if ([34, 39, 44, 46, 58, 59, 96, 124].indexOf(i) === -1) {
                    arr.push(String.fromCharCode(i))
                }
            }
            return arr
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        ,
        getLen(len){
            this.length=len
        },
        showSnackbar(k){
            this.k=k
            console.log("showSnackbar",this.k)
            Snackbar.methods.showSnackbar(this.k)
        }

    }
}
</script>

<style >
    @import '/public/style.css';
</style>
<template>
    <div @click="copyToClipboard" title="Click to copy" id="result">{{result}}</div>
</template>

<script>
export default {
    props:{
        result:{
            type: String,
            required:true
        }
    },
    data(){
        return{
            k:0
        }
    },

    methods:{
        copyToClipboard(){
            if (this.result!=="") {
                navigator.clipboard.writeText(this.result);
                this.$emit('getK',this.k)
                this.k++
            }
        }
    },
    name: "Result"
}
</script>

<style scoped>

</style>
<template>
    <div class="length">Password length:
        <span id="len">{{length}}</span></div>
    <input v-model="length" @input="$emit('setLen',length)" name="len_input" id="len_input" type="range" step=1 min=5 max=20 list="values">
    <datalist id="values">
        <option value="0" label="5"></option>
        <option value="25" label="10"></option>
        <option value="50" label="15"></option>
        <option value="75" label="20"></option>
    </datalist>
</template>

<script>
export default {
    name: "Range",
    data(){
        return{
            length:"5"
        }

    }
}
</script>

<style scoped>

</style>
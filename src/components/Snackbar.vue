<template>
    <div id="snack"></div>
</template>

<script>
export default {
    name: "Snackbar",

    methods:{
        showSnackbar(k) {
            let message="Copied to clipboard"
            console.log(k)
            for(let i =0; i<k; i++)
                document.getElementById(`snackbar${i}`)?.remove();
            console.log(document.getElementById("snack").innerHTML)
            document.getElementById("snack").innerHTML+=`<div class="snackbar"  id=\"snackbar${k}\"> ${message}</div>`;

            let snackbar = document.getElementById(`snackbar${k}`);
            snackbar.className += " show";

            setTimeout(function(){ snackbar.className = snackbar?.className.replace("show", "")
            }, 1250);
        }
    }
}
</script>

<style scoped>

</style>
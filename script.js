let lenInput=document.getElementById("len_input")
let generateButton=document.getElementById("generate_button")
let resultDiv=document.getElementById("result")


resultDiv.addEventListener("click",()=>{
    if (resultDiv.innerText!=="")
        navigator.clipboard.writeText(resultDiv.innerText);}
)
lenInput.addEventListener("input",()=>
    document.getElementById("len").innerText=lenInput.value)

generateButton.addEventListener("click",showResult)

function showResult(){
    resultDiv.classList+=" pointer"

    let len= parseInt(document.getElementById("len").innerText)
    document.getElementById("result").innerText=generatePassword(len)

}

function generatePassword(len){
    let res=""
    let symbArr=getSymbolArr()
    for(let i=1;i<=len;i++){
        res+=symbArr[getRandomInt(1,symbArr.length-1)]
    }
return res
}

function getSymbolArr(){
    let arr=[]
    for(let i=33;i<=125;i++){
        if([34,39,44,46,58,59,96,124].indexOf(i)===-1) {
            arr.push(String.fromCharCode(i))
        }    }
    return arr
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


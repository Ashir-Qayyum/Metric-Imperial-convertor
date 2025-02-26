
const inp = document.getElementById("inn")
let num = inp.value

const l = document.getElementById("len")
const v = document.getElementById("vol")
const m = document.getElementById("mass")

const b = document.getElementById("b1")

b.addEventListener("click", function(){
    const inp = document.getElementById("inn")
let num = inp.value
if(num!=""){
    l.textContent = `${num} meter = ${(num*3.28084).toFixed(2)} feet  |  ${num} feet = ${(num*0.3048).toFixed(2)} meters`
    v.textContent = `${num} liters = ${(num*0.264172).toFixed(2)} gallons  |  ${num} gallons = ${(num*3.78541).toFixed(2)} liters`
    m.textContent = `${num} kilos = ${(num*2.20462).toFixed(2)} pounds  |  ${num} pounds = ${(num*0.453592).toFixed(2)} kilos`
    

}
else{
    alert("Please enter the value to be converted!")
}
})
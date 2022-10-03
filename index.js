/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convrtBtn = document.getElementById("convrt-btn")
const inputVal = document.getElementById("input-val")
let mtrVal = document.getElementById("mtr-val")
let ltrVal = document.getElementById("ltr-val")
let kgVal = document.getElementById("kg-val")

convrtBtn.addEventListener("click", function(){
    let unitVal = inputVal.value
    let convrtFt = Number(unitVal).toFixed(2) * 3.281
    let convrtMt = Number(unitVal).toFixed(2) * 0.304
    let convrtGl = Number(unitVal).toFixed(2) * 0.264
    let convrtLt = Number(unitVal).toFixed(2) * 3.785
    let convrtLb = Number(unitVal).toFixed(2) * 2.2
    let convrtKg = Number(unitVal).toFixed(2) * 0.453
    mtrVal.innerHTML = `${unitVal} meters = ${Number(convrtFt).toFixed(2)} feet | ${unitVal} feet = ${Number(convrtMt).toFixed(2)} meters`
    ltrVal.innerHTML = `${unitVal} liters = ${Number(convrtGl).toFixed(2)} gallons | ${unitVal} gallons = ${Number(convrtLt).toFixed(2)} liters`
    kgVal.innerHTML = `${unitVal} kgs = ${Number(convrtLb).toFixed(2)} pounds | ${unitVal} pounds = ${Number(convrtKg).toFixed(2)} kgs`
    unitVal.innerHTML = `${unitVal}`
})
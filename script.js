const stateArray = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Karnataka",
"Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"]
let state = document.getElementById("state")
for(var i = 0; i<35; i++){
    var option = document.createElement('option')
    option.value = stateArray[i]
    option.innerHTML = stateArray[i]
    state.appendChild(option)
}
const practiceArray = ["LAMP","Java","BFS","Dotnet","Oracle","EBA"]
let practice = document.getElementById("practice")
for(var i = 0; i<6; i++){
    var option = document.createElement('option')
    option.value = practiceArray[i]
    option.innerHTML = practiceArray[i]
    practice.appendChild(option)
}
let form1 = document.getElementById("basic")
let form2 = document.getElementById("others")
let form3 = document.getElementById("work")
let form4 = document.getElementById("education")
let form5 = document.getElementById("team")
let success = document.getElementById("response")

let basicNext = document.getElementById("basic-next")
let othersNext = document.getElementById("others-next")
let workNext = document.getElementById("work-next")
let educationNext = document.getElementById("education-next")
let teamNext = document.getElementById("team-submit")

let othersPrev = document.getElementById("others-prev")
let workPrev = document.getElementById("work-prev")
let educationPrev = document.getElementById("education-prev")
let teamPrev = document.getElementById("team-prev")

let progress = document.getElementById("progress")

basicNext.addEventListener('click',()=>{
    form2.style.left="35px"
    form1.style.left="-550px"
    progress.style.width = "240px"
})
othersNext.addEventListener('click',()=>{
    form2.style.left="-550px"
    form3.style.left="60px"
    progress.style.width = "360px"
})
othersPrev.addEventListener('click',()=>{
    form1.style.left="35px"
    form2.style.left="-550px"
    progress.style.width = "120px"
})
workNext.addEventListener('click',()=>{
    form3.style.left="-550px"
    form4.style.left="60px"
    progress.style.width = "480px"
})
workPrev.addEventListener('click',()=>{
    form2.style.left="35px"
    form3.style.left="-550px"
    progress.style.width = "240px"
})
educationNext.addEventListener('click',()=>{
    form4.style.left="-550px"
    form5.style.left="60px"
    progress.style.width = "600px"
})
educationPrev.addEventListener('click',()=>{
    form3.style.left="60px"
    form4.style.left="-550px"
    progress.style.width = "360px"
})
teamNext.addEventListener('click',()=>{
    form5.style.left="-550px"
    success.style.left="60px"
    progress.style.width = "720px"
})
teamPrev.addEventListener('click',()=>{
    form4.style.left="60px"
    form5.style.left="-550px"
    progress.style.width = "480px"
})

let basicTab = document.getElementById("basic-tab")
let othersTab = document.getElementById("others-tab")
let workTab = document.getElementById("work-tab")
let educationTab = document.getElementById("education-tab")
let teamTab = document.getElementById("team-tab")

basicTab.addEventListener('click',()=>{
    form1.style.left="35px"
    form2.style.left="-550px"
    form3.style.left="-550px"
    form4.style.left="-550px"
    form5.style.left="-550px"
    progress.style.width = "120px"
})
othersTab.addEventListener('click',()=>{
    form1.style.left="-550px"
    form2.style.left="35px"
    form3.style.left="-550px"
    form4.style.left="-550px"
    form5.style.left="-550px"
    progress.style.width = "240px"
})
workTab.addEventListener('click',()=>{
    form1.style.left="-550px"
    form2.style.left="-550px"
    form3.style.left="60px"
    form4.style.left="-550px"
    form5.style.left="-550px"
    progress.style.width = "360px"
})
educationTab.addEventListener('click',()=>{
    form1.style.left="-550px"
    form2.style.left="-550px"
    form3.style.left="-550px"
    form4.style.left="60px"
    form5.style.left="-550px"
    progress.style.width = "480px"
})
teamTab.addEventListener('click',()=>{
    form1.style.left="-550px"
    form2.style.left="-550px"
    form3.style.left="-550px"
    form4.style.left="-550px"
    form5.style.left="60px"
    progress.style.width = "600px"
})
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

basicNext.addEventListener('click',(event)=>{
    entry.getEmail()
    entry.getFirstName()
    entry.getPassword()
    entry.getConfirmPassword()
    entry.validateEmail()
    entry.validateFirstName()
    entry.validatePassword()
    entry.validateConfirmPassword()
    if(entry.checkBasicValid() == true)
       {
        form2.style.left="35px"
        form1.style.left="-550px"
        progress.style.width = "240px"
       }
})
othersNext.addEventListener('click',()=>{
    entry.getBirthDate()
    entry.validateBirthDate()
    entry.validateGender()
    entry.getPhoneNumber()
    entry.validateState()
    entry.validatePhoneNumber()
    if(entry.checkOthersValid() == true)
       {
        form2.style.left="-550px"
        form3.style.left="60px"
       progress.style.width = "360px"
       }
    
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
    entry.validateGraduation()
    entry.getYearPass()
    entry.validateYearPass()
    if(entry.checkEducationValid() == true)
       {
        form4.style.left="-550px"
        form5.style.left="60px"
       progress.style.width = "600px"
       }
    
})
educationPrev.addEventListener('click',()=>{
    form3.style.left="60px"
    form4.style.left="-550px"
    progress.style.width = "360px"
})
teamNext.addEventListener('click',()=>{
    entry.validatePractice()
    entry.validateTerms()
    if(entry.checkTeamValid() == true)
       {  
        basicTab.style.display="none"
        othersTab.style.display="none"
        workTab.style.display="none"
        educationTab.style.display="none"
        teamTab.style.display="none"
        
        form5.style.left="-550px"
        success.style.left="60px"
        progress.style.width = "720px"
       }
    
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
    entry.getEmail()
    entry.getFirstName()
    entry.getPassword()
    entry.getConfirmPassword()
    entry.validateEmail()
    entry.validateFirstName()
    entry.validatePassword()
    entry.validateConfirmPassword()
    if(entry.checkBasicValid() == true)
       {
        form1.style.left="-550px"
        form2.style.left="35px"
        form3.style.left="-550px"
        form4.style.left="-550px"
        form5.style.left="-550px"
        progress.style.width = "240px"
       }
   
})
workTab.addEventListener('click',()=>{
    entry.getBirthDate()
    entry.validateBirthDate()
    entry.validateGender()
    entry.getPhoneNumber()
    entry.validateState()
    entry.validatePhoneNumber()
    if(entry.checkOthersValid() == true)
       {
        form1.style.left="-550px"
        form2.style.left="-550px"
        form3.style.left="60px"
        form4.style.left="-550px"
        form5.style.left="-550px"
        progress.style.width = "360px"
       }
    
})
educationTab.addEventListener('click',()=>{
   
        if(entry.checkOthersValid() == true)
        {
            form1.style.left="-550px"
            form2.style.left="-550px"
            form3.style.left="-550px"
            form4.style.left="60px"
            form5.style.left="-550px"
            progress.style.width = "480px"
        }

    
})
teamTab.addEventListener('click',()=>{
    entry.validateGraduation()
    entry.getYearPass()
    entry.validateYearPass()
    if(entry.checkEducationValid() == true)
       {
        form1.style.left="-550px"
        form2.style.left="-550px"
        form3.style.left="-550px"
        form4.style.left="-550px"
        form5.style.left="60px"
        progress.style.width = "600px"
       }
    
})
document.getElementById("male").addEventListener('click',()=>{
    if(document.getElementById("male").checked == true){
        document.getElementById("gen-value").setAttribute('value',document.getElementById("male").value)
   }
})
document.getElementById("female").addEventListener('click',()=>{
    if(document.getElementById("female").checked == true){
        document.getElementById("gen-value").setAttribute('value',document.getElementById("female").value)
   }
})
class Registration{
    alphaRegex=/^[a-zA-Z ]+$/;
    numberRegex=/^[6789]{1}[\d]{9}$/;
    emailUserRegex=/^([a-z]+[\.-\d]*)@$/;
    emailDomainRegex=/^([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/;
    dateRegex=/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/; 
    yearPassRegex=/^(0[1-9]|1[0-2])\/(\d{4})$/
   user = {
      firstName: "",
      email: "",
      password: "",
      confirmPassword:"",
      birthDate:"",
      phoneNumber:"",
      yearPass:"",
      firstNameError: "",
      emailError:"",
      passwordError:"",
      confirmPasswordError:"",
      birthDateError:"",
      genderError:"",
      stateError:"",
      phoneNumberError:"",
      graduateError:"",
      yearPassError:"",
      practiceError:"",
      termsError:""
   }
   getFirstName(){
      this.user.firstName = document.getElementById("first-name").value.trim();
   }
    getEmail(){
        this.user.email = document.getElementById("email").value.trim();
    }
    getPassword(){
        this.user.password = document.getElementById("password").value.trim();
    }
    getConfirmPassword(){
        this.user.confirmPassword = document.getElementById("confirm-password").value.trim();
    }
    getBirthDate(){
        this.user.birthDate = document.getElementById("dob").value.trim()
    }
    getPhoneNumber(){
        this.user.phoneNumber = document.getElementById("contact").value.trim();
    }
    getYearPass(){
        this.user.yearPass = document.getElementById("year-pass").value.trim();
    }
   displayBasicErrorMessage(index,message){
      const form_group = document.getElementsByClassName("FormGroup1")[index];
      form_group.classList.add("invalid");
      form_group.getElementsByTagName("span")[0].textContent = message;
   }
   removeBasicErrorMessage(index){
       const form_group = document.getElementsByClassName("FormGroup1")[index];
       form_group.classList.remove("invalid");
       form_group.classList.add("valid");
   }
   displayOthersErrorMessage(index,message){
    const form_group = document.getElementsByClassName("FormGroup2")[index];
    form_group.classList.add("invalid");
    form_group.getElementsByTagName("span")[0].textContent = message;
   }
    removeOthersErrorMessage(index){
     const form_group = document.getElementsByClassName("FormGroup2")[index];
     form_group.classList.remove("invalid");
     form_group.classList.add("valid");
    }
    displayEducationErrorMessage(index,message){
        const form_group = document.getElementsByClassName("FormGroup4")[index];
        form_group.classList.add("invalid");
        form_group.getElementsByTagName("span")[0].textContent = message;
       }
        removeEducationErrorMessage(index){
         const form_group = document.getElementsByClassName("FormGroup4")[index];
         form_group.classList.remove("invalid");
         form_group.classList.add("valid");
        }
        displayTeamErrorMessage(index,message){
            const form_group = document.getElementsByClassName("FormGroup5")[index];
            form_group.classList.add("invalid");
            form_group.getElementsByTagName("span")[0].textContent = message;
           }
            removeTeamErrorMessage(index){
             const form_group = document.getElementsByClassName("FormGroup5")[index];
             form_group.classList.remove("invalid");
             form_group.classList.add("valid");
            }
   validateFirstName(){
       if(this.user.firstName == ""){
           this.user.firstNameError = "Firstname required";
           this.displayBasicErrorMessage(3,this.user.firstNameError);
       }
       else if(this.alphaRegex.test(this.user.firstName) == false){
           this.user.firstNameError = "Should contain only alphabets";
           this.displayBasicErrorMessage(3,this.user.firstNameError);
       }
       else if(this.user.firstName.length < 3)
       {
           this.user.firstNameError = "Should contain atleast 3 letters";
           this.displayBasicErrorMessage(3,this.user.firstNameError);
       }
       else if(this.user.firstName.length > 15)
       {
           this.user.firstnameError = "Should not exceed 15 letters";
           this.displayBasicErrorMessage(3,this.user.firstNameError);
       }
       else 
       {
           this.removeBasicErrorMessage(3);
           this.user.firstNameError = "";
       }
   }
   validateEmail(){
       if(this.user.email == "")
       {
          this.user.emailError = "Email id required";
          this.displayBasicErrorMessage(0,this.user.emailError);
       }
       else if(this.emailUserRegex.test(this.user.email.substring(0,(this.user.email.indexOf("@"))+1)) == false){
          this.user.emailError = "Username should starts with lowercase alphabets followed by digits if any";
          this.displayBasicErrorMessage(0,this.user.emailError);
       }
       else if(this.emailDomainRegex.test(this.user.email.substring((this.user.email.indexOf("@"))+1,this.user.email.length)) == false){
           this.user.emailError = "Username followed by domain name in lowercased alphabets with extension";
           this.displayBasicErrorMessage(0,this.user.emailError);
        }
        else
            {
               this.removeBasicErrorMessage(0);
               this.user.emailError = "";
           }
   }
   validatePassword(){
    if(this.user.password == "")
    {
       this.user.passwordError = "Password required";
       this.displayBasicErrorMessage(1,this.user.passwordError);
    }
    else
    {
        this.removeBasicErrorMessage(1);
        this.user.passwordError = "";
    }
   }
   validateConfirmPassword(){
    if(this.user.confirmPassword == "")
    {
       this.user.confirmPasswordError = "Confirm Password required";
       this.displayBasicErrorMessage(2,this.user.confirmPasswordError);
    }
    else if(this.user.password != this.user.confirmPassword){
        this.user.confirmPasswordError = "Password mismatch";
        this.displayBasicErrorMessage(2,this.user.confirmPasswordError);
    }
    else
    {
        this.removeBasicErrorMessage(2);
        this.user.confirmPasswordError = "";
    }
   }
   validateBirthDate(){
    const extractBirth = this.user.birthDate.split('/')
    const current = new Date();
    const yyyy = current.getFullYear();
    let mm = current.getMonth() + 1; /**month starts from 0 */
    let dd = current.getDate();
    if (dd < 10) 
      dd = '0' + dd;
    if (mm < 10) 
      mm = '0' + mm;
    let currentDate = dd+"/"+mm+"/"+yyyy
    let extractCurrent = currentDate.split('/')
    let age = extractCurrent[2] - extractBirth[2]
   
    if(this.user.birthDate == "")
     {
        this.user.birthDateError = "Birth date required";
        this.displayOthersErrorMessage(0,this.user.birthDateError);
     }
     else if(this.dateRegex.test(this.user.birthDate) == false){
        this.user.birthDateError = "Invalid date format(dd/mm/yyyy)";
        this.displayOthersErrorMessage(0,this.user.birthDateError);
     }
     else if(age < 20){
        this.user.birthDateError = "Eligible once you are 20";
        this.displayOthersErrorMessage(0,this.user.birthDateError);
     }
     else
     {
         this.removeOthersErrorMessage(0);
         this.user.birthDateError = "";
    }
   }
   validateGender(){
     if((document.getElementById("male").checked == false) && (document.getElementById("female").checked == false))
       {
        this.user.genderError = "Gender required";
        this.displayOthersErrorMessage(1,this.user.genderError);
       }
       else{
        this.removeOthersErrorMessage(1);
        this.user.genderError = "";
       }
   }
   validateState(){
       let state = document.getElementById("state")
       if(state.options[state.selectedIndex].value == "Choose State")
       {
        this.user.stateError = "State required";
        this.displayOthersErrorMessage(2,this.user.stateError);
       }
       else{
        this.removeOthersErrorMessage(2);
        this.user.stateError = "";
       }
   }
   validatePhoneNumber(){
    if(this.user.phoneNumber == "")
    {
       this.user.phoneNumberError = "Phone number required";
       this.displayOthersErrorMessage(3,this.user.phoneNumberError);
    }
    else if(this.numberRegex.test(this.user.phoneNumber) == false){
       this.user.phoneNumberError = "starts with 6/7/8/9 and contain only 10 digits";
       this.displayOthersErrorMessage(3,this.user.phoneNumberError);
    }
    else
        {
            this.removeOthersErrorMessage(3);
            this.user.phonenumberError = "";
       }
   }
   validateGraduation(){
    let graduation = document.getElementById("graduation")
    if(graduation.options[graduation.selectedIndex].value == "Choose a graduation")
    {
     this.user.graduateError = "Graduate required";
     this.displayEducationErrorMessage(0,this.user.graduateError);
    }
    else{
     this.removeEducationErrorMessage(0);
     this.user.graduateError = "";
    }
   }
   validateYearPass(){
    if(this.user.yearPass == "")
    {
        console.log(this.user.yearPass)
       this.user.yearPassError = "Passing year required";
       this.displayEducationErrorMessage(1,this.user.yearPassError);
    }
    else if(this.yearPassRegex.test(this.user.yearPass) == false){
        this.user.yearPassError = "Invalid format (mm/yyyy)";
        this.displayEducationErrorMessage(1,this.user.yearPassError);
    }
    else
        {
            this.removeEducationErrorMessage(1);
            this.user.yearPassError = "";
       }
   }
   validatePractice(){
    let practice = document.getElementById("practice")
    if(practice.options[practice.selectedIndex].value == "Choose practice")
    {
     this.user.practiceError = "Practice required";
     this.displayTeamErrorMessage(0,this.user.practiceError);
    }
    else{
     this.removeTeamErrorMessage(0);
     this.user.practiceError = "";
    }
   }
   validateTerms(){
       if(document.getElementById("terms").checked == false){
        this.user.termsError = "Please tick the checkbox";
        this.displayTeamErrorMessage(1,this.user.termsError);
       }
       else
       {
           this.removeTeamErrorMessage(1);
           this.user.termsError = "";
      }
   }
   checkBasicValid(){
       const form_group = document.getElementsByClassName("FormGroup1");
       let result = true;
       Array.from(form_group).forEach(element => {
           if(element.classList.contains("invalid"))
           result = false;
       });
       console.log("basic valid",result)
       return result;
   }
   checkOthersValid(){
    const form_group = document.getElementsByClassName("FormGroup2");
    let result = true;
    Array.from(form_group).forEach(element => {
        if(element.classList.contains("invalid"))
        result = false;
    });
    console.log("others valid",result)
    return result;
   }
    checkEducationValid(){
        const form_group = document.getElementsByClassName("FormGroup4");
        let result = true;
        Array.from(form_group).forEach(element => {
            if(element.classList.contains("invalid"))
            result = false;
        });
        return result;
    }
    checkTeamValid(){
        const form_group = document.getElementsByClassName("FormGroup5");
        let result = true;
        Array.from(form_group).forEach(element => {
            if(element.classList.contains("invalid"))
            result = false;
        });
        return result;
    }

   
}
const entry = new Registration();

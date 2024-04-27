let erpas=document.querySelector('.erpassword');
let eremail=document.querySelector('.eremail');
let email=document.querySelector('.email');
let password=document.querySelector('.password');
let success=documnet.querySelector('.success');
email.addEventListener('blur',()=>{
    let validate=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emailadd=email.ariaValueMax;
    if(!validate.test(emailadd)){
        
    }
})
console.log("script running...")
document.querySelector('.cross').styles.display ="none";
document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');

})

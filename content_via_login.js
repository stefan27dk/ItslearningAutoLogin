
// window.addEventListener('load', function () {
//   autoLogInIts(); // Runs on Enable / Disable Extension
// });



window.onload = function() {

  setTimeout(autoLogInIts, 500); // Runs on Enable / Disable Extension
  setTimeout(autoLogInIts, 1000);
};


// document.addEventListener("DOMContentLoaded", function(event){
//   autoLogInIts(); // Runs on Enable / Disable Extension

// });

// document.onreadystatechange = function () {
//   if (document.readyState == "complete") {
//     autoLogInIts(); // Runs on Enable / Disable Extension
//   }
// }



// // Observer for path changed
// let lastUrl = location.href; 
// new MutationObserver(() => 
// {
//   const url = location.href;
//   if (url !== lastUrl) 
//   {
//     lastUrl = url;
//     autoLogInIts(); // Runs on Path Changed 
//   }
// }).observe(document, {subtree: true, childList: true});



 

 





// ::::::::::::::::::: Working Code ::::::::::::::::::::::::::::::::::::
function autoLogInIts()
{

  chrome.storage.sync.get(['enableExtAutoLoginIts'], function(result)
    { 
         if (result.enableExtAutoLoginIts) 
         { 
            autoFillSimuKeypress(); 
         }     
         
             //================================ Extension Disabled ================================================================
         else  
         { 
           //it is disabled
         }
    });


}



 
 
 

function autoFillSimuKeypress()
{
  chrome.storage.sync.get(['loginIts'], result => {
    // toggleONOFF = result.enableExtAutoLoginIts;
    // onOFFButton.textContent = toggleONOFF ? 'Disable' : 'Enable'; // Change onOFFButton - Text
    // let av = document.getElementById('login');
    // console.log(av);
    document.getElementById('login').value = result.loginIts.userNameIts;
    document.getElementById('passwd').value = result.loginIts.passwordIts;
    document.getElementById('nsg-x1-logon-button').click();
});
 
}
    







 
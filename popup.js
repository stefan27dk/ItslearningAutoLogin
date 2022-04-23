
 








// ------ BUTTON STATE ENABLED -  DISABLED ----------------------------------------------------------
var toggleONOFF = true; //Enable / Disable Extension
var onOFFButton = document.getElementById('on-off-extension'); // Get the On-Off  Button

// Get Extension State Enabled / Disabled
chrome.storage.sync.get(['enableExtAutoLoginIts'], result => {
    toggleONOFF = result.enableExtAutoLoginIts;
    // onOFFButton.textContent = toggleONOFF ? 'Disable' : 'Enable'; // Change onOFFButton - Text
    toggleButtonState();
});





// ---------------- Button Enabled Disabled -- Style and Text ----------------------
function toggleButtonState()
{
    if(toggleONOFF == false)
    {
        onOFFButton.className = "toggle-app-button-enable";
        onOFFButton.textContent = "Enable";
        document.getElementsByTagName("html")[0].className = "app-state-color-disabled";
    }
    else
    {
        onOFFButton.className = "toggle-app-button-disable";
        onOFFButton.textContent = "Disable"; // Change onOFFButton - Text
        document.getElementsByTagName("html")[0].className = "app-state-color-enabled";
    }
}





// On - OFF Button onClick........................................................................
onOFFButton.onclick = () => { 
    
    // onOFFButton.textContent = toggleONOFF ? 'Disable' : 'Enable'; // Change onOFFButton - Text
    toggleONOFF = !toggleONOFF;

    toggleButtonState();
    chrome.storage.sync.set({enableExtAutoLoginIts : toggleONOFF}); // Set Extension state Enabled / Disabled 
    chrome.tabs.reload(); // Refresh The Tab - to affect changes
};










// SAVE LOGIN --------------------------------------------------------------------------------
let saveLoginBtn =  document.getElementById('saveLogin');
let loginUsernameInp =  document.getElementById('userNameIts');
let loginPasswordInp =  document.getElementById('passwordIts');

// On - Save Login
saveLoginBtn.onclick = () => { 
    chrome.storage.sync.set({loginIts : {userNameIts: loginUsernameInp.value, passwordIts: loginPasswordInp.value}}); // Set login
    chrome.tabs.reload(); // Refresh The Tab - to affect changes
};

 





// -------------- Username & Password Input state show login ------------------------------------
window.addEventListener('load', function () {
chrome.storage.sync.get(['loginIts'], result => {
   
    document.getElementById('userNameIts').value = result.loginIts.userNameIts;
    document.getElementById('passwordIts').value = result.loginIts.passwordIts;
    // document.getElementById('passwordIts').value = result.loginIts.passwordIts;
});

});










// --------- SHOW HIDE PASS ---------------------------------------------------------------
let toggleShowPass = document.getElementById("showHidePass");
    
    let passInput = document.getElementById('passwordIts');
toggleShowPass.onclick = () =>
{
   if(toggleShowPass.checked == true)
   {
    passInput.type = "text"; 
   }
   else
   {
    passInput.type = "password"; 
      
   }
}







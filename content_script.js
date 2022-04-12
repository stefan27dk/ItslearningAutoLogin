

autoLogInIts(); // Runs on Enable / Disable Extension


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
        // alert(result.enableExt); 
         if (result.enableExtAutoLoginIts) 
         { 
           if(window.location="via.itslearning.com/index.aspx?SessionExpired=0")
           {
              window.location.href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$federatedLoginButtons$ctl00$ctl00','')";
           } 
         } 
                  
         
             //================================ Extension Disabled ================================================================
         else  
         { 
           //it is disabled
         }
    });


}


 
     
  

  


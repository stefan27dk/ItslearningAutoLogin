# ItslearningAutoLogin

Itslearning autoLogin extension for VIA - University Itslearning

Chrome extension - Chrome, Brave, Opera, Firefox etc.

**If VIA or Itslearning change their login webpage code than the extension may not work and needs to be updated**








**How it works:**

This extension works only with VIA login for itslearning - It can be modified to work with other external authentication providers by litle editing.
1. Checks if you are logget out of itslearning
2. If you are logget out it tries to log you in, by simulating clicking on the login button (by executing the script that the login button executes when you click it)
3. Than itslearning redirects you to VIAs login page
4. The Extension waits till the page is loaded, than enters the credentials that you have provided - (saved in the local storage)
5. Than triggers the via login button 
6. Than you are logget in







**How to Install:**
1. Download and extract it somewere ex. documents.
2. Open chrome or other browser that suports chrome extensions
3. Go to extensions
4. Click enable developer mode
5. Click on Load Unpacked
6. Find and select the folder (the extension folder) - the one which you extracted after downloading 
7. CLick on ![image](https://user-images.githubusercontent.com/62241807/163223845-d8b2b6fa-b3dd-489e-b82f-3b32b73ed95a.png)
8. Type your username & passowrd than save - username and password are stored in local storage - (if you clear the broweser cashe the login will be deleted and you will need to type it again)
9. Click on Save
10. And Click on Enable

![image](https://user-images.githubusercontent.com/62241807/163228717-53845c0e-b4f0-41df-91a3-a1b05f049961.png)

![image](https://user-images.githubusercontent.com/62241807/163222113-9822fc31-ce21-415d-8e56-81ab181054af.png)
![image](https://user-images.githubusercontent.com/62241807/163222613-be7df061-7a55-4a75-995a-9ba6be865d39.png)

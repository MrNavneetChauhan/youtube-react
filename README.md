<h1 align="center">Youtube Clone</h1> 
<br />
<p align="center">
    <img src="https://img.shields.io/badge/React_(17.0.2)-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
    <img src="https://img.shields.io/badge/Redux_(4.1.1)-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="redux" />
    <img src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra-ui"/>
    <img src="https://img.shields.io/badge/Rest_API-02303A?style=for-the-badge&logo=react-router&logoColor=white" alt="restAPI"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/>   
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="expressjs"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb"/>
</p>

<h3 align="center"><a href="https://youtube-clone-by-navneet-chauhan.netlify.app/"><strong>Want to see live preview »</strong></a></h3>

<p align="center"> 
    <br />&#10023;
    <a href="#Demo">View Demo</a>   &#10023;  
    <a href="https://github.com/MrNavneetChauhan/youtube-react/issues">Report Bug</a>    &#10023;
    <a href="#Getting-Started">Getting Started</a> &#10023; <a href="#Install">Installing</a> &#10023;    
    <a href="#Contact">Author</a> &#10023;
  </p>

                                          **Introduction to YouTube-Clone**
  Youtube is a video-streaming platform used by creators across the globe to publish original content.


                                            **Features of the Project**

1) Sign up with Google Oauth. 
2) User can like or comment on any video. User can add the videos to watch later section as well as saved section.
3) Fully Responsive with top notch functionalities.
4) Comments /liked videos/saved videos are stored in mongo db. 
5) Debouncing functionality, infinite scrolling, skeleton loaders etc are used 
Tech Stack: REACT | REDUX | CHAKRA UI |MONGO-DB | EXPRESS | MONGOOSE

                                           **Tech Stacks used in this Projects**

REACT | REDUX | CHAKRA UI |MONGO-DB | EXPRESS | MONGOOSE


                                           **Let's visit the Site and explore it's feature**
                                            
                                            
                                            

  <table>
    <tr>
      <th>Sr.No</th>
          <th>Site page</th>
          <th>Features</th>
      <th>Remarks</th>
    </tr>
    <tr>
      <td>1</td>
          <td>Landing Page</td>
          <td>latest videos, different tags on navbar </td>
    </tr>
    <tr>
          <td>2</td>
          <td>Signup/authentication</td>
          <td>Google Oauth</td>
    </tr>
    <tr>
         <td>3</td>
          <td>Search page</td>
          <td>Deboucing factor applied on search bar, it will allow api calls after 1sec only, and user will get search results </td>
    </tr>
    <tr>
        <td>4</td>
          <td>Search results</td>
          <td>after clicking on search bar result, it wll show you results of that particular video in other page</td>
    </tr>
    <tr>
          <td>5</td>
              <td>Selected video Display</td>
              <td>When you click on the video it will take you to the playvideo page where you can watch it</td>
      <tr/>
  
  <tr>
          <td>6</td>
              <td>Liked videos & watch later</td>
              <td>When you click on like or save videos, it will save to there respective sections</td>
      <tr/>
    <tr>
          <td>7</td>
              <td>Toggle Color theme</td>
              <td>You can toggle the theme of site, either dark or light</td>
      <tr/>
  <tr>
          <td>8</td>
              <td>Sign Out</td>
              <td>You can signout also.</td>
      <tr/>
  </table>
  
  

                                               **Introduction to Landing Page**

**There are different tags on the search bar based on your search result , if you click them it will show result according to them (tags:- All,coding,Memes,css,etc just below the search bar) and you cal also find the creater channel's logo, channel's name, and it's likes and views** 
![image](https://user-images.githubusercontent.com/93375038/197111503-55643647-15f6-437a-bc86-95b8ff5b0eed.png)



                                               **Signup/SignIn Authentication**
                                                          
 **When user will click on signup he/she will be redirected google Oauth, and will auto signin through it's email id username.
![image](https://user-images.githubusercontent.com/93375038/197108707-df9ad06f-f60c-4fdc-bf03-4b30cd10af55.png)



                                                 **Search Bar functionality**
  **When you search any thing on the search bar it will show you result after 1s. because of debouncing functionlaity, because if user have good typing speed then he will only search that result which he want or in other terms only that api will be called, and if user has very less typing speed or he want to search that specific result then within one sec of wait he will get that result**
  
  ![image](https://user-images.githubusercontent.com/93375038/197111558-5f1ca875-52e0-408a-adb1-99b55d6995f1.png)

  <br/>
  <br/>




)
  **when you click on the search result for example as i have searched "namastey javascript" i will click on the any search result and it will now take me to the other page where i will get all the videos related to namastey javascript**
  
  ![image](https://user-images.githubusercontent.com/93375038/197111667-639fdb7e-636e-4da7-8de5-38a83bc38371.png)

  <br/>
  <br/>





                                                 **Selected video Display Page**
  **When you click any of the video then it will take you to the play video page where you can watch that video as you normally watch in the youtube. You can also watch it in full screen and can see all the video details like it's description,title,likes,channel owner name, and its subscriber. i have also created the comment section,where you  can add comment, if you are signin**
  
  ![image](https://user-images.githubusercontent.com/93375038/197111717-143aae07-cf7c-49fa-85f3-984aa4b6f004.png)

  <br/>
  <br/>
  
                                           **Liked Video Section or Watch Later Section**
**When you like video or click on save it will added to liked video section or watch later section. you can also go to saved video section or liked video section and can see those added videos, you can also remove them.

![image](https://user-images.githubusercontent.com/93375038/197112084-cd8dde82-1bfb-467b-82a9-0a6e38542101.png)

<br/>
<br/>

                                                      **Toggle Theme**
**You can toggle the theme on Clicking moon or sun,,in case of mobile, you will see mobile icon.**
![image](https://user-images.githubusercontent.com/93375038/197113806-9d9b20e9-341f-4023-b680-ab4d1224b14e.png)

<br/>
<br/>
                                                        **Sign Out**
**To logout you have to click either on hamburger menu or profile, then menu will show where it signout link is there **

![image](https://user-images.githubusercontent.com/93375038/197112591-ab5c2264-4563-49a2-9f62-55f8f64879c2.png)
                                                        




import React from 'react';
import "./home.css";
import first from "../images/first.png"
import second from "../images/second.jpg"
import apple_icon from "../images/apple-icon.png"
import youtube_icon from "../images/youtube.png"
import twitter_icon from "../images/twitter.png"
import google_icon from "../images/google_icon.png"
import right_arrow from "../images/right-arrow.png"

const Home = () => {
    const handlbtn=()=>{
        let first=document.getElementsByClassName('first-mid-img')[0]
       let second=document.getElementsByClassName('second-mid-img')[0]
       let f_src=first.src;
       let s_src=second.src;
       first.src=s_src;
       second.src=f_src
    }
    return (
        <div>
            <div className='header'>Discover Rare Collections of <br/> Art & NFTs</div>


<div className='middle'>
    <div className='first'>
        <p>Digital marketplace for crypto <br/> collections and non-fungible tokens <br/> (NFTs). Buy, sell, and discover <br/> exclusive digital assets.</p>
        
        <button>Discover</button>
        
        <div className='app-icon-mid'>
            <span><img src={apple_icon} className='apple-icon' width='40px' alt=""/></span>
            <span>Available on the </span>
            <span className='big-letter'> App Store</span>
        </div>

     </div>

    <div >
        <div><img src={first} className='first-mid-img' width='220px' alt=""/></div>
        <div><img src={second} className='second-mid-img' width='220px' alt=""/></div>
         <button className='btn-toggle' onClick={()=>{handlbtn()}}>>></button>
    </div>

     <div className='last'>
       <span className='mid-right-head'>42K+</span><br/>
       <span className='mid-right-down'>User Active</span> <br/>  <br/>

       <span className='mid-right-head'>8K+</span><br/>
       <span className='mid-right-down'>Artworks</span> <br/>  <br/>

       <span className='mid-right-head'>2K+</span><br/>
       <span className='mid-right-down'>Artist</span>  <br/>  <br/> <br/>
      
      <div className='social-icons'>
        <img src={google_icon} width='30px' height='30px' alt=""/>
       
        <img src={twitter_icon} width='25px' height='30px' alt=""/>
        <img src={youtube_icon} width='30px' height='27px' alt=""/>
      </div>

<div>
    <img src="" alt=""/>
    <img src="" alt=""/>
    <img src="" alt=""/>
</div>

     </div>
</div>
<div className='footer'>
    <div className='footer-flex'>
        <div>Top Sellers</div>
        <div>Open Gallery <img src={right_arrow} className='images-content-arrow' width='20px' alt="arrow"/> </div>
    </div>
    <p>-----------------------------------------------------------------------------------------</p>
    <div className='footer-content'>
         <div>
        <span className='footer-content-head'>Black Shadows</span> <br/>
        <span className='footer-content-foot'>@Antonio Banderas</span>
    </div>
    <span className='vert-line'></span>
    <div className='footer-content-mid'> 
        <span>
        <span className='footer-content-head'>269</span> <br/>
        <span className='footer-content-foot'>Artworks for sale</span>
            </span>
            
            <div>
            <span className='footer-content-foot'>Remaining Time</span> <br/>
             <span className='footer-content-head'>22h : 05m : 35s</span>
            </div>
        

        </div>
        <span className='vert-line'></span>
    <div>
   
         <span className='footer-content-foot'>Current Bid</span> <br/>
        <span className='footer-content-head'>18.0</span>
           
    </div>
    </div>
   

</div>


        </div>
    );
}

export default Home;

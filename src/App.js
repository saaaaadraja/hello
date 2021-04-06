import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Scrollbars} from 'react-custom-scrollbars'
import logo from './logo.png'
import logo512 from './logo512.png'
import {Button} from '@material-ui/core'
import './app.css'
import Skeleton from "react-loading-skeleton";

import {motion} from 'framer-motion'

const services=[0,2,3,4,5,6,7,8,9];
const clients=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function App() {
    document.body.style.backgroundColor='black';
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
   setTimeout(()=>{
       setLoading(false);
    },1000)
    return ()=>clearTimeout();
    },[])  
    return (
       <>
       {
           loading?( 
           <div className="container-fluid bg-white">
         <section>
        <h2 className="section-title">
          <Skeleton height={30} width={300} />
        </h2>

        <ul className="list">
          {Array(9)
            .fill()
            .map((item, index) => (
              <li className="card" key={index}>
                <Skeleton height={180} />
                <h4 className="card-title">
                <Skeleton circle={true} height={50} width={50} />  
                  <Skeleton height={36} width={`80%`} />
                </h4>
                <p className="card-channel">
                  <Skeleton width={`60%`} />
                </p>
                <div className="card-metrics">
                  <Skeleton width={`90%`} />
                </div>
              </li>
            ))}
        </ul>
      </section>
</div>
)
:
(
    <>
    <nav id='nav' className='navbar navbar-expand-lg  navbar-light navbar-left h-25'>
           <div className="container-fluid py-3">
           <motion.a initial={{x:'100vw'}} animate={{x:0}} transition={{delay:0.5,type:'spring'}} className='navbar-barnd h1 mx-1 text-white' href='#home' > COMPANY </motion.a>
           <button className='navbar-toggler  bg-primary' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' >
               <div style={{display:'flex',flexDirection:'column'}}>
              <span className='navbar-toggler-icon'></span>
              </div>
           </button>
           <div className="collapse navbar-collapse" id='navbarNav'>
               <ul className='nav navbar-nav'>
                   <li className="nav-item  active mx-5">
                       <motion.a initial={{x:'100vw'}} animate={{x:0}} transition={{delay:0.5,type:'spring'}} href="#home" className="nav-link h5 text-white" >Home <span className="sr-only">(current)</span></motion.a>
                   </li>
                   <li className="nav-item mx-5">
                       <motion.a initial={{x:'100vw'}}  animate={{x:0}} transition={{delay:0.5,type:'spring'}} href="#services"  className="nav-link h5 text-white">Services</motion.a>
                   </li>
                   <li className="nav-item mx-5">
                       <motion.a initial={{x:'100vw'}} animate={{x:0}} transition={{delay:0.5,type:'spring'}} href="#clients" className="nav-link h5 text-white">Clients</motion.a>
                   </li>
                   <li className="nav-item mx-5">
                       <motion.a initial={{x:'100vw'}} animate={{x:0}} transition={{delay:0.5,type:'spring'}} href="#contact" className="nav-link h5 text-white">Contact</motion.a>
                   </li>
               </ul>
              </div>
           </div>
       </nav>
        <div className="container-fluid back"  style={{backgroundColor:'black'}}>
            <div className="row justify-content-center py-5"   id='home'>
                <div className="col-md-9 col-sm-12">
                    <p  className='my-4 py-4 h1 text-white text-center h-15 heading' >Introduction</p>
                    <Scrollbars style={{height:'100vh',marginTop:'10vh',borderRadius:'20px',border:'2px solid white'}}>
                    <p style={{padding:'2rem',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos quo nobis exercitationem, est enim facere eius assumenda quos rem debitis, porro dolor ut nihil accusantium consectetur aperiam. Tempore optio sequi esse suscipit iure dicta debitis dolorum voluptates quod numquam consequatur corporis, modi similique commodi nesciunt nihil tenetur temporibus dolor accusamus cum nostrum beatae laboriosam incidunt magni? Soluta, mollitia? Dicta voluptatibus reiciendis quibusdam deleniti ducimus deserunt nesciunt excepturi, tenetur ratione voluptates libero quas quae minus illum repellendus, praesentium iste! Veniam nemo soluta nisi! Facilis, maiores reprehenderit. Vel qui porro iusto eos! Illo quidem, adipisci voluptates minima quaerat explicabo incidunt architecto, doloribus est recusandae labore reiciendis. Totam voluptas blanditiis similique quas quos eos praesentium. Assumenda nihil aut dolore molestiae rerum facilis nisi quas ab harum modi? Fugit commodi ea asperiores natus blanditiis, consectetur totam odio atque? Non consectetur nam facere aut voluptatibus, tempora temporibus unde sint laborum delectus assumenda dicta odit. Voluptatum, reprehenderit. Vero reiciendis numquam laboriosam fugiat expedita, maiores placeat dolore ipsum. Molestias dolor sed aspernatur. Provident, dignissimos, praesentium corrupti ullam cupiditate amet impedit quae repudiandae architecto nemo mollitia illo necessitatibus, minus animi natus rerum consequuntur soluta quasi maxime! Ea molestiae explicabo, atque suscipit harum nisi et minima id laborum numquam eligendi quibusdam, architecto voluptatum earum consequuntur, consequatur vero recusandae pariatur expedita adipisci animi repudiandae. Quis, ducimus iure neque magni quos corrupti minima doloremque tempore est atque earum laboriosam animi nulla ipsam exercitationem cumque enim incidunt reprehenderit tenetur, explicabo ea. Sint provident nulla placeat suscipit ut architecto sequi voluptates nihil perferendis! Labore, eligendi modi? Aliquam ipsum exercitationem ex, quia, sequi minus maxime temporibus est corrupti iure quos aperiam sed saepe repellat nostrum neque tempore labore id unde delectus dolor illo expedita beatae nihil. Excepturi minus cupiditate corrupti sit dolor. Cumque voluptatum in ut est voluptas sint repudiandae modi! Pariatur consequatur facilis maxime dolorum, ducimus possimus et necessitatibus doloremque quo quas tempore rem expedita veniam. Eos provident repellat magni ex, cum fuga corporis est officia, incidunt, perspiciatis enim eligendi et sint voluptates. Dolorum esse debitis voluptatem omnis suscipit tempore, eius id possimus quaerat quo perspiciatis expedita quia harum? Corrupti sit nisi aperiam esse architecto voluptates vero quisquam magni velit exercitationem error est sequi, minima recusandae commodi laborum. Provident consequuntur, doloremque esse fugiat explicabo corporis pariatur debitis maiores eius, reprehenderit, quos quo voluptate iure aliquid tempore vel perspiciatis. Odio neque, doloremque ad recusandae aspernatur quisquam atque quam maiores cum eius a facere autem veniam illum maxime facilis fuga. Fugit obcaecati, id inventore explicabo consequatur, enim reiciendis ab nesciunt sunt eum sapiente sequi. Reprehenderit id non porro veritatis molestias magnam soluta nobis omnis unde! Dicta quod eum voluptatem beatae, quibusdam ullam neque commodi, reiciendis illum autem sapiente saepe error a exercitationem iure nihil nisi veniam nobis delectus ut cumque itaque facilis sunt libero? Neque, adipisci sit perferendis explicabo deserunt ex incidunt temporibus deleniti aliquam, eligendi reiciendis sunt labore sint fuga aut. Dignissimos recusandae a culpa aut alias doloribus hic iusto aliquid quibusdam, totam magnam expedita ipsam architecto quo ratione laudantium quia, quis qui minus? Architecto reprehenderit fugiat vitae, necessitatibus praesentium at deleniti quos corrupti iusto doloremque minima nam nostrum deserunt itaque porro ad ullam ducimus. Necessitatibus laudantium repellendus dicta impedit? Voluptate voluptatibus fugiat tempora vel. Libero dolor debitis, suscipit quas ullam possimus in, cum quae, similique vero temporibus nihil modi? Ullam aliquam facilis deleniti sunt reprehenderit, vero velit. Dolorum accusamus at laudantium vitae odit, ea impedit. Recusandae, neque voluptates praesentium in minima est quod omnis rerum sapiente tenetur voluptas laboriosam, adipisci impedit voluptate aut maiores, libero debitis cupiditate. Non quisquam aliquam voluptates nisi ipsa blanditiis voluptatum. Esse exercitationem tenetur delectus tempora repellendus ratione soluta commodi placeat est! Aliquam exercitationem earum dolor ipsum nisi ipsam aspernatur laboriosam doloribus excepturi commodi a, et, velit quas soluta perferendis, consequuntur veritatis? Neque aliquam cum perferendis, quas excepturi sapiente architecto vel minus quos suscipit beatae nulla vitae consectetur, atque accusamus a, repellat corporis exercitationem saepe illo ipsam sequi! Ad neque nemo quae vitae in accusamus officiis rem quaerat nam dicta, possimus recusandae sapiente eum est magnam facilis officia alias nulla aspernatur id iure at ducimus non voluptate! Quod natus repellendus sequi dignissimos maiores exercitationem maxime, atque sed ut molestias est aut animi ex sunt provident tempore facilis quibusdam harum voluptatibus dolorem? Eaque sequi cupiditate molestias inventore natus, maxime, deleniti doloribus dolorum placeat vel officia atque delectus quam quisquam fugiat. Ipsa et libero nulla blanditiis fugit asperiores fugiat in dolorum, porro dicta quasi corporis repellendus molestias! Harum, eius numquam commodi perspiciatis quasi dolorum odio et eos fuga quam recusandae aut blanditiis praesentium repellendus reprehenderit laborum possimus consequatur omnis quaerat adipisci provident, soluta fugit voluptates. Debitis amet omnis doloribus necessitatibus voluptate incidunt cum dignissimos similique quibusdam id. Voluptas molestiae amet exercitationem iste, voluptatem dolores officiis, dolore ea corporis ipsa illo eius quo placeat libero, doloribus voluptatibus excepturi ratione? Incidunt enim nihil ullam tempora. Obcaecati ea, non alias omnis a earum aperiam hic nihil consequuntur temporibus. Expedita alias sed minus vel similique, perferendis recusandae illum dolore ad officiis odio explicabo quaerat nesciunt quos fuga perspiciatis maxime quibusdam. Quae vitae error numquam debitis architecto nostrum excepturi corporis. Voluptas, fugiat molestias. Soluta aspernatur, assumenda voluptatum commodi quasi voluptate numquam ipsum alias tempora itaque nisi praesentium exercitationem quod? Corrupti, reprehenderit consequuntur. Doloremque ab repellendus dolores placeat quis deserunt nihil quae, nemo sunt amet a, nesciunt esse, sit mollitia maxime atque nam ea nulla saepe. Eos omnis magni sequi adipisci perferendis sunt inventore totam soluta tempore? Vel fugiat earum amet ullam debitis magni eos? Provident, exercitationem, natus neque quasi aliquam aliquid sequi officia, nam ipsum delectus odit nobis ipsam accusamus illum officiis illo blanditiis! A, magnam nesciunt, necessitatibus dolorum debitis eaque accusantium fugiat, impedit beatae totam ratione harum id delectus quas et quaerat rerum animi! Ex eos, sequi culpa illum et maiores earum quam debitis qui, ea facilis quas numquam, distinctio magni quis doloribus quisquam adipisci recusandae officia voluptate provident! Nam aspernatur maiores voluptatum ea eos exercitationem, dolore consectetur cumque voluptas quos et animi necessitatibus ipsam fugit, officia reprehenderit. Mollitia maiores unde enim eligendi quasi.
                    </p>
                    </Scrollbars>
                    </div>
                </div>
          
            <div className="row py-5 justify-content-center"  id='services'>
                <div className="col-sm-12 col-md-9 ">
                    <p className='my-4 py-4 h1 text-white  text-center heading' >Services</p>
                    <div className="row py-4 my-5 justify-content-center">          
{
    services.map((i)=>{
 return <div key={i} className="col-md-4 col-sm-12 py-2 my-3">
                            <div className="card  text-white" >
                                 <img className='card-img-top' style={{height:'100%',width:'100%',objectFit:'cover'}}  src={logo} alt="logo"/>
                                 <div className="card-body justify-content-center" style={{backgroundColor:'black'}}>
                                 {/* <h4 className='card-title'>Logo</h4> */}
                                 <p className='card-text px-4' style={{marginBottom:'2rem'}}
                                 > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deleniti impedit vero excepturi nostrum. Dolorum ullam asperiores facere explicabo alias. </p>
                                 <Button  className='bg-primary w-25 h-15 p-3 my-4 text-white' style={{boxShadow:'2px 2px 5px gray'}}>Details</Button>
                                 </div>
                            </div>
                             
                        </div>
    })
}
                    </div>
                </div>
            </div>
                   <div className="row justify-content-center py-5"  id='clients'>
                <div className="col-md-9 col-sm-12">
                    <p className='my-4 py-4 h1  text-white text-center heading' >Our Clients</p>
                    <div className="row py-1 my-5">
                        
{
    clients.map((i)=>{
 return <div key={i} className="col-md-2 col-sm-4 m-3 py-2">
                            <div className="card bg-dark text-white">
                                 <img style={{height:'10vh',width:'100%',objectFit:'cover'}} className='card-img' src={logo512} alt="logo"/>
                                
                            </div>
                             
                        </div>
    })
}
                    </div>
                </div>
            </div>
           
                   <div className="row justify-content-center py-5" style={{borderBottom:'2px solid white'}}  id='contact'>
                <div className="col-md-9 col-sm-12">
                <p className='my-4 py-4 h1  text-white text-center heading' >Contact</p>
                    <form >
                        <div className="form-group text-white">
                        <label htmlFor="name" className='h2'>Name:</label>
                        <input type="text" className='form-control'/>
                        </div>
                        <div className="form-group text-white">
                        <label htmlFor="email" className='h2'>Email:</label>
                        <input type="email" className='form-control'/>
                        </div>
                        <div className="form-group text-white">
                        <label htmlFor="message" className='h2'>Message:</label>
                        <textarea name="message" id="message" cols="30" className='form-control' rows="10"></textarea>
                        </div>
                        <Button className='bg-primary text-white w-25 h-50 text-center '>Send</Button>
                    </form>
                </div>
                  </div>
                    <div className="row justify-content-center px-3 my-5 py-5"  id='contact'>
                <div className="col-md-3  col-sm-6">
                <p className='h4 my-5 head text-white'>Key Links</p>
                <ul className='p-0'>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text' href="#home" >Home</a></li>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text' href="#services">Services</a></li>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text' href="#clients">Clients</a></li>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text' href="#contact">Contact</a></li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                <p className='h5 my-5 head  text-white'>Key Links</p>
                <ul className='p-0'>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text ' href="#home" >Cookie Policy</a></li>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text' href="#services">Privacy Policy</a></li>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text' href="#clients">Terms of Use</a></li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                <p className='h4 my-5 head text-white'>Contact US</p>
                <div className='my-3'>
                <p className='text-white head py-2 h4 text'>Adress:</p>
                <p className=' h5 text'>house#``12.............. ,</p>
                <p className=' h5 text'>street#13......</p>
                </div>
                <div className='my-3'>
                <p className='text-white head py-2 h4'>TelePhone:</p>
                <p className=' h5 text'>For Custom Engineering</p>
                <p className=' h5 text'>T:+11111111111</p>
                   <p className=' h5 text'>For Managed Services</p>
                <p className=' h5 text'>T:+11111111111</p>
                </div>
                </div>
                <div className="col-md-3 col-sm-12">
                <p className='h4 my-5 head text-white'>Follow US</p>
                <ul className='p-0'>
                    <li className='my-3' style={{listStyle:'https://www.facebook.com/'}}><a className='h5 text' href="#home" >Facebook</a></li>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text' href="https://www.youtube.com/">Youtube</a></li>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text' href="https://www.twitter.com/">Twitter</a></li>
                    <li className='my-3' style={{listStyle:'none'}}><a className='h5 text' href="https://www.github.com/">Github</a></li>
                </ul>
                <p className='h4 my-4  head text-white'>Subscribe US</p>
              <p className='h5  text'>Subscribe Us today to receive cyber security news,updates and much more</p>
              <div>
                  <form style={{display:'flex',flexDirection:'row'}} >
           <div className="form-group my-3 text-white">
                        <input type="text w-5" placeholder='Email' className='form-control'/>
            </div>
             <Button className='bg-danger my-3 mx-2 text-white p-2 h-50 text-center '>Subscribe</Button>
                  </form>
                  <a href="#nav" style={{position:'absolute',right:'0px',bottom:'0px',marginBottom:'10rem'}}> <Button className='bg-dark m-3 p-5 text-white p-2 h-50 text-center'><i className="fa fa-arrow-up text-white"></i> </Button> </a>
              </div>
                </div>
                  </div>
            </div>
        
        
    </>
)       }
       
        </>
    )
}

export default App

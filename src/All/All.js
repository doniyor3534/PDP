import React, { useState } from 'react';
import G60 from '../Ui/G60'
import G61 from '../Ui/G61';



export const Home1 = () => {
    const [home1onof,setHome1onof]=useState(false)
    const [kurscard]=useState([
        {
            id:0,
            fannomi:'Java',
            guruhnomi:'G-60',
            ustoz:'Narzikulov Sardor',
            boshlashvaqti:'18:00',
            tugashvaqti:'20:00'
        },
        {
            id:1,
            fannomi:'Java',
            guruhnomi:'G-61',
            ustoz:'Narzikulov Sardor',
            boshlashvaqti:'18:00',
            tugashvaqti:'20:00'
        },
    ])
    const onofopen=()=>{
        setHome1onof(!home1onof)
    }
const [curstabl,setCurstabl]=useState('')
    return (
        <div>
          <h2 onClick={()=>setCurstabl('')}>Mening kurslarim</h2>
         
            <div className="onnoffkurslar">
                <button className={home1onof ? 'active':''} onClick={onofopen}>offline</button>
                <button  className={home1onof ? '':'active'} onClick={onofopen}>online</button>
            </div>
            {
                home1onof ? <h3 className="offerror">vaqtincha mavjud emas...</h3>
                :
                 
                curstabl===''?
                kurscard.map((val)=>(
                    <div className="kurscard" key={val.id} onClick={()=>setCurstabl(val.guruhnomi)}>
                    <div className="kurscardtitle">
                          <div className="kurscardheader">
                                <h4>Fan nomi <span>{val.fannomi}</span> </h4>
                                <h4>Guruh nomi <span>{val.guruhnomi}</span></h4>
                          </div><hr />
                          <div className="kurscardbody">
                               <h4>Ustoz <span>{val.ustoz}</span></h4>
                          </div><hr />
                          <div className="kurscardfooter">
                                <h4>Boshlanish vaqti <span>{val.boshlashvaqti}</span></h4>
                                <h4>Tugash vaqti <span> {val.tugashvaqti}</span></h4>
                          </div>
                    </div>
                    <span className='kurscardicon'>
                        <button className="cardicon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                                </svg>  
                        </button>
                    </span>
                </div>
                 ))
             :curstabl === 'G-60'?<G60 />:curstabl === 'G-61'?<G61/>:'jjjjfjfj'

            }
         
        </div>
    );
};
export const Home2 = () => {
    const [home2onof,setHome2onof]=useState(false)
    const [home2page,setHome2page]=useState(1)
    const [mutaxassislikmassiv]=useState([
        {
            id:0,
            titli:'Android App Developer',
            soni:2,
            img:'./img/newPdpLogo.svg',
            img2:'./img/ecma.png'
        },
        {
            id:1,
            titli:'Android App Developer',
            soni:3,
            img:'./img/newPdpLogo.svg'
        },
        {
            id:2,
            titli:'Android App Developer',
            soni:1,
            img:'./img/newPdpLogo.svg'
        },
        {
            id:3,
            titli:'Android App Developer',
            soni:2,
            img:'./img/newPdpLogo.svg',
            img2:'./img/ecma.png'
        },
        {
            id:4,
            titli:'Android App Developer',
            soni:4,
            img:'./img/newPdpLogo.svg'
        },
        {
            id:5,
            titli:'Android App Developer',
            soni:2,
            img:'./img/newPdpLogo.svg',
            img2:'./img/ecma.png'
        },
        {
            id:6,
            titli:'Android App Developer',
            soni:2,
            img:'./img/newPdpLogo.svg'
        },
    ])


    const home2onoffun=()=>{
        setHome2onof(!home2onof)
    }
   
    return (
        <div>
             <h1>Barcha kurslar</h1>
             <div className="home2control">
                 <div className="home2controlbtn">
                     <button onClick={()=>setHome2page(1)} className={home2page === 1  ? 'active' :''}>Mutaxassislik</button>
                     <button onClick={()=>setHome2page(2)}className={home2page === 2 ? 'active' :''}>Bootcamp</button>
                     <button onClick={()=>setHome2page(3)}className={home2page === 3  ? 'active' :''}>Kurslar</button>
                 </div>
                 <span className='onlineofline'>
                     <button onClick={home2onoffun} className={home2onof ?' ':'active'}>online</button> 
                     <button className={home2onof ? "inputradio active" :"inputradio"}>
                        <span></span>
                     </button>
                     <button onClick={home2onoffun} className={home2onof ?'active ':''}>insite</button>
                 </span>
             </div>
            {
                home2page === 1 ?
                <div className="mutaxassiscards">
                {
                    mutaxassislikmassiv.map((val)=>(
                        <div className="mutaxassiscard" key={val.id}>
                             <div className="left">
                                 <h3>{val.titli}</h3>
                                 <p>kurslar soni</p>
                                 <h4>{val.soni} ta</h4>
                             </div>
                             <div className="right">
                                       <button className="cardicon">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                               <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                                               </svg>  
                                       </button>
                                       <img src={val.img} alt=""  />
                                   
                             </div>
                        </div>
                    ))
                }
            </div>
            :<>
               {
                   home2page === 2 ? <h1>Bootcamp yoq .....</h1>
                   :home2page === 3 ?  <h1>Kurslar yoq....</h1>
                   :'yooqq'
               }
            </>
            }
        </div>
    );
};
export const Home3 = () => {
    return (
        <div>
             <h1>Sertifikatlarim</h1>
             <div className="sertifikatlarimcard">
                 <h1>Sizda hali Sertifikatlar mavjud emas</h1>
                    <h5><a href=".">Kurslarimizni</a> muvaffaqiyatli yakunlab sertifikatlarga ega bo'ling</h5>
                 <div className="hand">
                     {/* <img src="./img/hand.png" alt="" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-fill" viewBox="0 0 16 16">
                        <path d="M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002z"/>
                        </svg>
                 </div>
             </div>
        </div>
    );
};
export const Home4 = () => {
    return (
        <div>
             <h1>444444444Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, impedit? Optio eaque cupiditate dolores debitis odio incidunt aperiam quia consequatur illum, officiis perferendis iste amet iure eos mollitia atque officia, odit laborum accusamus quaerat. Vel nulla rem maxime repellat at blanditiis ipsa, deserunt architecto fugiat necessitatibus voluptatem odio perferendis! Nulla?</h1>
        </div>
    );
};
export const Home5 = () => {
    return (
        <div>
             <h1>555555555555Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, impedit? Optio eaque cupiditate dolores debitis odio incidunt aperiam quia consequatur illum, officiis perferendis iste amet iure eos mollitia atque officia, odit laborum accusamus quaerat. Vel nulla rem maxime repellat at blanditiis ipsa, deserunt architecto fugiat necessitatibus voluptatem odio perferendis! Nulla?</h1>
        </div>
    );
};
export const Home6 = () => {
    const [birinchiinput,setBirinchiinput]=useState(false)
    return (
        <div>
             <h1>Sozlamalar</h1>
             <form  className='sozlamalarform'>
                 <div className="avatar">
                     <div className="avatarimg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                            </svg>
                     </div>
                     <input type="file" placeholder='img' id='avatar' style={{display:'none'}}/>
                     <label htmlFor="avatar" className='avatarlabel'>Avatar uchun o'z rasmingizni yuklang</label>
                 </div>
                <div className="birinchiinput" onClick={()=>setBirinchiinput(!birinchiinput)}>
                <input type="email" placeholder='Bizning sayt uchun email yasang' id='bitinchiinput'/>
                <label htmlFor="bitinchiinput" className={birinchiinput ? 'avatarlabel birinchiinputlabel active' :'avatarlabel birinchiinputlabel'}>misol: hello@pdp.uz</label>
                </div>
                 <input type="text" placeholder='Ismingizni kiriting' />
                 <input type="text" placeholder='Familyangizni kiriting' />
                 <h3>Parol o'zgartirish</h3>
                 <input type="password" placeholder='Parolni kiriting' />
                 <input type="password" placeholder='Parolni tasdiqlang' />
                <div className="botuchuninput">
                        <label htmlFor="botuchonparol" className='botuchunlabel'>Bot uchun parol</label>
                        <input type="password" placeholder='telegram bot uchun parol kiriting'  id='botuchunparol' className='botuchunparol'/>
                        <button className="botuchunbtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                    </svg>
                        </button>
                </div>
                 <div className="avatarbtns">
                     <button className='saqlashbtn'>Saqlash</button>
                     <button  className='profilniuchirishbtn'>Profilni o'chirish</button>
                 </div>
             </form>
        </div>
    );
};
export const Home7 = () => {
    return (
        <div>
             <h1>77777777777Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, impedit? Optio eaque cupiditate dolores debitis odio incidunt aperiam quia consequatur illum, officiis perferendis iste amet iure eos mollitia atque officia, odit laborum accusamus quaerat. Vel nulla rem maxime repellat at blanditiis ipsa, deserunt architecto fugiat necessitatibus voluptatem odio perferendis! Nulla?</h1>
        </div>
    );
};

// /////////


import './Ltab.css'
import Image7 from './assets/imgs/left1.svg'
import Image8 from './assets/imgs/left2.svg'
import Image9 from './assets/imgs/film-solid.svg'
import Image10 from './assets/imgs/bookmark-solid.svg'
import Image11 from './assets/imgs/mee.jpg'


const Ltab= () =>{
    return(
        <>
          <div id="left">
              <div id="cat">
                 <img src="" alt="" />
              </div  >
 
 <div id='idd'>
   
              <div id="options">
                 <img src={Image7} alt="" />
                 <img src={Image9} alt="" />
                  <img src={Image8} alt="" />
                 <img src={Image10} alt="" /> 
              </div>

              <div id="account">
                 <img  id='account' src={Image11}  alt="" />
              </div>
</div>
          </div>
        </>
    )
}

export default Ltab;
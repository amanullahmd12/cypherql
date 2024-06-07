import Banner_Img from '../../assets/banner.png'
import './Banner.css'

function Banner() {
  return (
    <div className='mt-5 mb-5'>
        <div className="container banner">
            <img src={Banner_Img} alt="" className='img-fluid banner-img'/>
        </div>
    </div>
  )
}

export default Banner
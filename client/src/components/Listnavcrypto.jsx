// import '../styles/listcrypto.css'
import "../styles/coinComponent.css"
import white from "../assets/white-background.jpg"
import {Link} from "react-router-dom";


function ListNavCrypto(){
    let myDate = new Date()
    console.log(myDate)

    return(
        <div className="bodylistcrypto">
            <div className="boddy-coin">
            <div className="table-crypto">
            <Link className="link" to="/main">
                <button className="border-transparent text-md font-semibold mx-6">Home</button>
            </Link>
            <p>{new Date().toString()}</p>
        <div className="pembungkus-coin-container">
          <div className='coin-container'>
          <div className='coin-row' >
                    <div className='coin'>
                    <img src={white} alt="" />
                        <h1>Name</h1>
                        <p className='coin-symbol'>ID</p>
                    </div>
                    <div className='coin-data'> 
                        <p className='coin-price'> Current Prize</p>
                        <p className='coin-volume'>Market Cap</p>
                        <p className='coin-percent re'>Price Change</p>
                    </div>
              </div>
              </div>
              </div>
        </div>
        </div>
        </div>
    )
}

export default ListNavCrypto;
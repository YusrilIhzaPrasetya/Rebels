import CoinsAPI from "../components/CoinsAPI";
import ListNavCrypto from "../components/Listnavcrypto"

function Crypto(){
    return(
    <div>
        <div className="pagemain">
            <div className="bodymain">
                <div className="mainconten">
                    <ListNavCrypto/>
                    <CoinsAPI />
                </div>
            </div>
        </div>
     </div>
    )
}

export default Crypto;
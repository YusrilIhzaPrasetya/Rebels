import axios from '../axios';
import React,{useState} from 'react'

function ModalCreate({closeModal, listen, setListen}) {

    const[tipe,setTipe]=useState(null)
    const[simpanGambar, setSimpanGambar]=useState([])
    const[data, setData]=useState({topik : "", nominal : null, keterangan : "", tanggal : "", tipedata : null})
    const[image, setImage] = useState("")

    const token = localStorage.getItem("token")

    const nonFileChange = (e) => {
        let uploaded = e.target.files[0]
        setSimpanGambar(uploaded)
        console.log(simpanGambar)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        if(!simpanGambar){
            alert("UPLOAD GAMBAR DULU")
        }else{
            let formData = new FormData();
            formData.append("myFile", simpanGambar);
            console.log("ini Imputan gambaran",simpanGambar)
            formData.append("topik", data.topik.value);
            formData.append("nominal", data.nominal.value);
            formData.append("tanggal", data.tanggal.value);
            formData.append("keterangan", data.keterangan.value);
            formData.append("tipedata", tipe);
            try {
                const pictureUpload = async () => {
                  console.log("data image", formData);
                  await axios
                    .post("/uploadfile", formData, {
                      headers: {
                        "Content-Type": "multipart/form-data",
                        token: token,
                      },
                    })
                    .then((res) => {
                      console.log("ini Response", res);
                      const gambar = res.data.file;
                      localStorage.setItem("img", JSON.stringify(gambar));
                      setSimpanGambar(null);
                      setImage(gambar);
                    });
                };
                pictureUpload();
              } catch (error) {
                console.log(error);
              }
        }
    }

    const onChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
    

    const tambahData =async(event)=>{
        event.preventDefault()
        let topik = event.target.topik.value;
        let nominal = event.target.nominal.value;
        let tanggal = event.target.tanggal.value;
        let foto = event.target.foto.value;
        let keterangan = event.target.keterangan.value;
        let tipedata = tipe;



    const data = {
        topik : topik,
        nominal : nominal,
        tanggal : tanggal,
        foto : foto,
        keterangan : keterangan,
        tipedata : tipedata,

    }


    const item = localStorage.getItem("token")

    const result = await axios({
        headers : {
            token : item
        },
        method : "POST",
        url : "http://localhost:4000/datatable",
        data : data
    }) 
    

    setListen(listen+1)
    closeModal(false)
    }

    return (
        <div className="fixed w-screen h-screen bg-black top-0 left-0 flex justify-center items-center bg-opacity-40">
            <div className="fixed p-6 w-1/3 bg-white drop-shadow-xl rounded-xl">
                <div className="flex flex-row-reverse mr-3">
                    <button className="font-bold mb-4 text-red-300" onClick={()=>{
                        closeModal(false)
                    }}>X</button>
                </div>
                <form onSubmit={tambahData} action="/uploadfile" enctype="multipart/form-data" method="POST" className="flex flex-col">
                    <input type="text" onChange={onChange} placeholder="Topic" name="topik" className="bg-black bg-opacity-10 border-none drop-shadow-xl p-2 rounded-lg my-2"/>
                    <input type="text" onChange={onChange} placeholder="Nominal" name="nominal" className="bg-black bg-opacity-10 border-none drop-shadow-xl p-2 rounded-lg mb-2"/>
                        <div>
                            <input type="date" onChange={onChange} name="tanggal" className="bg-black bg-opacity-10 border-none drop-shadow-xl p-2 rounded-lg mb-2"/>
                            <input type="file" accept="image/*" onChange={nonFileChange} name="foto" className="mb-4 mt-2"/>
                        </div>
                            <textarea placeholder="Keterangan" onChange={onChange} name="keterangan" className="bg-black bg-opacity-10 border-none drop-shadow-xl h-32 p-2 rounded-lg mb-2"></textarea>
                            <p className="text-sm my-2 text-gray-500" name = "myFile">Catat sebagai</p>
                    <div>
                        <button onClick={()=>setTipe("pemasukan")} className="py-2 px-6 mr-5 rounded-lg border-transparent bg-green-500 text-white">Pemasukan</button>
                        <button onClick={()=>setTipe("pengeluaran")} className="py-2 px-6 rounded-lg border-transparent bg-red-500 text-white">Pengeluaran</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalCreate

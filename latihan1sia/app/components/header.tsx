import foto from "../me.jpg";
import Header from "./header";

export default function header(){
  return(
     <div className="container mx-auto p-2 text-center">
          <h1 className="text-black-300 font-bold">CV Online</h1>
          <h2 className="text-3xl">Alma Sulmainah</h2>
          <Profile />
          <p>
            Saya adalah seorang Content Creator di bidang health, fashion, dan edukasi.
            Saya senang bersosialisasi, berorganisasi, serta senang mencoba banyak hal-hal baru. 
            Selain itu, saya juga banyak mengikuti kegiatan yang bisa menunjang karir saya ke depannya seperti pelatihan, seminar, dan lain sebagainya.
          </p>
        </div>
  )
  function Profile() {
    return <img src={foto.src} alt="Alma Sulmainah" className="almaclass" />;
  }
}
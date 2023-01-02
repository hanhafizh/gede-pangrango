import Cardjalur from "./Cardjalur"
import Cardkegiatan from "./Cardkegiatan"
import Hero from "./Hero"
import putri from "./../assets/putri.jpg"
import salabintana from "./../assets/salabintana.jpg"
import cibodas from "./../assets/cibodas.jpg"
import cisaat from "./../assets/cisaat.jpg"
import berita1 from "./../assets/berita1.jpg"
import berita2 from "./../assets/berita2.jpg"
import berita3 from "./../assets/berita3.jpg"

const MainContent = () => {
    return (
       <div>
        <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jalur Resmi</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                        <div className="col-lg-3 col-12 mb-3">
                            <Cardjalur judul={"Jalur Putri"} image={putri} keterangan={"Merupakan jalur tercepat hingga 2-3 jam lebih cepat dari jalur lainnya. Rata-rata pendaki yang melalui jalur Putri bisa sampai dalam 7 jam, sedangkan via Cibodas membutuhkan waktu hingga 10 jam."}/>
                        </div>
                        <div className="col-lg-3 col-12 mb-3">
                            <Cardjalur judul={"Jalur Salabintana"} image={salabintana} keterangan={"Alur Pendakian Gunung Gede Pangrango via Selabintana merupakan jalur terpanjang dengan jarak tempuh dari pintu masuk resort Selabintana hingga Alun-alun Suryakencana sekitar 14 km (14,5 km ke puncak Gede)."}/>
                        </div>
                        <div className="col-lg-3 col-12 mb-3">
                            <Cardjalur judul={"Jalur Cibodas"} image={cibodas} keterangan={"Pendakian Gunung Gede Pangrango via jalur Cibodas adalah jalur utama dan paling favorit bagi para pendaki. Lokasi Cibodas ada di kabupaten Cianjur, Jawa Barat. Untuk menuju basecamp Cibodas atau pintu masuk pendakian"}/>
                        </div>
                        <div className="col-lg-3 col-12 mb-3">
                            <Cardjalur judul={"Jalur Cisaat"} image={cisaat} keterangan={"Pendakian via jalur cisaat adalah jarang terjadi jalur cisaat ini merupakan jalur yang sempit dan jarang di lewati oleh pendaki, jalur ini tidak di rekomendasikan untuk pemula dikarenakan jalan penuh hewan - hewan dan pacet."}/>
                        </div>
                        
                </div>

                <div className="row mb-5">
                    <div className="col-12 text-center my-5">
                        <h1>Berita</h1>
                    </div>
                    <div className="col-12 mb-4">
                        <Cardkegiatan image={berita1} berita={"Usai gempa bumi berkekuatan magnitudo 5,6 mengguncang wilayah Cianjur, Jawa Barat (Jabar), dan sekitarnya, pada Senin (21/11/2022) sekitar pukul 13.21 WIB, beredar kabar bahwa Gunung Gede Pangrango mengalami erupsi."}/>
                    </div>
                    <div className="col-12 mb-4">
                        <Cardkegiatan image={berita2} berita={"Cianjur juga punya sederet tembang Sunda yang sedih-sedih. Tembang cianjuran yang bisa bikin pendengarnya mewek. Sebut saja beberapa tembang seperti Panglipur Manah, Sedih Pati Panyiptaan, Laras Pati Sekar Mawar, dan Ayun Ambing yang hingga kini masih disukai masyarakat."}/>
                    </div>
                    <div className="col-12 mb-4">
                        <Cardkegiatan image={berita3} berita={"Sejumlah warga kaki gunung Gede Pangrango lereng selatan di Pondok Halimun (PH) Desa Perbawati, Kecamatan/Kabupaten Sukabumi, Jawa Barat dikagetkan guncangan gempa pada Sabtu (3/12/2022) pukul 16:49 WIB."}/>
                    </div>
                </div>

            </div>
       </div>
    )
}
export default MainContent
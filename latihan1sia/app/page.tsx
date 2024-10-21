import RowRiwayat from "./components/rowRiwayat";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import Header from "./components/header";
import RiwayatKerja from "./components/riwayatKerja";
import ColorPicker from "./components/colorPicker";
import foto from "./me.jpg";
import "./alma.css";
import InputKuis from "./components/inputKuis";
import ContactMe from "./components/contactMe";



export default function Gallery() {
  return (
    <section>
      <Header />
      <RiwayatPendidikan />
      <RiwayatKerja />
      <ColorPicker />
    </section>
  );
}

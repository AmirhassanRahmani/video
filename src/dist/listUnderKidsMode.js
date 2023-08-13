import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LockIcon from "@mui/icons-material/Lock";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const listsUnderKidsMode = [
  {
    title: "Langganan dan Pembelian",
    icon: <ArrowForwardIosIcon className="!text-[1.2rem]" />,
    click: "Langganan",
    parags: [
      {
        parag: "Berlangganan Premier",
      },
      {
        parag: "Paket Aktif",
      },
    ],
  },
  {
    title: "Promo Voucher",
    icon: <ArrowForwardIosIcon className="!text-[1.2rem]" />,
    click: "Promo",
    parags: [
      {
        parag: "Promo",
      },
      {
        parag: "Gunakan Kode Voucher",
      },
    ],
  },
  {
    title: "Library Saya",
    icon: <ArrowForwardIosIcon className="!text-[1.2rem]" />,
    click: "Library",
    parags: [
      {
        parag: "Daftarku",
      },
      {
        parag: "Dibeli",
      },
      {
        parag: "Dibeli",
      },
      {
        parag: "Mengikuti",
      },
      {
        parag: "Riwayat Tontonan",
      },
    ],
  },
  {
    title: "Hubungkan ke TV",
    icon: <LockIcon className="!text-[1.1rem] !text-gray-500" />,
  },
  {
    title: "Undang Teman",
    icon: <LockIcon className="!text-[1.1rem] !text-gray-500" />,
  },
  {
    title: "Bantuan dan Lainnya",
    icon: <ArrowForwardIosIcon className="!text-[1.2rem]" />,
    click: "Bantuan",
    parags: [
      {
        parag: "Pengecekan Jaringan",
      },
      {
        parag: "Pusat Bantuan",
      },
      {
        parag: "Ketentuan Penggunaan",
      },
      {
        parag: "Karir",
      },
      {
        parag: "Bahasa",
        icon: <KeyboardArrowRightIcon />,
      },
    ],
  },
  {
    title: "Blog",
  },

];

export default listsUnderKidsMode;

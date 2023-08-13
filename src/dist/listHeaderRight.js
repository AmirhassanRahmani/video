import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import download from "../images/download.svg";

const listHeaderRight = [
  {
    icon: <MenuOutlinedIcon className="!text-[1.7rem]" />,
  },
  {
    icon: <NotificationsNoneOutlinedIcon className="!text-[1.7rem]" />,
    param: "notif",
  },
  {
    icon: <SearchOutlinedIcon className="!text-[1.7rem]" />,
    param: "search",
  },
  {
    icon: download,
  },
];
export default listHeaderRight;

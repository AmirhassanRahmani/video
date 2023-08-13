import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import listNotif from "../../dist/listNotif";
import listMessageNotif from "../../dist/listMessageNotif";
import './Notif.css'

const Notif = () => {
  const navigate = useNavigate();

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="notif" onLoad={handleToTop}>
      <div className="sticky top-0 left-0 bg-white z-20">
        <div className="header py-1 shadow-sm pl-4 bg-white">
          <div className="notifArrowAndNotifText flex items-center gap-1">
            <ArrowBackIcon
              className="!text-[1.8rem]"
              onClick={() => navigate("/")}
            />
            <span className="font-bold text-[1.4rem]">Notifikasi</span>
          </div>
        </div>

        <div className="navNotif flex items-center gap-2 py-3 shadow-sm overflow-x-auto w-[75%] mx-auto">
          {listNotif.map((item, index) => (
            <div className="flex items-center gap-2 bg-gray-300 px-2 py-1 rounded-full">
              {item.img && (
                <span className="w-[1.1rem] h-[1.1rem]">
                  <img
                    src={item.img}
                    alt={item.index}
                    className="w-full h-full object-fill"
                  />
                </span>
              )}
              <span className="text-[0.8rem] text-gray-700 font-semibold">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="messagesNotif">
        {listMessageNotif.map((item, index) => (
          <div className="messageInfo flex gap-2 shadow-md mb-4 p-4">
            <div className="left w-[1.6rem] h-[1.6rem]">
              <img src={item.img} alt={index} />
            </div>
            <div className="right">
              <div className="head font-bold text-[.85rem]">{item.head}</div>
              <div className="main text-[.85rem] font-semibold">
                {item.main}
              </div>
              <div className="footer text-gray-400 text-[.65rem]">
                {item.footer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notif;

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import listSearch from "../../dist/listSearch";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div onLoad={handleToTop} className="search py-4">
      <div className="header pr-4 pl-3 pb-2 border-b border-solid border-gray-200 ">
        <div className="inputAndIcon flex items-center justify-between">
          <ArrowBackIcon
            className="!text-[2rem]"
            onClick={() => navigate("/video")}
          />
          <input
            type="text"
            placeholder="Cari judul, genre, atau nama"
            className="bg-gray-200 p-2 pl-8 rounded-[8px] w-[80%]"
          />
        </div>
      </div>
      <div className="footer">
        <div className="pupolar text-[#999] font-bold p-4">
          Pencarian populer
        </div>
        <div className="searchPupolar">
          {listSearch.map((item, index) => (
            <div className="searchItem flex items-center gap-[1rem] p-4">
              <span>{item.icon}</span>
              <span className="text-[#1e1e1e]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

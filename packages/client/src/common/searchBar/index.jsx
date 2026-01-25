import { FaSearch } from "react-icons/fa";

import InputField from "../form-inputs/InputField";

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className="search">
      <InputField
        type="text"
        value={value}
        className={className}
        placeholder={placeholder}
        prefixIcon={<FaSearch />}   
        autoFocus
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;

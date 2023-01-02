import { TextField } from "@material-ui/core";
import { debounce } from "lodash";

interface SearchProps {
    label: string;
    onChange: (keyword: string) => void;
}

const Search = ({ label, onChange }: SearchProps) => {
    const performSearch = debounce((keyword: string) => {
        onChange(keyword);
    }, 700);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        performSearch(e.target.value);
    };
    return <TextField style={{ marginBottom: "8px" }} variant="outlined" fullWidth id="app-search-section" label={label} onChange={handleChange} />;
};

export default Search;

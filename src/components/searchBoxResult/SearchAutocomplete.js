import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import styles from "./SearchAutocomplete.module.css";
import * as data from "../../data";
const Input = styled("input")(({ theme }) => ({
  width: 300,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.paper),
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 300,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.background.paper,
  overflow: "auto",
  maxHeight: 300,
  border: "1px solid rgba(0,0,0,.25)",
  '& li[data-focus="true"]': {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

export default function UseAutocomplete() {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: data.products,
    getOptionLabel: (option) => option.name,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <Input
          {...getInputProps()}
          placeholder="Search..."
          className={`border-0 ${styles.inputCustomize}`}
        />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <Link
                to={`/products/${option.name}`}
                className={`d-flex justify-content-between align-items-center my-2 text-reset text-decoration-none ${styles.LinkHover}`}
              >
                <span className="col-9 text-left d-block">{option.name}</span>

                <img
                  className="col-3 d-block"
                  src={option.image}
                  alt={option.name}
                />
              </Link>
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

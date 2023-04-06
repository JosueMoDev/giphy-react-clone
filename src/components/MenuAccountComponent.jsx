import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogOut } from "../store/auth";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "white",
    backgroundColor: "#3E3E3E",
    boxShadow:
      "rgb(rgb(55, 65, 81)) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 8,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));
export const MenuAccountComponent = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(startLogOut());
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-fit h-fit  flex">
        <div className="bg-[#525252] w-fit h-fit rounded-sm p-1.5 flex justify-center align-middle">
          <PersonIcon className="text-white  roundered-md" />
        </div>
        <button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="bg-[#3E3E3E] font-semibold w-full text-sm h-fit rounded-r-sm flex justify-items-center align-middle p-2 text-white px-6"
        >
          Log in
        </button>
      </div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            startCleaningSearch();
            navigate("/favorites");
          }}
          disableRipple
        >
          Favorites
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            handleClose();
            onLogOut();
          }}
          disableRipple
        >
          Log Out
        </MenuItem>
      </StyledMenu>
    </div>
  );
};
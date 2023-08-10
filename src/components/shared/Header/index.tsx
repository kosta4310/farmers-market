import { FC } from "react";
import NavContacts from "./NavContacts";
import UserBar from "./UserBar";
import NavCategories from "./NavCategories";

const Header: FC = () => {
  return (
    <>
      <NavContacts />
      <UserBar />
      <NavCategories />
    </>
  );
};

export default Header;

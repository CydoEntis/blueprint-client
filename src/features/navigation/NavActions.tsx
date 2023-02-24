import { staggerVariants } from "@/animation-variants/variants";
import { MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import NavBtn from "@/features/navigation/NavBtn";
import { useAppDispatch } from "@/store/store";
import { logoutUser } from "@/store/features/userSlice";
import { useNavigate } from "react-router-dom";

const MobileNavActions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    console.log("Logout")
    dispatch(logoutUser());
    navigate("/login");
  }
  return (
    <motion.div
      variants={staggerVariants}
      className="justify-centerpt-8 flex w-full py-5 text-lg"
    >
      <NavBtn
        className="mr-3 flex w-full items-center justify-center  px-5 text-grey-40"
        onClick={handleLogout}
      >
        <MdLogout className="mr-2 h-5 w-5" />
        Log out
      </NavBtn>
      {/* <NavBtn
        className="mr-3 flex w-1/2 items-center justify-center border-r border-grey-40 px-5 text-grey-40"
        onClick={() => console.log("Clicked")}
      >
        <MdLogin className="mr-2 h-7 w-7" />
        Log in
      </NavBtn>
      <NavBtn
        className="mr-3 flex w-1/2 items-center justify-center px-5 text-grey-40"
        onClick={() => console.log("Clicked")}
      >
        <BiUserPlus className="mr-2 h-7 w-7" />
        Register
      </NavBtn> */}
    </motion.div>
  );
};

export default MobileNavActions;

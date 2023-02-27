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
    dispatch(logoutUser());
    navigate("/login");
  }
  return (
    <motion.div
      variants={staggerVariants}
      className="justify-centerpt-8 flex w-full py-5 text-lg"
    >
      <NavBtn
        className="mr-3 flex w-full items-center justify-center  px-5 text-grey-40 dark:text-off-white"
        onClick={handleLogout}
      >
        <MdLogout className="mr-2 h-5 w-5" />
        Log out
      </NavBtn>
    </motion.div>
  );
};

export default MobileNavActions;

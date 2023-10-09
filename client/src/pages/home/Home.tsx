import { Features, Foods, Footer, Header, Navbar } from "@/sections";
import { useAppDispatch, useAppSelector } from "@/store";
import { closeModal } from "@/store/slices/modalSlice";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  return (
    <div onClick={() => isOpen && dispatch(closeModal())}>
      <Header />
      <Foods />
      <Features />
    </div>
  );
};

export default Home;

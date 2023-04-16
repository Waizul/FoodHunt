import { Foods, Header } from "@/sections";

type Props = {};

const Home = (props: Props) => {
	return (
		<div>
			<Header />
			<Foods />
		</div>
	);
};

export default Home;

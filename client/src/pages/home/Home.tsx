import { Features, Foods, Header } from "@/sections";

type Props = {};

const Home = (props: Props) => {
	return (
		<div>
			<Header />
			<Foods />
			<Features />
		</div>
	);
};

export default Home;

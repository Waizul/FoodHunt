import { Box } from "@mui/material";
import bg from "@/assets/bannerbackground.png";
import { Search } from "@/components";

type Props = {};

const Header = (props: Props) => {
	return (
		<section>
			<Box
				sx={{
					display: "grid",
					placeItems: "center",
					position: "relative",
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: "40vh",
					}}
				>
					<img
						src={bg}
						alt='background'
						style={{
							width: "100%",
							margin: "auto",
							objectFit: "cover",
							height: "100%",
						}}
					/>
				</Box>
				<Box
					sx={{
						position: "absolute",
					}}
				>
					<Search />
				</Box>
			</Box>
		</section>
	);
};

export default Header;

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { features } from "@/data.js";

const Features = () => {
	const theme = useTheme();
	return (
		<section className='section'>
			<Box
				sx={{
					paddingInline: theme.breakpoints.down("laptop") && 2,
					display: "grid",
					placeItems: "center",
				}}
			>
				<Typography
					variant='h1'
					component={"div"}
					sx={{ mt: 10, mb: 5, width: 1, textAlign: "left" }}
					color={theme.palette.primary[800]}
				>
					Why choose us
				</Typography>

				<Box sx={{ flexGrow: 1, overflow: "hidden" }}>
					<Grid2
						container
						spacing={{ mobile: 8, laptop: 3 }}
						columns={{ mobile: 4, tablet: 8, laptop: 12 }}
					>
						{features.map((feature: Feature) => (
							<Grid2 mobile={4} tablet={4} laptop={4} key={feature.title}>
								<>
									<Box
										sx={{
											width: "70%",
											mb: 2,
										}}
									>
										<img
											src={feature.image}
											alt={feature.title}
											width={200}
											height={200}
											style={{
												objectFit: "contain",
												justifySelf: "flex-start",
											}}
										/>
									</Box>
									<Typography variant='h3' mb={1}>
										{feature.title}
									</Typography>
									<Typography variant='body2'>{feature.desc}</Typography>
								</>
							</Grid2>
						))}
					</Grid2>
				</Box>
			</Box>
		</section>
	);
};

export default Features;

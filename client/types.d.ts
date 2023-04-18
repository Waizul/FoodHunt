type Category = {
	breakfast: string;
	lunch: string;
	dinner: string;
};

type Item = {
	id: number;
	title: string;
	desc: string;
	category: string;
	image: string;
	ingredients: string[];
};

type Menu = {
	open: boolean;
	anchorEl: HTMLElement | null;
	handleClose: () => void;
	handleClick: (event: React.MouseEvent<HTMLElement>) => void;
};

type Feature = {
	title: string;
	desc: string;
	imgage: string;
};

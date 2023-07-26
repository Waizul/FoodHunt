type CategoryType = {
	breakfast: string;
	lunch: string;
	dinner: string;
};

type ItemType = {
	id: number;
	title: string;
	desc: string;
	category: string;
	image: string;
	ingredients: string[];
	price: number;
};

type CartItemType = {
    id: number;
    title: string;
    price: number;
    desc: string;
    image: string;
    qty: number;
}

type MenuType = {
	open: boolean;
	anchorEl: HTMLElement | null;
	handleClose: () => void;
	handleClick: (event: React.MouseEvent<HTMLElement>) => void;
};

type FeatureType = {
	title: string;
	desc: string;
	image: string;
};

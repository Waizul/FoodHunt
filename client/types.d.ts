type CategoryType = {
	breakfast: string;
	lunch: string;
	dinner: string;
};

type ItemType = {
	_id: number;
	title: string;
	desc: string;
	type: string;
	imgUrl: string;
	ingredients: string[];
	price: number;
};

type CartItemType = {
    _id: number;
    title: string;
    price: number;
    imgURL: string;
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

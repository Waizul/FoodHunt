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
};

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

type UserType = {
  username: string;
  email: string;
  photoURL: string;
};

type ListItemsType = {
  id: number;
  title: string;
  icon: string;
  url: string;
};
type MenusType = {
  id: number;
  title: string;
  listItems: ListItemsType[];
};

type UserInputType = {
  name: string;
  email: string;
  phoneNumber: string | number;
  houseNo: string;
  street: string;
  district: string;
  extraInfo: string;
};

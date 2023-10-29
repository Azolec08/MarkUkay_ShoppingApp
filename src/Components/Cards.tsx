import { useState, useContext } from "react";
// import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import { Currency } from "../utilities/Currency";
import { useUserStore } from "../Store/userStore";
import { shopContext } from "../Context/ShopContext";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface allItems {
  id: number;
  productName: string;
  price: number;
  image: string;
  info: string;
}

export default function RecipeReviewCard({
  id,
  productName,
  price,
  image,
  info,
}: allItems) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { incrementCount, handleFavoriteCount, handleFavoriteMinusCount } =
    useUserStore((state) => state);

  const { addToCart, cartItems } = useContext(shopContext);

  const [state, setState] = useState({
    getQuantity: 0,
    favorite: false,
  });

  const { getQuantity, favorite } = state;

  const handleGetQuantity = () => {
    setState({ ...state, getQuantity: getQuantity + 1 });
    incrementCount();
    addToCart(id);
  };

  const handleFavorite = () => {
    if (!favorite) {
      handleFavoriteCount();
      setState({ ...state, favorite: true });
    }
  };

  const handleCancelOnClick = () => {
    setState({ ...state, favorite: false });
    handleFavoriteMinusCount();
  };

  return (
    <div className="flex justify-center py-2 h-fit">
      <Card className="w-40 md:w-60">
        <CardHeader
          avatar={<Avatar src={image}></Avatar>}
          title={productName}
          subheader={Currency(price)}
        />
        <div className="p-1">
          <img src={image} alt="" className="w-full h-20 md:h-28" />
        </div>
        <CardContent>
          <Typography variant="body2" className="flex justify-center h-1">
            {cartItems[id] === 0 ? (
              <div>
                <Button
                  variant="contained"
                  className="bg-blue-500 w-30 text-xs"
                  onClick={handleGetQuantity}
                >
                  <span className="text-xs">Add to cart</span>
                </Button>
              </div>
            ) : (
              <div>
                <div className="flex flex-col  items-center">
                  <Button
                    variant="contained"
                    className="bg-red-500 hover:bg-red-600 w-30"
                  >
                    <span className="text-xs">thank you</span>
                  </Button>
                </div>
              </div>
            )}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleFavorite}>
            <FavoriteIcon className={favorite ? "text-red-500" : ""} />
          </IconButton>

          {favorite ? (
            <IconButton
              className="hover:text-blue-500 transition duration-500"
              aria-label="add to favorites"
              onClick={handleCancelOnClick}
            >
              <CancelIcon />
            </IconButton>
          ) : null}

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className="text-justify text-xs">{info}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Box, Grid2, Stack, styled, Typography } from "@mui/material";
import AddCart from "@/components/AddCart";
import QuickModal from "@/components/Modals/QuickModal";
import PriceBox from "@/components/PriceBox";
import { usePriceImg } from "@/hooks/usePriceImg";
import { Product } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import Packages from "@/ui/Packages";
import Gallery from "./Gallery";
import { GoodChip } from "@/components/Good/styles";
import noPhoto from "@/assets/no-photo.svg";

type ProductCardProps = {
  good: Product;
};

// Styles
const ImageBox = styled(Box)(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 320,
  position: "relative",
  "& img": {
    display: "block",
    maxHeight: "260px",
  },
}));

const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { good } = props;
  const [quickModal, setQuickModal] = useState<boolean>(false);

  const { choosePack, currentPack } = usePriceImg({
    defaultPack: good.defaultPack,
    packs: good.relatedPacks,
  });

  const isSale = good.relatedPacks.some((el) => el.oldPrice !== null);

  return (
    <>
      <Grid2 container spacing={6}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <ImageBox>
            {currentPack.img ? (
              <Gallery
                img={currentPack.img}
                title={`${good.title}. Упаковка: ${currentPack}`}
              />
            ) : (
              <img src={noPhoto.src} alt="" />
            )}
            <Stack
              direction="row"
              alignItems="center"
              sx={{ position: "absolute", right: 2, top: 4 }}
            >
              {good.hit && <GoodChip color="warning" label="hit" />}
              {isSale && <GoodChip color="error" label="sale" />}
              {good.new && <GoodChip color="primary" label="new" />}
            </Stack>
          </ImageBox>
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Typography variant="body1" component="div" sx={{ mb: 6 }}>
            Код товара: <b>{good.art}</b>
          </Typography>

          <PriceBox
            price={currentPack.price}
            oldprice={currentPack.oldPrice}
            size="large"
            sx={{ mb: 6 }}
          />

          <Packages
            currentPackID={currentPack.id}
            handler={choosePack}
            packs={good.relatedPacks}
          />

          <Stack direction="row">
            <AddCart
              el={good}
              pack={currentPack.pack.name}
              price={currentPack.price}
              img={currentPack.img}
            />
            <CustomBtn
              onClick={() => setQuickModal(true)}
              color="secondary"
              variant="outlined"
              sx={{ ml: 4 }}
            >
              Быстрый заказ
            </CustomBtn>
          </Stack>

          <p>Какой-то текст или информация о доставке</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            adipisci eius necessitatibus, est unde consequuntur!
          </p>
        </Grid2>
      </Grid2>

      <QuickModal
        show={quickModal}
        close={() => setQuickModal(false)}
        productId={good.id}
      />
    </>
  );
};

export default ProductCard;

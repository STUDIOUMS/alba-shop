"use client";

import { usePriceImg } from "@/hooks/usePriceImg";
import { useAppStore } from "@/store/useAppStore";
import { Product } from "@/types";
import Packages from "@/ui/Packages";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import AddCart from "../AddCart";
import PriceBox from "../PriceBox";
import { GoodChip, GoodImage, GoodItem, GoodItemTitle } from "./styles";
import noPhoto from "@/assets/no-photo.svg";

type GoodProps = {
  el: Product;
  slide?: boolean;
};

const Good = (props: GoodProps): JSX.Element => {
  const { el, slide } = props;
  const { view } = useAppStore();
  const isGrid = view === "grid";

  const { choosePack, currentPack } = usePriceImg({
    defaultPack: el.defaultPack,
    packs: el.relatedPacks,
  });

  const isSale = el.relatedPacks.some((el) => el.oldPrice !== null);

  const condition1 = slide ? "normal !important" : isGrid ? "normal" : "center";
  const condition2 = slide ? "column !important" : isGrid ? "column" : "row";

  return (
    <GoodItem
      size={
        slide
          ? "auto"
          : {
              xs: 12,
              sm: view === "grid" ? 4 : 12,
            }
      }
      sx={{
        height: slide ? "100%" : "auto",
        alignItems: condition1,
        flexDirection: condition2,
      }}
    >
      <Stack
        sx={{
          flexGrow: 1,
          mb: 4,
          flexDirection: condition2,
          alignItems: condition1,
        }}
      >
        <GoodImage sx={{ mb: 4, minWidth: view === "list" ? 140 : 0 }}>
          <Link href={`/product/${el.slug}`}>
            {currentPack.img ? (
              <img src={currentPack.img} alt="" />
            ) : (
              <img src={noPhoto.src} alt="" style={{ height: 90 }} />
            )}
          </Link>
        </GoodImage>
        <GoodItemTitle>
          <Link href={`/product/${el.slug}`}>{el.title}</Link>
        </GoodItemTitle>
      </Stack>

      <Box sx={{ minWidth: view === "list" ? 220 : 0 }}>
        <Stack direction="row" alignItems="center" sx={{ mb: 3 }}>
          {el.hit && <GoodChip color="warning" label="hit" />}
          {isSale && <GoodChip color="error" label="sale" />}
          {el.new && <GoodChip color="primary" label="new" />}
        </Stack>

        <PriceBox
          price={currentPack.price}
          oldprice={currentPack.oldPrice}
          sx={{ mb: 3 }}
        />

        <Packages
          currentPackID={currentPack.id}
          handler={choosePack}
          packs={el.relatedPacks}
        />
      </Box>

      <AddCart
        el={el}
        img={currentPack.img}
        pack={currentPack.pack.name}
        price={currentPack.price}
      />
    </GoodItem>
  );
};

export default Good;

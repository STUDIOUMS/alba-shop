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
import Image from "next/image";
import { isSaleDefine } from "@/utils/helpers";

type GoodProps = {
  el: Product;
  slide?: boolean;
};

const Good = (props: GoodProps): JSX.Element => {
  const { el, slide } = props;
  const { view } = useAppStore();
  const isGrid = view === "grid";
  const isSale = isSaleDefine(el.relatedPacks);

  const { choosePack, currentPack, noPack } = usePriceImg({
    defaultPack: el.defaultPack,
    packs: el.relatedPacks,
  });

  const conditionAI = slide
    ? "normal !important"
    : isGrid
    ? "normal"
    : "center";
  const conditionFD = slide ? "column !important" : isGrid ? "column" : "row";
  const conditionMB = slide ? 6 : view === "list" ? 0 : 6;
  const conditionMW = slide ? 0 : view === "list" ? 120 : 0;

  return (
    <GoodItem
      size={
        slide
          ? "auto"
          : {
              xs: 12,
              sm: view === "grid" ? 6 : 12,
              md: view === "grid" ? 4 : 12,
            }
      }
      sx={{
        height: slide ? "100%" : "auto",
        alignItems: conditionAI,
        flexDirection: conditionFD,
      }}
    >
      <Stack
        sx={{
          flexGrow: 1,
          mb: conditionMB,
          flexDirection: conditionFD,
          alignItems: conditionAI,
        }}
      >
        <GoodImage
          sx={{
            mb: conditionMB,
            minWidth: conditionMW,
          }}
        >
          <Link href={`/product/${el.slug}`}>
            {currentPack.img ? (
              <Image
                src={currentPack.img}
                alt=""
                width={120}
                height={120}
                style={{ objectFit: "contain" }}
              />
            ) : (
              <Image src={noPhoto.src} alt="" width={90} height={90} />
            )}
          </Link>
        </GoodImage>
        <GoodItemTitle>
          <Link href={`/product/${el.slug}`}>{el.title}</Link>
        </GoodItemTitle>
      </Stack>

      <Box sx={{ minWidth: view === "list" ? 220 : 0 }}>
        <Box sx={{ position: "absolute", right: 3, top: 6 }}>
          {el.hit && <GoodChip color="warning" label="hit" />}
          {isSale && <GoodChip color="error" label="sale" />}
          {el.new && <GoodChip color="primary" label="new" />}
        </Box>

        {!noPack && (
          <>
            <PriceBox
              price={Number(currentPack.price)}
              oldprice={Number(currentPack.oldPrice)}
              sx={{ mb: 3 }}
            />

            <Box sx={{ mb: conditionMB }}>
              <Packages
                currentPackID={currentPack.id}
                handler={choosePack}
                packs={el.relatedPacks}
              />
            </Box>
          </>
        )}
      </Box>

      <AddCart
        el={el}
        img={currentPack.img}
        pack={currentPack.pack.name}
        price={Number(currentPack.price)}
        small
        noPack={noPack}
      />
    </GoodItem>
  );
};

export default Good;

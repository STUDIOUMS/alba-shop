"use client";

import { useState } from "react";
import {
  Box,
  Grid2,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
import CustomTabPanel from "@/ui/CustomTabPanel";
import Attributes from "./Attributes";
import CustomTab from "@/ui/CustomTab";
import { AlertCourier, AlertDelivery, AlertPickup } from "@/components/Alerts";

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { good } = props;
  const [quickModal, setQuickModal] = useState<boolean>(false);
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { choosePack, currentPack } = usePriceImg({
    defaultPack: good.defaultPack,
    packs: good.relatedPacks,
  });

  const isSale = good.relatedPacks.some((el) => el.oldPrice !== null);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
            price={Number(currentPack.price)}
            oldprice={Number(currentPack.oldPrice)}
            size="large"
            sx={{ mb: 6 }}
          />

          <Box sx={{ mb: 6 }}>
            <Packages
              currentPackID={currentPack.id}
              handler={choosePack}
              packs={good.relatedPacks}
            />
          </Box>

          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
          >
            <AddCart
              el={good}
              pack={currentPack.pack.name}
              price={Number(currentPack.price)}
              img={currentPack.img}
            />
            <CustomBtn
              onClick={() => setQuickModal(true)}
              color="secondary"
              variant="outlined"
              sx={{ ml: isMobile ? 0 : 4, mt: isMobile ? 4 : 0 }}
            >
              Быстрый заказ
            </CustomBtn>
          </Stack>

          <AlertDelivery variant="outlined" sx={{ mt: 6 }} />
        </Grid2>
      </Grid2>

      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <CustomTab label="Описание" {...a11yProps(0)} />
            <CustomTab label="Характеристики" {...a11yProps(1)} />
            <CustomTab label="Документы" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabValue} index={0}>
          <Box dangerouslySetInnerHTML={{ __html: good.description }}></Box>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <Attributes attrs={good.relatedAttrs} />
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}>
          Документы
        </CustomTabPanel>
      </Box>

      <QuickModal
        show={quickModal}
        close={() => setQuickModal(false)}
        productId={good.id}
      />
    </>
  );
};

export default ProductCard;

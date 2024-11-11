import { RelatedPacks } from "@/types";
import { useEffect, useState } from "react";

type UsePriceImgReturn = {
  img: string;
  price: string;
  oldprice?: string;
  choosePack: (id: number, name: string) => void;
  currentPack: string;
  currentPackID: number;
};

export const usePriceImg = (packs: RelatedPacks[]): UsePriceImgReturn => {
  const [img, setImg] = useState<string>(packs.length ? packs[0].img : "");
  const [price, setPrice] = useState<string>(
    packs.length ? packs[0].price : ""
  );
  const [oldprice, setOldPrice] = useState<string>(
    packs.length ? packs[0].oldPrice : ""
  );
  const [currentPackID, setCurrentPackID] = useState<number>(
    packs.length ? packs[0].id : 0
  );
  const [currentPack, setCurrentPack] = useState<string>(
    packs.length ? packs[0].pack.name : ""
  );

  useEffect(() => {
    const findedPack = packs.find((el) => el.id === currentPackID);
    setImg(packs.length ? findedPack!.img : "");
    setPrice(packs.length ? findedPack!.price : "");
    if (findedPack?.oldPrice) {
      setOldPrice(findedPack.oldPrice);
    }
  }, [currentPackID, packs]);

  // choosePack
  const choosePack = (id: number, name: string) => {
    setCurrentPackID(id);
    setCurrentPack(name);
  };

  return {
    img,
    price,
    oldprice,
    choosePack,
    currentPack,
    currentPackID,
  };
};

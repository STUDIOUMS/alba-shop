import { RelatedPack } from "@/types";
import { useEffect, useState } from "react";

type UsePriceImgReturn = {
  choosePack: (id: number) => void;
  currentPack: RelatedPack;
};

type UsePriceImgProps = {
  packs: RelatedPack[];
  defaultPack: RelatedPack;
};

export const usePriceImg = (props: UsePriceImgProps): UsePriceImgReturn => {
  const { defaultPack, packs } = props;
  const [currentPack, setCurrentPack] = useState<RelatedPack>(
    defaultPack || { id: 0, img: "", pack: "", price: "", product: 0 }
  );
  const [currentPackId, setCurrentPackId] = useState<number>(
    defaultPack.id || 0
  );

  useEffect(() => {
    const foundPack = packs.find((pack) => pack.pack.id === currentPackId);
    if (foundPack) {
      setCurrentPack(foundPack);
    }
  }, [currentPackId]);

  const choosePack = (id: number) => {
    setCurrentPackId(id);
  };

  return {
    choosePack: choosePack,
    currentPack,
  };
};

import { RelatedPack } from "@/types";
import { useEffect, useState } from "react";

type UsePriceImgReturn = {
  choosePack: (id: number) => void;
  currentPack: RelatedPack;
  noPack: boolean;
};

type UsePriceImgProps = {
  packs: RelatedPack[];
  defaultPack: RelatedPack;
};

const emptyPack: RelatedPack = {
  id: 0,
  img: "",
  pack: {
    id: 0,
    name: "",
  },
  price: "",
  oldPrice: "",
  product: 0,
};

export const usePriceImg = (props: UsePriceImgProps): UsePriceImgReturn => {
  const { defaultPack, packs } = props;
  const [currentPack, setCurrentPack] = useState<RelatedPack>(
    defaultPack || emptyPack
  );
  const [currentPackId, setCurrentPackId] = useState<number>(
    defaultPack ? defaultPack.id : 0
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
    noPack: !currentPack.pack.id,
  };
};

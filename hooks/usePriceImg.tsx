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
  const [currentPack, setCurrentPack] = useState<RelatedPack>(defaultPack);
  const [currentPackId, setCurrentPackId] = useState<number>(
    defaultPack.id || 1
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

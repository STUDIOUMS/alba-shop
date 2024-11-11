"use client";

import { Grid2 } from "@mui/material";
import AdvantagesItem from "./AdvantagesItem";
import truck from "@/assets/truck.svg";
import warehouse from "@/assets/warehouse.svg";
import manager from "@/assets/manager.svg";

const Advantages = (): JSX.Element => {
  return (
    <Grid2 container spacing={6}>
      <AdvantagesItem
        src={truck.src}
        text="до вашего склада или терминала ТК"
        title="Бесплатная доставка"
      />
      <AdvantagesItem
        src={warehouse.src}
        text="весь ассортимент продукции серии &ldquo;Ника&rdquo;"
        title="В наличии на складе"
      />
      <AdvantagesItem
        src={manager.src}
        text="Помощь в выборе средств для конкретного предприятия"
        title="Выделенный менеджер"
      />
    </Grid2>
  );
};

export default Advantages;

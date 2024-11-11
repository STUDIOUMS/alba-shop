"use client";

import cart from "@/assets/cart.svg";
import { useOrderStore } from "@/store/useOrderStore";
import CustomBtn from "@/ui/CustomBtn";
import { Badge } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SmallCart = (): JSX.Element => {
  const { push } = useRouter();
  const { orders } = useOrderStore();
  const count = orders.reduce((acum, el) => (acum += el.count), 0);

  return (
    <Badge
      badgeContent={count}
      color="primary"
      sx={{
        "& .MuiBadge-badge": { fontSize: "11px" },
      }}
    >
      <Link href="/basket" passHref>
        <CustomBtn
          color="secondary"
          disabled={!orders.length}
          style={{ padding: 0, minWidth: 0, width: "40px", height: "40px" }}
        >
          <Image src={cart.src} alt="Cart" width={20} height={20} />
        </CustomBtn>
      </Link>
    </Badge>
  );
};

export default SmallCart;

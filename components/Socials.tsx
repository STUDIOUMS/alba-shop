import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import vk from "@/assets/vk.svg";

const Socials = (): JSX.Element => {
  return (
    <Stack direction="row">
      <IconButton href="/" color="secondary" sx={{ mr: 1 }}>
        <Image src={facebook} alt="Facebook" width={20} height={20}></Image>
      </IconButton>
      <IconButton href="/" color="secondary" sx={{ mr: 1 }}>
        <Image src={instagram} alt="Instagram" width={20} height={20}></Image>
      </IconButton>
      <IconButton href="/" color="secondary" sx={{ mr: 1 }}>
        <Image src={twitter} alt="Twitter" width={20} height={20}></Image>
      </IconButton>
      <IconButton href="https://vk.com/alba_higo" color="secondary">
        <Image src={vk} alt="Vk" width={20} height={20}></Image>
      </IconButton>
    </Stack>
  );
};

export default Socials;

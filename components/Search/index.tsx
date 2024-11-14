"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomInput from "@/ui/CustomInput";
import { Box, Stack } from "@mui/material";
import CustomBtn from "@/ui/CustomBtn";
import searchIcon from "@/assets/search.svg";

const Search: React.FC = () => {
  const [val, setVal] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const searchHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (val.length > 0) {
      params.set("s", val);
      router.push("/search?" + params.toString());
      setVal("");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, ml: 4, mr: 4 }}>
      <form onSubmit={searchHandler}>
        <Stack direction="row">
          <CustomInput
            size="small"
            fullWidth
            placeholder="Поиск по сайту"
            onChange={(e) => setVal(e.target.value)}
            sx={{ mb: 0 }}
          />
          <CustomBtn
            type="submit"
            variant="outlined"
            sx={{ ml: 1, minWidth: 40, p: 0 }}
          >
            <img src={searchIcon.src} alt="" style={{ width: 20 }} />
          </CustomBtn>
        </Stack>
      </form>
    </Box>
  );
};

export default Search;

"use client";

import { Box } from "@mui/material";

const MapFrame = (): JSX.Element => {
  return (
    <Box
      sx={{
        "& iframe": {
          border: 0,
          borderRadius: "6px",
          height: 270,
          margin: 0,
          padding: 0,
          width: "100%",
        },
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2162.51378278757!2d65.50950697710344!3d57.17955728120602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43bbe3bf3abe503d%3A0xa24239898021a359!2z0JrQvtC80LzRg9C90LjRgdGC0LjRh9C10YHQutCw0Y8g0YPQuy4sIDcwINC6LiAzINGB0YLRgC4gNiwg0KLRjtC80LXQvdGMLCDQotGO0LzQtdC90YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA2MjUwMDE!5e0!3m2!1sru!2snl!4v1703510379890!5m2!1sru!2snl"
        loading="lazy"
      ></iframe>
    </Box>
  );
};

export default MapFrame;

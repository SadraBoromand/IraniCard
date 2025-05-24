import React, { ReactNode } from "react";
import { Box } from "../ui/box";
import SearchBar from "./SearchBar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Box className="flex-1 my-3">
      <SearchBar />
      {children}
    </Box>
  );
}

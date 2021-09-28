import { Box } from "@chakra-ui/layout";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <Box maxW="640px" mx="auto" mt="100px" {...props}>
      {children}
    </Box>
  );
};

export default Layout;

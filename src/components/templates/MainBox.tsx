import { Box } from "@mui/material"
import { FC, ReactNode } from "react"



interface Type {
  children: ReactNode,
}


const MainBox: FC<Type> = ({ children }) => {

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        m: "50px 0px",
        py: 5,
        px: 15

      }}
    >
      {children}
    </Box>
  )
}

export default MainBox
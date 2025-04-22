import { Box, Typography } from "@mui/material"
import { FC, ReactNode } from "react"
import color from "../../assets/color"




interface Type {
  children: ReactNode,
  title : string 
}


const CardBox: FC<Type> = ({ children , title  }) => {

  return (
    <Box sx={{
      width: "75%",
      height: "100%",
      boxShadow: `0px 0px 10px ${color.TITLE}`,
      borderRadius: "10px ",
      bgcolor: color.BACKGROUND,
      p: 5

    }}>
      <Typography fontWeight={"bold"} variant="h4">{title}</Typography>
      <Box sx={{
        p: 2
      }}>
        <Box>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default CardBox
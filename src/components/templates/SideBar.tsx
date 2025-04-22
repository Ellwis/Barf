import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import menu from "../menu.ts";
import color from "../../assets/color.ts";
import { Link, useLocation } from "react-router";



const SideBar: FC = () => {
  const router = useLocation()
  return (
    <Box sx={{
      width: "25%",
      height: "100%",
        ml : 2 ,
      boxShadow: `0px 0px 10px ${color.TITLE}`,
      borderRadius: "10px ",
      bgcolor: color.BACKGROUND,
    }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "80%", mx: "auto", mt: 3 }}>
        <img src={"/img/snow.jpg"} alt="snow" width={80} height={80} />
        <Typography fontWeight={"bold"} variant="h4" fontFamily={"lalezar"} sx={{ ml: 1 }}>کلینیک </Typography>
        <Typography fontWeight={"bold"}
          variant="h4"
          fontFamily={"oi"}
          sx={{
            color: color.BACKGROUND2,
            WebkitTextStroke: `1px ${color.SECONDRY}`
          }}>برف </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        mt: 3
      }}>
        {
          menu.map(item => (
            <Box sx={{
              width: "80%",
              mx: "auto",
            }}>
              <Link to={item.url}>
                <Button
                  variant={"outlined"}
                  sx={{
                    width: "100%",
                    mt: 2,
                    bgcolor: router.pathname ===(item.url) ? ` ${color.PRIMARY}` : ""

                  }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img width={20} height={20} src={item.img} alt="img" />
                    <Typography variant="h6" sx={{ mr: 1 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Button>
              </Link>
            </Box>
          )
          )
        }

      </Box>

    </Box>

  )
}

export default SideBar;
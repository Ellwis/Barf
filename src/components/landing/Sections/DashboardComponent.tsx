import {Box, Typography} from "@mui/material";
import {FC} from "react";
import color from "../../../assets/color";
import CardBox from "../../templates/CardBox";
import LastWeekRequestTypesAndCountChart from "../../charts/LastWeekRequestTypesAndCountChart.tsx";
import LastWeekCustomersChart from "../../charts/LastWeekCustomersChart.tsx";
import AllActivitiesChart from "../../charts/AllActivitiesChart.tsx";


const Dashboard: FC = () => {
    return (
        <>
            <CardBox title={"داشبرد"}>

                {/* FLEX AREA  */}

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    height: "60vh",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}>
                    <Box sx={{
                        borderRadius: "10px",
                        width: "58%",
                        height: "50%",
                        ml: 1,
                        mb: 1,
                        boxShadow: `0px 0px 2px ${color.TITLE}`
                    }}>
                        <Typography textAlign={"center"} variant={"h6"} my={2}> تعداد درخواست های هفته اخیر
                        </Typography>

                        <LastWeekCustomersChart/>
                    </Box>
                    <Box sx={{
                        borderRadius: "10px",
                        width: "40%",
                        height: "50%",
                        mb: 2,
                        boxShadow: `0px 0px 2px ${color.TITLE}`


                    }}
                    >
                        <Typography textAlign={"center"} variant={"h6"} my={2}> نوع درخواست های هفته اخیر

                        </Typography>
                        <LastWeekRequestTypesAndCountChart/>

                    </Box>
                    <Box sx={{
                        borderRadius: "10px",
                        width: "100%",
                        height: "50%",
                        boxShadow: `0px 0px 2px ${color.TITLE}`


                    }}
                    > <Typography textAlign={"center"} variant={"h6"} my={2}> کل درخواست ها

                    </Typography>
                        <AllActivitiesChart/>

                    </Box>

                </Box>
                {/* FLEX AREA  */}
            </CardBox>
        </>
    )
}

export default Dashboard;
import React, {FC, useState} from "react";
import CardBox from "../../templates/CardBox";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import color from "../../../assets/color.ts";
import TableComponent from "../../templates/TableComponent.tsx";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast"

interface RowData {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    nationalCode?: string;
    gender: string;
    phoneNumber: string;
    beautyService: string;
    description: string;
}

const RequestComponent: FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    // Handle modal open/close
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
    const [formData, setFormData] = useState<RowData>({
        id: 0,
        firstName: "",
        lastName: "",
        age: 0,
        nationalCode: "",
        gender: "",
        phoneNumber: "",
        beautyService: "",
        description: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            })

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (
            formData.firstName.trim() !== "" &&
            formData.lastName.trim() !== "" &&
            formData.age !== 0 && // Check if age is not 0
            formData.gender.trim() !== "" &&
            formData.phoneNumber.trim() !== "" &&
            formData.beautyService.trim() !== ""
        ) {
            Toast.success("ثبت با موفقیت انجام شد");
        } else {
            Toast.error("لطفا همه‌ی فیلد‌ها را پر کنید");
        }

        console.log("Submitted Data: ", formData);
        // You can call an API here to save the form data or handle it further
    };


    return (
        <CardBox title={"درخواست ها"}>
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
                    width: "100%",
                    height: "10%",
                    mb: 1,
                    boxShadow: `0px 0px 2px ${color.TITLE}`
                }}>
                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", mx: 2}}>
                        <Typography textAlign={"right"} variant={"h6"} margin={1}>
                            ثبت درخواست
                        </Typography>
                        <Box>
                            <Button onClick={handleModalOpen} variant={'contained'}> ثبت جدید  &nbsp;
                                <AddCircleIcon/>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    boxShadow: `0px 0px 2px ${color.TITLE}`,
                    borderRadius: "10px",
                    width: "100%",

                    minHeight: "80%",
                    mb: 2
                }}>
                    <TableComponent/>
                </Box>
            </Box>

            {/* Modal Dialog for Form */}
            <Dialog
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <Box display={'flex'} borderBottom={`5px solid ${color.BACKGROUND}`} justifyContent={'space-between'}>
                    <DialogTitle align={"center"} fontWeight={'bold'}>
                        ثبت درخواست جدید
                    </DialogTitle>
                    <DialogActions>
                        <Box sx={{cursor: "pointer"}} mx={2} onClick={handleModalClose}>
                            <CloseIcon/>
                        </Box>
                    </DialogActions>
                </Box>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>نام</Typography>
                                <TextField
                                    placeholder="نام"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    fullWidth


                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>نام خانوادگی</Typography>

                                <TextField
                                    placeholder="نام خانوادگی"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    fullWidth

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>سن</Typography>

                                <TextField
                                    placeholder="سن"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>کدملی</Typography>

                                <TextField
                                    placeholder="کدملی"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>


                            <Grid item xs={6}>
                                <FormControl component="fieldset" required>
                                    <Typography variant={'caption'}>جنسیت</Typography>
                                    <RadioGroup
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        row
                                    >
                                        <FormControlLabel value={1} control={<Radio/>} label="مرد"/>
                                        <FormControlLabel value={0} control={<Radio/>} label="زن"/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>شماره تماس</Typography>
                                <TextField
                                    placeholder="شماره تماس"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    fullWidth

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant={'caption'}>نوع خدمت زیبایی</Typography>

                                <TextField
                                    placeholder="نوع خدمت زیبایی"
                                    name="beautyService"
                                    value={formData.beautyService}
                                    onChange={handleChange}
                                    fullWidth

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant={'caption'}>توضیحات</Typography>

                                <TextField
                                    placeholder="توضیحات"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    rows={4}

                                />
                            </Grid>
                            <Grid item xs={6}   >
                                <Button type="submit" variant="contained" color="primary" >
                                    ثبت
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                </DialogContent>
            </Dialog>
        </CardBox>
    );
}


export default RequestComponent;

import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';


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
    IconButton,
    InputBase,
    Radio,
    RadioGroup,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';
import color from "../../assets/color.ts";
import Toast from "react-hot-toast";

interface RowData {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    nationalCode?: string;
    date?: string;
    gender: string;
    phoneNumber: string;
    beautyService: string;
    description: string;
}

const TableComponent: React.FC = () => {
    const rows: RowData[] = [
        {
            id: 1,
            firstName: 'علی',
            lastName: 'محمدی',
            age: 25,
            date: '1403/01/01',
            phoneNumber: "09109070808",
            gender: 'مرد',
            beautyService: 'کاشت مو',
            description: 'شرح 1'
        },
        {
            id: 2,
            firstName: 'رضا',
            lastName: 'حسینی',
            age: 30,
            date: '1403/02/15',
            phoneNumber: "09109070808",
            gender: 'مرد',
            beautyService: 'آرایش صورت',
            description: 'شرح 2'
        },
        {
            id: 3,
            firstName: 'مینا',
            lastName: 'فردوسی',
            age: 28,
            date: '1403/03/10',
            phoneNumber: "09109070808",
            gender: 'زن',
            beautyService: 'کاشت ناخن',
            description: 'شرح 3'
        },
        {
            id: 4,
            firstName: 'سارا',
            lastName: 'خدابخش',
            age: 22,
            date: '1403/04/05',
            phoneNumber: "09109070808",
            gender: 'زن',
            beautyService: 'میکاپ',
            description: 'شرح 4'
        },
        {
            id: 5,
            firstName: 'احمد',
            lastName: 'سلیمانی',
            age: 35,
            date: '1403/05/20',
            phoneNumber: "09109070808",
            gender: 'مرد',
            beautyService: 'پیرایش مو',
            description: 'شرح 5'
        },
        {
            id: 6,
            firstName: 'فاطمه',
            lastName: 'زارعی',
            age: 27,
            date: '1403/06/30',
            phoneNumber: "09109070808",
            gender: 'زن',
            beautyService: 'میکاپ عروس',
            description: 'شرح 6'
        },
        {
            id: 7,
            firstName: 'حسن',
            lastName: 'نیکو',
            age: 29,
            date: '1403/07/12',
            phoneNumber: "09109070808",
            gender: 'مرد',
            beautyService: 'رنگ مو',
            description: 'شرح 7'
        },
        {
            id: 8,
            firstName: 'نیلوفر',
            lastName: 'ملکی',
            age: 24,
            date: '1403/08/01',
            phoneNumber: "09109070808",
            gender: 'زن',
            beautyService: 'پاکسازی صورت',
            description: 'شرح 8'
        },
        {
            id: 9,
            firstName: 'زهرا',
            lastName: 'کیانی',
            age: 32,
            date: '1403/09/15',
            phoneNumber: "09109070808",
            gender: 'زن',
            beautyService: 'لیفت مژه',
            description: 'شرح 9'
        },
        {
            id: 10,
            firstName: 'محمد',
            lastName: 'کریمی',
            age: 26,
            date: '1403/10/20',
            phoneNumber: "09109070808",
            gender: 'مرد',
            beautyService: 'کاشت ابرو',
            description: 'شرح 10'
        },
    ];
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState<RowData | any>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    // const [formData, setFormData] = useState<RowData>({
    //     id: 0,
    //     firstName: "",
    //     lastName: "",
    //     age: 0,
    //     nationalCode: "",
    //     gender: "",
    //     phoneNumber: "",
    //     beautyService: "",
    //     description: ""
    // });

    const handleOpenUpdateModal = (row: RowData) => {
        setSelectedRow(row);
        setOpenUpdateModal(true);
    };

    const handleCloseUpdateModal = () => {
        setOpenUpdateModal(false);
        setSelectedRow(null);
    };

    const handleChangePage = (_event: React.MouseEvent<unknown> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleRowClick = (row: RowData) => {
        setSelectedRow(row);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedRow(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setSelectedRow({
            ...selectedRow,
            [name]: value,
        })
    };

    const handleUpdateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Toast.success("ویرایش با موفقیت انجام شد");
        // You can call an API here to save the form data or handle it further
    };

    const handleDeleteClick = (row: RowData) => {
        setSelectedRow(row);
        setDeleteDialogOpen(true);
    };

    // تابع تأیید حذف
    const handleConfirmDelete = () => {
        if (selectedRow) {
            Toast.success("حدف با موفقیت انجام شد");
        }
        setDeleteDialogOpen(false);
        setSelectedRow(null);
    };

    return (
        <Box sx={{overflow: "hidden"}}>
            <TableContainer sx={{
                maxHeight: "480px",
                minHeight: "480px",
                overflowY: 'auto',
                backgroundColor: color.BACKGROUND,
                padding: 1,
            }}>
                <Table>
                    <TableHead sx={{
                        position: 'sticky',
                        top: 0,
                        backgroundColor: color.BACKGROUND,
                        zIndex: 1
                    }}>
                        <TableRow>
                            <TableCell sx={{width: "5%", textAlign: "right"}}>ردیف</TableCell>
                            <TableCell sx={{width: "10%", textAlign: "right"}}>نام</TableCell>
                            <TableCell sx={{width: "10%", textAlign: "right"}}>نام خانوادگی</TableCell>
                            <TableCell sx={{width: "5%", textAlign: "right"}}>سن</TableCell>
                            <TableCell sx={{width: "10%", textAlign: "right"}}>تاریخ</TableCell>
                            <TableCell sx={{width: "10%", textAlign: "right"}}>جنسیت</TableCell>
                            <TableCell sx={{width: "20%", textAlign: "right"}}>نوع خدمت زیبایی</TableCell>
                            <TableCell sx={{width: "10%", textAlign: "right"}}>شماره تماس</TableCell>
                            <TableCell sx={{width: "15%", textAlign: "right"}}>
                                <Box
                                    component="form"
                                    sx={{
                                        p: '2px 4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: 200,
                                        border: `1px solid ${color.TITLE}`,
                                        borderRadius: "10px"
                                    }}
                                >
                                    <InputBase
                                        inputProps={{
                                            style: {marginRight: "5px", fontSize: "12px"}
                                        }}
                                        sx={{ml: 1, flex: 1}}
                                        placeholder="جست و جو با کدملی"
                                    />
                                    <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                                        <SearchIcon/>
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{backgroundColor: color.BACKGROUND}}>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row.id} sx={{
                                '&:hover': {
                                    backgroundColor: color.PRIMARY,
                                }
                            }}>
                                <TableCell sx={{width: "5%", textAlign: "right"}}>{row.id}</TableCell>
                                <TableCell sx={{width: "10%", textAlign: "right"}}>{row.firstName}</TableCell>
                                <TableCell sx={{width: "20%", textAlign: "right"}}>{row.lastName}</TableCell>
                                <TableCell sx={{width: "5%", textAlign: "right"}}>{row.age}</TableCell>
                                <TableCell sx={{width: "10%", textAlign: "right"}}>{row.date}</TableCell>
                                <TableCell sx={{width: "10%", textAlign: "right"}}>{row.gender}</TableCell>
                                <TableCell sx={{width: "20%", textAlign: "right"}}>{row.beautyService}</TableCell>
                                <TableCell sx={{width: "10%", textAlign: "right"}}>{row.phoneNumber}</TableCell>
                                <TableCell sx={{width: "5%", textAlign: "center"}}>
                                    <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
                                        <Box onClick={() => handleRowClick(row)} sx={{cursor: "pointer"}}>
                                            <Tooltip title={'مشاهده'}>
                                                <RemoveRedEyeIcon color={'info'}/>
                                            </Tooltip>
                                        </Box>
                                        <Box onClick={() => handleOpenUpdateModal(row)} sx={{cursor: "pointer"}}>
                                            <Tooltip title={'ویرایش'}>
                                                <EditNoteIcon color={'warning'}/>
                                            </Tooltip>
                                        </Box>
                                        <Box onClick={() => handleDeleteClick(row)} sx={{cursor: "pointer"}}>
                                            <Tooltip title={'حذف'}>
                                                <DeleteOutlineIcon color={'error'}/>
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                    <Box/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <Box display={'flex'} borderBottom={`5px solid ${color.BACKGROUND}`} justifyContent={'space-between'}>
                    <DialogTitle align={"center"} fontWeight={'bold'}>
                        اطلاعات زیبا جو
                    </DialogTitle>
                    <DialogActions>
                        <Box sx={{cursor: "pointer"}} mx={2} onClick={handleCloseModal}> <CloseIcon/></Box>
                    </DialogActions>
                </Box>
                <DialogContent>
                    {selectedRow && (
                        <Box sx={{width: "100%", height: "500px", overflowY: "scroll"}}>
                            <Typography sx={{mt: 2}}><strong>نام:</strong> {selectedRow.firstName}</Typography>
                            <Typography sx={{mt: 2}}><strong>نام خانوادگی:</strong> {selectedRow.lastName}</Typography>
                            <Typography sx={{mt: 2}}><strong>سن:</strong> {selectedRow.age}</Typography>
                            <Typography sx={{mt: 2}}><strong>تاریخ:</strong> {selectedRow.date}</Typography>
                            <Typography sx={{mt: 2}}><strong>جنسیت:</strong> {selectedRow.gender}</Typography>
                            <Typography sx={{mt: 2}}><strong>نوع خدمت زیبایی:</strong> {selectedRow.beautyService}
                            </Typography>
                            <Typography sx={{mt: 2}}><strong>شماره تماس:</strong> {null}</Typography>
                            <Typography sx={{mt: 2}}><strong>توضیحات:</strong> {selectedRow.description}</Typography>
                        </Box>
                    )}
                </DialogContent>
            </Dialog>
            <Box sx={{display: "flex", alignItems: "center", mx: 1, direction: "ltr"}}>
                <Box sx={{direction: "rtl"}}>
                    <Button
                        onClick={() => handleChangePage(null, page - 1)}
                        disabled={page === 0}
                    >
                        <ArrowBackIosIcon fontSize={'small'}/> قبلی
                    </Button>
                    <Button
                        onClick={() => handleChangePage(null, page + 1)}
                        disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
                    >
                        بعدی <ArrowForwardIosIcon fontSize={'small'}/>
                    </Button>
                </Box>
                <TablePagination
                    labelRowsPerPage={'تعداد در صفحه'}
                    labelDisplayedRows={({from, to, count}) => {
                        return `${from}–${to} از ${count}`;
                    }}
                    sx={{
                        backgroundColor: color.BACKGROUND,
                        direction: "ltr",
                        borderBottom: 'none',
                        '& .MuiTablePagination-select': {
                            backgroundColor: color.BACKGROUND,
                        },
                        '& .MuiTablePagination-actions': {
                            display: "none"
                        },
                    }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
            <Dialog open={openUpdateModal} onClose={handleCloseUpdateModal}>
                <DialogTitle>ویرایش اطلاعات</DialogTitle>
                <DialogContent>
                    <form onSubmit={()=> handleUpdateSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>نام</Typography>
                                <TextField
                                    placeholder="نام"
                                    name="firstName"
                                    value={selectedRow?.firstName}
                                    onChange={handleChange}
                                    fullWidth


                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>نام خانوادگی</Typography>

                                <TextField
                                    placeholder="نام خانوادگی"
                                    name="lastName"
                                    value={selectedRow?.lastName}
                                    onChange={handleChange}
                                    fullWidth

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>سن</Typography>

                                <TextField
                                    placeholder="سن"
                                    name="age"
                                    value={selectedRow?.age}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>کدملی</Typography>

                                <TextField
                                    placeholder="کدملی"
                                    name="age"
                                    value={selectedRow?.age}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>


                            <Grid item xs={6}>
                                <FormControl component="fieldset" required>
                                    <Typography variant={'caption'}>جنسیت</Typography>
                                    <RadioGroup
                                        name="gender"
                                        value={selectedRow?.gender}
                                        onChange={handleChange}
                                        row
                                    >
                                        <FormControlLabel  value={1} control={<Radio/>} label="مرد"/>
                                        <FormControlLabel value={0} control={<Radio/>} label="زن"/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'caption'}>شماره تماس</Typography>
                                <TextField
                                    placeholder="شماره تماس"
                                    name="phoneNumber"
                                    value={selectedRow?.phoneNumber}
                                    onChange={handleChange}
                                    fullWidth

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant={'caption'}>نوع خدمت زیبایی</Typography>

                                <TextField
                                    placeholder="نوع خدمت زیبایی"
                                    name="beautyService"
                                    value={selectedRow?.beautyService}
                                    onChange={handleChange}
                                    fullWidth

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant={'caption'}>توضیحات</Typography>

                                <TextField
                                    placeholder="توضیحات"
                                    name="description"
                                    value={selectedRow?.description}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    rows={4}

                                />
                            </Grid>
                        </Grid>
                    </form>

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseUpdateModal}>لغو</Button>
                    <Button onClick={handleUpdateSubmit} color="primary" variant="contained">ذخیره</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                <DialogTitle>حذف کاربر</DialogTitle>
                <DialogContent>
                    آیا از حذف این کاربر مطمئن هستید؟
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogOpen(false)}>انصراف</Button>
                    <Button onClick={handleConfirmDelete} color="error" variant="contained">
                        حذف
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
};

export default TableComponent;
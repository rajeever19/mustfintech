import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
    Select,
    MenuItem,
    Checkbox,
    TablePagination
} from '@mui/material';
// import { Save } from '@mui/icons-material';

const createData = (no, type, requestType, documents, requestDate, status, reason, approvalDate) => {
    return { no, type, requestType, documents, requestDate, status, reason, approvalDate };
};

const rows = [
    createData(1, '소득적격', '개인전문', '보기', '2023-01-10 09:00:00', '승인대기', '', ''),
    createData(2, '소득적격', '개인전문', '보기', '2023-01-10 09:00:00', '승인거부', '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가', '2023-01-10 09:00:00'),
    createData(3, '일반개인', '소득적격', '보기', '2023-01-10 09:00:00', '승인완료', '', '2023-01-10 09:00:00'),
    createData(4, '소득적격', '개인전문', '보기', '2023-01-10 09:00:00', '승인대기', '', ''),
    createData(5, '소득적격', '개인전문', '보기', '2023-01-10 09:00:00', '승인거부', '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가', '2023-01-10 09:00:00'),
    createData(6, '일반개인', '소득적격', '보기', '2023-01-10 09:00:00', '승인완료', '', '2023-01-10 09:00:00'),
    createData(7, '소득적격', '개인전문', '보기', '2023-01-10 09:00:00', '승인대기', '', ''),
    createData(8, '소득적격', '개인전문', '보기', '2023-01-10 09:00:00', '승인거부', '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가', '2023-01-10 09:00:00'),
    // Add more data if needed
];

const MemberList = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState(rows)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleAllCheck = (event) => {

        let allData = [...data]
        let newData = allData.map((row) => {
            return { ...row, checked: event.target.checked };
        });

        setData(newData);

    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox onClick={handleAllCheck} />
                        </TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>기준유형</TableCell>
                        <TableCell>신청유형</TableCell>
                        <TableCell>제출서류</TableCell>
                        <TableCell>신청일시</TableCell>
                        <TableCell>승인여부</TableCell>
                        <TableCell>승인거부 사유</TableCell>
                        <TableCell>승인일시</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.no}>
                            <TableCell padding="checkbox">
                                <Checkbox checked={!!row?.checked} onClick={() => handleCheck(row)} />
                            </TableCell>
                            <TableCell>{row.no}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.requestType}</TableCell>
                            <TableCell>
                                <Button variant="outlined">보기</Button>
                            </TableCell>
                            <TableCell>{row.requestDate}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.reason}</TableCell>
                            <TableCell>{row.approvalDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};
export default MemberList

// const App = () => {
//   return (
//     <div>
//       <Typography variant="h6">회원 목록 (총 100명 | 승인대기 1건)</Typography>
//       <Select defaultValue="가입일시순" style={{ marginRight: 16 }}>
//         <MenuItem value="가입일시순">가입일시순</MenuItem>
//         <MenuItem value="다른옵션">다른옵션</MenuItem>
//       </Select>
//       <Select defaultValue="50개씩 보기">
//         <MenuItem value="50개씩 보기">50개씩 보기</MenuItem>
//         <MenuItem value="다른옵션">다른옵션</MenuItem>
//       </Select>
//       <Button variant="contained" style={{ marginLeft: 16 }}>
//         엑셀 다운로드
//       </Button>
//       <MemberList />
//     </div>
//   );
// };

// export default App;

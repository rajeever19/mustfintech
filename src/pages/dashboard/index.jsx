// material-ui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Button, Grid, MenuItem, Select } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';

// assets
import HeaderTab from './HeaderTab';
import MemberList from './MemberList';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">계기반</Typography>
      </Grid>

      <Grid item xs={12} >
        <HeaderTab />
      </Grid>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
      <Grid item xs={12} >
        <Typography variant="h6" gutterBottom>
          회원 목록 (총 100명 | 승인대기 1건)
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent: 'flex-end' }}>
          <Button variant="contained" style={{ marginRight: '16px' }}>
            등록
          </Button>
          <Select defaultValue="가입일시순" style={{ marginRight: '16px' }}>
            <MenuItem value="가입일시순">가입일시순</MenuItem>
            <MenuItem value="다른옵션">다른옵션</MenuItem>
          </Select>
          <Select defaultValue="50개씩 보기" style={{ marginRight: '16px' }}>
            <MenuItem value="50개씩 보기">50개씩 보기</MenuItem>
            <MenuItem value="다른옵션">다른옵션</MenuItem>
          </Select>
          <Button variant="contained" style={{ marginRight: '16px' }}>
            엑셀 다운로드
          </Button>
          <Button variant="contained" style={{ marginRight: '16px' }}>
            저장
          </Button>
        </div>
      </Grid>
      {/* row 2 */}
      <Grid item xs={12}>
        <MemberList />
        {/* <UniqueVisitorCard /> */}
      </Grid>

      {/* row 3 */}



      {/* row 4 */}


    </Grid>
  );
}

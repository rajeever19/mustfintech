import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function HeaderTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 800 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
            >
                <Tab label="투자유형 관리" />
                <Tab label="입출금내역 조회" />
                <Tab label="투자유형 관리" />
                <Tab label="입출금내역 조회" />
                <Tab label="투자유형 관리" />
                <Tab label="입출금내역 조회" />
            </Tabs>
        </Box>
    );
}

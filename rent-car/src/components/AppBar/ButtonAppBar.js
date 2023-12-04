import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar({navigateCatalog, navigateFavorites, navigateHome}) {
    return (
        <Box sx={{ flexGrow: 1,  minWidth: '859px', }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6"
                                onClick={navigateHome}
                                component="div"
                                sx={{
                                    flexGrow: 1 }}>
                        Home
                    </Typography>
                    <Button color="inherit" onClick={navigateCatalog} style={{marginRight: '8px'}}>Catalog</Button>
                    <Button color="inherit" onClick={navigateFavorites}>Favorites</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

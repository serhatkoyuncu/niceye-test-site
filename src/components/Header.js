import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import { Button, Container } from '@mui/material';
import logo from '../assets/niceye-logo.png'
import { Link } from 'react-router-dom';
import HeaderPopUp from './HeaderPopUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const pages = ['Anasayfa', 'Hakkımızda', 'Çözümlerimiz', "Partnerlerimiz", "Referanslarımız", "Kariyer", "iletişim"];

export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [mouseOver, setMouseOver] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMouseOver = () => {
        // console.log("mouseover");
        setMouseOver(true);
        // console.log('mouseOver :>> ', mouseOver);
    }
    const handleNotMouseOver = () => {
        setMouseOver(false);
    }

    return (
        <Box sx={{ flexGrow: 1, mb: 9 }}>
            <AppBar position="fixed" sx={{ backgroundColor: "#F6F6F6", color: "#545E72", border: "0.4px solid #707070" }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Link to="/">
                                <img src={logo} style={{ width: '100%', height: '100%', minWidth: "80px" }} alt="logo" />
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to={page === "Anasayfa" ? "/" : `/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: '#545E72' }}>
                                                {page.toLocaleUpperCase()}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <Link to="/anasayfa">
                                <img src={logo} style={{ width: '100%', height: '100%' }} alt="logo" />
                            </Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#545E72', display: 'block' }}
                                >
                                    <Link to={page === "Anasayfa" ? "/" : `/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: '#545E72' }} onMouseOver={page === "Çözümlerimiz" ? handleMouseOver : handleNotMouseOver}>
                                        {page === "Çözümlerimiz" ? <>{page}<KeyboardArrowDownIcon fontSize="inherit"/></> : page.toLocaleUpperCase()}
                                    </Link>
                                </Button>
                            ))}
                        </Box>

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Ara"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                    </Toolbar>
                </Container>
            </AppBar>
            {mouseOver ?
                <HeaderPopUp
                    handleNotMouseOver={handleNotMouseOver}
                />
                : null}
        </Box>
    );
}

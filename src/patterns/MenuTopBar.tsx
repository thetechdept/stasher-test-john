import { useState } from 'react'
import Image from 'next/image'
import router from 'next/router'
import logo from '../../public/images/logo.svg'

import AppBar from '@/components/wrapper/AppBar'
import IconButton from '@/components/wrapper/IconButton'
import MenuItem from '@/components/wrapper/MenuItem'
import Menu from '@/components/wrapper/Menu'
import Toolbar from '@/components/wrapper/Toolbar'
import Typography from '@/components/wrapper/Typography'

import { AccountCircle} from '@/components/wrapper/Icons'

/* =====================================================
Title: <MenuTopBar />
Description: Pattern for displaying the main AppBar used on the RootLayout of the screens
Usage:

```tsx
<MenuTopBar />
```

===================================================== */

const MenuTopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2, height: 80 }}
          onClick={() => router.push('/')}
        >
          <Image src={logo} alt="logo" sizes='small' priority/>
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }} >
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="primary"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Bookings</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default MenuTopBar
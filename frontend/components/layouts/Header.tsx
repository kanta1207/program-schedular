'use client';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nonNestedMenu = [
  {
    name: 'Schedules',
    path: '/schedules',
  },
  {
    name: 'Instructors',
    path: '/instructors',
  },
  {
    name: 'Cohorts',
    path: '/cohorts',
  },
];

const schoolCalendarMenu = [
  {
    name: 'Intakes',
    path: '/intakes',
  },
  {
    name: 'Breaks',
    path: '/breaks',
  },
];

const curriculumMenu = [
  {
    name: 'Programs',
    path: '/programs',
  },
  {
    name: 'Courses',
    path: '/courses',
  },
];

const Header = () => {
  const pathname = usePathname();
  const firstPathname = `/${pathname.split('/')[1]}`;

  const NavButton = ({ path, name }: { path: string; name: string }) => {
    return (
      <Button
        key={path}
        href={path}
        component="a"
        sx={{
          color: 'white',
          textDecoration: path === firstPathname ? 'underline' : 'none',
          textUnderlineOffset: '4px',
          '&:hover': { textDecoration: path === firstPathname ? 'underline' : 'none' },
        }}
      >
        {name}
      </Button>
    );
  };

  const DropdownMenu = ({ label, menu }: { label: string; menu: { name: string; path: string }[] }) => {
    const [open, setOpen] = useState(false);
    return (
      <Box sx={{ position: 'relative' }} onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <Button
          sx={{ my: 2, color: 'white' }}
          endIcon={<KeyboardArrowDownIcon sx={{ transform: open ? 'rotate(180deg)' : '', transition: '.25s' }} />}
        >
          {label}
        </Button>
        <Box
          sx={{
            minWidth: '110px',
            display: 'flex',
            flexDirection: 'column',
            px: 0.5,
            py: 1,
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
            position: 'absolute',
            right: '0',
            bgcolor: 'primary.light',
            transform: open ? '' : 'translateY(-100%)',
            pointerEvents: open ? 'unset' : 'none',
            opacity: open ? 'unset' : '0',
            transition: '0.25s',
          }}
        >
          {menu.map(({ path, name }) => (
            <NavButton key={path} path={path} name={name} />
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <AppBar position="sticky" sx={{ width: '100vw', zIndex: 1000 }}>
      <div className="container mx-auto">
        <Toolbar disableGutters>
          <Link href="/schedules">
            <Image src="/images/logo-white.png" width={100} height={31.25} alt="service logo" />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginLeft: '3rem',
              '& a': { '&:hover': { bgcolor: '#FFFFFF30' } },
            }}
          >
            {nonNestedMenu.map(({ path, name }) => (
              <NavButton key={path} path={path} name={name} />
            ))}
            <DropdownMenu label="School Calendar" menu={schoolCalendarMenu} />
            <DropdownMenu label="Curriculum" menu={curriculumMenu} />
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;

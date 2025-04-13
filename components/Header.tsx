import { Toolbar, Stack,Box,styled, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import { ReactElement, SetStateAction} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppLogo from './Logo';


interface Props {
    children:ReactElement
    handleOpenDrawer?:()=>void
  }

const AppBarItem = styled(Box)(({ theme }) => ({
     ':hover':{
         color:theme.palette.primary.main,
     }
  }));

function Header({setOpen}:{setOpen: React.Dispatch<SetStateAction<boolean>>}) {

    return ( 
       <AppBar className='!z-[10] !bg-secondary shadow-none pt-6 pb-1'>
        <Container>
            <Toolbar sx={{justifyContent:'space-between',alignItems:'center'}}>
                <AppLogo/>
                 <Stack component='ul'
                 id="navbar"
                 sx={{
                   display:{xs:'none',md:'flex'}
                 }} direction='row' spacing={0}>
                    {['Bio','Skills','Contact'].map(i=>
                        <a key={i} href={'#'+i} className='w-full rounded-full px-4 py-2 cursor-pointer h-fit text-white font-[600] nav-link grid place-items-center'>{i}</a>)}
                 </Stack>
                 <IconButton
                 onClick={()=>setOpen(true)}
                 sx={{color:'#4fd78f',alignSelf:'center',display:{
                 md:'none'
                 }}}><MenuIcon sx={{fontSize:'37px !important'}}></MenuIcon></IconButton>
            </Toolbar>
        </Container>
       </AppBar>

     );
}

export default Header;
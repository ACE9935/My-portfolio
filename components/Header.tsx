import { Toolbar, Typography,Stack,Box,styled, useScrollTrigger, Slide, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import { ReactElement, SetStateAction, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppLogo from './Logo';

interface Props {
    children:ReactElement
    handleOpenDrawer?:()=>void
  }

function HideOnScroll(props: Props) {
    const { children} = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
    );
  }

const AppBarItem = styled(Box)(({ theme }) => ({
    ':after':{
        content:'""',
        zIndex:-1,
       background:'linear-gradient(180deg,rgb(245 158 11),transparent)',
       opacity:0,
       position:'absolute',
       inset:0,
       transition:'opacity 0.3s',
       width:'100%',
       height:'100%',
     },
     ':hover:after':{
         opacity:1,
         transition:'opacity 0.3s'
     }
  }));

function Header({setOpen}:{setOpen: React.Dispatch<SetStateAction<boolean>>}) {

    return ( 
        <HideOnScroll>
       <AppBar className='z-[10] bg-lBlack'>
        <Container>
            <Toolbar sx={{justifyContent:'space-between',alignItems:'unset'}}>
                <AppLogo/>
                 <Stack component='ul' sx={{
                   display:{xs:'none',md:'flex'}
                 }} direction='row' spacing={0}>
                    {['Bio','Skills','Contact'].map(i=><AppBarItem href={'#'+i} component='a'
                    className='font-[600] text-white cursor-pointer flex items-center px-4 relative'>
                        {i}</AppBarItem>)}
                 </Stack>
                 <IconButton
                 onClick={()=>setOpen(true)}
                 sx={{color:'orange',alignSelf:'center',display:{
                 md:'none'
                 }}}><MenuIcon sx={{fontSize:37}}></MenuIcon></IconButton>
            </Toolbar>
        </Container>
       </AppBar>
       </HideOnScroll>
     );
}

export default Header;
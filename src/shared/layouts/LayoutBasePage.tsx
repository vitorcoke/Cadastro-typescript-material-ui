import { Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts/DrawerContext';

interface ILayoutBasePageProps {
  titulo: string,
  barraDeFerramentas?: ReactNode;
}

const LayoutBasePage: React.FC<ILayoutBasePageProps> = ({ children, titulo, barraDeFerramentas }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { toogleDrawerOpen } = useDrawerContext();

  return (
    <Box
      height='100%'
      display='flex'
      flexDirection='column'
      gap={1}
    >
      <Box
        padding={1}
        display='flex'
        alignItems='center'
        gap={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (
          <IconButton onClick={toogleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          variant={smDown ?'h5' : mdDown ? 'h4' : 'h3'}
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>
      )}

      <Box flex={1} overflow='auto'>
        {children}
      </Box>
    </Box >
  );
};

export default LayoutBasePage;
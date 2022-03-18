import { Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Enviroment from '../../environment';

interface IToobarListProps {
  textoDabusca?: string,
  textoBotaoNovo?: string,
  mostrarInputBusca?: boolean,
  mostrarBotaoNovo?: boolean,
  aoMudarTextoDeBusca?: (novoTexto: string) => void,
  aoClicarEmNovo?: () => void
}

const ToolbarList: React.FC<IToobarListProps> = ({
  textoDabusca = '',
  textoBotaoNovo = 'Novo',
  mostrarInputBusca = false,
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
  aoMudarTextoDeBusca
}) => {

  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(7)}
      marginX={1}
      padding={1}
      paddingX={1}
      display='flex'
      gap={1}
      alignItems='center'
      component={Paper}
    >
      {mostrarInputBusca && (<TextField
        size='small'
        placeholder= {Enviroment.INPUT_DE_BUSCA}
        value={textoDabusca}
        onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
      />)}
      <Box flex={1} display='flex' justifyContent='end'>
        {mostrarBotaoNovo && (<Button
          variant='contained'
          color='primary'
          disableElevation
          endIcon={<Icon>add</Icon>}
          onClick={aoClicarEmNovo}
        >
          {textoBotaoNovo}
        </Button>)}
      </Box>

    </Box>
  );
};

export default ToolbarList;
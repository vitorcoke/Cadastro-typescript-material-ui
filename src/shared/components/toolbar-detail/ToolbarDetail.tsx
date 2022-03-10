import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';


interface IToolbarDetail {
  textoBotaoNovo?: string,
  mostrarBotaoNovo?: boolean
  mostrarBotaoVoltar?: boolean
  mostrarBotaoApagar?: boolean
  mostrarBotaoSalvar?: boolean
  mostrarBotaoSalvarFechar?: boolean

  mostrarBotaoNovoCarregando?: boolean
  mostrarBotaoVoltarCarregando?: boolean
  mostrarBotaoApagarCarregando?: boolean
  mostrarBotaoSalvarCarregando?: boolean
  mostrarBotaoSalvarFecharCarregando?: boolean



  aoClicarEmNovo?: () => void
  aoClicarEmVoltar?: () => void
  aoClicarEmApagar?: () => void
  aoClicarEmSavlar?: () => void
  aoClicarEmSalvarFechar?: () => void

}

const ToolbarDetail: React.FC<IToolbarDetail> = ({
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSavlar,
  aoClicarEmSalvarFechar

}) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
      {(mostrarBotaoSalvar) && !mostrarBotaoSalvarCarregando && (
        <Button
          variant='contained'
          color='primary'
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSavlar}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
            Salvar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando && !smDown && !mdDown) && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvarFechar}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
            Salvar e voltar
          </Typography>
        </Button>
      )}

      {(mostrarBotaoSalvarFecharCarregando && !smDown && !mdDown) && (
        <Skeleton width={180} height={60} />
      )}

      {(mostrarBotaoApagar) && !mostrarBotaoApagarCarregando && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
            Apagar
          </Typography>
        </Button>
      )}

      {(mostrarBotaoApagarCarregando) && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarEmNovo}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}

      {(mostrarBotaoNovoCarregando && !smDown) && (
        <Skeleton width={110} height={60} />
      )}

      {
        mostrarBotaoVoltar &&
        (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarFechar) &&
        (<Divider variant='middle' orientation='vertical' />)
      }

      {(mostrarBotaoVoltar) && !mostrarBotaoVoltarCarregando && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmVoltar}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
            Voltar
          </Typography>
        </Button>
      )}
      {mostrarBotaoVoltarCarregando && (
        <Skeleton width={110} height={60} />
      )}

    </Box>
  );
};

export default ToolbarDetail;
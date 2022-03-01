import ToolbarList from '../../shared/components/toolbar-list/ToobarList';
import LayoutBasePage from '../../shared/layouts/LayoutBasePage';


const Dashboard = () => {
  return (
    <LayoutBasePage
      titulo='Pagina Inicial'
      barraDeFerramentas={(<ToolbarList
        mostrarInputBusca
        textoBotaoNovo='Nova'
      />)}
    >
      Testando
    </LayoutBasePage>
  );
};

export default Dashboard;
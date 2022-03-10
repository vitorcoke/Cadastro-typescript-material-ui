import ToolbarDetail from '../../shared/components/toolbar-detail/ToolbarDetail';
import LayoutBasePage from '../../shared/layouts/LayoutBasePage';


const Dashboard = () => {
  return (
    <LayoutBasePage
      titulo='Pagina Inicial'
      barraDeFerramentas={(<ToolbarDetail
        mostrarBotaoSalvarFechar
      
      />)}
    >
      Testando
    </LayoutBasePage>

  );
};

export default Dashboard;
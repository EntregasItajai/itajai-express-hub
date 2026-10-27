import { Link } from "react-router-dom";
import LegalPage from "@/components/LegalPage";

const PoliticaPrivacidade = () => {
  return (
    <LegalPage
      title="Política de Privacidade"
      metaTitle="Política de Privacidade | Entregas Itajaí"
      description="Como a Entregas Itajaí coleta, usa, armazena e protege seus dados pessoais, conforme a Lei Geral de Proteção de Dados (LGPD)."
      path="/politica-de-privacidade"
      updatedAt="27 de outubro de 2026"
    >
      <p>
        Esta Política de Privacidade descreve como a Entregas Itajaí coleta, utiliza, armazena e
        protege os dados pessoais dos visitantes do site entregasitajai.com e dos clientes que
        solicitam nossos serviços de motoboy, entregas e diligências em Itajaí e região, em
        conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
      </p>

      <h2>1. Quem é o controlador dos dados</h2>
      <p>
        <strong>Entregas Itajaí</strong>, Microempreendedor Individual (MEI) inscrito no CNPJ
        25.340.232/0001-10, com sede em Itajaí, Santa Catarina, é o controlador responsável pelo
        tratamento dos seus dados pessoais.
      </p>
      <ul>
        <li>WhatsApp / telefone: <a href="tel:+5547991508563">(47) 99150-8563</a></li>
        <li>E-mail: <a href="mailto:contato@entregasitajai.com.br">contato@entregasitajai.com.br</a></li>
      </ul>

      <h2>2. Dados que coletamos</h2>
      <h3>Dados que você nos informa ao contratar um serviço</h3>
      <ul>
        <li>Nome completo e/ou razão social</li>
        <li>Número de telefone / WhatsApp</li>
        <li>Endereços de coleta, entrega ou diligência</li>
        <li>Nome de quem entrega ou recebe, quando necessário para o serviço</li>
        <li>Informações sobre o item a ser transportado ou o local a ser visitado</li>
        <li>Histórico de pedidos: datas, trajetos, valores, comprovantes e relatórios fotográficos</li>
        <li>Conversas e arquivos trocados pelo WhatsApp durante o atendimento</li>
      </ul>
      <h3>Dados coletados automaticamente no site</h3>
      <ul>
        <li>
          Dados de navegação coletados por cookies do Google Ads e Google Analytics, como endereço
          IP, tipo de dispositivo, páginas visitadas e origem do acesso
        </li>
      </ul>

      <h2>3. Para que usamos seus dados</h2>
      <ul>
        <li>Executar e gerenciar os serviços contratados (entregas, coletas, diligências, assistência pessoal)</li>
        <li>Falar com você sobre o pedido pelo WhatsApp ou telefone</li>
        <li>Emitir comprovantes de entrega e relatórios fotográficos</li>
        <li>Cumprir obrigações fiscais e legais</li>
        <li>Medir o desempenho do site e das campanhas de anúncios</li>
      </ul>

      <h2>4. Base legal do tratamento</h2>
      <p>Tratamos seus dados com fundamento nas seguintes hipóteses do art. 7º da LGPD:</p>
      <ul>
        <li>
          <strong>Execução de contrato</strong> (art. 7º, V): dados de contato, endereços, itens e
          histórico de pedidos, necessários para prestar o serviço que você solicitou
        </li>
        <li>
          <strong>Cumprimento de obrigação legal</strong> (art. 7º, II): registros exigidos pela
          legislação fiscal e contábil
        </li>
        <li>
          <strong>Exercício regular de direitos</strong> (art. 7º, VI): comprovantes e relatórios
          guardados para eventual defesa em processo judicial ou administrativo
        </li>
        <li>
          <strong>Consentimento</strong> (art. 7º, I): cookies de medição e publicidade no site,
          que você pode recusar nas configurações do navegador
        </li>
      </ul>

      <h2>5. Com quem compartilhamos</h2>
      <p>Seus dados não são vendidos. Podemos compartilhá-los apenas com:</p>
      <ul>
        <li>Motoboys parceiros autônomos, exclusivamente para executar o serviço contratado</li>
        <li>Google LLC, por meio das ferramentas de análise e publicidade (Analytics e Ads)</li>
        <li>Autoridades públicas, quando exigido por lei ou ordem judicial</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        O site utiliza cookies de terceiros do Google Ads e do Google Analytics para medir o
        desempenho das campanhas e entender como o site é usado. Você pode bloquear ou apagar
        cookies nas configurações do seu navegador, desativar anúncios personalizados em{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>{" "}
        e instalar o{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          complemento de desativação do Google Analytics
        </a>
        . Desativar cookies não impede o uso do site.
      </p>

      <h2>7. Por quanto tempo guardamos</h2>
      <ul>
        <li>
          <strong>Dados de pedidos, comprovantes e relatórios:</strong> por até 5 anos após o último
          atendimento, prazo das obrigações fiscais e de eventuais reclamações (Código de Defesa do
          Consumidor, art. 27)
        </li>
        <li>
          <strong>Conversas de WhatsApp sem contratação:</strong> excluídas quando deixam de ser
          necessárias para o atendimento
        </li>
        <li>
          <strong>Dados de navegação:</strong> pelos prazos definidos pelo Google nas ferramentas
          Analytics e Ads
        </li>
      </ul>
      <p>Encerrados esses prazos, os dados são excluídos ou anonimizados.</p>

      <h2>8. Armazenamento e segurança</h2>
      <p>
        Os dados operacionais ficam no WhatsApp e no Google Workspace (Planilhas e Drive), com
        acesso restrito ao responsável pelo serviço. Adotamos medidas razoáveis para protegê-los
        contra acesso não autorizado, perda ou alteração.
      </p>

      <h2>9. Seus direitos como titular</h2>
      <p>Pela LGPD (art. 18), você pode a qualquer momento:</p>
      <ul>
        <li>Confirmar se tratamos dados seus e acessá-los</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
        <li>Pedir anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
        <li>Pedir a portabilidade dos seus dados</li>
        <li>Saber com quem seus dados foram compartilhados</li>
        <li>Revogar o consentimento dado para cookies</li>
        <li>Pedir a eliminação dos dados, exceto os que precisamos guardar por obrigação legal</li>
      </ul>
      <p>
        Para exercer qualquer desses direitos, fale conosco pelo WhatsApp{" "}
        <a href="https://wa.me/5547991508563" target="_blank" rel="noopener noreferrer">(47) 99150-8563</a>{" "}
        ou pelo e-mail <a href="mailto:contato@entregasitajai.com.br">contato@entregasitajai.com.br</a>.
        Respondemos em até 15 dias. Você também pode apresentar reclamação à Autoridade Nacional de
        Proteção de Dados (ANPD).
      </p>

      <h2>10. Alterações nesta política</h2>
      <p>
        Esta política pode ser atualizada. A versão vigente estará sempre nesta página, com a data
        da última atualização no topo. Veja também os nossos{" "}
        <Link to="/termos-de-uso">Termos de Uso</Link>.
      </p>
    </LegalPage>
  );
};

export default PoliticaPrivacidade;

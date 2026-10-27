import { Link } from "react-router-dom";
import LegalPage from "@/components/LegalPage";

const TermosUso = () => {
  return (
    <LegalPage
      title="Termos de Uso"
      metaTitle="Termos de Uso | Entregas Itajaí"
      description="Condições para contratação dos serviços de motoboy, entregas e diligências da Entregas Itajaí."
      path="/termos-de-uso"
      updatedAt="27 de outubro de 2026"
    >
      <p>
        Ao solicitar os serviços da Entregas Itajaí (CNPJ 25.340.232/0001-10), o cliente declara ter
        lido, compreendido e aceito estes Termos de Uso.
      </p>

      <h2>1. Descrição dos serviços</h2>
      <p>
        A Entregas Itajaí oferece entregas urbanas, diligências de campo, apoio jurídico operacional,
        vistoria in loco e assistência pessoal com motoboy em Itajaí e região. Os serviços são
        prestados sob demanda, mediante solicitação pelo WhatsApp ou pelo site.
      </p>

      <h2>2. Contratação e pagamento</h2>
      <ul>
        <li>O orçamento é informado antes da confirmação do serviço</li>
        <li>O pagamento pode ser feito por Pix, dinheiro ou conforme combinado no atendimento</li>
        <li>O serviço é confirmado após o cliente aceitar o orçamento</li>
      </ul>

      <h2>3. Responsabilidades do prestador</h2>
      <ul>
        <li>Executar o serviço com agilidade, cuidado e discrição</li>
        <li>Fornecer comprovantes fotográficos quando o serviço exigir (ex.: vistoria in loco)</li>
        <li>Informar o motoboy responsável pela entrega quando necessário</li>
      </ul>

      <h2>4. Responsabilidades do cliente</h2>
      <ul>
        <li>Informar corretamente endereços, itens e instruções especiais</li>
        <li>Garantir que os itens são lícitos e seguros para transporte em moto</li>
        <li>Estar disponível para contato durante a execução do serviço</li>
      </ul>

      <h2>5. Itens não aceitos para transporte</h2>
      <ul>
        <li>Substâncias ilícitas ou produtos cujo transporte seja proibido por lei</li>
        <li>Animais vivos</li>
        <li>Materiais inflamáveis, explosivos ou perigosos</li>
        <li>Objetos que excedam a capacidade segura de transporte em motocicleta</li>
      </ul>

      <h2>6. Prazos e atrasos</h2>
      <p>
        Prezamos pela pontualidade, mas os prazos podem ser afetados por trânsito, clima ou força
        maior. O cliente será avisado pelo WhatsApp de qualquer ocorrência relevante.
      </p>

      <h2>7. Extravio e danos</h2>
      <ul>
        <li>Adotamos cuidados no manuseio e no transporte dos itens</li>
        <li>Danos causados por comprovada negligência do motoboy serão analisados individualmente</li>
        <li>
          Não nos responsabilizamos por danos decorrentes de informações incorretas do cliente ou de
          itens frágeis sem embalagem adequada
        </li>
      </ul>

      <h2>8. Cancelamento</h2>
      <p>
        O cliente pode cancelar o serviço antes do início da execução. Após iniciado o
        deslocamento, poderá ser cobrada uma taxa de deslocamento proporcional, conforme combinado.
      </p>

      <h2>9. Dados pessoais</h2>
      <p>
        O tratamento dos seus dados segue a nossa{" "}
        <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>

      <h2>10. Alterações nestes termos</h2>
      <p>
        Estes termos podem ser atualizados a qualquer momento. A versão vigente estará sempre nesta
        página.
      </p>
    </LegalPage>
  );
};

export default TermosUso;

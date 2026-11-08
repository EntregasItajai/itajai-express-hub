const SERVICOS = [
  "Levar um documento",
  "Coletar assinatura",
  "Buscar a chave",
  "Levar uma peça",
  "Retirar compra na loja",
  "Postar encomenda",
  "Ir no cartório",
];

/**
 * Seção com o flyer de serviços. O texto do flyer também aparece como lista, para o Google ler.
 * A mesma imagem é enviada no follow-up do WhatsApp (https://www.entregasitajai.com/flyer-motoboy-entregas-itajai.jpg).
 */
const ServicosFlyerSection = () => (
  <section className="py-16 px-5 bg-muted/50">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <img
        src="/flyer-motoboy-entregas-itajai.jpg"
        alt="Entregas Itajaí: motoboy vai onde precisar. Levar documento, coletar assinatura, buscar chave, levar peça, retirar compra na loja, postar encomenda e ir ao cartório. WhatsApp (47) 99150-8563."
        width={1080}
        height={1080}
        loading="lazy"
        decoding="async"
        className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
      />
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Motoboy vai onde precisar</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Em Itajaí e região, o motoboy resolve o que você não tem tempo de resolver:
        </p>
        <ul className="space-y-2 text-foreground text-lg">
          {SERVICOS.map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ServicosFlyerSection;

import { FileText, MapPin, Camera, Clock } from "lucide-react";

const TechnicalReportBadge = () => {
  return (
    <section className="bg-accent/10 py-12 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-accent">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">
              Relatório Técnico Profissional
            </h3>
            <p className="text-muted-foreground">
              Todas as diligências incluem documentação completa em PDF
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Geolocalização</h4>
              <p className="text-sm text-muted-foreground">
                Coordenadas GPS em tempo real
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                <Camera className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Alta Precisão</h4>
              <p className="text-sm text-muted-foreground">
                Fotos profissionais detalhadas
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Data/Hora</h4>
              <p className="text-sm text-muted-foreground">
                Certificação temporal precisa
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                <FileText className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">PDF Completo</h4>
              <p className="text-sm text-muted-foreground">
                Relatório técnico detalhado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalReportBadge;

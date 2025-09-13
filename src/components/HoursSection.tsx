import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const HoursSection = () => {
  const hours = [
    { day: "Segunda a Sexta", time: "07:30 - 18:00" },
    { day: "Sábado", time: "07:30 - 12:00" },
    { day: "Domingo", time: "Fechado" }
  ];

  return (
    <section className="py-12 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center justify-center gap-3">
          <Clock size={32} className="text-primary" />
          Horário de Funcionamento
        </h2>
        <Card className="max-w-lg mx-auto shadow-card">
          <CardContent className="p-0">
            {hours.map((item, index) => (
              <div 
                key={index}
                className={`
                  flex justify-between items-center py-3 px-6 text-base
                  ${index !== hours.length - 1 ? 'border-b border-border' : ''}
                  ${item.time === 'Fechado' ? 'opacity-60' : ''}
                `}
              >
                <span className="font-semibold text-card-foreground">{item.day}</span>
                <span className={`
                  ${item.time === 'Fechado' ? 'text-muted-foreground' : 'text-primary font-medium'}
                `}>
                  {item.time}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HoursSection;
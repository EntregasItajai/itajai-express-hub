import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AdvantageCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
}

const AdvantageCard = ({ icon: Icon, title, description, variant = 'light' }: AdvantageCardProps) => {
  return (
    <Card className={`
      h-full transition-all duration-300 hover:scale-105 shadow-card hover:shadow-card-hover
      ${variant === 'dark' 
        ? 'bg-primary/90 text-primary-foreground border-primary/20' 
        : 'bg-card text-card-foreground'
      }
    `}>
      <CardHeader>
        <CardTitle className={`
          flex items-center gap-3 text-xl
          ${variant === 'dark' ? 'text-secondary' : 'text-primary'}
        `}>
          <Icon size={28} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`
          leading-relaxed font-medium text-base
          ${variant === 'dark' ? 'text-primary-foreground/90' : 'text-foreground/80'}
        `}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default AdvantageCard;
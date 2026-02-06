import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, ChevronDown, ChevronUp } from "lucide-react";

interface AdvantageCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  shortDescription?: string;
  variant?: 'light' | 'dark';
  collapsible?: boolean;
}

const AdvantageCard = ({ 
  icon: Icon, 
  title, 
  description, 
  shortDescription,
  variant = 'light',
  collapsible = false 
}: AdvantageCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = collapsible && !isExpanded 
    ? (shortDescription || description.substring(0, 100) + "...") 
    : description;

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
          {displayText}
        </p>
        {collapsible && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              mt-3 flex items-center gap-1 text-sm font-semibold transition-colors
              ${variant === 'dark' 
                ? 'text-secondary hover:text-secondary/80' 
                : 'text-primary hover:text-primary/80'
              }
            `}
          >
            {isExpanded ? (
              <>
                Ver menos <ChevronUp size={16} />
              </>
            ) : (
              <>
                Ver mais <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </CardContent>
    </Card>
  );
};

export default AdvantageCard;
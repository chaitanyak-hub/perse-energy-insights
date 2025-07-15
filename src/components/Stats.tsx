
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

export const StatItem = ({ number, label, isAnimated = false, isDark = false }: { 
  number: string; 
  label: string; 
  isAnimated?: boolean; 
  isDark?: boolean; 
}) => {
  const textColor = isDark ? "text-white" : "text-text-primary";
  const labelColor = isDark ? "text-white/70" : "text-text-primary/70";
  
  if (!isAnimated) {
    return (
      <div className="text-center">
        <div className={`text-4xl font-bold ${textColor} mb-2`}>{number}</div>
        <div className={labelColor}>{label}</div>
      </div>
    );
  }

  const numericValue = parseInt(number.replace(/[^\d]/g, ''));
  const { count, elementRef } = useCounterAnimation({ 
    end: numericValue, 
    duration: 2500 
  });

  const formatNumber = (num: number) => {
    if (number.includes('M')) {
      return `${(num / 1000000).toFixed(0)}M+`;
    }
    return `${num.toLocaleString()}+`;
  };

  return (
    <div ref={elementRef} className="text-center">
      <div className={`text-4xl font-bold ${textColor} mb-2`}>
        {number.startsWith('£') ? `£${formatNumber(count)}` : formatNumber(count)}
      </div>
      <div className={labelColor}>{label}</div>
    </div>
  );
};

export const Stats = () => {
  const stats = [
    { number: "10000000", label: "Tonnes Carbon Processed", isAnimated: true },
    { number: "£65000000", label: "Savings Identified", isAnimated: true },
    { number: "100+", label: "Data Sources", isAnimated: false },
    { number: "Real-time", label: "Analytics & Insights", isAnimated: false },
  ];

  return (
    <section className="bg-background py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              number={stat.number} 
              label={stat.label}
              isAnimated={stat.isAnimated}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

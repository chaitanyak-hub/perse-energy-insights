
export const Stats = () => {
  const stats = [
    { number: "10M+", label: "Tonnes Carbon Processed" },
    { number: "£65M+", label: "Savings Identified" },
    { number: "100+", label: "Data Sources" },
    { number: "Real-time", label: "Analytics & Insights" },
  ];

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "FileText",
      title: "Добровольное медицинское страхование",
      description:
        "Заключаем договоры ДМС с населением, обеспечивая комплексную медицинскую защиту для всей семьи.",
    },
    {
      icon: "Building2",
      title: "Партнерство с медучреждениями",
      description:
        "Сотрудничаем с лучшими лечебными учреждениями для качественного лечения наших клиентов.",
    },
    {
      icon: "UserCheck",
      title: "Персональные инспекторы",
      description:
        "Каждому клиенту назначается личный инспектор для обработки страховых случаев и направления в клиники.",
    },
    {
      icon: "CreditCard",
      title: "Оплата лечения и осложнений",
      description:
        "Покрываем не только основное лечение, но и все возможные осложнения после медицинских процедур.",
    },
    {
      icon: "Calculator",
      title: "Бухгалтерское сопровождение",
      description:
        "Полная отчетность, своевременные выплаты клиникам и соблюдение всех налоговых требований.",
    },
    {
      icon: "BarChart3",
      title: "Государственная отчетность",
      description:
        "Ведем полную отчетность для органов государственной статистики и налоговых органов.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг медицинского страхования с профессиональным
            подходом и индивидуальным обслуживанием каждого клиента
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Icon
                  name={service.icon}
                  className="text-emerald-600"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

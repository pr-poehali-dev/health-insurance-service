import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Надежная защита",
      description:
        "Полное покрытие медицинских расходов включая осложнения после лечения",
    },
    {
      icon: "Users",
      title: "Персональный подход",
      description: "Индивидуальный инспектор для каждого клиента и семьи",
    },
    {
      icon: "Building2",
      title: "Проверенные клиники",
      description:
        "Партнерство только с лицензированными медицинскими учреждениями",
    },
    {
      icon: "Clock",
      title: "Быстрое обслуживание",
      description: "Оперативная обработка заявок и направление к врачам",
    },
    {
      icon: "FileCheck",
      title: "Прозрачная отчетность",
      description: "Полная отчетность по всем операциям и выплатам",
    },
    {
      icon: "Award",
      title: "Соответствие стандартам",
      description:
        "Работа в соответствии с требованиями государственных органов",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Почему тысячи клиентов выбирают именно нас для медицинского
            страхования
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon
                  name={benefit.icon}
                  className="text-emerald-600"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Готовы защитить свое здоровье?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Получите персональную консультацию и подберите оптимальную
                программу медицинского страхования для себя и своей семьи.
              </p>
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg">
                Получить консультацию
              </button>
            </div>
            <div className="text-center lg:text-right">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
                alt="Медицинская консультация"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

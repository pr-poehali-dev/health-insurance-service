import Icon from "@/components/ui/icon";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Заключение договора",
      description:
        "Оформляем договор добровольного медицинского страхования с учетом ваших потребностей",
    },
    {
      number: "02",
      title: "Назначение инспектора",
      description:
        "Каждому клиенту назначается персональный инспектор для работы со страховыми случаями",
    },
    {
      number: "03",
      title: "Подача заявки",
      description:
        "При возникновении страхового случая подаете заявку своему инспектору на медицинские услуги",
    },
    {
      number: "04",
      title: "Направление в клинику",
      description:
        "Инспектор направляет вас в партнерское медицинское учреждение для получения лечения",
    },
    {
      number: "05",
      title: "Получение лечения",
      description:
        "Проходите лечение в медучреждении, все расходы покрывает страховая компания",
    },
    {
      number: "06",
      title: "Покрытие осложнений",
      description:
        "При возникновении осложнений после лечения мы также покрываем все дополнительные расходы",
    },
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и понятный процесс получения медицинской помощи по договору
            страхования
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-emerald-500 mr-4">
                  {step.number}
                </span>
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" className="text-emerald-600" size={16} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

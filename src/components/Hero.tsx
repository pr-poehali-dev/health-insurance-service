import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-emerald-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Надежная медицинская
              <span className="text-emerald-500"> страховая защита </span>
              для вас и вашей семьи
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональное добровольное медицинское страхование с полным
              покрытием лечения и осложнений. Работаем с лучшими медицинскими
              учреждениями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg">
                Получить консультацию
              </button>
              <button className="border border-emerald-500 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg">
                Узнать о услугах
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Медицинское страхование"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <Icon
                    name="Shield"
                    className="text-emerald-500 mx-auto mb-2"
                    size={32}
                  />
                  <p className="text-sm font-medium text-gray-700">
                    Полное покрытие
                  </p>
                </div>
                <div className="p-4">
                  <Icon
                    name="Clock"
                    className="text-emerald-500 mx-auto mb-2"
                    size={32}
                  />
                  <p className="text-sm font-medium text-gray-700">
                    24/7 поддержка
                  </p>
                </div>
                <div className="p-4">
                  <Icon
                    name="Users"
                    className="text-emerald-500 mx-auto mb-2"
                    size={32}
                  />
                  <p className="text-sm font-medium text-gray-700">
                    Личный инспектор
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">МедСтрах</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Надежная страховая медицинская компания, обеспечивающая полное
              покрытие медицинских расходов с индивидуальным подходом к каждому
              клиенту.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                <Icon name="Phone" size={20} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                <Icon name="Mail" size={20} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                <Icon name="MapPin" size={20} />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  ДМС для физических лиц
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Корпоративное страхование
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Страхование осложнений
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Консультации инспекторов
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@medstrah.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Медицинская, 15</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт: 9:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 МедСтрах. Все права защищены. Лицензия №12345 от
              01.01.2020
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Правила страхования
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

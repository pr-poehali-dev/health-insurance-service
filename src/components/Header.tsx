import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold text-gray-900">МедСтрах</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              О компании
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors font-medium">
              Оставить заявку
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#home"
              className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              О компании
            </a>
            <a
              href="#contacts"
              className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Контакты
            </a>
            <button className="w-full bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors font-medium">
              Оставить заявку
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

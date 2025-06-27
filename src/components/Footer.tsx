
import { Heart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">AutismoApoio</span>
            </div>
            <p className="text-gray-300 mb-4">
              Oferecendo apoio, recursos e informações para pessoas autistas e suas famílias.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 AutismoApoio. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-gray-300 hover:text-blue-400 transition-colors">Sobre o Autismo</Link></li>
              <li><Link to="/recursos" className="text-gray-300 hover:text-blue-400 transition-colors">Recursos</Link></li>
              <li><Link to="/apoio" className="text-gray-300 hover:text-blue-400 transition-colors">Grupos de Apoio</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-blue-400 transition-colors">Entre em Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">contato@autismoapoio.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

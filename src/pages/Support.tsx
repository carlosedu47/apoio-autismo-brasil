
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Calendar, MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const Support = () => {
  const supportGroups = [
    {
      title: "Grupo de Pais e Cuidadores",
      description: "Encontros semanais para compartilhar experiências e estratégias",
      schedule: "Segundas-feiras, 19h",
      location: "Online via Zoom",
      participants: "8-12 pessoas",
      facilitator: "Psicóloga especializada"
    },
    {
      title: "Adolescentes no Espectro",
      description: "Espaço para jovens autistas desenvolverem habilidades sociais",
      schedule: "Sábados, 14h",
      location: "Centro Comunitário",
      participants: "6-10 adolescentes",
      facilitator: "Terapeuta ocupacional"
    },
    {
      title: "Irmãos e Familiares",
      description: "Apoio para irmãos e familiares de pessoas autistas",
      schedule: "Quinzenalmente, domingos 10h",
      location: "Online via Google Meet",
      participants: "5-8 pessoas",
      facilitator: "Assistente social"
    },
    {
      title: "Adultos Autistas",
      description: "Grupo de apoio e empoderamento para adultos no espectro",
      schedule: "Quartas-feiras, 18h",
      location: "Híbrido (presencial/online)",
      participants: "4-8 pessoas",
      facilitator: "Psicólogo clínico"
    }
  ];

  const services = [
    {
      icon: MessageCircle,
      title: "Aconselhamento Individual",
      description: "Sessões personalizadas com profissionais especializados",
      features: ["Avaliação inicial gratuita", "Plano personalizado", "Acompanhamento contínuo"]
    },
    {
      icon: Users,
      title: "Terapia Familiar",
      description: "Fortalecimento dos vínculos familiares e comunicação",
      features: ["Sessões em família", "Estratégias práticas", "Apoio emocional"]
    },
    {
      icon: Phone,
      title: "Linha de Apoio 24h",
      description: "Suporte emocional disponível a qualquer momento",
      features: ["Atendimento imediato", "Profissionais qualificados", "Confidencial"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Grupos de Apoio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se com outras pessoas que compartilham experiências similares. 
            Juntos somos mais fortes.
          </p>
        </div>

        {/* Support Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {supportGroups.map((group, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Users className="h-6 w-6 text-blue-500 mr-2" />
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {group.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-green-500" />
                    {group.schedule}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-red-500" />
                    {group.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-500" />
                    {group.participants}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Heart className="h-4 w-4 mr-2 text-purple-500" />
                    Facilitado por: {group.facilitator}
                  </div>
                </div>
                <Button className="w-full">
                  Participar do Grupo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Serviços de Apoio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Saber Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Precisa de Apoio Imediato?
            </h2>
            <p className="text-xl mb-6">
              Nossa linha de apoio está disponível 24 horas por dia, 7 dias por semana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-red-500 bg-white hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                (11) 9999-9999
              </Button>
              <Button size="lg" variant="outline" className="text-red-500 bg-white hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat Online
              </Button>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Diretrizes dos Grupos de Apoio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">O que esperamos:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Respeito mútuo e confidencialidade</li>
                <li>• Participação ativa e construtiva</li>
                <li>• Pontualidade e compromisso</li>
                <li>• Mente aberta para aprender e compartilhar</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">O que oferecemos:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Ambiente seguro e acolhedor</li>
                <li>• Facilitação profissional qualificada</li>
                <li>• Recursos e materiais de apoio</li>
                <li>• Rede de apoio contínua</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;

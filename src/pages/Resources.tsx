
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ExternalLink, Video, FileText, Headphones } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      category: "Guias e Manuais",
      icon: BookOpen,
      items: [
        {
          title: "Guia para Pais de Crianças Autistas",
          description: "Manual completo com estratégias práticas para o dia a dia",
          type: "PDF",
          icon: FileText
        },
        {
          title: "Estratégias de Comunicação",
          description: "Técnicas para melhorar a comunicação com pessoas autistas",
          type: "PDF",
          icon: FileText
        },
        {
          title: "Adaptações Escolares",
          description: "Orientações para professores e escolas",
          type: "PDF",
          icon: FileText
        }
      ]
    },
    {
      category: "Vídeos Educativos",
      icon: Video,
      items: [
        {
          title: "Entendendo o Autismo",
          description: "Série de vídeos explicativos sobre TEA",
          type: "Vídeo",
          icon: Video
        },
        {
          title: "Depoimentos de Famílias",
          description: "Experiências reais de famílias com autismo",
          type: "Vídeo",
          icon: Video
        },
        {
          title: "Terapias e Intervenções",
          description: "Visão geral das principais abordagens terapêuticas",
          type: "Vídeo",
          icon: Video
        }
      ]
    },
    {
      category: "Podcasts",
      icon: Headphones,
      items: [
        {
          title: "Autismo em Pauta",
          description: "Discussões semanais sobre temas relevantes",
          type: "Podcast",
          icon: Headphones
        },
        {
          title: "Vozes do Espectro",
          description: "Pessoas autistas compartilhando suas experiências",
          type: "Podcast",
          icon: Headphones
        },
        {
          title: "Especialistas Respondem",
          description: "Profissionais esclarecem dúvidas comuns",
          type: "Podcast",
          icon: Headphones
        }
      ]
    }
  ];

  const tools = [
    {
      title: "Aplicativo de Rotinas",
      description: "Organize atividades diárias com pictogramas",
      features: ["Interface visual", "Lembretes personalizados", "Progresso visual"]
    },
    {
      title: "Comunicador Visual",
      description: "Facilite a comunicação através de imagens",
      features: ["Biblioteca de símbolos", "Personalização", "Síntese de voz"]
    },
    {
      title: "Agenda Sensorial",
      description: "Monitore sensibilidades e gatilhos",
      features: ["Registro diário", "Gráficos", "Relatórios"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Recursos e Materiais
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma biblioteca completa de recursos para apoiar pessoas autistas, famílias e profissionais.
          </p>
        </div>

        {/* Resources by Category */}
        <div className="space-y-12 mb-16">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <item.icon className="h-6 w-6 text-blue-500" />
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {item.type}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {item.description}
                      </CardDescription>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Ferramentas Digitais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Acessar Ferramenta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de Mais Recursos?
          </h2>
          <p className="text-xl mb-6">
            Nossa equipe está sempre adicionando novos materiais. Entre em contato para sugestões!
          </p>
          <Button size="lg" variant="outline" className="text-blue-600 bg-white hover:bg-gray-100">
            Solicitar Recurso
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;

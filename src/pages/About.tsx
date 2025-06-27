
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sobre o Autismo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compreender o autismo é o primeiro passo para construir uma sociedade mais inclusiva e acolhedora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é o Autismo?</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                O Transtorno do Espectro Autista (TEA) é uma condição neurológica e de desenvolvimento 
                que afeta a comunicação, interação social e comportamento. É chamado de "espectro" 
                porque as características variam significativamente entre as pessoas.
              </p>
              <p>
                Cada pessoa autista é única, com suas próprias forças, desafios e necessidades. 
                Com o apoio adequado, pessoas autistas podem levar vidas plenas e contribuir 
                significativamente para suas comunidades.
              </p>
              <p>
                O diagnóstico precoce e intervenções apropriadas podem fazer uma diferença 
                significativa na qualidade de vida da pessoa autista e de sua família.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Características Comuns</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Diferenças na comunicação social e interação
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Padrões repetitivos de comportamento ou interesses
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Sensibilidades sensoriais (som, luz, textura, etc.)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Necessidade de rotinas e previsibilidade
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Interesses específicos e intensos
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Brain className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Neurodiversidade</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                O autismo é uma forma natural de diversidade neurológica, não uma doença a ser curada.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <CardTitle>Aceitação</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Promovemos a aceitação e valorização das diferenças individuais de cada pessoa.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Inclusão</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Trabalhamos por uma sociedade mais inclusiva onde todos possam participar plenamente.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Potencial</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Reconhecemos e celebramos os talentos únicos e contribuições das pessoas autistas.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Mitos e Verdades sobre o Autismo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">❌ Mitos</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Autismo é causado por vacinas</li>
                <li>• Pessoas autistas não sentem emoções</li>
                <li>• Todos os autistas são iguais</li>
                <li>• Autismo é causado por má parentalidade</li>
                <li>• Pessoas autistas não podem ter relacionamentos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">✅ Verdades</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Autismo tem origem neurológica e genética</li>
                <li>• Pessoas autistas têm emoções profundas</li>
                <li>• Cada pessoa autista é única</li>
                <li>• Ninguém causa o autismo</li>
                <li>• Pessoas autistas podem ter relacionamentos significativos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;

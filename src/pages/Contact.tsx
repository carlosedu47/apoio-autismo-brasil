
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado por nos procurar.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 9999-9999",
      description: "Segunda a sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@autismoapoio.com",
      description: "Respondemos em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Flores, 123",
      description: "São Paulo, SP - CEP 01234-567"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 8h - 18h",
      description: "Sábados: 9h - 13h"
    }
  ];

  const faq = [
    {
      question: "Como posso participar dos grupos de apoio?",
      answer: "Entre em contato conosco através do formulário ou telefone. Faremos uma conversa inicial para entender suas necessidades e indicar o grupo mais adequado."
    },
    {
      question: "Os serviços são gratuitos?",
      answer: "Sim, todos os nossos grupos de apoio e recursos básicos são gratuitos. Alguns serviços especializados podem ter custo, mas oferecemos opções para diferentes orçamentos."
    },
    {
      question: "Preciso de diagnóstico para participar?",
      answer: "Não é necessário ter um diagnóstico formal. Acolhemos famílias em qualquer etapa do processo, incluindo aquelas que ainda estão buscando respostas."
    },
    {
      question: "Vocês atendem em outras cidades?",
      answer: "Atualmente temos sede em São Paulo, mas oferecemos grupos online que atendem pessoas de todo o Brasil."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ouvir, apoiar e orientar. Não hesite em nos procurar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-2 text-blue-500" />
                Envie sua Mensagem
              </CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato em breve.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Assunto *</Label>
                  <Select onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grupo-apoio">Grupo de Apoio</SelectItem>
                      <SelectItem value="informacoes">Informações Gerais</SelectItem>
                      <SelectItem value="recursos">Recursos e Materiais</SelectItem>
                      <SelectItem value="parceria">Parceria</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={6}
                    className="mt-1"
                    placeholder="Conte-nos como podemos ajudar..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <item.icon className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.info}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Precisa de Apoio Imediato?</h3>
                <p className="mb-4">
                  Nossa linha de apoio emocional está disponível 24 horas.
                </p>
                <Button variant="outline" className="text-blue-600 bg-white hover:bg-gray-100">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faq.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;

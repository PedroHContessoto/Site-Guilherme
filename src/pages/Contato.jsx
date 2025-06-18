import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import {
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  Users,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';

function Contato() {
  const [copiedStates, setCopiedStates] = useState({});

  // Função para copiar texto para a área de transferência
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
      // Fallback para navegadores mais antigos
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      setCopiedStates(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [type]: false }));
      }, 2000);
    }
  };

  // Função para abrir email
  const openEmail = (email, subject = '', body = '') => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Dados de contato organizados
  const contactData = {
    instagram: {
      username: '@g_cavalhieri',
      url: 'https://www.instagram.com/g_cavalhieri',
      displayText: 'Instagram do Jogador'
    },
    whatsappPlayer: {
      number: '+5519992428114',
      url: 'https://wa.me/5519992428114',
      displayText: 'WhatsApp do Jogador',
      message: 'Olá! Gostaria de conversar sobre oportunidades profissionais.'
    },
    whatsappResponsible: {
      number: '+5519992698703',
      url: 'https://wa.me/5519992698703',
      displayText: 'WhatsApp do Responsável',
      message: 'Olá! Gostaria de conversar sobre o jogador Guilherme Cavalhieri.'
    },
    agent: {
      name: 'Filipi da Silva Gonçalves',
      email: 'fylypy_lip@hotmail.com', // Email fictício - substitua pelo real
      phone: '+5519992698703', // Telefone fictício - substitua pelo real
      whatsapp: 'https://wa.me/5519992698703', // WhatsApp fictício - substitua pelo real
      subject: 'Interesse em Representação - Guilherme Cavalhieri',
      body: 'Olá Filipi,\n\nTenho interesse em conversar sobre oportunidades para o jogador Guilherme Cavalhieri.\n\nAguardo seu contato.\n\nAtenciosamente.'
    }
  };

  return (
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden pt-16">
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="section-title">Contato Profissional</h2>
            <p className="text-xl text-white/70 mb-12">
              Entre em contato para oportunidades profissionais, negociações e parcerias
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Instagram */}
              <Card className="card-premium group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">Instagram</h3>
                  <p className="text-white/70 mb-6">{contactData.instagram.username}</p>

                  <div className="flex flex-col gap-2">
                    <a
                        href={contactData.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                      <button className="button-primary w-full">
                        <Instagram className="w-5 h-5 mr-2" /> Seguir
                      </button>
                    </a>

                    <button
                        onClick={() => copyToClipboard(contactData.instagram.username, 'instagram')}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg text-sm transition-all flex items-center justify-center gap-2"
                    >
                      {copiedStates.instagram ? (
                          <>
                            <Check className="w-4 h-4" /> Copiado!
                          </>
                      ) : (
                          <>
                            <Copy className="w-4 h-4" /> Copiar @
                          </>
                      )}
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Jogador */}
              <Card className="card-premium group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">WhatsApp</h3>
                  <p className="text-white/70 mb-6">Jogador</p>

                  <div className="flex flex-col gap-2">
                    <a
                        href={`${contactData.whatsappPlayer.url}?text=${encodeURIComponent(contactData.whatsappPlayer.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                      <button className="button-primary w-full">
                        <MessageCircle className="w-5 h-5 mr-2" /> Conversar
                      </button>
                    </a>

                    <button
                        onClick={() => copyToClipboard(contactData.whatsappPlayer.number, 'whatsappPlayer')}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg text-sm transition-all flex items-center justify-center gap-2"
                    >
                      {copiedStates.whatsappPlayer ? (
                          <>
                            <Check className="w-4 h-4" /> Copiado!
                          </>
                      ) : (
                          <>
                            <Copy className="w-4 h-4" /> Copiar Número
                          </>
                      )}
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Responsável */}
              <Card className="card-premium group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">Responsável</h3>
                  <p className="text-white/70 mb-6">WhatsApp</p>

                  <div className="flex flex-col gap-2">
                    <a
                        href={`${contactData.whatsappResponsible.url}?text=${encodeURIComponent(contactData.whatsappResponsible.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                      <button className="button-primary w-full">
                        <Phone className="w-5 h-5 mr-2" /> Contatar
                      </button>
                    </a>

                    <button
                        onClick={() => copyToClipboard(contactData.whatsappResponsible.number, 'whatsappResponsible')}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg text-sm transition-all flex items-center justify-center gap-2"
                    >
                      {copiedStates.whatsappResponsible ? (
                          <>
                            <Check className="w-4 h-4" /> Copiado!
                          </>
                      ) : (
                          <>
                            <Copy className="w-4 h-4" /> Copiar Número
                          </>
                      )}
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Agente - CORRIGIDO COM FUNCIONALIDADE */}
              <Card className="card-premium group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">Agente</h3>
                  <p className="text-white/70 mb-6">{contactData.agent.name}</p>

                  <div className="flex flex-col gap-2">
                    <button
                        onClick={() => openEmail(
                            contactData.agent.email,
                            contactData.agent.subject,
                            contactData.agent.body
                        )}
                        className="button-primary w-full"
                    >
                      <Mail className="w-5 h-5 mr-2" /> Enviar Email
                    </button>

                    <button
                        onClick={() => copyToClipboard(contactData.agent.email, 'agentEmail')}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg text-sm transition-all flex items-center justify-center gap-2"
                    >
                      {copiedStates.agentEmail ? (
                          <>
                            <Check className="w-4 h-4" /> Copiado!
                          </>
                      ) : (
                          <>
                            <Copy className="w-4 h-4" /> Copiar Email
                          </>
                      )}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Seção adicional com informações de contato */}
            <div className="mt-16 bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-gradient mb-6">Informações Adicionais</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    Contato Direto
                  </h4>
                  <p className="text-white/70 text-sm mb-3">
                    Para negociações diretas e oportunidades profissionais, entre em contato via WhatsApp.
                  </p>
                  <p className="text-white/60 text-xs">
                    Resposta em até 24 horas
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    Representação
                  </h4>
                  <p className="text-white/70 text-sm mb-3">
                    Para assuntos relacionados à carreira e representação profissional, contate o agente.
                  </p>
                  <p className="text-white/60 text-xs">
                    Agendamento de reuniões disponível
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Instagram className="w-5 h-5 text-pink-400" />
                    Redes Sociais
                  </h4>
                  <p className="text-white/70 text-sm mb-3">
                    Acompanhe a carreira e novidades através das redes sociais oficiais.
                  </p>
                  <p className="text-white/60 text-xs">
                    Conteúdo atualizado regularmente
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <p className="text-lg text-white/80 mb-6">
                Interessado em conhecer mais sobre o jogador?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href={`${contactData.whatsappPlayer.url}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre suas qualificações e disponibilidade.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <button className="button-primary">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Conversar Agora
                  </button>
                </a>

                <button
                    onClick={() => openEmail(
                        contactData.agent.email,
                        'Interesse em Conhecer o Jogador',
                        'Olá,\n\nTenho interesse em conhecer mais sobre o jogador Guilherme Cavalhieri e suas qualificações.\n\nPodemos agendar uma conversa?\n\nObrigado.'
                    )}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contatar Agente
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Contato;


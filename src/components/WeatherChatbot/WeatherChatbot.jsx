import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Bot, User } from 'lucide-react';
import './WeatherChatbot.css';

const WeatherChatbot = ({ weatherData, currentCity }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [showQuestions, setShowQuestions] = useState(true);
    const messagesEndRef = useRef(null);

    const predefinedQuestions = [
        {
            id: 1,
            text: "Como está o tempo hoje?",
            response: () => `Hoje em ${currentCity} está ${weatherData.current.temperature}°C com ${weatherData.current.precipitation > 0.2 ? 'chuva' : 'tempo seco'}. A umidade está em ${weatherData.current.humidity}%.`
        },
        {
            id: 2,
            text: "Qual a qualidade do ar?",
            response: () => `A qualidade do ar em ${currentCity} está ${weatherData.aqiDetails.status} com IQA de ${weatherData.aqiDetails.value}. ${weatherData.aqiDetails.description}`
        },
        {
            id: 3,
            text: "Vai chover hoje?",
            response: () => weatherData.current.precipitation > 0.2 
                ? `Sim, há ${weatherData.current.precipitation}% de chance de chuva hoje em ${currentCity}.`
                : `Não, hoje não há previsão de chuva em ${currentCity}. A precipitação está em ${weatherData.current.precipitation}%.`
        },
        {
            id: 4,
            text: "Como estará o tempo nos próximos dias?",
            response: () => {
                const forecast = weatherData.forecast.day.slice(1, 4).map((day, index) => {
                    const maxTemp = parseFloat(weatherData.forecast.temp_max[index + 1]).toFixed(1);
                    const minTemp = parseFloat(weatherData.forecast.temp_min[index + 1]).toFixed(1);
                    return `${day}: ${maxTemp}°/${minTemp}°C`;
                }).join(', ');
                return `Previsão para os próximos dias em ${currentCity}: ${forecast}`;
            }
        },
        {
            id: 5,
            text: "Qual a velocidade do vento?",
            response: () => `A velocidade do vento em ${currentCity} está em ${weatherData.current.wind_speed} mph.`
        }
    ];

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{
                id: Date.now(),
                text: `Olá! Sou seu assistente meteorológico para ${currentCity}. Escolha uma pergunta abaixo:`,
                sender: 'bot',
                timestamp: new Date()
            }]);
        }
    }, [isOpen, currentCity]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleQuestionClick = (question) => {
        const userMessage = {
            id: Date.now(),
            text: question.text,
            sender: 'user',
            timestamp: new Date()
        };

        const botResponse = {
            id: Date.now() + 1,
            text: question.response(),
            sender: 'bot',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage, botResponse]);
        setShowQuestions(false);
        
        setTimeout(() => setShowQuestions(true), 2000);
    };

    const resetChat = () => {
        setMessages([{
            id: Date.now(),
            text: `Olá! Sou seu assistente meteorológico para ${currentCity}. Escolha uma pergunta abaixo:`,
            sender: 'bot',
            timestamp: new Date()
        }]);
        setShowQuestions(true);
    };

    if (!weatherData) return null;

    return (
        <>
            <button 
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                <MessageCircle size={24} />
            </button>

            {isOpen && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        <div className="chatbot-title">
                            <Bot size={20} />
                            <span>Assistente Meteorológico</span>
                        </div>
                        <button 
                            className="chatbot-close"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((message) => (
                            <div 
                                key={message.id} 
                                className={`message ${message.sender}`}
                            >
                                <div className="message-avatar">
                                    {message.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
                                </div>
                                <div className="message-content">
                                    <p>{message.text}</p>
                                    <span className="message-time">
                                        {message.timestamp.toLocaleTimeString('pt-BR', { 
                                            hour: '2-digit', 
                                            minute: '2-digit' 
                                        })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {showQuestions && (
                        <div className="chatbot-questions">
                            <div className="questions-header">
                                <span>Perguntas disponíveis:</span>
                                <button 
                                    className="reset-chat"
                                    onClick={resetChat}
                                    title="Limpar conversa"
                                >
                                    ↻
                                </button>
                            </div>
                            <div className="questions-grid">
                                {predefinedQuestions.map((question) => (
                                    <button
                                        key={question.id}
                                        className="question-button"
                                        onClick={() => handleQuestionClick(question)}
                                    >
                                        {question.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default WeatherChatbot;
"use client"
import React, { useState } from 'react';
import { Gem, Award, MapPin, Phone, MessageCircle, Star, Sparkles, Crown, Shield } from 'lucide-react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const services = [
    {
      title: 'Oro',
      description: 'Creación y reparación de joyas en oro de la más alta calidad',
      icon: Crown,
      colorClass: 'gold',
    },
    {
      title: 'Plata',
      description: 'Trabajos artesanales en plata con acabados perfectos',
      icon: Sparkles,
      colorClass: 'silver',
    },
    {
      title: 'Acero Quirúrgico',
      description: 'Piezas modernas y resistentes para uso diario',
      icon: Shield,
      colorClass: 'steel',
    }
  ];

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Pattern */}
        <div className="hero-background">
          <div className="hero-pattern">
            <div className="hero-pattern-dot-1"></div>
            <div className="hero-pattern-dot-2"></div>
            <div className="hero-pattern-dot-3"></div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-icon-container">
            <div className="hero-icon-wrapper">
              <Gem className="w-12 h-12 text-slate-900" />
            </div>
          </div>
          
          <h1 className="hero-title">
            JOYERÍA TOLEDO
          </h1>
          
          <p className="hero-subtitle">
            Donde cada pieza cuenta una historia de <span style={{color: '#facc15'}}>elegancia</span> y <span style={{color: '#d1d5db'}}>perfección</span>
          </p>
          
          <p className="hero-description">
            Más de dos décadas creando y reparando joyas únicas en oro, plata y acero quirúrgico. 
            Tradición artesanal con técnicas modernas.
          </p>
          
          <button
            onClick={() => setIsContactOpen(true)}
            className="hero-cta-button"
          >
            <span>Consultar Ahora</span>
            <MessageCircle className="w-5 h-5 hero-cta-icon" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">
              Nuestras <span className="services-title-accent">Especialidades</span>
            </h2>
            <p className="services-description">
              Trabajamos con los mejores materiales para crear piezas que perduran en el tiempo
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card"
              >
                <div className={`service-card-accent service-card-accent-${service.colorClass}`}></div>
                
                <div className={`service-icon-container service-icon-${service.colorClass}`}>
                  <service.icon className="w-8 h-8 text-slate-900" />
                </div>
                
                <h3 className={`service-title service-title-${service.colorClass}`}>
                  {service.title}
                </h3>
                
                <p className="service-description">
                  {service.description}
                </p>
                
                <div className="service-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`service-star service-star-${service.colorClass}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisanal Section */}
      <section className="artisanal-section">
        <div className="artisanal-background">
          <div className="artisanal-bg-dot-1"></div>
          <div className="artisanal-bg-dot-2"></div>
        </div>
        
        <div className="artisanal-container">
          <div>
            <Award className="artisanal-icon" />
          </div>
          
          <h2 className="artisanal-title">
            Tradición <span className="artisanal-title-accent">Artesanal</span>
          </h2>
          
          <p className="artisanal-quote">
            "Cada joya que creamos lleva consigo la pasión y el conocimiento 
            transmitido de generación en generación"
          </p>
          
          <div className="artisanal-stats">
            <div className="artisanal-stat">
              <div className="artisanal-stat-number artisanal-stat-number-gold">25+</div>
              <div className="artisanal-stat-label">Años de Experiencia</div>
            </div>
            <div className="artisanal-stat">
              <div className="artisanal-stat-number artisanal-stat-number-silver">1000+</div>
              <div className="artisanal-stat-label">Joyas Creadas</div>
            </div>
            <div className="artisanal-stat">
              <div className="artisanal-stat-number artisanal-stat-number-orange">100%</div>
              <div className="artisanal-stat-label">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="location-container">
          <div className="location-header">
            <h2 className="location-title">
              Nuestra <span className="location-title-accent">Ubicación</span>
            </h2>
            <p className="location-description">
              Visítanos en el corazón de San Miguel de Tucumán
            </p>
          </div>
          
          <div className="location-content">
            <div>
              <div className="location-info">
                <div className="location-icon-wrapper">
                  <MapPin className="w-6 h-6 text-slate-900" />
                </div>
                <div className="location-info-content">
                  <h3>Dirección</h3>
                  <p>
                    Maipú 167<br />
                    T4000 San Miguel de Tucumán<br />
                    Tucumán, Argentina
                  </p>
                </div>
              </div>
              
              <div className="location-hours">
                <h4>Horarios de Atención</h4>
                <div className="location-hours-list">
                  <div className="location-hours-item">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="location-hours-item">
                    <span>Sábados</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="location-hours-item">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="location-map-container">
              <div className="location-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6849407283254!2d-65.2096!3d-26.8360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0x6abf6d9f61b3fe1c!2sMaip%C3%BA%20167%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
                  className="location-map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">
            <span className="contact-title-accent">Contactanos</span>
          </h2>
          
          <p className="contact-description">
            Estamos aquí para hacer realidad la joya de tus sueños
          </p>
          
          <div className="contact-methods">
            <a
              href="tel:+5493816090708"
              className="contact-method"
            >
              <div className="contact-method-icon contact-method-icon-phone">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="contact-method-content">
                <h3>Teléfono</h3>
                <p>+54 9 381 609 0708</p>
              </div>
            </a>
            
            <a
              href="https://wa.me/5493816090708?text=Hola,%20me%20interesa%20consultar%20sobre%20sus%20servicios%20de%20joyería"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >
              <div className="contact-method-icon contact-method-icon-whatsapp">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="contact-method-content">
                <h3>WhatsApp</h3>
                <p>Consulta Directa</p>
              </div>
            </a>
          </div>
          
          <div className="contact-cta">
            <h3>
              ¿Tienes una idea especial?
            </h3>
            <p>
              Contáctanos para una consulta personalizada y crearemos juntos la joya perfecta para ti
            </p>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="contact-cta-button"
            >
              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <Gem className="footer-icon" />
          </div>
          <p className="footer-copyright">© 2024 Joyería Toledo. Todos los derechos reservados.</p>
          <p className="footer-address">Maipú 167, San Miguel de Tucumán, Tucumán</p>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Contáctanos</h3>
            <div className="modal-actions">
              <a
                href="tel:+5493816090708"
                className="modal-action modal-action-call"
              >
                <Phone className="modal-action-icon" />
                Llamar Ahora
              </a>
              <a
                href="https://wa.me/5493816090708?text=Hola,%20me%20interesa%20consultar%20sobre%20sus%20servicios%20de%20joyería"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action modal-action-whatsapp"
              >
                <MessageCircle className="modal-action-icon" />
                WhatsApp
              </a>
              <button
                onClick={() => setIsContactOpen(false)}
                className="modal-action modal-action-close"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
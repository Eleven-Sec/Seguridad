import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ArrowRight, ShieldCheck, Clock, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card float up animation
      gsap.fromTo(cardRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Subtle pulse for the glow
      gsap.to(glowRef.current, {
        opacity: 0.8,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    return () => ctx.revert();
  }, []);

  const phoneNumber = "608 29 45 03";
  const telLink = "tel:608294503";
  const whatsappLink = "https://wa.me/34608294503";

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-24 z-20 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-padding relative">
        <div
          ref={cardRef}
          className="max-w-4xl mx-auto"
        >
          <div className="glass border border-[#00d4ff]/20 rounded-[2rem] p-8 sm:p-16 text-center relative overflow-hidden group shadow-2xl"
            style={{
              boxShadow: '0 25px 80px rgba(0,0,0,0.8), 0 0 60px rgba(0,212,255,0.05)',
              background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(20,20,20,0.95) 100%)'
            }}
          >
            {/* Animated background glow */}
            <div
              ref={glowRef}
              className="absolute -top-24 -right-24 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-[60px] opacity-50"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-8 animate-float">
                <ShieldCheck className="w-10 h-10 text-[#00d4ff]" />
              </div>

              <h2 className="heading-lg mb-6 text-white tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                ¿NECESITAS <span className="text-[#00d4ff]">PROTECCIÓN</span>?
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
                Estamos disponibles las 24 horas del día para atender cualquier emergencia o consulta de seguridad.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-[#00d4ff]" />
                  <span className="text-gray-200 font-medium">Atención 24/7</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#00d4ff]" />
                  <span className="text-gray-200 font-medium">Respuesta Inmediata</span>
                </div>
              </div>

              <div className="relative inline-block group mb-12">
                <a
                  href={telLink}
                  className="inline-flex flex-col items-center gap-2 group-hover:scale-105 transition-transform duration-500"
                >
                  <span className="text-sm text-gray-400 uppercase tracking-[0.3em] font-medium">Llámanos ahora</span>
                  <span className="text-4xl sm:text-6xl font-bold text-white tracking-tighter hover:text-[#00d4ff] transition-colors duration-300 py-2">
                    {phoneNumber}
                  </span>
                </a>
                <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent transition-all duration-700 mx-auto mt-2" />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={telLink}
                  className="w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-4 text-lg group bg-[#00d4ff]/10"
                >
                  <Phone className="w-5 h-5" />
                  <span>LLAMAR AHORA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 border border-[#25D366] text-[#25D366] font-medium tracking-wider rounded-xl inline-flex items-center justify-center gap-4 text-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 group shadow-[0_0_20px_rgba(37,211,102,0.2)]"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WHATSAPP</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

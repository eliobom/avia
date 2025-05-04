import React from 'react';
import { ExternalLink } from 'lucide-react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  hasExternalIcon?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, hasExternalIcon }) => (
  <li className="mb-3">
    <a 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors flex items-center"
    >
      {children}
      {hasExternalIcon && <ExternalLink className="ml-1 w-4 h-4" />}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Descubre y compra</h3>
            <ul>
              <FooterLink href="#">Vuelos baratos</FooterLink>
              <FooterLink href="#" hasExternalIcon>Reservas de hoteles</FooterLink>
              <FooterLink href="#" hasExternalIcon>Alquiler de autos</FooterLink>
              <FooterLink href="#" hasExternalIcon>Tours y excursiones</FooterLink>
              <FooterLink href="#">Asistencia en viaje</FooterLink>
              <FooterLink href="#" hasExternalIcon>avianca connect</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Sobre nosotros</h3>
            <ul>
              <FooterLink href="#">Somos avianca</FooterLink>
              <FooterLink href="#" hasExternalIcon>Trabaja con nosotros</FooterLink>
              <FooterLink href="#">Noticias corporativas</FooterLink>
              <FooterLink href="#">Alianzas y beneficios</FooterLink>
              <FooterLink href="#">Sostenibilidad</FooterLink>
              <FooterLink href="#">Plan de accesibilidad</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Nuestros portales</h3>
            <ul>
              <FooterLink href="#" hasExternalIcon>Programa lifemiles</FooterLink>
              <FooterLink href="#" hasExternalIcon>avianca empresas</FooterLink>
              <FooterLink href="#">aviancadirect</FooterLink>
              <FooterLink href="#" hasExternalIcon>avianca trade</FooterLink>
              <FooterLink href="#" hasExternalIcon>avianca cargo</FooterLink>
              <FooterLink href="#" hasExternalIcon>Relación con inversionistas</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces rápidos</h3>
            <ul>
              <FooterLink href="#">Información legal</FooterLink>
              <FooterLink href="#">Política de privacidad</FooterLink>
              <FooterLink href="#">Contrato de transporte</FooterLink>
              <FooterLink href="#">Artículos restringidos</FooterLink>
              <FooterLink href="#">Plan de contingencia</FooterLink>
              <FooterLink href="#">Contáctanos</FooterLink>
              <FooterLink href="#">Factura electrónica</FooterLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
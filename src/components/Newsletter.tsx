import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mb-6">
          <Logo />
        </div>
        <h2 className="text-3xl font-bold mb-4">¿Estás buscando ofertas?</h2>
        <p className="text-xl mb-8">Suscríbete y sé el primero en recibir ofertas personalizadas en tu correo.</p>
        
        <div className="flex flex-col md:flex-row gap-2 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input 
              type="email" 
              placeholder="correo@mail.com" 
              className="w-full pl-10 pr-3 py-4 bg-white text-black rounded-lg border-0 focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button className="bg-red-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-red-700 transition-colors">
            Suscríbete
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Al suscribirme acepto la <a href="#" className="underline">Política de Privacidad</a> y el uso de mis datos personales para recibir ofertas.
        </p>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">¡Síguenos!</h3>
          <div className="flex justify-center gap-4">
            <SocialIcon network="twitter" />
            <SocialIcon network="facebook" />
            <SocialIcon network="youtube" />
            <SocialIcon network="instagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M30.3 11C28.8 11.6 27.3 12.6 26.5 13.5C25.6 14.4 24.3 16.5 23.6 18.1C22.2 21.3 22.2 28.4 23.6 31.6C24.3 33.2 25.6 35.3 26.5 36.2C28.5 38.1 31.8 39.8 34.2 40C37.6 40.3 73.9 27.8 75.1 25.8C75.6 25 75.7 24.3 75.5 23.5C75.2 22.1 74.3 21.4 56 13.6C44.4 8.9 36.2 6.3 35 6.3C34.1 6.3 32.2 7.1 30.3 8.2V11Z" fill="currentColor"/>
        <path d="M76.3 35.5C75.8 35.7 69.2 40.2 61.7 45.4C54.2 50.7 47.7 55.1 47.4 55.1C47 55.1 45.8 54.4 44.7 53.5C43.1 52.2 42.7 51.5 42.7 49.9C42.7 48.8 42.9 47.7 43.2 47.5C43.4 47.2 45.8 45.6 48.4 43.9C53.6 40.5 55.2 38.8 53.3 38.8C52.5 38.8 49.5 40.1 42.7 43.4C37.4 45.9 33 48.1 32.8 48.3C32.5 48.4 32.3 49.6 32.3 50.8C32.3 53 33.2 55.4 34.7 57.3C37.1 60.4 40.5 62.2 44.7 62.8C46.8 63.1 48 63 50.3 62.3C52.3 61.7 58.4 58.3 73.7 49.3C84.5 43 94.7 37.5 95.3 37.1C96.4 36.3 96.5 36.1 96 35.1C95.1 33.3 78.7 34.2 76.3 35.5Z" fill="currentColor"/>
      </svg>
      <span className="ml-2 text-2xl font-bold">avianca</span>
    </div>
  );
};

const SocialIcon = ({ network }: { network: string }) => {
  return (
    <a 
      href="#" 
      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
    >
      <img 
        src={`https://cdn-icons-png.flaticon.com/512/${
          network === 'twitter' ? '733/733579' : 
          network === 'facebook' ? '733/733547' : 
          network === 'youtube' ? '1384/1384060' : '733/733558'
        }.png`} 
        alt={network}
        className="w-6 h-6"
      />
    </a>
  );
};

export default Newsletter;
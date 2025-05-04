import React, { useState } from 'react';
import { Plane, ArrowRight, ExternalLink, RefreshCcw, Map, Users } from 'lucide-react';
import Logo from './components/Logo';
import Menu from './components/Menu';
import RadioSelector from './components/RadioSelector';
import SearchBox from './components/SearchBox';
import DatePicker from './components/DatePicker';
import PassengerSelector from './components/PassengerSelector';
import DestinationCard from './components/DestinationCard';
import ServiceCard from './components/ServiceCard';
import LifemilesPromo from './components/LifemilesPromo';
import CreditCardPromo from './components/CreditCardPromo';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

function App() {
  const [tripType, setTripType] = useState('roundtrip');
  const [passengers, setPassengers] = useState(1);
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    if (!origin || !destination || !departureDate) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    if (tripType === 'roundtrip' && !returnDate) {
      alert('Por favor selecciona una fecha de regreso');
      return;
    }

    // Here you would typically navigate to the search results page
    console.log('Searching flights with:', {
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
      tripType,
    });
  };
  
  return (
    <div className="font-sans text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Menu />
          <Logo />
          <div className="w-8 h-8"></div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-sky-200 to-sky-100 pt-4 pb-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-full inline-flex p-1 mb-6">
              <RadioSelector 
                options={[
                  { id: 'roundtrip', label: 'Ida y vuelta' },
                  { id: 'oneway', label: 'Solo ida' }
                ]}
                selected={tripType}
                onChange={setTripType}
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <SearchBox 
                  icon={<Plane className="rotate-45" />}
                  label="Origen"
                  placeholder="Ingresa tu origen"
                  value={origin}
                  onChange={setOrigin}
                />
                <SearchBox 
                  icon={<Plane />}
                  label="Destino"
                  placeholder="Ingresa tu destino"
                  value={destination}
                  onChange={setDestination}
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <DatePicker 
                  label="Ida" 
                  selected={departureDate}
                  onSelect={setDepartureDate}
                />
                {tripType === 'roundtrip' && (
                  <DatePicker 
                    label="Vuelta"
                    selected={returnDate}
                    onSelect={setReturnDate}
                  />
                )}
                <PassengerSelector 
                  value={passengers}
                  onChange={setPassengers}
                />
              </div>
              
              <button 
                onClick={handleSearch}
                className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Buscar
              </button>
            </div>

            <div className="flex justify-center gap-8">
              <a href="#" className="flex items-center text-gray-700 font-medium hover:text-red-600 transition-colors">
                Hoteles <ExternalLink className="ml-1 w-4 h-4" />
              </a>
              <a href="#" className="flex items-center text-gray-700 font-medium hover:text-red-600 transition-colors">
                Autos <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <HeroSection />

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              Ofertas desde <span className="text-sky-500 ml-2">Bogotá</span>
              <span className="ml-2 inline-block">
                <ArrowRight className="w-5 h-5" />
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <DestinationCard 
                destination="Armenia"
                image="https://images.pexels.com/photos/7291911/pexels-photo-7291911.jpeg"
                price="183.800"
              />
              <DestinationCard 
                destination="Medellín"
                image="https://images.pexels.com/photos/7919/pexels-photo.jpg"
                price="189.700"
              />
              <DestinationCard 
                destination="Santa Marta"
                image="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg"
                price="210.500"
              />
              <DestinationCard 
                destination="Cartagena"
                image="https://images.pexels.com/photos/5590582/pexels-photo-5590582.jpeg"
                price="243.900"
              />
              <DestinationCard 
                destination="San Andrés"
                image="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg"
                price="287.600"
              />
              <DestinationCard 
                destination="Ciudad de Panamá"
                image="https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg"
                price="352.100"
              />
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard 
                title="Check-in online"
                description="Obtén tu pase de abordar y ahorra tiempo en el aeropuerto."
                icon={<RefreshCcw className="text-red-600" />}
              />
              <ServiceCard 
                title="Centro de ayuda"
                description="Busca y encuentra información útil para resolver tus preguntas."
                icon={<Map className="text-red-600" />}
              />
            </div>
          </div>
        </section>

        <section className="py-12 px-4 border-t border-gray-200">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Conoce las novedades de lifemiles</h2>
            <LifemilesPromo />
            <div className="mt-8">
              <CreditCardPromo />
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
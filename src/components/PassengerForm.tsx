import React from 'react';
import { User, Phone, Mail, CreditCard } from 'lucide-react';

interface PassengerFormProps {
  onSubmit: (data: PassengerData) => void;
}

interface PassengerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  document: string;
  birthDate: string;
  saveForLater: boolean;
}

const PassengerForm: React.FC<PassengerFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<PassengerData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    document: '',
    birthDate: '',
    saveForLater: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Datos del pasajero</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apellido
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Documento de identidad
          </label>
          <input
            type="text"
            value={formData.document}
            onChange={(e) => setFormData({ ...formData, document: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            value={formData.birthDate}
            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="saveForLater"
            checked={formData.saveForLater}
            onChange={(e) => setFormData({ ...formData, saveForLater: e.target.checked })}
            className="rounded text-red-600 focus:ring-red-500"
          />
          <label htmlFor="saveForLater" className="text-sm text-gray-700">
            Guardar información para futuras compras
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors"
      >
        Continuar
      </button>
    </form>
  );
};

export default PassengerForm;
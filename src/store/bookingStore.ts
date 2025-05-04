import { create } from 'zustand';

interface BookingState {
  selectedFlight: any;
  passenger: any;
  totalPrice: number;
  setSelectedFlight: (flight: any) => void;
  setPassenger: (passenger: any) => void;
  setTotalPrice: (price: number) => void;
  reset: () => void;
}

const useBookingStore = create<BookingState>((set) => ({
  selectedFlight: null,
  passenger: null,
  totalPrice: 0,
  setSelectedFlight: (flight) => set({ selectedFlight: flight }),
  setPassenger: (passenger) => set({ passenger }),
  setTotalPrice: (price) => set({ totalPrice: price }),
  reset: () => set({ selectedFlight: null, passenger: null, totalPrice: 0 }),
}));

export default useBookingStore;
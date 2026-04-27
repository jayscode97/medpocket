import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type PinKind = 'condition' | 'drug' | 'procedure';

export type PinEntry = {
  kind: PinKind;
  id: string;
  name: string;
  sub: string;
};

type PinsContextValue = {
  pins: PinEntry[];
  isPinned: (kind: PinKind, id: string) => boolean;
  togglePin: (entry: PinEntry) => void;
};

const PinsContext = createContext<PinsContextValue>({
  pins: [],
  isPinned: () => false,
  togglePin: () => {},
});

const STORAGE_KEY = '@medpocket_pins';

export function PinsProvider({ children }: { children: React.ReactNode }) {
  const [pins, setPins] = useState<PinEntry[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(raw => {
      if (raw) setPins(JSON.parse(raw));
    });
  }, []);

  function togglePin(entry: PinEntry) {
    setPins(prev => {
      const exists = prev.some(p => p.kind === entry.kind && p.id === entry.id);
      const next = exists
        ? prev.filter(p => !(p.kind === entry.kind && p.id === entry.id))
        : [entry, ...prev];
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function isPinned(kind: PinKind, id: string) {
    return pins.some(p => p.kind === kind && p.id === id);
  }

  return (
    <PinsContext.Provider value={{ pins, isPinned, togglePin }}>
      {children}
    </PinsContext.Provider>
  );
}

export function usePins() {
  return useContext(PinsContext);
}

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import ar from "@/dictionaries/ar.json";
import en from "@/dictionaries/en.json";

type Locale = "ar" | "en";
type Dictionary = typeof ar;

interface LanguageContextType {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");
  const [dict, setDict] = useState<Dictionary>(ar);

  useEffect(() => {
    // Check localStorage on mount
    const saved = localStorage.getItem("locale") as Locale;
    if (saved === "en" || saved === "ar") {
      setLocale(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setDict(newLocale === "en" ? en : ar);
    localStorage.setItem("locale", newLocale);
    
    // Update HTML attributes for styling and direction
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;
  };

  // Simple nested key resolver (e.g. "hero.title1")
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = dict;
    for (const k of keys) {
      if (value[k] === undefined) return key;
      value = value[k];
    }
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ locale, dict, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

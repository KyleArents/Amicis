// De content vimport React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Menu, Globe, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <Image src="/AMICIS%20LOGO.png" alt="Logo" width={60} height={60} />
          <h1 className="text-2xl font-bold tracking-wide">AMICIS</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-gray-300">Over ons</a>
          <a href="#services" className="hover:text-gray-300">Diensten</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="#login" className="hover:text-gray-300 flex items-center"><User className="mr-1" size={16}/>Login</a>
          <select className="bg-black text-white border border-gray-600 rounded px-2">
            <option value="nl">NL</option>
            <option value="en">EN</option>
          </select>
        </nav>
        <div className="md:hidden">
          <Menu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Welkom bij AMICIS</h2>
        <p className="text-gray-400 max-w-xl">
          Uw partner in kwaliteit en vertrouwen. Ontdek onze moderne diensten en unieke aanpak.
        </p>
        <Button className="mt-8 text-lg px-8 py-6">Lees meer</Button>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Over ons</h3>
          <p className="text-gray-300">
            AMICIS is een modern bedrijf dat streeft naar excellentie in alles wat we doen. Met een toegewijd team en innovatieve oplossingen bieden wij onze klanten de beste ervaring.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Consultancy</h4>
              <p className="text-gray-400">Professioneel advies voor al uw zakelijke behoeften.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Projectmanagement</h4>
              <p className="text-gray-400">Efficiënte planning en uitvoering van uw projecten.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Strategie</h4>
              <p className="text-gray-400">Inzicht en richting voor duurzame groei.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-6 py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Laatste nieuws</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Innovatie in 2025</h4>
                <p className="text-gray-400">Hoe technologie onze aanpak verandert.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Groei door samenwerking</h4>
                <p className="text-gray-400">Succesvolle cases uit onze praktijk.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Contacteer ons</h3>
          <form className="grid grid-cols-1 gap-6">
            <Input type="text" placeholder="Naam" required />
            <Input type="email" placeholder="E-mailadres" required />
            <Textarea placeholder="Uw bericht..." rows={5} required />
            <Button type="submit" className="text-lg py-6">Verzenden</Button>
          </form>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="px-6 py-20">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Login voor klanten</h3>
          <form className="grid grid-cols-1 gap-4">
            <Input type="email" placeholder="E-mailadres" required />
            <Input type="password" placeholder="Wachtwoord" required />
            <Button type="submit" className="text-lg py-6">Inloggen</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        © {new Date().getFullYear()} AMICIS. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}
an de canvas code wordt hier straks ingezet door het script.

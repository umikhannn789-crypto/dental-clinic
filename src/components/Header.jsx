import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
const handleAppointment = (e) => {
  e.preventDefault();

  if (!name || !email || !date || !service) {
    alert("Please fill all fields");
    return;
  }

  const whatsappNumber = "923208083931"; // 👈 SAME number jo order me kaam kar raha hai

  const appointmentText =
    `*New Appointment Request*%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Date: ${date}%0A` +
    `Service: ${service}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${appointmentText}`;

  window.open(whatsappURL, "_blank");

  // optional reset
  setName("");
  setEmail("");
  setDate("");
  setService("");
};

  return (
    <header className="w-full scroll-smooth">

      {/* ================= Navbar ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white shadow-md">
        <div className="flex justify-between items-center px-6 md:px-10 h-20">
          <h1 className="text-xl md:text-3xl font-bold">
            MA Dental & Skin Care
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-lg">
            <li><a href="#services" className="hover:text-gray-200">Services</a></li>
            <li><a href="#appointment" className="hover:text-gray-200">Appointment</a></li>
            <li><a href="#location" className="hover:text-gray-200">Location</a></li>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-blue-700 text-center space-y-4 py-6">
            <li><a onClick={() => setMenuOpen(false)} href="#services">Services</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#appointment">Appointment</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#location">Location</a></li>
          </ul>
        )}
      </nav>

      {/* ================= Hero ================= */}
      <section className="relative w-full h-screen mt-20">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
          alt="Dental Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Your Smile & Skin, Our Priority
            </h2>
            <p className="text-base md:text-lg mb-6">
              Advanced Dental & Skin Care with Modern Technology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#appointment" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
                Book Appointment
              </a>
              <a href="#services" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Services ================= */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Dental Care",
                img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
                list: ["Teeth Cleaning", "Braces", "Root Canal", "Whitening", "Implants"]
              },
              {
                title: "Skin Care",
                img: "https://ballansdentalandhealthcare.com/wp-content/themes/ballansdentalandhealthcare/images/hydrafacial.jpg",
                list: ["Acne Treatment", "Laser Therapy", "Anti Aging", "Peeling", "Facial"]
              }
            ].map((s, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl shadow-lg overflow-hidden">
                <img src={s.img} className="h-60 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                    {s.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {s.list.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Appointment ================= */}
      <section id="appointment" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <img
            src="https://content.jdmagicbox.com/v2/comp/delhi/p4/011pxx11.xx11.220124104022.b9p4/catalogue/rn-dental-and-skin-clinic-lajpat-nagar-2-delhi-skin-care-clinics-udo1768s6n.jpg"
            className="rounded-2xl shadow-lg"
          />

         <form
  onSubmit={handleAppointment}
  className="bg-white p-8 rounded-2xl shadow-xl space-y-5"
>
  <h2 className="text-3xl font-bold text-blue-600 mb-2">
    Book Appointment
  </h2>

  <p className="text-gray-600 mb-4">
    Schedule your visit with our specialists
  </p>

  <input
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Full Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />

  <input
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    type="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />

  <input
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    required
  />

  <select
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    value={service}
    onChange={(e) => setService(e.target.value)}
    required
  >
    <option value="">Select Service</option>
    <option>Dental Care</option>
    <option>Skin Care</option>
  </select>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
  >
    Confirm Appointment
  </button>
</form>

        </div>
      </section>

      {/* ================= Location ================= */}
      <section id="location" className="py-20 bg-blue-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p><b>Address:</b> I-8/4 Islamabad</p>
            <p><b>Phone:</b> +92 208083931</p>
            <p><b>Timing:</b> 11 AM – 2 PM</p>
          </div>

          <iframe
            className="w-full h-72 rounded-xl"
            src="https://www.google.com/maps?q=islamabad%20pakistan&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </header>
  );
}

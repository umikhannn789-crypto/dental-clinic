import React from 'react'

function Footer() {
  return (
    <div>


        {/* Footer */}
<footer className="bg-blue-700 text-white py-10">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Clinic Info */}
    <div>
      <h3 className="text-2xl font-bold mb-3">
        MA Dental & Skin Care
      </h3>
      <p className="text-sm text-blue-100">
        Providing trusted dental and skin care services with modern technology
        and professional doctors.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-xl font-semibold mb-3">
        Quick Links
      </h4>
      <ul className="space-y-2 text-blue-100">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">Appointment</li>
        <li className="hover:text-white cursor-pointer">Location</li>
        <li className="hover:text-white cursor-pointer">Reviews</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-xl font-semibold mb-3">
        Contact Us
      </h4>
      <p className="text-blue-100 text-sm mb-2">
        📍 Street 1, I-8/4 I 8/4 I-8, Islamabad, Pakistan
      </p>
      <p className="text-blue-100 text-sm mb-2">
        📞 +92 514901060
      </p>
      <p className="text-blue-100 text-sm">
        ⏰ 11 AM – 2 PM
      </p>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="border-t border-blue-500 mt-8 pt-4 text-center text-sm text-blue-100">
    © {new Date().getFullYear()} MA Dental & Skin Care. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer
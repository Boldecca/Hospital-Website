import React from "react";

// Array of doctor objects - each contains info about one doctor
const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    image: "https://img.freepik.com/premium-photo/female-doctor-with-stethoscope-around-her-neck_1126040-63.jpg",
    qualifications: "MD, FACC",
    experience: "15 years",
    description: "Specialized in heart disease prevention.",
  },
  {
    name: "Dr. Michael Chen",
    specialization: "Orthopedic Surgery",
    image: "https://thumbs.dreamstime.com/b/handsome-medical-doctor-portrait-white-coat-looking-camera-smiling-standing-crossed-arms-white-73529441.jpg",
    qualifications: "MD, FAAOS",
    experience: "12 years",
    description: "Expert in joint replacement and sports medicine.",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrics",
    image: "https://americanprofessionguide.com/wp-content/uploads/2023/10/US-Nursing-Licenses-Steps-to-Certification-Renewal.jpg",
    qualifications: "MD, FAAP",
    experience: "10 years",
    description: "Dedicated to providing care for children.",
  },
  {
    name: "Dr. James Williams",
    specialization: "Neurology",
    image: "https://www.bristolhs.com/assets/images/service/1.png",
    qualifications: "MD, PhD",
    experience: "18 years",
    description: "Specializes in treating brain health.",
  },
  {
    name: "Dr. Lisa Anderson",
    specialization: "Obstetrics & Gynecology",
    image: "https://media.istockphoto.com/id/508877940/photo/portrait-of-young-friendly-medicine-doctor-standing-at-her-offic.jpg?s=612x612&w=0&k=20&c=nDU2GOTyvQqiQ1lNLLyIOUZskw8bEeKhfNS0NhxduCw=",
    qualifications: "MD, FACOG",
    experience: "14 years",
    description: "Committed to women's health.",
  },
  {
    name: "Dr. Robert Taylor",
    specialization: "General Surgery",
    image: "https://tse2.mm.bing.net/th/id/OIP.dMoDiD8TGXf6W0EeJ9WeZwHaKz?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    qualifications: "MD, FACS",
    experience: "20 years",
    description: "Experienced in surgical procedures.",
  },
];

// Doctors Page component
function Doctors() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold text-gray-900">Our Medical Experts</h1>
          <p className="text-lg text-gray-600">
            Meet our team of highly qualified healthcare professionals
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Doctor Photo */}
              <div className="h-100 overflow-hidden">
                <img
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {doctor.specialization}
                  </span>
                  <span className="border px-3 py-1 rounded-full text-sm text-gray-700">
                    {doctor.experience} experience
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600">{doctor.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-12 shadow-sm">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Want to Consult with Our Doctors?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Schedule an appointment with any of our specialists to get personalized care.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </main>
  );
}

export default Doctors;

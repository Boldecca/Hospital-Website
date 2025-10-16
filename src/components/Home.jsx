// Import Link for navigation
import { Link } from "react-router-dom"
// Import icons
import { Heart, Shield, Users, Clock } from "lucide-react"

// This is the Home Page component
function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - The big banner at the top */}
      <section className="bg-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Grid with 2 columns on medium screens and up */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold">Your Health, Our Priority</h1>
              <p className="text-xl text-gray-600">
                Welcome to HealthCare Plus Hospital, where compassionate care meets medical excellence.
              </p>
              {/* Button that links to contact page */}
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
              >
                Book Appointment
              </Link>
            </div>

            {/* Right side - Image */}
            <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://img.freepik.com/premium-photo/modern-hospital-building-with-surrounding-parking-lot_10635-23765.jpg?w=1380" alt="Hospital Building" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Centered text */}
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-4xl font-bold">Comprehensive Healthcare Services</h2>
            <p className="text-lg text-gray-600">
              We offer a complete range of medical services delivered by experienced professionals.
            </p>
          </div>

          {/* Stats Cards - 4 columns on large screens */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Expert Doctors */}
            <div className="bg-white border rounded-lg p-6 text-center space-y-2 shadow-sm hover:shadow-lg">
              {/* Icon circle */}
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              {/* Number */}
              <div className="text-3xl font-bold text-blue-600">50+</div>
              {/* Label */}
              <p className="text-sm text-gray-600">Expert Doctors</p>
            </div>

            {/* Card 2 - Happy Patients */}
            <div className="bg-white border rounded-lg p-6 text-center space-y-2 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">10k+</div>
              <p className="text-sm text-gray-600">Happy Patients</p>
            </div>

            {/* Card 3 - Years Experience */}
            <div className="bg-white border rounded-lg p-6 text-center space-y-2 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">25+</div>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>

            {/* Card 4 - Emergency Care */}
            <div className="bg-white border rounded-lg p-6 text-center space-y-2 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <p className="text-sm text-gray-600">Emergency Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Take Care of Your Health?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule an appointment with our expert medical team today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home

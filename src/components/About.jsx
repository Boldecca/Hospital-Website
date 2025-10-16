// Import icons
import { Award, Heart, Users, Stethoscope } from "lucide-react"

// This is the About Page component
function About() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold">About HealthCare Plus</h1>
          <p className="text-lg text-gray-600">Committed to excellence in healthcare since 1998</p>
        </div>

        {/* Hospital Story Section - Image and Text side by side */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Image */}
          <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg"
              alt="Our Hospital"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Story text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-gray-600">
              Founded in 1998, HealthCare Plus Hospital began with a simple mission: to provide accessible, high-quality
              healthcare to our community.
            </p>
            <p className="text-gray-600">
              Over the past 25+ years, we've continuously invested in cutting-edge medical technology and recruited top
              medical professionals.
            </p>
            <p className="text-gray-600">
              Today, we stand as a beacon of medical excellence, combining compassionate care with innovative
              treatments.
            </p>
          </div>
        </div>

        {/* Mission & Values Section - Gray background box */}
        <div className="bg-gray-100 rounded-2xl p-12 mb-20">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional healthcare services that improve the quality of life for our patients.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Compassion:</strong> We treat every patient with empathy and respect
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Excellence:</strong> We strive for the highest standards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Integrity:</strong> We maintain honesty and transparency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Innovation:</strong> We embrace new technologies
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Why Choose HealthCare Plus?</h2>
            <p className="text-lg text-gray-600">We're more than just a hospital</p>
          </div>

          {/* 4 Cards in a grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white border rounded-lg p-6 space-y-4 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Expert Medical Team</h3>
              <p className="text-gray-600">Our doctors bring decades of experience.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border rounded-lg p-6 space-y-4 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Advanced Technology</h3>
              <p className="text-gray-600">We use the latest medical equipment.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border rounded-lg p-6 space-y-4 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Patient-Centered Care</h3>
              <p className="text-gray-600">Your comfort is our top priority.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border rounded-lg p-6 space-y-4 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Comprehensive Services</h3>
              <p className="text-gray-600">All healthcare services under one roof.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About

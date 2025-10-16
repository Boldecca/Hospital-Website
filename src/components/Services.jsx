// Import icons
import { Ambulance, Stethoscope, Pill, Baby, Smile, Heart, Activity, Eye } from "lucide-react"

// Array of service objects - each object contains info about one service
const services = [
  {
    name: "Emergency Care",
    icon: Ambulance,
    description: "24/7 emergency medical services with rapid response teams.",
    features: ["24/7 Availability", "Trauma Center", "Ambulance Service", "Critical Care"],
  },
  {
    name: "Surgery",
    icon: Stethoscope,
    description: "Advanced surgical procedures by expert surgeons.",
    features: ["General Surgery", "Orthopedic Surgery", "Cardiac Surgery", "Neurosurgery"],
  },
  {
    name: "Pharmacy",
    icon: Pill,
    description: "Full-service pharmacy with prescription medications.",
    features: ["Prescription Filling", "Medication Counseling", "Home Delivery", "Insurance Support"],
  },
  {
    name: "Maternity Care",
    icon: Baby,
    description: "Comprehensive prenatal and postnatal care.",
    features: ["Prenatal Care", "Labor & Delivery", "NICU", "Postpartum Support"],
  },
  {
    name: "Dental Services",
    icon: Smile,
    description: "Complete dental care including preventive and cosmetic dentistry.",
    features: ["General Dentistry", "Orthodontics", "Cosmetic Dentistry", "Oral Surgery"],
  },
  {
    name: "Cardiology",
    icon: Heart,
    description: "Expert diagnosis and treatment of heart conditions.",
    features: ["Heart Screening", "Cardiac Catheterization", "Pacemaker Implants", "Rehabilitation"],
  },
  {
    name: "Diagnostic Imaging",
    icon: Activity,
    description: "State-of-the-art imaging services for accurate diagnosis.",
    features: ["X-Ray", "CT Scan", "MRI", "Ultrasound"],
  },
  {
    name: "Ophthalmology",
    icon: Eye,
    description: "Comprehensive eye care from routine exams to surgery.",
    features: ["Eye Exams", "Cataract Surgery", "LASIK", "Glaucoma Treatment"],
  },
]

// This is the Services Page component
function Services() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold">Our Medical Services</h1>
          <p className="text-lg text-gray-600">Comprehensive healthcare services delivered with expertise</p>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Loop through each service and create a card */}
          {services.map((service) => {
            // Get the icon component for this service
            const Icon = service.icon

            return (
              <div key={service.name} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  {/* Icon circle */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  {/* Service info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Features list */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Key Features:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {/* Loop through each feature */}
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-600 flex items-center gap-2">
                            {/* Blue dot bullet point */}
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info Section */}
        <div className="bg-blue-50 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Need More Information?</h2>
            <p className="text-gray-600">Our services are designed to meet all your healthcare needs under one roof.</p>
            <p className="text-gray-600">We accept most major insurance plans. Contact us to learn more.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Services

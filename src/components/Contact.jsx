"use client"

// Import icons
import { MapPin, Phone, Mail, Clock } from "lucide-react"

// This is the Contact Page component
function Contact() {
  // Function that runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page reload
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold">Get In Touch</h1>
          <p className="text-lg text-gray-600">We're here to help. Reach out to us for appointments or inquiries</p>
        </div>

        {/* Two column layout - Contact info on left, form on right */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            {/* Address Card */}
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Medical Center Drive
                    <br />
                    Healthcare District
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">
                    Main: (555) 123-4567
                    <br />
                    Emergency: (555) 911-0000
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">
                    General: info@healthcareplus.com
                    <br />
                    Appointments: appointments@healthcareplus.com
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Emergency: 24/7
                    <br />
                    Outpatient: Mon-Fri 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="h-64 rounded-2xl overflow-hidden bg-gray-200">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e7da097280667.5602904559775.jpg" alt="Hospital Location" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="mt-8 md:mt-0 md:col-span-1">
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name - side by side */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium block">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium block">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium block">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium block">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Appointment Request"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Message - larger text area */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-600 text-center">We'll get back to you within 24 hours</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact

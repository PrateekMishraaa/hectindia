
import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const footerSections = [
    {
      title: "HECT INDIA",
      links: [
        "Contact", "About Us", "Careers", "Blogs", "Investor Relations", "FAQ", "Our Team", 
        "Testimonials", "Founders Message", "Privacy Policy", "Terms/Conditions", 
        "Cancellation Policy", "Data Policy", "News Articles/Media", "List Your Hotel", 
        "Sell Your Tours", "Currency Converter", "Travel 22", "Recent Offers My Hotel", 
        "B2B Website", "Bus", "Flight", "Hotels", "Tours", "Cars", "Guide", 
        "Attractions / Excursions", "Cruise", "Travel Insurance", "VISA Assistance"
      ]
    },
    {
      title: "DESTINATIONS",
      links: [
        "Paris", "London", "Pattaya", "Europe", "Singapore", "Edinburgh", "Phuket", "Dubai", 
        "Amsterdam", "Bangkok", "Thailand", "Maldives", "Athens", "Milan", "Kuala Lumpur", 
        "Rotterdam", "Hanoi", "Da Nang", "Barcelona", "Interlaken", "Lucerne", "Madrid", 
        "Langkawi", "Mauritius", "Bali", "Nusa Penida", "Lake Como", "Rome", "Santorini", 
        "Seoul", "Tokyo", "Almaty", "Koh Samui", "Tbilisi", "Bahrain"
      ]
    },
    {
      title: "CHAIN HOTELS",
      links: [
        "Lemon Tree Hotels", "Taj Hotels", "Vivanta by Design", "ITC Hotels", "Fortune Hotels", 
        "Ginger Hotels", "Jusra Hotels", "Royal Orchid Hotels", "Regenta Hotels", "Red Fox Hotels", 
        "Oberoi Hotels", "Leela Hotels", "Lords Hotels", "Sterling Hotels", "Club Mahindra Hotels", 
        "Hyatt Hotels", "Hilton Hotels", "Double Diamond Hotels", "Ramada Hotels", "Trident Hotels", 
        "Radisson Hotels"
      ]
    },
    {
      title: "CITY HOTELS",
      links: [
        "Hotels in Delhi", "Hotels in Mumbai", "Hotels in Chennai", "Hotels in Hyderabad", 
        "Hotels in Gurgaon / Gurugram", "Hotels in Ahmedabad", "Hotels in Pune", "Hotels in Kolkata", 
        "Hotels in Lucknow", "Hotels in Agra", "Hotels in Dwarka Gujarat", "Hotels in Bengaluru", 
        "Hotels in Kochi", "Hotels in Kerala", "Hotels in Haridwar", "Hotels in Thiruvananthapuram", 
        "Hotels in Ajmer", "Hotels in Nagpur", "Hotels in Chandigarh", "Hotels in Vadodara", 
        "Hotels in Bhubaneswar", "Hotels in Jammu", "Hotels in Gwalior", "Hotels in Madurai", 
        "Hotels in Nashik", "Hotels in Aurangabad", "Hotels in Andaman And Nicobar Islands"
      ]
    },
    {
      title: "HOLIDAY PACKAGES",
      links: [
        "USA Tour Packages", "Europe Tour Package", "Thailand Tour Packages", "Vietnam Tour Packages", 
        "Turkey Tour Packages", "Greece Tour Packages", "Singapore Tour Packages", "Dubai Tour Packages", 
        "Bali Tour Packages", "United Kingdom Tour Packages", "Malaysia Tour Packages", 
        "Sri Lanka Tour Packages", "Australia Tour Packages", "Cape Town Tour Packages", 
        "Kenya Tour Packages", "Azerbaijan Tour Packages", "Hong Kong Tour Packages", 
        "India Tour Packages", "Italy Tour Packages", "Kazakhstan Tour Packages", "Malta Tour Packages", 
        "Kerala Tour Packages", "Goa Tour Packages", "Kashmir Tour Packages", "Ladakh Tour Packages", 
        "Gujarat Tour Packages", "Gangtok Tour Packages", "Andaman Tour Packages"
      ]
    },
    {
      title: "INTERNATIONAL HOTELS",
      links: [
        "Hotels in Bangkok", "Hotels in Dubai", "Hotels in Pattaya", "Hotels in Singapore", 
        "Hotels in Bali", "Hotels in Kuta, Bali", "Hotels in Nusa Dua", "Hotels in Nusa Penida", 
        "Hotels in Ubud", "Hotels in Siemenya", "Hotels in Colombo", "Hotels in Kathmandu", 
        "Hotels in Maldives", "Hotels in Istanbul", "Hotels in London", "Hotels in Paris", 
        "Hotels in Amsterdam", "Hotels in Interlaken", "Hotels in Lucerne", "Hotels in Rotterdam", 
        "Hotels in Hanoi", "Hotels in Da Nang", "Hotels in Madrid", "Hotels in Barcelona", 
        "Hotels in Glasgow", "Hotels in Edinburgh", "Hotels in Athens"
      ]
    },
    {
      title: "HOTELS AT TOURIST PLACES",
      links: [
        "Hotels in Goa", "Hotels in Shimla", "Hotels in Mussoorie", "Hotels in Nainital", 
        "Hotels in Dalhousie", "Hotels in Bandhavgarh", "Hotels in Corbett", "Hotels in Gangtok", 
        "Hotels in Jaipur", "Hotels in Jaishamori", "Hotels in Jodhpur", "Hotels in Kodaikanal", 
        "Hotels in Kovalam", "Hotels in Ranikhet", "Hotels in Manali", "Hotels in Mysore", 
        "Hotels in Ooty", "Hotels in Rishikesh", "Hotels in Ranthambhore", "Hotels in Srinagar", 
        "Hotels in Udaipur", "Hotels in Patan", "Hotels in Tirupati", "Hotels in Katra", 
        "Hotels in Thekkady", "Hotels in Bikaner", "Hotels in Vapi"
      ]
    },
    {
      title: "TRAVEL",
      links: [
        "Business and Corporate Travel", "Corporate Tour Group", "Group Tour Organizer", 
        "International Corporate Leisure Trip", "International Corporate Tour Package", 
        "Leisure Group Tour", "International Leisure Trip", "Trip Organizer", "Business Tour Packages", 
        "Corporate Tour Packages", "Corporate Trips", "Travel Agency", "Group Tour to Thailand", 
        "Group Tour to Singapore", "Group Tour to Baku"
      ]
    },
    {
      title: "EXCURSIONS",
      links: [
        "Desert Safari Dubai", "Burj Khalifa Ticket, Dubai", "Atlantis Aquaventure Waterpark Dubai", 
        "Sea Aquarium Sentosa Singapore", "Andamanda Water Park Phuket", "London Eye Tickets", 
        "Dubai Excursions", "London Excursions", "Singapore Excursions", "Pattaya Excursions", 
        "Bangkok Excursions", "UK – United Kingdom Excursions", "Edinburgh Excursions"
      ]
    },
    {
      title: "FLIGHT OFFERS",
      links: [
        "Delhi Bali Delhi", "Delhi Bangkok Delhi", "Delhi Phuket Delhi", "Delhi Singapore Delhi", 
        "Delhi Dubai Delhi", "Delhi Goa Delhi", "Delhi Amity Delhi", "Delhi Kolkata Delhi", 
        "Delhi Mumbai Delhi", "Delhi Bangalore Delhi", "Delhi Srinagar Delhi", "Delhi Ahmedabad Delhi", 
        "Delhi Leh Delhi", "Delhi Kolkata Delhi", "Delhi Toronto Delhi", "Delhi Hong Kong Delhi", 
        "Delhi Male Delhi", "Mumbai Goa Mumbai", "Delhi Patna Delhi", "Delhi Leh Delhi", 
        "Delhi Hyderabad Delhi", "Delhi Bengaluru Delhi"
      ]
    },
    {
      title: "VISA ASSISTANCE",
      links: [
        "Dubai Visa", "Saudi Arab Visa", "Egypt Visa", "Kuwait Visa", "Qatar Visa", "UAE Visa", 
        "Uzbekistan Visa", "Turkey Visa", "Russia Visa", "Uzbekistan Visa (Multiple Single Entry)", 
        "Vietnam Visa (Multiple Single Entry)", "Cambodia Visa", "Philippines Visa", 
        "Singapore Visa (Tourist/Business)", "Japan Visa (Tourist)", "South Korea Visa (Tourist)", 
        "China Visa (Tourist/Business)", "UK Visa (Tourist)", "USA Visa (Tourist)", 
        "Schengen Visa (Tourist)", "Canada Visa (Tourist)", "Australia Visa (Tourist)", 
        "New Zealand Visa (Tourist)"
      ]
    }
  ]

  return (
    <footer className="bg-gray-300 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">

        <div className="space-y-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="border-b border-gray-800 pb-6 last:border-b-0">
              <h3 className="text-black font-bold text-lg mb-3">{section.title}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {section.links.map((link, linkIndex) => (
                  <Link 
                    key={linkIndex} 
                    href="#"
                    className="text-sm text-black hover:text-orange-500 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center space-x-6 mb-8 pt-6 border-t border-gray-800">
          <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
            <FaFacebookF className="text-white" size={18} />
          </Link>
          <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
            <FaLinkedinIn className="text-white" size={18} />
          </Link>
          <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
            <FaTwitter className="text-white" size={18} />
          </Link>
          <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
            <FaInstagram className="text-white" size={18} />
          </Link>
          <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
            <FaYoutube className="text-white" size={18} />
          </Link>
        </div>

  
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 HECT India Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
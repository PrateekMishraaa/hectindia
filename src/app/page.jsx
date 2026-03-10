import React from 'react'
import { FaHotel, FaSuitcase, FaPlane, FaShip, FaBus, FaSearch, FaUserFriends, FaStar } from 'react-icons/fa'
import { MdOutlineDateRange } from 'react-icons/md'
import { IoLocationOutline } from 'react-icons/io5'
import HotelOne from "../../public/h1.jpeg"
import HotelTwo from "../../public/h2.jpeg"
import HotelThree from "../../public/h3.jpeg"
import HotelFour from "../../public/h4.jpeg"
import SceneOne from "../../public/s1.webp" // Add your Europe image
import TourOne from "../../public/s2.webp" // Add your tour images
import TourTwo from "../../public/s3.webp"
import TourThree from "../../public/s4.webp" // Add your tour images
import TourFour from "../../public/s5.webp"
import Image from 'next/image'

const page = () => {
  const hotelData = [
    {
      img: HotelOne,
      title: "Resort RIO Goa",
      rating: 4.6,
      reviews: "15 reviews"
    },
    {
      img: HotelTwo,
      title: "The Roar Resort",
      rating: 4.4,
      reviews: "5 reviews"
    },
    {
      img: HotelThree,
      title: "Mango Bloom River Resort Jim Corbett",
      rating: 4.6,
      reviews: "5 reviews"
    },
    {
      img: HotelFour,
      title: "The Soaltee Kathmandu",
      rating: 4.3,
      reviews: "3 reviews"
    }
  ]

  const tourData = [
    {
      country: "South Korea",
      title: "5 Days Romantic Jeju Island South Korea Special Tour",
      rating: 0,
      reviews: 0,
      image: TourOne,
      price: "On Request"
    },
    {
      country: "South Korea",
      title: "5 Days Busan Getaway South Korea Special Tour",
      rating: 0,
      reviews: 0,
      image: TourTwo,
      price: "On Request"
    },
     {
      country: "South Korea",
      title: "5 Days Busan Getaway South Korea Special Tour",
      rating: 0,
      reviews: 0,
      image: TourThree,
      price: "On Request"
    },
     {
      country: "South Korea",
      title: "5 Days Busan Getaway South Korea Special Tour",
      rating: 0,
      reviews: 0,
      image: TourFour,
      price: "On Request"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r bg-[#183b62] text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Search Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b pb-2">
              <button className="flex items-center px-4 py-2 text-orange-600 border-b-2 border-orange-600 font-semibold">
                <FaHotel className="mr-2" /> Hotels
              </button>
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-orange-600">
                <FaSuitcase className="mr-2" /> Tours
              </button>
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-orange-600">
                <FaPlane className="mr-2" /> Flights
              </button>
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-orange-600">
                <FaShip className="mr-2" /> Cruise
              </button>
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-orange-600">
                <FaBus className="mr-2" /> Bus
              </button>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City, Hotel name or Location
                </label>
                <div className="relative">
                  <IoLocationOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
                  />
                </div>
              </div>

              {/* Date Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check In - Out
                </label>
                <div className="relative">
                  <MdOutlineDateRange className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value="06/Mar/2026 - 07/Mar/2026"
                    readOnly
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                  />
                </div>
              </div>

              {/* Guests Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Guests
                </label>
                <div className="relative">
                  <FaUserFriends className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value="1 Room 2 Adults - 0 Child"
                    readOnly
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                  <FaSearch className="mr-2" />
                  Search
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Popular:</span>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full">
                Mumbai
              </button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full">
                Delhi
              </button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full">
                Bangalore
              </button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full">
                Goa
              </button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full">
                Kerala
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hotels Section */}
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-6xl mx-auto'>
          {/* Header with sub-tabs */}
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>Find Your Perfect Trip</h2>
            <div className='flex flex-wrap items-center gap-6 text-gray-600 border-b pb-3'>
              <span className='font-semibold text-orange-600 border-b-2 border-orange-600 pb-3 -mb-3'>Hotels</span>
              <span className='hover:text-orange-600 cursor-pointer'>Guide Tours</span>
              <span className='hover:text-orange-600 cursor-pointer'>Attractions</span>
              <span className='hover:text-orange-600 cursor-pointer'>Cars</span>
              <span className='hover:text-orange-600 cursor-pointer'>Cruise</span>
            </div>
          </div>

          {/* Hotel Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {hotelData.map((item, index) => (
              <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                {/* Hotel Image */}
                <div className='h-48 w-full relative'>
                  <Image 
                    src={item.img} 
                    alt={item.title}
                    fill
                    className='object-cover'
                  />
                </div>
                
                {/* Hotel Details */}
                <div className='p-4'>
                  <h3 className='font-semibold text-gray-800 mb-2 line-clamp-2'>
                    {item.title}
                  </h3>
                  
                  {/* Rating */}
                  <div className='flex items-center mb-3'>
                    <span className='bg-green-600 text-white text-sm px-2 py-1 rounded flex items-center'>
                      {item.rating} <FaStar className='ml-1 text-xs' />
                    </span>
                    <span className='text-sm text-gray-500 ml-2'>({item.reviews})</span>
                  </div>
                  
                  {/* Price */}
                  <div className='text-orange-600 font-semibold'>
                    On Request
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Europe Section */}
      <section className='py-12 bg-gray-50'>
        {/* Heading */}
        <div className='flex justify-center w-full py-6'>
          <p className='text-3xl md:text-4xl font-semibold text-gray-800 text-center px-4'>
            Experience Europe — Where Every Journey Tells a Story
          </p>
        </div>

        {/* Main Content */}
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Left Side - Europe Section */}
            <div className='lg:w-1/2'>
              <div className='relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl'>
                <Image 
                  src={SceneOne} 
                  alt="Europe"
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>
                <div className='absolute bottom-0 left-0 p-8 text-white'>
                  <h2 className='text-5xl font-bold mb-2'>Europe</h2>
                  <p className='text-lg mb-4'>Discover Europe's charm through its culture.</p>
                  <button className='px-8 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-blue-900 hover:text-white transition-colors duration-300'>
                    Explore
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Tours */}
            <div className='lg:w-1/2'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {tourData.map((tour, index) => (
                  <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                    <div className='h-48 bg-gray-300 relative'>
                      {tour.image && (
                        <Image 
                          src={tour.image}
                          alt={tour.title}
                          fill
                          className='object-cover'
                        />
                      )}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                      <div className='absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-semibold'>
                        {tour.country}
                      </div>
                    </div>
                    <div className='p-4'>
                      <h3 className='font-semibold text-gray-800 mb-2 line-clamp-2'>
                        {tour.title}
                      </h3>
                      <div className='flex items-center mb-2'>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className='text-gray-400'>⭐</span>
                        ))}
                        <span className='text-gray-500 text-sm ml-2'>{tour.reviews} Review</span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-orange-600 font-bold'>{tour.price}</span>
                        <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
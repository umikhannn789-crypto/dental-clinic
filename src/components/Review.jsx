import React from 'react'

function Review() {
  return (
   <>

   {/* Reviews Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Patient Reviews
          </h2>

          {/* Review Form */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-10">
            <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded"
              />

              <textarea
                placeholder="Write your review here..."
                className="w-full p-3 border rounded h-28"
              ></textarea>

              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Static Reviews */}
          {/* <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold">Ayesha Khan</p>
              <p className="text-gray-600">
                Very professional staff and excellent dental service.
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold">Ali Raza</p>
              <p className="text-gray-600">
                Skin treatment results were amazing. Highly recommended!
              </p>
            </div>
          </div> */}

        </div>
      </section>
   
   </>
  )
}

export default Review
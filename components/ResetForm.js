function ResetForm () {
    return (
  <div class="flex items-center justify-center h-screen bg-[#06202A]">
    <div class="container">
      <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-green-700  sm:text-5xl sm:leading-none md:text-6xl">
            Universe<span class="text-indigo-600">!</span>
          </h2>
          <h3 class='text-xl md:text-3xl text-black font-bold mt-10'>Thank you for Reset Your Password</h3>
          <p class="text-md md:text-xl text-black font-bold mt-10"> If you want to look your account please click the below button ! </p>
        </div>
        <div class="flex flex-wrap mt-10 justify-center">
          
          <div class="m-3">
            <a href="login" title="universe page"
               class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mx-auto">View</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
  
  export default ResetForm
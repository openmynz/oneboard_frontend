export default function AddUser() {
  return (
    <div className="flex flex-col items-center mt-10 mr-36 " >
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-2">Register Employee</h1>
      <form className="space-y-2">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 font-bold mb-0.5" htmlFor="employeeId">
              Employee ID
            </label>
            <input type="text" id="employeeId" name="employeeId" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter employee ID" />
          </div>
          <div>
            <label className="block text-gray-800 font-bold mb-0.5" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter name" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 font-bold mb-0.5" htmlFor="designation">
              Designation
            </label>
            <input type="text" id="designation" name="designation" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter designation" />
          </div>
          <div>
            <label className="block text-gray-800 font-bold mb-0.5" htmlFor="manager">
              Manager Name
            </label>
            <input type="text" id="manager" name="manager" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter manager" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 font-bold mb-0.5" htmlFor="joiningDate">
              Joining Date
            </label>
            <input type="date" id="joiningDate" name="joiningDate" className="w-full border border-gray-300 p-1 rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-800 font-bold mb-0.5" htmlFor="lead">
              Lead Name
            </label>
            <input type="text" id="lead" name="lead" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter lead" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 font-bold mb-0.5" htmlFor="contactNo">
              Contact No
            </label>
            <input type="tel" id="contactNo" name="contactNo" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter contact number" />
          </div>
          <div>
            <label className="block text-gray-800 font-bold mb-0.5" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter email" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 font-bold mb-0.5" htmlFor="bloodGroup">
              Blood Group
            </label>
            <input type="text" id="bloodGroup" name="bloodGroup" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter blood group" />
          </div>
        </div>
        <div>
          <button type="submit" className="w-full rounded-xl bg-black px-3 py-1 text-lg font-medium uppercase text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

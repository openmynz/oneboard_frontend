import { Button,TextField, Theme } from "@radix-ui/themes"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useQuery} from "@tanstack/react-query";
import {fetchEmployee,fetchLdapUsers} from "../api/api";
export default function AddUser() {
  
  const { data: employeedata } = useQuery({
    queryKey: ["employeeData"],
    queryFn: fetchEmployee,
  });
  const { data: ldapuserdata } = useQuery({
    queryKey: ["ldapuserData"],
    queryFn: fetchLdapUsers,
  });
  console.log(employeedata)
  console.log(ldapuserdata)
  
  return (<Theme>
    <div className="flex  items-center mt-10 justify-start  ml-10" >
    <div className="bg-white p-5 rounded-lg shadow-md">
    <TextField.Root>
  <TextField.Slot>
    <MagnifyingGlassIcon height="16" width="16" />
  </TextField.Slot>
  <TextField.Input placeholder="Enter the name" />
</TextField.Root>
    <div className="grid grid-cols-4 mt-5 mb-5">
      <div>Full Name</div>
      <div>First Name</div>
      <div>Last Name</div>
      <div>Email</div>
    </div>
      <form className="space-y-2">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 font-bold text-sm mb-0.5" htmlFor="employeeId">
              Employee ID
            </label>
            <TextField.Input type="text" id="employeeId" name="employeeId" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter employee ID" />
          </div>
          <div>
            <label className="block text-gray-800 font-bold text-sm mb-0.5" htmlFor="designation">
              Designation
            </label>
            <TextField.Input type="text" id="designation" name="designation" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter designation" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
         
          <div>
            <label className="block text-gray-800 font-bold text-sm mb-0.5" htmlFor="manager">
              Manager Name
            </label>
            <TextField.Input type="text" id="manager" name="manager" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter manager" />
          </div>
          <div>
            <label className="block text-gray-800 font-bold text-sm mb-0.5" htmlFor="bloodGroup">
              Blood Group
            </label>
            <TextField.Input type="text" id="bloodGroup" name="bloodGroup" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter blood group" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 font-bold text-sm mb-0.5" htmlFor="joiningDate">
              Joining Date
            </label>
            <TextField.Input type="date" id="joiningDate" name="joiningDate" className="w-full border border-gray-300 p-1 rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-800 text-sm font-bold mb-0.5" htmlFor="lead">
              Lead Name
            </label>
            <TextField.Input type="text" id="lead" name="lead" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter lead" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 text-sm font-bold mb-0.5" htmlFor="contactNo">
              Contact No
            </label>
            <TextField.Input type="tel" id="contactNo" name="contactNo" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter contact number" />
          </div>
          <div>
            <label className="block text-gray-800 text-sm font-bold mb-0.5" htmlFor="email">
              Email
            </label>
            <TextField.Input type="email" id="email" name="email" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter email" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
      
        </div>
        <div>
          <Button type="submit" className="w-full rounded-xl px-3 py-1 text-lg font-medium uppercase text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  </div>
  </Theme>
  )
}

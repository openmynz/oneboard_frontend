import { ScrollArea, Table, Badge, Dialog,  TextField, Button, Theme } from "@radix-ui/themes";
import { useQuery, useMutation,useQueryClient} from "@tanstack/react-query";
import {fetchLdapUsers,editEmployee} from "../api/api";
//this is the interface for the ldap users field
interface Ldap{
  ldap_user_id: string
  employee_table_id: string;
  common_name: string;
  email: string;
  employee_id: string;
}
//this is the interface for the employee details field
interface employeeDetails{
 id:string;
  employee_id: string,
  role:  string,
  reports_to: string,
  blood_group:  string,
  joining_date:  string,
  contact_number:  string,
  email_id:  string,
  
}
const AddEmployeeTable: React.FC = () => {
  const queryClient = useQueryClient()     //this is used for mutations
 
  const {data:ldapdata} = useQuery({
    queryKey: ["ldapData"],
    queryFn: fetchLdapUsers
  })
  const { mutate: editemployee } = useMutation({
    mutationFn: editEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["employeeData"] });
    }
  });
  const handleEditEmployee = async (e: React.FormEvent<HTMLFormElement>,id:string) => {
    e.preventDefault();
    //gets data if null do not pass to the api
    const formData = new FormData(e.currentTarget);
    // const employee_id = Number(formData.get("employeeId"));
    const employee_id = formData.get("employeeId")?.toString() || null;
    const role = formData.get("role")?.toString() || null;
    const reports_to = formData.get("manager")?.toString() || null;
    const blood_group = formData.get("bloodGroup")?.toString() || null;
    const joining_date = formData.get("joiningDate")?.toString() || null;
    const contact_number = formData.get("contactNo")?.toString() || null;
    const email_id = formData.get("email")?.toString() || null;
  
    const updatedEmployeeData: Partial<employeeDetails> = {};
    if (employee_id!==null) updatedEmployeeData.employee_id = employee_id;
    if (role !== null) updatedEmployeeData.role = role;
    if (reports_to !== null) updatedEmployeeData.reports_to = reports_to;
    if (blood_group !== null) updatedEmployeeData.blood_group = blood_group;
    if (joining_date !== null) updatedEmployeeData.joining_date = joining_date;
    if (contact_number !== null) updatedEmployeeData.contact_number = contact_number;
    if (email_id !== null) updatedEmployeeData.email_id = email_id;
  
    try {
      await editemployee({ id, ...updatedEmployeeData } as employeeDetails);
    } catch (error) {
      console.error("Failed to edit employee:", error);
    }
  };
  
  
  
  

 console.log(ldapdata)
  return (
    <div>
      <form className="max-w-sm ml-4 mt-5 mb-2 ">   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500  dark:placeholder-gray-400  " placeholder="Search..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form> 
    <Theme>   <ScrollArea type="always" scrollbars="vertical" style={{ height: 600}}>
      <Table.Root style={{ width: '100%', maxWidth: '100%' }}>
        <Table.Header>
          <Table.Row >
            <Table.ColumnHeaderCell style={{ width: '25%' ,textAlign:"center"}}>Employee ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell style={{ width: '25%' }}>Full Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell style={{ width: '25%' }}>Email ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell style={{ width: '25%' }}>Edit</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {ldapdata?((ldapdata as Ldap[]).map((ldap:Ldap, index: number) =>(
          <Table.Row  key={ldap.ldap_user_id ?? index}>
            <Table.Cell  style={{ width: '25%',textAlign:"center" }}>{ldap.employee_table_id}</Table.Cell>
            <Table.Cell style={{ width: '25%' }}>{ldap.common_name}</Table.Cell>
            <Table.Cell style={{ width: '25%' }}>{ldap.email}</Table.Cell>
            <Table.Cell style={{ width: '25%' }}>
              <Dialog.Root>
                <Dialog.Trigger>
                  <Badge color="green">Edit</Badge>
                </Dialog.Trigger>
                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title>Edit profile</Dialog.Title>
                  <Dialog.Description size="2" mb="4">
                    Make changes to LDAP user id : {ldap.ldap_user_id} user name : {ldap.common_name}
                  </Dialog.Description>
      <form className="space-y-2" onSubmit={(e)=>handleEditEmployee(e,ldap.ldap_user_id)}>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 font-bold text-sm mb-0.5" htmlFor="employeeId">
              Employee ID
            </label>
            <TextField.Input  type="text" id="employeeId" name="employeeId" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter employee ID" />
          </div>
          <div>
            <label className="block text-gray-800 text-sm font-bold mb-0.5" htmlFor="email">
              Email
            </label>
            <TextField.Input type="email" id="email" name="email" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter email" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
  <div>
    <label className="block text-gray-800 font-bold text-sm mb-0.5" htmlFor="role">
      Role
    </label>
    <select id="role" name="role" className="w-full border border-gray-300 p-1 rounded-lg">
      <option value="Manager">Manager</option>
      <option value="Employee">Employee</option>
      <option value="Supervisor">Supervisor</option>
    </select>
  </div>
  <div>
    <label className="block text-gray-800 font-bold text-sm mb-0.5" htmlFor="bloodGroup">
      Blood Group
    </label>
    <select id="bloodGroup" name="bloodGroup" className="w-full border border-gray-300 p-1 rounded-lg">
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
    </select>
  </div>
</div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 font-bold text-sm mb-0.5" htmlFor="joiningDate">
              Joining Date
            </label>
            <TextField.Input type="date" id="joiningDate" name="joiningDate" className="w-full border border-gray-300 p-1 rounded-lg"  />
          </div>
          <div>
            <label className="block text-gray-800 text-sm font-bold mb-0.5" htmlFor="manager">
              Manager
            </label>
            <TextField.Input type="text" id="manager" name="manager" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter manager name" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-800 text-sm font-bold mb-0.5" htmlFor="contactNo">
              Contact No
            </label>
            <TextField.Input type="tel" id="contactNo" name="contactNo" className="w-full border border-gray-300 p-1 rounded-lg" placeholder="Enter contact number" />
          </div>
       
        </div>
        
        <div >
        <Dialog.Close>
          <Button type="submit" className=" rounded-xl   text-lg font-medium  text-white relative top-1">
            Make Changes
          </Button>
          </Dialog.Close>
        </div>
      </form>
                </Dialog.Content>
              </Dialog.Root>
            </Table.Cell>
          </Table.Row>
         )  )):(<tr><td>Loading Data</td></tr>)}

        </Table.Body>
      </Table.Root>
    </ScrollArea>
    </Theme>
</div>
  );
};

export default AddEmployeeTable;

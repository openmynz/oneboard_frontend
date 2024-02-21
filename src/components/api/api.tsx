interface employeeDetails{
    id:string,
    employee_id: string,
    role:  string,
    reports_to: string,
    blood_group:  string,
    joining_date:  string,
    contact_number:  string,
    email_id:  string,
  }
//fetch ldap user details
const fetchLdapUsers = async ()=>{
  const response = await fetch("http://192.168.3.55:8080/api/v1/ldap-user-employee/");
  const ldapUsers = await response.json();
  return ldapUsers;
}    
//fetch employee details                     
const fetchEmployee = async()=>{
  const response = await fetch('http://192.168.3.55:8080/api/v1/employees/');
const Employeedata = await response.json();
return Employeedata;
}
//patch/edit the employee data
const editEmployee = async (patch: employeeDetails) => {
  console.log(JSON.stringify(patch));
  const response = await fetch(`http://192.168.3.55:8080/api/v1/employees/${patch.id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patch),
  });
  return response.json();
};
//fetch account details i.e the client accounts
const fetchAccount = async () => {
  const response = await fetch(
    "http://192.168.3.55:8080/api/v1/clientaccounts/"
  );
  const accountData = await response.json();
  return accountData;
};
//post the newly added client accounts 
const addAccount = async (post:unknown) => {
  const response = await fetch(
    "http://192.168.3.55:8080/api/v1/clientaccounts/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }
  );
  return response.json(); 
};
//deletes the client accounts from the database
const deleteAccount = async (accountId: string) => {
  try {
    const response = await fetch(
      `http://192.168.3.55:8080/api/v1/clientaccounts/${accountId}/`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to delete account: ${response.statusText}`);
    }
    // Return an empty object since there's no content in the response
    return {};
  } catch (error) {
    console.error("Error deleting account:", error);
    throw error;
  }
};
//fetches all the projects existing,working,dropped projects
const fetchProject = async () => {
  const response = await fetch("http://192.168.3.55:8080/api/v1/projects/");
  const projectData = await response.json();
  return projectData;
};
const addProject = async (post: unknown) => {
  const response = await fetch("http://192.168.3.55:8080/api/v1/projects/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
};
const deleteProject = async (projectId:unknown) => { try {
  const response = await fetch(
    `http://192.168.3.55:8080/api/v1/projects/${projectId}/`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to delete account: ${response.statusText}`);
  }
  // Return an empty object since there's no content in the response
  return {};
} catch (error) {
  console.error("Error deleting account:", error);
  throw error;
}
};


export {
  fetchLdapUsers,
  fetchEmployee,
  fetchAccount,
  fetchProject,
  addAccount,
  deleteAccount,
  addProject,
  deleteProject,
  editEmployee
};

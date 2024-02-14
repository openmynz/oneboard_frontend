import { useQuery, useMutation,useQueryClient} from "@tanstack/react-query";
import {
  fetchAccount,
  fetchProject,
  addAccount,
  deleteAccount,
  addProject,
  deleteProject,
} from "../api/api";
import {
  Dialog,
  Flex,
  Button,
  Text,
  TextField,
  Theme,
  Tabs,
} from "@radix-ui/themes";
import AddUser from "./AddUser";

interface Account {
  account_id: string;
  account_name: string;
}
interface Project {
  project_id: string;
  project_name: string;
  account_name: string;
}
function Issues() {
  const queryClient = useQueryClient()
  const { data: accountData } = useQuery({
    queryKey: ["accountData"],
    queryFn: fetchAccount,
  });
  const { data: projectData } = useQuery({
    queryKey: ["projectData"],
    queryFn: fetchProject,
  });
 
  const { mutate: deleteaccount } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["accountData"] });
      
    },
  });
  const { mutate: addaccount } = useMutation({
    mutationFn: addAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["accountData"] });
    
    },
    
  });
  const { mutate: addproject } = useMutation({
    mutationFn: addProject, 
      onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["projectData"] });
    },
  });
  const { mutate: deleteproject } = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["projectData"] });
      
    },
  });
const accountHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const account_name = formData.get("account_name");

  if (!account_name) return;
  addaccount({ account_name: account_name.toString() });
};

  const accountHandleDelete = (e: React.FormEvent<HTMLFormElement>) => {

    console.log("delete aa");
    e.preventDefault();

    const formData = new FormData(e.currentTarget); // Assuming correct form element
    const account_id = formData.get("account_id");
    
    if (!account_id) return;
      deleteaccount(account_id.toString());


  };
  const projectHandleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    console.log("projectsun")
    e.preventDefault();
    const formData = new FormData(e.currentTarget); 
 
    const project_name = formData.get("project_name");
    const account_id= formData.get("account_id");
    const account_name= formData.get("account_name");
    if(!project_name||!account_id)return 
    addproject({project_name,account_id,account_name})
  }
  const projectHandleDelete = (e: React.FormEvent<HTMLFormElement>)=>{
    console.log("projectdel")
e.preventDefault();
const formData = new FormData(e.currentTarget);
const project_id = formData.get("project_id");
if(!project_id)return
deleteproject(project_id)
}
console.log(accountData,projectData)
  return (
    <div>
      <Theme>
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="user">Add User</Tabs.Trigger>
            <Tabs.Trigger value="account">Add Account</Tabs.Trigger>
            <Tabs.Trigger value="project">Add Project</Tabs.Trigger>  
            <Tabs.Trigger value="">Resource Mapping</Tabs.Trigger>
          </Tabs.List>
    <Tabs.Content value="user">
<AddUser/>
    </Tabs.Content>
          <Tabs.Content
            value="account"
            style={{ marginLeft: "1rem", marginTop: "2rem" }}
          >
            <Dialog.Root>
              <Dialog.Trigger>
                <Button style={{ marginRight: "0.5rem", marginBottom: "1rem" }}>
                  Add
                </Button>
              </Dialog.Trigger>

              <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Add account</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                  Make changes to client account.
                </Dialog.Description>
                <form onSubmit={accountHandleSubmit}>
                  <Flex direction="column" gap="3">
                   
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Account Name
                      </Text>
                      <TextField.Input
                        defaultValue=""
                        placeholder="Enter account name"
                        name="account_name"
                      />
                    </label>
                  </Flex>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Cancel
                      </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button type="submit">Submit</Button>
                    </Dialog.Close>
                  </Flex>
                </form>
              </Dialog.Content>
            </Dialog.Root>
            <Dialog.Root>
              <Dialog.Trigger>
                <Button color="red">Delete</Button>
              </Dialog.Trigger>

              <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Delete Account</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                  Make changes to account.
                </Dialog.Description>
                <form onSubmit={accountHandleDelete}>
                  <Flex direction="column" gap="3">
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Account ID
                      </Text>
                      <TextField.Input
                        defaultValue=""
                        name="account_id"
                        placeholder="Enter the account ID"
                      />
                    </label>
                  </Flex>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Cancel
                      </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button color="red" type="submit">
                        Delete
                      </Button>
                    </Dialog.Close>
                  </Flex>
                </form>
              </Dialog.Content>
            </Dialog.Root>

            <table className="border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Account ID</th>
                  <th className="border border-gray-300 p-2">Account Name</th>
                </tr>
              </thead>
              <tbody>
                {accountData ? (
                  (accountData as Account[]).map((account: Account) => (
                    <tr key={account.account_id}>
                      <td className="border border-gray-300 p-2">
                        {account.account_id}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {account.account_name}
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>Loading data</p>
                )}
              </tbody>
            </table>
          </Tabs.Content>

          <Tabs.Content
            value="project"
            style={{ marginLeft: "1rem", marginTop: "2rem" }}
          >
            <div>
              <Theme className="flex gap-1 ">
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button
                      style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                    >
                      Add
                    </Button>
                  </Dialog.Trigger>

                  <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Add Project</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      Make changes to project.
                    </Dialog.Description>
                    <form onSubmit={projectHandleSubmit}> 
                      <Flex direction="column" gap="3">
              
                       
                        <label>
                          <Text as="div" size="2" mb="1" weight="bold">
                            Project Name
                          </Text>
                          <TextField.Input
                            defaultValue=""
                            placeholder="Enter the project name"
                            name="project_name"
                          />
                        </label>
                        <label>
                          <Text as="div" size="2" mb="1" weight="bold">
                            Account Name
                          </Text>
                          <TextField.Input
                            defaultValue=""
                            placeholder="Enter the account id"
                            name="account_name"
                          />
                        </label>
                        <label>
                          <Text as="div" size="2" mb="1" weight="bold">
                            Account Id
                          </Text>
                          <TextField.Input
                            defaultValue=""
                            placeholder="Enter the account id"
                            name="account_id"
                          />
                        </label>
                      </Flex>

                      <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button type="submit">Submit</Button>
                        </Dialog.Close>
                      </Flex>
                    </form>
                  </Dialog.Content>
                </Dialog.Root>
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button color="red">Delete</Button>
                  </Dialog.Trigger>

                  <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Edit profile</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      Make changes in Project .
                    </Dialog.Description>

<form onSubmit={projectHandleDelete}>                    <Flex direction="column" gap="3">
                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Project ID
                        </Text>
                        <TextField.Input
                          defaultValue=""
                          placeholder="Enter your project ID"
                          name="project_id"
                        />
                      </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                      <Dialog.Close>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </Dialog.Close>
                      <Dialog.Close>
                        <Button color="red" type="submit">Delete</Button>
                      </Dialog.Close>
                    </Flex>
                    </form>
                  </Dialog.Content>
                </Dialog.Root>
              </Theme>
            </div>
            <table className="border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Project ID</th>
                  <th className="border border-gray-300 p-2">Account Name</th>
                  <th className="border border-gray-300 p-2">Project Name</th>
                </tr>
              </thead>
              <tbody>
                {projectData ? (
                  (projectData as Project[]).map((project: Project) => (
                    <tr key={project.project_id}>
                      <td className="border border-gray-300 p-2">
                        {project.project_id}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {project.account_name}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {project.project_name}
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>Loading data</p>
                )}
              </tbody>
            </table>
          </Tabs.Content>
        </Tabs.Root>
      </Theme>
    </div>
  );
}

export default Issues;

import {useQuery} from "@tanstack/react-query"

import { Dialog,Flex,Button,Text,TextField,Theme ,Tabs} from '@radix-ui/themes';
interface Account {
  account_id: string;
  account_name: string;
  // Add other properties as needed
}
function Issues() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://192.168.3.55:8080/api/v1/clientaccounts/').then((res) =>
        res.json(),
      ),
  })
 
 console.log("hi")
console.log(isLoading,error,data)
  return (
    <div>
    <Theme>
      <Tabs.Root defaultValue="account">
        <Tabs.List>
        <Tabs.Trigger value="">Resource Mapping</Tabs.Trigger>
          <Tabs.Trigger value="account">Add Account</Tabs.Trigger>
          <Tabs.Trigger value="project">Add Project</Tabs.Trigger>
          <Tabs.Trigger value="user">Map User</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="account" style={{marginLeft:"1rem",marginTop:"2rem"}}>
          <Dialog.Root>
            <Dialog.Trigger>
              
              <Button style={{marginRight:"0.5rem",marginBottom:"1rem"}}>Add</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
              <Dialog.Title>Add account</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Make changes to client account.
              </Dialog.Description>

              <Flex direction="column" gap="3" >
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Account ID
                  </Text>
                  <TextField.Input defaultValue="" placeholder="Enter account id" />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Account Name
                  </Text>
                  <TextField.Input defaultValue="" placeholder="Enter account name" />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button>Submit</Button>
                </Dialog.Close>
              </Flex>
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

              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Account ID
                  </Text>
                  <TextField.Input defaultValue="" placeholder="Enter the account ID" />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button color="red">Delete</Button>
                </Dialog.Close>
              </Flex>
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
          {data?(data.map((account: Account) => (
            <tr key={account.account_id}>
              <td className="border border-gray-300 p-2">{account.account_id}</td>
              <td className="border border-gray-300 p-2">{account.account_name}</td>
            </tr>
          ))):(<p>Loading data</p>)}
        </tbody>
      </table>
    
        </Tabs.Content>

        <Tabs.Content value="project" style={{marginLeft:"1rem",marginTop:"2rem"}}>
          <div>
            <Theme className="flex gap-1 ">
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button style={{marginRight:"0.5rem",marginBottom:"0.5rem"}}>Add</Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title>Add Project</Dialog.Title>
                  <Dialog.Description size="2" mb="4">
                    Make changes to project.
                  </Dialog.Description>

                  <Flex direction="column" gap="3">
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Project ID
                      </Text>
                      <TextField.Input defaultValue="" placeholder="Enter the project id" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Project Name
                      </Text>
                      <TextField.Input defaultValue="" placeholder="Enter the project name" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        User Name
                      </Text>
                      <TextField.Input defaultValue="" placeholder="Enter the user name" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Account Name
                      </Text>
                      <TextField.Input defaultValue="" placeholder="Enter the Account Name " />
                    </label>
                  </Flex>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Cancel
                      </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button>Save</Button>
                    </Dialog.Close>
                  </Flex>
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

                  <Flex direction="column" gap="3">
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Project ID
                      </Text>
                      <TextField.Input defaultValue="" placeholder="Enter your project ID" />
                    </label>
                  </Flex>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Cancel
                      </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button color="red">Delete</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </Theme>
          </div>
          <table className="border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Project ID</th>
                <th className="border border-gray-300 p-2">Project Name</th>
                <th className="border border-gray-300 p-2">User Name</th>
                <th className="border border-gray-300 p-2">Account Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">1 </td>
                <td className="border border-gray-300 p-2">Oneboard</td>
                <td className="border border-gray-300 p-2">Aswathi</td>
                <td className="border border-gray-300 p-2">Openmynz</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">2</td>
                <td className="border border-gray-300 p-2">Oneboard</td>
                <td className="border border-gray-300 p-2">Ravi Teja</td>
                <td className="border border-gray-300 p-2">Openmynz</td>
              </tr>
            </tbody>
          </table>
        </Tabs.Content>
      </Tabs.Root>
    </Theme>
  </div>  )
}

export default Issues;
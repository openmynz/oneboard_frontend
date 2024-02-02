import { Theme, Tabs, Box ,Table,ScrollArea} from "@radix-ui/themes";
import { Card, DonutChart, Title,Badge} from "@tremor/react";

  
  
const AnnualLeave = [
    {
        name: "Used",
        leave: 2 ,
      } ,{
        name: "Balance",
        leave:18 ,
      },
   
  ];
 
 const SickLeave = [
    {
        name:"Used",
        leave:3
    },
    {
        name:"Balance",
        leave:9
    }
 ] 

const LeaveTracker: React.FC = () => {
  return (
    <>
      <div>
        <Theme>
          <Tabs.Root defaultValue="apply-leave">
            <Tabs.List>
              <Tabs.Trigger value="apply-leave">Apply Leave</Tabs.Trigger>
              <Tabs.Trigger value="leaves-taken">Leaves Taken</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
              <Tabs.Content value="apply-leave">
                <div className="flex gap-10">
               
                <div>                <h1 className="mt-14">Note:Annual Leaves should be updated prior</h1>
                <div className="bg-sky-600 w-96 p-10 mt-20 ml-24 rounded-lg text-white ">
                  <form className="flex-row space-y-6">
                    
                      
                        
                    
                    <div>
                      <pre>
                        <label htmlFor="DateFrom">Date From   </label>
                        <input
                          name="DateFrom"
                          className="rounded-lg text-black w-32"
                          type="date"
                        />
                      </pre>
                    </div>
                    <div>
                      <pre>
                        <label htmlFor="DateTill">Date Till   </label>
                        <input
                          name="DateTill"
                          className="rounded-lg text-black w-32"
                          type="date"
                        />
                      </pre>
                    </div>
                    <div>
                      <pre>
                        <label htmlFor="reason">Reason      </label>
                        <input
                          name="reason"
                          className="rounded-lg text-black w-32 mt-2"
                          type="text"
                          placeholder=" "
                        />
                      </pre>
                    </div>
                    <div className="grid w-32 ">
                      <span>
                        <label htmlFor="LeaveType">Leave Type  </label>
                        <select
                          className="appearance-none row-start-1 col-start-1 rounded-lg text-black relative bottom-5 left-24 ml-2 w-32 "
                          name="LeaveType"
                        >
                          <option></option>
                          <option>Sick Leave</option>
                          <option>Annual Leave</option>
                        </select>
                      </span>
                    
                    </div>
                    <div>
                      <button className="bg-orange-500 text-white  p-1 px-4 rounded ">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                </div>
                <div className="   mt-40 ml-24">
                  <div> <Card className=" rounded-md h-64">
    <Title>Annual Leave</Title>
    <DonutChart
      className="mt-6 h-24"
      data={AnnualLeave}
      category="leave"
      index="name"
      colors={[ "rose",  "amber"]}
      variant="pie"
    />
     <p className="mt-6 font-medium">3/20 Used</p>
  </Card></div>
                  <div className="relative left-48 bottom-64"> <Card className=" rounded-md  h-64">
    <Title>Sick Leave</Title>
    <DonutChart
      className=" h-24 mt-6 "
      data={SickLeave}
      category="leave"
      index="name"
      colors={[ "rose",  "amber"]}
    variant="pie"
      
    />
    <p  className="mt-6 font-medium">3/12 Used</p>
  </Card></div></div>
                </div>
              </Tabs.Content>

              <Tabs.Content value="leaves-taken">
                <div>
               
                  <Theme>
  <ScrollArea type="always" scrollbars="vertical"
    style={{ height:600,width:1350 }}>
      <Table.Root >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Start Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>End Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Leave_Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Total_Days</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        {/* Assets owned Asset Id Asset Name From Date */}
        <Table.Body >
          <Table.Row>
       <Table.Cell>03:01:24</Table.Cell>
            <Table.Cell>06:01:24</Table.Cell>
            <Table.Cell>Sick Leave</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>
            <Badge color="emerald" >
                Approved
              </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
       <Table.Cell>18:01:24</Table.Cell>
            <Table.Cell>20:01:24</Table.Cell>
            <Table.Cell>Annual Leave</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell><Badge color="red">Pending</Badge></Table.Cell>
            </Table.Row>
          
         

       
        </Table.Body>
      </Table.Root>
      </ScrollArea>
  </Theme>




                  
                </div>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Theme>
      </div>
    </>
  );
};
export default LeaveTracker;

import React from "react";
import ProfieImg from "../../images/Profile.jpg";
import { Theme } from "@radix-ui/themes";
import * as Popover from "@radix-ui/react-popover";
const Profile: React.FC = () => {
  return (
    <div className="mt-1  gap-8 flex bg-customGrey">
      <div>
        {" "}
        <div className="mt-6 ml-32 ">
          <img
            src={ProfieImg}
            alt="Profile"
            className=" rounded-full h-40 w-40 "
          />
        </div>
        <Theme appearance="light">
          <div className=" border-customGrey font-medium text-sm  bg-white rounded-md overflow-hidden  ml-8 mt-3  " style={{height:"400px"}}>
          <p className="bg-customBlue text-white text-center p-3 mb-3">
              General Profile
            </p>
            <table className="table-auto  border-separate border-spacing-2 p-2 ml-6">
              <tbody>
                <tr>
                  <td className="">Employee ID</td>
                  <td> 11005</td>
                </tr>
                <tr>
                  <td className="">Name</td>
                  <td>Lisa</td>
                </tr>
                <tr>
                  <td className="">Role</td>
                  <td> Software Developer</td>
                </tr>
                <tr>
                  <td className="">Business Type</td>
                  <td> Full-Time</td>
                </tr>
                <tr>
                  <td className="">Joining Date</td>
                  <td> 08:01:2024</td>
                </tr>
                <tr>
                  <td className="">Reports To</td>
                  <td> Chethan Alur</td>
                </tr>
                <tr>
                  <td className="">Contact No</td>
                  <td> 6379896888</td>
                </tr>
                <tr>
                  <td className="">Employement Type</td>
                  <td> Regular</td>
                </tr>
                <tr>
                  <td className="">Email</td>
                  <td> lisa@openmynz.com</td>
                </tr>
                <tr>
                  <td className="">Blood Group</td>
                  <td> A Positive</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </Theme>
      </div>
      <div className=" mt-10">
        <div className="   mt-6  rounded border-customGrey font-medium text-sm  bg-white p-5 w-86 ">
          <table className="table-auto mb-4">
            <tr className="relative top-1">
              <td className="flex mr-20 ml-4">Project Status</td>
              <td>Ticket Status</td>
            </tr>
            <tr className="text-xs text-customBlue">
              <td className="absolute ml-5">
                {" "}
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <p>13</p>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content className="PopoverContent" sideOffset={5}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                          width:"800px",
                          height:"450px"
                        }}
                        className=" bg-customBlue shadow-2xl shadow-slate-500 rounded-md"
                      >
                      
                      </div>
                      <Popover.Close
                        className="PopoverClose absolute top-2 text-customOrange"
                        aria-label="Close"
                        style={{left:"750px"}}
                      
                      >
                        Close
                      </Popover.Close>
                      <Popover.Arrow className="PopoverArrow" />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </td>
              <td className="absolute ml-48">
                {" "}
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <p>12</p>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content className="PopoverContent" sideOffset={5}>
                      <div
                           style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            width:"800px",
                            height:"450px"
                          }}
                          className=" bg-customBlue shadow-2xl shadow-slate-500 rounded-md"
                      ></div>
                      <Popover.Close
                    
                        aria-label="Close"
                        className="PopoverClose absolute top-2 text-customOrange"
                       
                        style={{left:"750px"}}
                      >
                        <p>Close</p>
                      </Popover.Close>
                      <Popover.Arrow className="PopoverArrow" />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </td>
            </tr>
          </table>
        </div>
        <div
          className=" border-customGrey font-medium text-sm  bg-white rounded-md overflow-hidden  ml-8 "
          style={{ marginTop: "50px", height: "400px" }}
        ><p className="bg-customBlue text-white text-center p-3 mb-3">
        Work Profile
      </p>
          <table className="table-auto  border-separate border-spacing-2 p-4">
            
            <tr>
              <td>Location</td>
              <td> Bangalore</td>
            </tr>
            <tr>
              <td>Manager</td>
              <td>Chethan Alur</td>
            </tr>
            <tr>
              <td>Current Working Project</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>Under team</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>atx</td>
            </tr>
            <tr>
              <td>Tickets Solved</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Ticket's assigned</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Projects Completed</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Projects Pending</td>
              <td>2</td>
            </tr>
            <tr>
              <td>In Progress</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Issues</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <div className="bg-white w-96  mt-16" style={{ height: "530px" }}></div>
      </div>
    </div>
  );
};

export default Profile;

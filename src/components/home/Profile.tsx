import React from "react";
import ProfieImg from "../../images/Profile.jpg";
import { Box, Text, Theme } from "@radix-ui/themes";
const Profile: React.FC = () => {
  return (
    
    <div className="mt-6  gap-16 flex">
    
      <div>      <div className="mt-16 ml-32 ">
        <img
          src={ProfieImg}
          alt="Profile"
          className=" rounded-full h-40 w-40 "
        />
      </div>
      <Theme appearance="light">
      
      <table  style={{padding:"10px"}} className="ml-20 w-64 h-52 mt-10 border rounded border-customGrey font-medium  text-sm leading-5  bg-customGrey" >
 <tbody >
    <tr  >
      <td >Name  </td>
      <td >: Lisa</td>
      </tr>
      <tr>
      <td>Role</td>
      <td>: Software Developer</td>
      </tr>
     <tr>
      <td>Onboard Date </td>
      <td>: 08:01:2024</td>
      </tr>
      <tr>
      <td>Reports To</td>
      <td>: Chethan Alur</td>
      </tr>
      <tr>
      <td>Contact No</td>
      <td>: 6379896888</td>
      </tr>
      <tr>
      <td>Email</td>
      <td>: lisa@openmynz.com</td>
      </tr>
     <tr>     <td>Blood</td>
     <td>: A Positive</td>
     </tr>  
  </tbody>
</table>

        </Theme>
        </div>
<div >
        <Theme appearance="light">
        <Box
          style={{
            height: "170px",
            width: "170px",
            marginLeft: "35px",
            marginTop: "50px",
            borderRadius: "50%",
            border: "5px solid #254980",
            textAlign: "center",
          }}
        >
          <Text
            as="div"
            size="8"
            style={{ fontWeight: "bolder", marginTop: "30px" }}
          >
            13{" "}
          </Text>
          <Text as="div" size="4" weight={"medium"}>
            Projects
          </Text>
          <Text as="div" size="4" weight={"medium"}>
            Assigned
          </Text>
        </Box>
        <div className="w-64 h-52 mt-10 border rounded border-customGrey font-medium  text-sm leading-5 p-6 bg-customGrey "><p className="mt-10">PROJECTS COMPLETED</p><p>PROJECTS PENDING</p><p>IN PROGRESS</p><p>ISSUES</p></div>
        </Theme>
        </div>
        <div>
          
        </div>
       
       
    </div>
  );
};

export default Profile;

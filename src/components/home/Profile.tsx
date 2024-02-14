import React from "react";
import ProfileImg from "../../images/Profile.jpg";
import { Theme } from "@radix-ui/themes";
import CarouselCard from "../../uicomponents/Carousel";
interface Announcement {
  title: string;
  author: string;
  date: string;
  content: string;
}
interface EmployeeDetails {
  [key: string]: string;
}

const announcements:Announcement[] = [
  {
    title: "LinkedIn updates",
    author: "Vinu Neelakandan",
    date: "Aug 18",
    content:
      "Team - A gentle request to all of you to update your LinkedIn Profiles. Please update with a latest photo, your title, your company (Openmynz) as the current working company.",
  },
  {
    title: "Team Out Photos",
    author: "Vinu Neelakandan",
    date: "Aug 18",
    content:
      "The team outing photos which we had taken are posted into Employee Wiki site under EVENTS folder.",
  },
  {
    title: "Performance Management System",
    author: "Vinu Neelakandan",
    date: "Aug 18",
    content:
      " Timelines and the Rating definitions for Performance Management System have been uploaded to the Wiki page at Performance_Management folder",
  }, {
    title: "Financial Updates",
    author: "Vinu Neelakandan",
    date: "Aug 18",
    content:
      "We have signed up with HDFC bank for the Salary Accounts as they have offered some benefits for our employees so docheck the email."
  },
];
const employeeDetails:EmployeeDetails = {
  "Employee ID": "11005",
  Name: "Lisa",
  Role: "Software Developer",
  "Business Type": "Full-Time",
  "Joining Date": "08:01:2024",
  "Reports To": "Chethan Alur",
  "Contact No": "6379896888",
  Email: "lisa@openmynz.com",
  "Blood Group": "A Positive",
};
const Profile: React.FC = () => {
  return (
    <div className=" grid mt-1 grid-cols-8 bg-customGrey ">
      <div
        id="home_left_panel"
        className="mt-5  col-span-5 "
     
      >
        <div
          id="announcements"
          className="ml-10 overflow-y-scroll bg-white mt-1 flex-col space-y-1 p-1  "
          style={{ height: "calc(100vh - 400px)" }}
        >
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="border border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 h-auto"
            >
              <div className="flex justify-between">
                <div className="text-black font-bold text-xl mb-6">
                  {announcement.title}
                </div>
                <div className="flex items-center relative bottom-3">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://source.unsplash.com/random"
                    alt="Avatar of User"
                  />
                  <div className="text-sm">
                    <p className="text-black leading-none">
                      {announcement.author}
                    </p>
                    <p className="text-grey-dark">{announcement.date}</p>
                  </div>
                </div>
              </div>
              <p className="text-grey-darker text-base">
                {announcement.content}
              </p>
            </div>
          ))}
        </div>
        <div id="cards" className="ml-10 mt-6 w-full">
          <CarouselCard />
        </div>
      </div>

      <div
        id="Employee_info"
        className=" relative right-0 col-span-2"
       
      >
        <div id="display_picture" className="mt-3 ml-32">
          <img
            src={ProfileImg}
            alt="Profile"
            className="rounded-full h-40 w-40"
          />
        </div>
        <Theme appearance="light">
        <div
            id="employee_detail_card"
            className="border-customGrey font-medium text-sm bg-white rounded-md overflow-hidden ml-8 mt-3  w-80"
            style={{height:"58vh"}}
          >
            <p className="bg-customBlue text-white text-center p-3 mb-3">
              General Profile
            </p>
            <table className="table-auto border-separate border-spacing-2 p-6 ml-6 w-auto" >
              <tbody>
                {Object.entries(employeeDetails).map(([key, value]) => (
                  <tr key={key}>
                    <td className="">{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Theme>
      </div>
    </div>
  );
};

export default Profile;

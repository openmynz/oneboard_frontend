import React from "react";
import ProfieImg from "../../images/Profile.jpg";
import { Theme } from "@radix-ui/themes";
import CarouselCard from "../../uicomponents/Carousel";

const Profile: React.FC = () => {
  return (
    <div className="mt-1 flex flex-col bg-customGrey md:flex-row">
      <div className="w-full md:w-3/5">
        <div className="ml-10 overflow-y-scroll bg-white mt-1 flex-col space-y-1 p-1" style={{ height: "20rem" }}>
          <div className="border border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 h-auto">
            <div className="flex justify-between">
              <div className="text-black font-bold text-xl mb-6">LinkedIn updates</div>
              <div className="flex items-center relative bottom-3">
                <img className="w-10 h-10 rounded-full mr-4" src="https://source.unsplash.com/random" alt="Avatar of User" />
                <div className="text-sm">
                  <p className="text-black leading-none">Vinu Neelakandan</p>
                  <p className="text-grey-dark">Aug 18</p>
                </div>
              </div>
            </div>
            <p className="text-grey-darker text-base">
              Team - A gentle request to all of you to update your LinkedIn Profiles. Please update with a latest photo,
              your title, your company (Openmynz) as the current working company.
            </p>
          </div>

          <div className="border border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-black font-bold text-xl mb-2">Team Out Photos</div>
              <p className="text-grey-darker text-base">
                The team outing photos which we had taken are posted into Employee Wiki site under EVENTS folder.
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src="https://source.unsplash.com/random" alt="Avatar of User" />
              <div className="text-sm">
                <p className="text-black leading-none">Vinu Neelakandan</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div>
          </div>

          <div className="border border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-black font-bold text-xl mb-2">Performance Management System</div>
              <p className="text-grey-darker text-base">
                Timelines and the Rating definitions for Performance Management System have been uploaded to the Wiki page at
                PERFORMANCE MANAGEMENT folder.
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src="https://source.unsplash.com/random" alt="Avatar of User" />
              <div className="text-sm">
                <p className="text-black leading-none">Vinu Neelakandan</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div>
          </div>

          <div className="border border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-black font-bold text-xl mb-2">Financial Updates</div>
              <p className="text-grey-darker text-base line-clamp-3">
                We have signed up with HDFC bank for the Salary Accounts as they have offered some benefits for our employees so do
                check the email.
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src="https://source.unsplash.com/random" alt="Avatar of Jonathan Reinink" />
              <div className="text-sm">
                <p className="text-black leading-none">Vinu Neelakandan</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-6">
          <CarouselCard />
        </div>
      </div>

      <div>
        <div className="mt-6 ml-32">
          <img src={ProfieImg} alt="Profile" className="rounded-full h-40 w-40" />
        </div>
        <Theme appearance="light">
          <div className="border-customGrey font-medium text-sm bg-white rounded-md overflow-hidden ml-8 mt-3" style={{ height: "400px" }}>
            <p className="bg-customBlue text-white text-center p-3 mb-3">General Profile</p>
            <table className="table-auto border-separate border-spacing-2 p-2 ml-6">
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
                  <td className="">Employment Type</td>
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
    </div>
  );
};

export default Profile;
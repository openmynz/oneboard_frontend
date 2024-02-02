
 const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div className="overflow-hidden ">
          <div className="mt-10 rounded-md"
   
          >
          

            <table className=" table-auto  font-medium text-sm  bg-white  overflow-hidden  ml-8 w-96">
            <caption className="bg-customBlue text-white text-center p-3 ">
              Financial HelpDesk
            </caption>
              <tr className="font-bold">
                <td className=" p-4 rounded-md">Name</td>
                <td className="  p-4 rounded-md">Role</td>
                <td className="  p-4 rounded-md">Contact</td>
                <td className="  p-4 rounded-md">MailId</td>
              </tr>
             
              <tr>
                <td className="  p-3 rounded-md">Sundeep Agarwal</td>
                <td className=" p-3 rounded-md">CFO</td>
                <td className="  p-3 rounded-md">+916366548886</td>
                <td className=" p-3 rounded-md">
                  <a
                    className="text-customBlue"
                    href="mailto:sundeep.agarwal@openmynz.com"
                  >
                    sundeep.agarwal@openmynz.com
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div className="mt-10">
          <table className=" table-auto   font-medium text-sm  bg-white  overflow-hidden  ml-8 w-96 tex">
            <caption className="bg-customBlue text-white text-center p-3 ">
              Important Links
            </caption>
             
            
             <tr>
              <td className=" p-4 rounded-md">
                No
              </td>
              <td className=" p-4 rounded-md">Description</td>
              <td className=" p-4 rounded-md">Link</td>
             </tr>
             <tr>
              <td className=" p-4 rounded-md">
                1
              </td>
              <td className=" p-4 rounded-md">Payroll Link</td>
              <td className=" p-4 rounded-md"> <a href="https://payroll.zoho.in/"
                    className="text-customBlue">
                   Click here
                  </a></td>
             </tr>
             <tr>
              <td className="p-4 rounded-md">
                2
              </td>
              <td className=" p-4 rounded-md">Leave Tracker 2024</td>
              <td className=" p-4 rounded-md"> <a href="https://openmynz.sharepoint.com/:x:/s/CommonRepository/EXzUB2wgpllMmxlAL21iUQoBjXU9KYDEPZy9B-kwdT_yRQ?e=hyEkfY"
                    className="text-customBlue"
                  
                  >
           Click Here
                  </a></td>
             </tr>
            </table>
          </div>
        </div>
       
  <div>
  <div className="mt-10">
          <table className=" table-auto  font-medium text-sm  bg-white  overflow-hidden  ml-8 w-96 tex">
            <caption className="bg-customBlue text-white text-center p-3 ">
              Financial Updates
            </caption>
             
            
             <tr>
              <td className=" p-4 rounded-md">We have signed up with HDFC bank for the Salary Accounts as they have offered some benefits for our employees so do check the email.</td>
             
             </tr>
            
          
            </table>
          </div>
  </div>
        
      </div>
    </>
  );
};
export default Dashboard;
{
  /* <div className="bg-white w-64 mt-10 ml-6 rounded">
<h3>Financial Helpdesk</h3>
<h4>Contact</h4>
<table>
    <tr></tr>
</table>
    </div>
    </div></>) */
}

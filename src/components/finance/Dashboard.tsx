const Dashboard: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="overflow-hidden">
          <div
            className="   border-customGrey font-medium text-sm  bg-white rounded-md overflow-hidden  ml-8"
            style={{ marginTop: "50px",width:"568px",overflow: "hidden" }} 
          >
            <p className="bg-customBlue text-white text-center p-3 ">
              Financial HelpDesk
            </p>

            <table className=" table-auto">
              <tr className="font-bold">
                <td className="border border-slate-300 p-4 rounded-md">Name</td>
                <td className="border border-slate-300 p-4 rounded-md">Role</td>
                <td className="border border-slate-300 p-4 rounded-md">Contact</td>
                <td className="border border-slate-300 p-4 rounded-md">MailId</td>
              </tr>
              <tr></tr>
              <tr>
                <td className="border border-slate-300 p-3 rounded-md">Sundeep Agarwal</td>
                <td className="border border-slate-300 p-3 rounded-md">CFO</td>
                <td className="border border-slate-300 p-3 rounded-md">+916366548886</td>
                <td className="border border-slate-300 p-3 rounded-md">
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
          <div>
      
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

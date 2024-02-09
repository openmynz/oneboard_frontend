import {useQuery} from "@tanstack/react-query"
interface Account {
    account_id: string;
    account_name: string;
    // Add other properties as needed
  }
export default function Project() {
    const { isLoading, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('http://192.168.3.55:8080/api/v1/clientaccounts/').then((res) =>
            res.json(),
          ),
      })
     
  return (
    <div><table className="border border-gray-300">
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
      ))):(<tr>{isLoading}</tr>)}
    </tbody>
  </table></div>
  )
}

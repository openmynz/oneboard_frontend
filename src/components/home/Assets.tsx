import { Table, Theme,ScrollArea } from "@radix-ui/themes";
const Assets:React.FC = () => {
    return(<>
    <div className="main-container">
  <Theme>
  <ScrollArea type="always" scrollbars="vertical"
    style={{ height:600,width:1350 }}>
      <Table.Root >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Asset Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Assets ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Asset Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Given By</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Count</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date Given</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        {/* Assets owned Asset Id Asset Name From Date */}
        <Table.Body >
          <Table.Row>
            <Table.RowHeaderCell>Liza</Table.RowHeaderCell>
            <Table.Cell>12LTR08</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>Nikil</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>09:12:23</Table.Cell>
          </Table.Row>   <Table.Row>
            <Table.RowHeaderCell>Kiana</Table.RowHeaderCell>
            <Table.Cell>12MTR09</Table.Cell>
            <Table.Cell>Monitor</Table.Cell>
            <Table.Cell>Suresh</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>09:12:23</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Nick</Table.RowHeaderCell>
            <Table.Cell>19MTR08</Table.Cell>
            <Table.Cell>Monitor</Table.Cell>
            <Table.Cell>Karthik</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>09:12:23</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Elena</Table.RowHeaderCell>
            <Table.Cell>21SDR01</Table.Cell>
            <Table.Cell>SSD</Table.Cell>
            <Table.Cell>Nikil</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>09:12:23</Table.Cell>
          </Table.Row>
    
          
         

       
        </Table.Body>
      </Table.Root>
      </ScrollArea>
  </Theme>
</div>
</>)
}
export default Assets;
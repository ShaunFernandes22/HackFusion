import { RiFlag2Line } from "@remixicon/react";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const data = [
  {
    name: "Sudhir Bagul",
    role: "Teacher",
    status: "active",
  },
  {
    name: "Kiranji",
    role: "Admin",
    status: "active",
  },
  {
    name: "Hemant Singh",
    role: "Student",

    status: "active",
  },

  {
    name: "Akshay Kamath",
    role: "Student",
    status: "active",
  },
  {
    name: "Shaun Fernandes",
    role: "Student",
    status: "active",
  },
  {
    name: "Naman Shah",
    role: "Student",
    status: "active",
  },
  {
    name: "Daksh Jain",
    role: "Student",
    status: "active",
  },
];

export function DataTable() {
  return (
    <Card>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        List of Swiss Federal Councillours
      </h3>
      <Table className="mt-5 border border-tremor-border dark:border-dark-tremor-border bg-white dark:bg-dark-tremor-bg">
        <TableHead className="bg-tremor-primary dark:bg-dark-tremor-primary">
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.departement}</TableCell>
              <TableCell>
                <Badge color="emerald" icon={RiFlag2Line}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import StripedRow from "@/app/components/tables/striped-row/index";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Striped Row Table",
  description: "Generated by create next app",
};
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Striped Row Table",
  },
];

const StrippedRow = () => {
  return (
    <>
      <BreadcrumbComp title="Striped Row Table" items={BCrumb} />
      <StripedRow />
    </>
  );
};

export default StrippedRow;

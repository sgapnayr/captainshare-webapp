import TicketsApp from "@/app/components/apps/tickets";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ticket App",
};

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Trips",
  },
];
const Tickets = () => {
  return (
    <>
      <BreadcrumbComp title="Trips" items={BCrumb} />
      <TicketsApp />
    </>
  );
};

export default Tickets;

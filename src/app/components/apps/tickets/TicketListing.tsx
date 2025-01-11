import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { TicketType } from "@/app/(DashboardLayout)/types/apps/ticket";
import {
  Avatar,
  Badge,
  Button,
  Table,
  TextInput,
  Tooltip,
  Modal,
} from "flowbite-react";
import { format } from "date-fns";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TicketContext } from "@/app/context/TicketContext";

const TicketListing = () => {
  const { tickets, deleteTicket, searchTickets, ticketSearch, filter }: any =
    useContext(TicketContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const router = useRouter();

  const getVisibleTickets = (
    tickets: TicketType[],
    filter: string,
    ticketSearch: string
  ) => {
    switch (filter) {
      case "total_tickets":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Pending":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Pending" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Closed":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Closed" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Open":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Open" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  const visibleTickets = getVisibleTickets(
    tickets,
    filter,
    ticketSearch.toLowerCase()
  );

  const ticketBadge = (ticket: TicketType) => {
    return ticket.Status === "Open"
      ? "success"
      : ticket.Status === "Closed"
      ? "error"
      : ticket.Status === "Pending"
      ? "warning"
      : ticket.Status === "Moderate"
      ? "primary"
      : "primary";
  };

  const handleRowClick = (ticket: TicketType) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  return (
    <>
      <div className="my-6">
        <div className="flex justify-between items-center mb-4">
          <Button
            onClick={() => router.push("/apps/tickets/create")}
            color={"primary"}
            className="rounded-md"
          >
            Create Trip
          </Button>
          <TextInput
            type="text"
            sizing="md"
            className="form-control sm:max-w-60 max-w-full w-full"
            onChange={(e) => searchTickets(e.target.value)}
            placeholder="Search"
            icon={() => <Icon icon="tabler:search" height={18} />}
          />
        </div>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Id
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Trip
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Captain
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Status
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Date
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Total Cost
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3 text-end">
                Action
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-border dark:divide-darkborder">
              {visibleTickets.map((ticket) => (
                <Table.Row
                  key={ticket.Id}
                  onClick={() => handleRowClick(ticket)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <Table.Cell className="whitespace-nowrap">
                    {ticket.Id}
                  </Table.Cell>
                  <Table.Cell className="max-w-md">
                    <h6 className="text-base truncate line-clamp-1">
                      {ticket.ticketTitle}
                    </h6>
                    <p className="text-sm text-darklink truncate line-clamp-1 text-wrap sm:max-w-56">
                      {ticket.ticketDescription}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div>
                        <Avatar
                          img={ticket.thumb}
                          alt={ticket.AgentName}
                          rounded
                        />
                      </div>
                      <h6 className="text-base">
                        {ticket.AgentName} ({ticket.CaptainId})
                      </h6>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <Badge
                      className={`bg-light${ticketBadge(
                        ticket
                      )} rounded-md dark:bg-dark${ticketBadge(
                        ticket
                      )} text-${ticketBadge(ticket)}`}
                    >
                      {ticket.Status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <p className="text-sm text-darklink">
                      {format(new Date(ticket.Date), "E, MMM d")}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    ${ticket?.FinancialDetails?.OwnerChargeAfterFee || 0}
                  </Table.Cell>
                  <Table.Cell>
                    <Tooltip
                      content="Delete Ticket"
                      placement="bottom"
                      arrow={false}
                    >
                      <Button
                        className="btn-circle ms-auto"
                        color={"transparent"}
                      >
                        <Icon
                          icon="tabler:trash"
                          height="18"
                          onClick={() => deleteTicket(ticket.Id)}
                        />
                      </Button>
                    </Tooltip>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>

      {selectedTicket && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          size="lg"
          title="Trip Details"
        >
          <div className="p-4">
            <h4 className="font-bold text-lg mb-4">Trip Overview</h4>
            <div className="mb-6">
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Title:</p>
                <p className="text-base font-medium">
                  {selectedTicket.ticketTitle}
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Description:</p>
                <p className="text-base font-medium mb-2">
                  {selectedTicket.ticketDescription}
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Captain:</p>
                <p className="text-base font-medium">
                  {selectedTicket.AgentName} ({selectedTicket.CaptainId})
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Status:</p>
                <p className="text-base font-medium">{selectedTicket.Status}</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Date:</p>
                <p className="text-base font-medium">
                  {format(new Date(selectedTicket.Date), "E, MMM d yyyy")}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h5 className="font-bold text-lg mb-2">Client Information</h5>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Name:</p>
                <p className="text-base font-medium">
                  {selectedTicket.ClientName}
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Phone:</p>
                <p className="text-base font-medium">
                  {selectedTicket.ClientPhoneNumber}
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Notes:</p>
                <p className="text-base font-medium">
                  {selectedTicket.ClientNotes}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h5 className="font-bold text-lg mb-2">Boat Information</h5>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Boat ID:</p>
                <p className="text-base font-medium">{selectedTicket.BoatId}</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Owner ID:</p>
                <p className="text-base font-medium">
                  {selectedTicket.OwnerId}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h5 className="font-bold text-lg mb-2">Financial Details</h5>

              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">
                  Owner Charge ($
                  {selectedTicket.FinancialDetails?.CaptainRatePerHour}/hr *{" "}
                  {selectedTicket.FinancialDetails?.HoursBilled}hrs):
                </p>
                <p className="text-base font-medium text-green-600">
                  ${selectedTicket.FinancialDetails?.OwnerChargeBeforeFee}
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Service Fee:</p>
                <p className="text-base font-medium text-red-600">
                  +${selectedTicket.FinancialDetails?.OwnerFee}
                </p>
              </div>
              <div className="border-t my-2"></div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-700 font-semibold">
                  Total (After Fee):
                </p>
                <p className="text-base font-bold text-green-600">
                  ${selectedTicket.FinancialDetails?.OwnerChargeAfterFee}
                </p>
              </div>

              <h6 className="font-semibold text-gray-700 mt-4 mb-2">
                Captain Details
              </h6>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">
                  Captain Earnings (Before Fee):
                </p>
                <p className="text-base font-medium text-green-600">
                  ${selectedTicket.FinancialDetails?.CaptainEarningsBeforeFee}
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-600">Service Fee:</p>
                <p className="text-base font-medium text-red-600">
                  -${selectedTicket.FinancialDetails?.CaptainShareFee}
                </p>
              </div>
              <div className="border-t my-2"></div>
              <div className="flex w-full justify-between">
                <p className="text-sm text-gray-700 font-semibold">
                  Captain Earnings:
                </p>
                <p className="text-base font-bold text-green-600">
                  ${selectedTicket.FinancialDetails?.CaptainEarningsAfterFee}
                </p>
              </div>

              <div className="mt-4">
                <div className="border-t my-2"></div>
                <div className="flex w-full justify-between">
                  <p className="text-sm text-gray-600">Total Fees:</p>
                  <p className="text-base font-medium text-blue-600">
                    (~${selectedTicket.FinancialDetails?.CaptainShareProfit})
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right">
              <Button onClick={() => setShowModal(false)} color="primary">
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TicketListing;

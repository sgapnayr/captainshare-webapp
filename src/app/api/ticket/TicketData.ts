import mock from "../mock";
import { TicketType } from "@/app/(DashboardLayout)/types/apps/ticket";

const TicketData: TicketType[] = [
  {
    Id: 1,
    ticketTitle: "Bachelorette",
    ticketDescription: "Lake Austin, Austin, TX",
    Status: "Closed",
    Label: "success",
    thumb: "/images/profile/user-10.jpg",
    AgentName: "Captain Ryan",
    CaptainId: "CPT001",
    CaptainPhoneNumber: "555-000-1111",
    CaptainEmail: "ryan.captain@example.com",
    Date: new Date("2025-01-12T11:00:00"), // January 12th, 2025
    deleted: false,
    TimeSlots: [{ start: "11:00", end: "15:00" }],
    BoatId: "Boat001",
    OwnerId: "Owner001",
    ClientNotes: "Bring decorations for the bachelorette party.",
    ClientName: "Sarah Thompson",
    ClientPhoneNumber: "123-456-7890",
    ClientEmail: "sarah.thompson@example.com",
    FinancialDetails: {
      CaptainRatePerHour: 55,
      HoursBilled: 4,
      OwnerChargeBeforeFee: 220,
      OwnerFee: 20,
      OwnerChargeAfterFee: 240,
      CaptainEarningsBeforeFee: 220,
      CaptainShareFee: 19,
      CaptainEarningsAfterFee: 201,
      CaptainShareProfit: 39,
    },
  },
  {
    Id: 2,
    ticketTitle: "Private",
    ticketDescription: "Lake Travis, Austin, TX",
    Status: "Pending",
    Label: "warning",
    thumb: "/images/profile/user-2.jpg",
    AgentName: "Captain Reed",
    CaptainId: "CPT002",
    CaptainPhoneNumber: "555-222-3333",
    CaptainEmail: "reed.captain@example.com",
    Date: new Date("2025-01-14T15:00:00"), // January 14th, 2025
    deleted: false,
    TimeSlots: [{ start: "15:00", end: "19:00" }],
    BoatId: "Boat002",
    OwnerId: "Owner002",
    ClientNotes: "Requesting a quiet cruise.",
    ClientName: "Michael Carter",
    ClientPhoneNumber: "987-654-3210",
    ClientEmail: "michael.carter@example.com",
    FinancialDetails: {
      CaptainRatePerHour: 55,
      HoursBilled: 4,
      OwnerChargeBeforeFee: 220,
      OwnerFee: 20,
      OwnerChargeAfterFee: 240,
      CaptainEarningsBeforeFee: 220,
      CaptainShareFee: 19,
      CaptainEarningsAfterFee: 201,
      CaptainShareProfit: 39,
    },
  },
  {
    Id: 3,
    ticketTitle: "Sunset Cruise",
    ticketDescription: "Lake Austin, Austin, TX",
    Status: "Open",
    Label: "success",
    thumb: "/images/profile/user-3.jpg",
    AgentName: "Captain Steve",
    CaptainId: "CPT003",
    CaptainPhoneNumber: "555-444-5555",
    CaptainEmail: "steve.captain@example.com",
    Date: new Date("2025-01-16T16:00:00"), // January 16th, 2025
    deleted: false,
    TimeSlots: [{ start: "16:00", end: "20:00" }],
    BoatId: "Boat003",
    OwnerId: "Owner003",
    ClientNotes: "Sunset photography requested.",
    ClientName: "Emily Johnson",
    ClientPhoneNumber: "555-123-4567",
    ClientEmail: "emily.johnson@example.com",
    FinancialDetails: {
      CaptainRatePerHour: 60,
      HoursBilled: 4,
      OwnerChargeBeforeFee: 240,
      OwnerFee: 25,
      OwnerChargeAfterFee: 265,
      CaptainEarningsBeforeFee: 240,
      CaptainShareFee: 20,
      CaptainEarningsAfterFee: 220,
      CaptainShareProfit: 45,
    },
  },
  {
    Id: 4,
    ticketTitle: "Holiday Party",
    ticketDescription: "Lake Travis, Austin, TX",
    Status: "Closed",
    Label: "error",
    thumb: "/images/profile/user-4.jpg",
    AgentName: "Captain Jack",
    CaptainId: "CPT004",
    CaptainPhoneNumber: "555-666-7777",
    CaptainEmail: "jack.captain@example.com",
    Date: new Date("2025-01-20T12:00:00"), // January 20th, 2025
    deleted: false,
    TimeSlots: [{ start: "12:00", end: "16:00" }],
    BoatId: "Boat004",
    OwnerId: "Owner004",
    ClientNotes: "Special catering arranged for holiday celebration.",
    ClientName: "Chris Evans",
    ClientPhoneNumber: "999-888-7777",
    ClientEmail: "chris.evans@example.com",
    FinancialDetails: {
      CaptainRatePerHour: 65,
      HoursBilled: 4,
      OwnerChargeBeforeFee: 260,
      OwnerFee: 30,
      OwnerChargeAfterFee: 290,
      CaptainEarningsBeforeFee: 260,
      CaptainShareFee: 25,
      CaptainEarningsAfterFee: 235,
      CaptainShareProfit: 55,
    },
  },
];
// Mock GET request to retrieve Ticket data
mock.onGet("/api/data/ticket/TicketData").reply(() => {
  return [200, TicketData];
});

// Mock DELETE endpoint for deleting a ticket
mock.onDelete("/api/data/ticket/delete").reply((config) => {
  const { id } = JSON.parse(config.data);
  const ticket = TicketData.map((ticket) =>
    ticket.Id === id ? { ...ticket, deleted: true } : ticket
  );
  return [200, ticket];
});

// Mock create endpoint for creating a ticket
mock.onPost("/api/data/ticket/create").reply((config) => {
  const newTicket = JSON.parse(config.data);
  TicketData.push(newTicket);
  return [200, newTicket];
});

export default TicketData;

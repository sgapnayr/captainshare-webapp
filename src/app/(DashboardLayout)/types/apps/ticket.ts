export interface TicketType {
  Id: number;
  ticketTitle: string;
  ticketDescription: string;
  Status: string;
  Label: string;
  thumb: string;
  AgentName: string;
  Date: Date;
  deleted: boolean;
  TimeSlots?: { start: string; end: string }[]; // Example: [{ start: "11:00", end: "15:00" }, { start: "15:00", end: "19:00" }]
  BoatId?: string; // Identifier for the boat assigned to the trip
  OwnerId?: string; // Identifier for the boat owner
  CaptainId?: string; // Identifier for the captain
  ClientNotes?: string; // Notes provided by the client
  ClientName?: string; // Name of the client
  ClientPhoneNumber?: string; // Contact number for the client
  FinancialDetails?: {
    CaptainRatePerHour: number; // Captain's hourly rate
    HoursBilled: number; // Total hours billed
    OwnerChargeBeforeFee: number; // Amount billed to the owner before fees
    OwnerFee: number; // Fee added to the owner's bill
    OwnerChargeAfterFee: number; // Total amount charged to the owner after fees
    CaptainEarningsBeforeFee: number; // Captain's earnings before fees
    CaptainShareFee: number; // Fee charged to the captain
    CaptainEarningsAfterFee: number; // Captain's earnings after fees
    CaptainShareProfit: number; // Profit kept by CaptainShare from this trip
  };
}

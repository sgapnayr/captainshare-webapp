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
  TimeSlots?: { start: string; end: string }[];
  BoatId?: string;
  OwnerId?: string;
  CaptainId?: string;
  CaptainPhoneNumber?: string;
  CaptainEmail?: string;
  ClientNotes?: string;
  ClientName?: string;
  ClientPhoneNumber?: string;
  ClientEmail?: string;
  FinancialDetails?: {
    CaptainRatePerHour: number;
    HoursBilled: number;
    OwnerChargeBeforeFee: number;
    OwnerFee: number;
    OwnerChargeAfterFee: number;
    CaptainEarningsBeforeFee: number;
    CaptainShareFee: number;
    CaptainEarningsAfterFee: number;
    CaptainShareProfit: number;
  };
}

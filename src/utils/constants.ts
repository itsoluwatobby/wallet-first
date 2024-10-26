export enum SideTabEnum {
  Home = 'Home',
  Accounts =  'Accounts',
  Transfer =  'Transfer Funds',
  Transaction =  'Transaction History',
  Sync =  'Sync With Bank',
};

export const TransactionHistoryHeading = ['transaction', 'amount', 'status', 'date', 'channel', 'category'];

export enum CURRENCY {
  EURO = "£",
  NAIRA = "₦",
  DOLLAR = "$",
};

export enum TransactionStatus {
  Failed = 'Failed',
  Pending = 'Pending',
  Success = 'Success',
}

export enum TransactionType {
  Credit = 'Credit',
  Debit = 'Debit',
  Charges = 'Charges',
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  membershipId: string;
}

export interface BenefitWithOutId {
  title: string;
  description: string;
  membershipId: string;
}

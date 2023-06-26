import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type Props = {
  title: string;
  onClick: () => void;
  description?: string;
};
export function BenefitCard({ title, description, onClick }: Props) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between">
        <Label>{title}</Label>
        <Button variant="destructive" type="button" onClick={onClick}>
          Remove
        </Button>
      </div>
      {description && <CardDescription>{description}</CardDescription>}
    </div>
  );
}

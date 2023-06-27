import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { BenefitCard } from "./benefit-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  BenefitFormValues,
  MembershipFormValues,
  benefitFormSchema,
} from "../data/form-validator";
import { Control, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/react-hook-form/form";
import { useState } from "react";

type Props = {
  fieldName: keyof MembershipFormValues;
  controller: Control<MembershipFormValues, any>;
};
export default function AddBenefitDialog({ fieldName, controller }: Props) {
  const [open, setOpen] = useState(false);
  const defaultValues: Partial<BenefitFormValues> = {
    title: "",
    description: "",
  };
  const form = useForm<BenefitFormValues>({
    resolver: zodResolver(benefitFormSchema),
    defaultValues,
    mode: "onChange",
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="outline" type="button">
          <Plus />
          Add Benefit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Benefits</DialogTitle>
          <DialogDescription>
            Give your supporters exclusive access to benefits for a monthly fee.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <FormField
            name={fieldName}
            control={controller}
            render={({ field }) => (
              <Form {...form}>
                <form className="flex w-full flex-col gap-4">
                  <FormField
                    name="title"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2">
                        <Label>Title</Label>
                        <FormControl>
                          <Input placeholder="Benefit title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="description"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2">
                        <Label>Description</Label>
                        <FormControl>
                          <Input placeholder="Benefit description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant="default"
                    type="button"
                    onClick={() => {
                      if (form.getValues("title").length >= 3) {
                        field.value
                          ? field.onChange([
                              ...(field.value as []),
                              form.getValues(),
                            ])
                          : field.onChange([form.getValues()]);
                        setOpen(false);
                        form.reset();
                      }
                    }}
                  >
                    Create
                  </Button>
                </form>
              </Form>
            )}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

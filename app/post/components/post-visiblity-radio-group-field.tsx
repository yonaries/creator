import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form";
import { cn } from "@/lib/utils";
import { Control } from "react-hook-form";
import { PostFormValues } from "../data/form-validator";

type Props = {
  className?: string;
  items: {
    value: string;
    label: string;
  }[];
  label: string;
  controller: Control<PostFormValues, any>;
};

const PostVisiblityRadioGroupField = ({
  className,
  items,
  label,
  controller,
}: Props) => {
  return (
    <FormField
      control={controller}
      name="visibility"
      render={({ field }) => (
        <div className={cn("ml-2", className)}>
          <FormDescription className="text-m mb-2 mt-4 font-bold">
            {label}
          </FormDescription>
          <FormItem>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                {items.map((item, index) => (
                  <FormField
                    key={`${item.value}${index}`}
                    control={controller}
                    name="visibility"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem
                              value={item.value}
                              id={`r${index}`}
                            />
                          </FormControl>
                          <Label htmlFor={`r${index}`} className="ml-2">
                            {item.label}
                          </Label>
                        </FormItem>
                      </div>
                    )}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>
          <FormMessage />
        </div>
      )}
    />
  );
};

export default PostVisiblityRadioGroupField;

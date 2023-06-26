import { Checkbox } from "@/components/ui/checkbox";
import {
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
    id: string;
    label: string;
  }[];
  label: string;
  controller: Control<PostFormValues, any>;
};
const PostMembershipCheckboxField = ({
  className,
  items,
  label,
  controller,
}: Props) => {
  return (
    <FormField
      control={controller}
      name="membership"
      render={() => (
        <div className={cn("ml-2", className)}>
          <FormDescription className="text-m mb-2 mt-4 font-bold">
            {label}
          </FormDescription>
          <FormItem>
            {items.map((item: any, index: number) => (
              <FormField
                key={`${item.id}${index}`}
                control={controller}
                name="membership"
                render={({ field }) => (
                  <div className="my-2 flex items-center space-x-2">
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          id={item.id}
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([
                                  ...(field.value as string[]),
                                  item.id,
                                ])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <label
                        htmlFor={item.id}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item.label}
                      </label>
                    </FormItem>
                  </div>
                )}
              />
            ))}
          </FormItem>
          <FormMessage />
        </div>
      )}
    />
  );
};

export default PostMembershipCheckboxField;

import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/app/context/auth-context";
import AccountSetting from "./forms/account-setting";
import { AccountForm } from "./forms/account-form";

type Props = {};

const Settings = (props: Props) => {
  return (
    <div>
      <span className="text-3xl font-bold">Settings</span>
      <Separator className="my-3" />
      <div className="my-2 flex flex-col">
        <span className="text-lg font-bold">Account</span>
        <span className="text-sm text-gray-500">
          Change your account settings and preferences.
        </span>
      </div>
      <AccountForm />
    </div>
  );
};

export default Settings;

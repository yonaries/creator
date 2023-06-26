import React from "react";
import { getUser } from "../../actions/get-user";
import { AccountForm } from "./account-form";

type Props = {
  uid: string;
  token: string;
};

const AccountSetting = async (props: Props) => {
  const user = await getUser({ uid: props.uid, token: props.token });
  return (
    <div>
      <AccountForm />
    </div>
  );
};

export default AccountSetting;

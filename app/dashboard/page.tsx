import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function Page() {
  return (
    <div>
      <span className="text-3xl font-bold">Supporters</span>
      <Separator className="my-3" />
      <Tabs defaultValue="supporters" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="supporters">Supporters</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="survey">Exit Survey</TabsTrigger>
          <TabsTrigger value="blocked-users">Blocked Users</TabsTrigger>
        </TabsList>
        <TabsContent value="supporters">Supporters</TabsContent>
        <TabsContent value="donations">Donations</TabsContent>
        <TabsContent value="benefits">Benefits</TabsContent>
        <TabsContent value="survey">Exit Survey</TabsContent>
        <TabsContent value="blocked-users">Blocked Users</TabsContent>
      </Tabs>
    </div>
  );
}

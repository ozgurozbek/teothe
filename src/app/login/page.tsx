"use client";

import { Card, Divider } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

/**
 * Uses SimpleContent to generate a page full of text describing the common lore of teothe.
 * @tutorial
 * @returns Card(antd) wrapped by section
 */
export default function CommonLorePage() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K,Common Lore"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Login",
            text: ["Something here. Definitely."],
          }}
        />
        <Divider />
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user?.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </Card>
    </section>
  );
}

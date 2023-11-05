import {
    Tabs,
    TabsHeader,
    Tab,
  } from "@material-tailwind/react";
import { PageContent } from "./page-content";
export function TabsDefault() {
const data = [
    {
    label: "HTML",
    value: "html"
    },
];



return (
    <Tabs value="html">
    <TabsHeader>
        {data.map(({ label, value }) => (
        <Tab key={value} value={value}>
            {label}
        </Tab>
        ))}
    </TabsHeader>
    <PageContent></PageContent>
    </Tabs>
);
}
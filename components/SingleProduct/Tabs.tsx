import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import WithSpeechBubbles from "./Tab1";
import Feature from "./Tab2";

const TabsSection = () => {
  return (
    <>
      <Tabs isLazy align="center" variant='enclosed' marginTop={"90px"}>
        <TabList>
          <Tab w="50%" fontSize={"3xl"}>Reviews</Tab>
          <Tab w="50%" fontSize={"3xl"}>Feature</Tab>
        </TabList>
        {/* ============================ */}
        <TabPanels>
          <TabPanel>
            <WithSpeechBubbles />
          </TabPanel>
          <TabPanel>
            <Feature/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TabsSection;

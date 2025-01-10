"use client";

import * as React from "react";
import { Bot, Frame, Map, PieChart, SquareTerminal } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "test",
    email: "test@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Analytics",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "AI",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Automation",
          url: "#",
        },
        {
          title: "Machine Learning",
          url: "#",
        },
        {
          title: "Deep Learning",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Ankieta 1",
      url: "#",
      icon: Frame,
    },
    {
      name: "Formualrz dla sklepu",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Zadowolenie klientow",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

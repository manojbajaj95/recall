import { Avatar } from '@/components/tui/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/tui/dropdown'
import { SidebarLayout } from '@/components/tui/sidebar-layout'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/tui/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/tui/sidebar'
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
  ChatBubbleLeftEllipsisIcon,
  BookmarkIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
} from '@heroicons/react/20/solid'

type SidebarItem = {
  href: string;
  icon: JSX.Element;
  label: string;
};

const sidebarItems: SidebarItem[] = [
  { href: "/app/search", icon: <MagnifyingGlassIcon />, label: "Search" },
  { href: "/app/upload", icon: <InboxIcon />, label: "Upload" },
  { href: "/app/chat", icon: <ChatBubbleLeftEllipsisIcon />, label: "Chat" },
  { href: "/app/library", icon: <BookmarkIcon />, label: "Library" },
];


const sidebarItems2: SidebarItem[] = [
  // { href: "/", icon: <HomeIcon />, label: "Home" },
  // { href: "/events", icon: <Square2StackIcon />, label: "Events" },
  // { href: "/orders", icon: <TicketIcon />, label: "Orders" },
  // { href: "/settings", icon: <Cog6ToothIcon />, label: "Settings" },
  // { href: "/broadcasts", icon: <MegaphoneIcon />, label: "Broadcasts" },
]

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarLayout
      navbar={<></>
        // <Navbar>
        //   <NavbarSpacer />
        //   <NavbarSection>
        //     <NavbarItem href="/search" aria-label="Search">
        //       <MagnifyingGlassIcon />
        //     </NavbarItem>
        //     <NavbarItem href="/inbox" aria-label="Inbox">
        //       <InboxIcon />
        //     </NavbarItem>
        //     <Dropdown>
        //       <DropdownButton as={NavbarItem}>
        //         <Avatar src="/profile-photo.jpg" square />
        //       </DropdownButton>
        //       <DropdownMenu className="min-w-64" anchor="bottom end">
        //         <DropdownItem href="/my-profile">
        //           <UserIcon />
        //           <DropdownLabel>My profile</DropdownLabel>
        //         </DropdownItem>
        //         <DropdownItem href="/settings">
        //           <Cog8ToothIcon />
        //           <DropdownLabel>Settings</DropdownLabel>
        //         </DropdownItem>
        //         <DropdownDivider />
        //         <DropdownItem href="/privacy-policy">
        //           <ShieldCheckIcon />
        //           <DropdownLabel>Privacy policy</DropdownLabel>
        //         </DropdownItem>
        //         <DropdownItem href="/share-feedback">
        //           <LightBulbIcon />
        //           <DropdownLabel>Share feedback</DropdownLabel>
        //         </DropdownItem>
        //         <DropdownDivider />
        //         <DropdownItem href="/logout">
        //           <ArrowRightStartOnRectangleIcon />
        //           <DropdownLabel>Sign out</DropdownLabel>
        //         </DropdownItem>
        //       </DropdownMenu>
        //     </Dropdown>
        //   </NavbarSection>
        // </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarItem>
              Recall
            </SidebarItem>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection className="max-lg:hidden">
              {sidebarItems.map((item) => (
                <SidebarItem href={item.href} key={item.label}>
                  {item.icon}
                  <SidebarLabel>{item.label}</SidebarLabel>
                </SidebarItem>
              ))}
            </SidebarSection>
            <SidebarSection>
              {sidebarItems2.map((item) => (
                <SidebarItem href={item.href} key={item.label}>
                  {item.icon}
                  <SidebarLabel>{item.label}</SidebarLabel>
                </SidebarItem>
              ))}
            </SidebarSection>
            {/* <SidebarSection className="max-lg:hidden">
              <SidebarHeading>Upcoming Events</SidebarHeading>
              <SidebarItem href="/events/1">Bear Hug: Live in Concert</SidebarItem>
              <SidebarItem href="/events/2">Viking People</SidebarItem>
              <SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
              <SidebarItem href="/events/4">We All Look The Same</SidebarItem>
            </SidebarSection> */}
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support">
                <QuestionMarkCircleIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <SparklesIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src="/profile-photo.jpg" className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Erica</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/app/profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/app/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/app/feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/auth/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
}
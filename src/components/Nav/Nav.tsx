import clsx from "clsx";
import Image from "next/image";
import React from "react";
import shieldImg from "../../../public/assets/images/shield.svg";
import aiBotImg from "../../../public/assets/images/ai-bot.svg";
import leagueImg from "../../../public/assets/images/league.svg";
import espnImg from "../../../public/assets/images/espn.svg";
import settingsImg from "../../../public/assets/images/settings.svg";
import searchImg from "../../../public/assets/images/search.svg";

interface NavItemProps {
  type?: "ghost";
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ type, children }) => {
  return (
    <div
      className={clsx(
        "w-10 h-10 flex items-center justify-center rounded-sm cursor-pointer hover:bg-white/5",
        {
          "bg-white/10": type !== "ghost",
        },
      )}
    >
      {children}
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 bg-neutral-700 rounded-sm p-1.5">
        <NavItem>
          <Image src={shieldImg} alt="Shield" />
        </NavItem>

        <NavItem type="ghost">
          <Image src={aiBotImg} alt="AI Bot" />
        </NavItem>

        <NavItem type="ghost">
          <Image src={leagueImg} alt="Logo" />
        </NavItem>

        <NavItem type="ghost">
          <Image src={espnImg} alt="ESPN" height={10} />
        </NavItem>

        <div className="w-px h-5 bg-bg-alpha-subtle" />

        <NavItem type="ghost">
          <Image src={settingsImg} alt="Settings" />
        </NavItem>
      </div>

      <div className="flex items-center justify-center bg-neutral-700 rounded-sm w-[52px] h-[52px]">
        <NavItem type="ghost">
          <Image src={searchImg} alt="Search" />
        </NavItem>
      </div>
    </div>
  );
};

export default Nav;

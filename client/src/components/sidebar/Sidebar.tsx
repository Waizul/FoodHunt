import React from "react";

type Props = {
  sideNavItems: string[];
};

const Sidebar = ({ sideNavItems }: Props) => {
  return (
    <div>
      {sideNavItems.map((item, i) => (
        <div key={item[i]}>{item}</div>
      ))}
    </div>
  );
};

export default Sidebar;

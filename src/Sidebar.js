import { Button,IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

import SidebarOption from "./SidebarOption";

import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>

      <SidebarOption
        icon={<InboxIcon />}
        title="Inbox"
        number={50}
        selected={true}
      />
      <SidebarOption icon={<StarIcon />} title="Starred" number={66} />
      <SidebarOption icon={<AccessTimeIcon />} title="Snoozed" number={66} />
      <SidebarOption
        icon={<LabelImportantIcon />}
        title="Important"
        number={66}
      />
      <SidebarOption icon={<NearMeIcon />} title="Sent" number={66} />
      <SidebarOption icon={<NoteIcon />} title="Drafts" number={66} />
      <SidebarOption icon={<ExpandMoreIcon />} title="More" number={66} />

      <div className="sidebar__footer">
        <div className="sidebar__footericons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

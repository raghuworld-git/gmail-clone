import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import Section from "./Section";
import EmailRow from "./EmailRow";
import "./EmailList.css";

const EmailList = () => {
  return (
    <div className="emaillist">
      <div className="emaillist__settings">
        <div className="emaillist__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emaillist__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaillist__sections">
        <Section
          icon={<InboxIcon />}
          title="Primary"
          color="red"
          selected={true}
        />
        <Section icon={<PeopleIcon />} title="Social" color="#1A73E8" />
        <Section icon={<InboxIcon />} title="Promotions" color="green" />
      </div>

      <div className="emaillist__list">
        <EmailRow
          title="Twitch"
          subject="Hey Fellow Streamer"
          description="This is test descriptiohaijdshfjshdfjhsdjfsjdhfsdjfsfdfsdfsdfhsdfgsdfhgsfhsgdfhsdgn"
          time="10pm"
        />
         <EmailRow
          title="Twitch"
          subject="Hey Fellow Streamer"
          description="This is test description"
          time="10pm"
        />
         <EmailRow
          title="Twitch"
          subject="Hey Fellow Streamer"
          description="This is test description"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;

import React, { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { isArray, isEmpty, cloneDeep } from "lodash";
import headerActions from "../../../redux/header/actions";
import { BarWrapper } from "./BottomBar.style";

const ViewMiddle = lazy(() => import("./responsive/ViewMiddle"));

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
  }

  onClickMenuItem(linkIndex) {
    const { links, dataSet } = this.props;
    const linkItem = links[linkIndex];
    if (linkItem.active) {
      return;
    }
    const items = cloneDeep(links);
    items.forEach(link => {
      link.active = false;
    });
    items[linkIndex].active = true;
    dataSet(items);
  }

  render() {
    const { links } = this.props;
    if (!isArray(links) || isEmpty(links)) {
      return null;
    }

    const viewProps = {
      links,
      onClick: this.onClickMenuItem
    };

    return (
      <BarWrapper>
        <ViewMiddle {...viewProps} />
      </BarWrapper>
    );
  }
}

export default connect(
  ({ Header, App }) => ({
    links: Header.get("items"),
    langID: App.get("langID")
  }),
  {
    dataSet: headerActions.dataSet
  }
)(BottomBar);

import React from "react";
import { useTabListState } from "react-stately";
import { useEffect, useRef, useState } from "react";
import { useTab, useTabList, useFocusRing, mergeProps } from "react-aria";

import './../../assets/style/Footer.css'

export function FooterFunction(props) {
  let state = useTabListState(props);
  let ref = useRef();
  let { tabListProps } = useTabList(props, state, ref);

  let [activeTabStyle, SetActiveTabStyle] = useState({
    width: 0,
    transform: "translateX(0)",
  });

  useEffect(() => {
    let activeTab = ref.current.querySelector(
      '[role="tab"][aria-selected="true"]'
    );

    SetActiveTabStyle({
      width: activeTab?.offsetWidth,
      transform: `translateX(${activeTab?.offsetLeft}px)`,
    });
  }, [state.selectedKey]);

  let { focusProps, isFocusVisible } = useFocusRing({
    within: true,
  });

  return (
    <div className="footer__container">
      <div className="footer__bar">
        <div
          className={`footer__selection ${isFocusVisible ? "focused" : ""}`}
          style={{ zIndex: -1, ...activeTabStyle }}
        />
        <div {...mergeProps(tabListProps, focusProps)} ref={ref}>
          {[...state.collection].map((item) => (
            <Tab key={item.key} item={item} state={state} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Tab({ item, state }) {
  let ref = useRef();
  let { tabProps } = useTab(item, state, ref);

  return (
    <div {...tabProps} ref={ref}>
      {item.rendered}
    </div>
  );
}

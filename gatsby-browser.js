import React from "react";
import { ClickToComponent } from "click-to-react-component";

export const wrapRootElement = ( {element }, pluginOptions ) => {
  console.log(pluginOptions)
  const component = pluginOptions.enabled
    ? <ClickToComponent {...pluginOptions} />
    : null;

  return <>
    {component}
    {element}
  </>;
}

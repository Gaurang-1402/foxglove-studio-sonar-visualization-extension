import { Immutable, MessageEvent, PanelExtensionContext, Topic } from "@foxglove/studio";
import { useEffect, useLayoutEffect, useState } from "react";
import GaugeChart from 'react-gauge-chart';
import ReactDOM from "react-dom";

function SonarPanel({ context }: { context: PanelExtensionContext }): JSX.Element {
  const [, setTopics] = useState<undefined | Immutable<Topic[]>>();
  const [, setMessages] = useState<undefined | Immutable<MessageEvent[]>>();
  const [sonarMessage, setSonarMessage] = useState<undefined | any>();

  const [renderDone, setRenderDone] = useState<(() => void) | undefined>();

  // Function to calculate the gauge value
  const getGaugeValue = () => {
    if (sonarMessage && sonarMessage.message.range !== undefined) {
      const range = sonarMessage.message.range;
      const maxRange = sonarMessage.message.max_range || 10; // default to 10 if max_range is not available
      return range / maxRange; // returns a value between 0 and 1
    }
    return 0;
  };

  useLayoutEffect(() => {
    context.onRender = (renderState, done) => {
      setRenderDone(() => done);
      setTopics(renderState.topics);
      setMessages(renderState.currentFrame);

      // Check if we have new sonar messages and update the state
      const newSonarMessages = renderState.currentFrame as MessageEvent<any>[] | undefined;
      if (newSonarMessages && newSonarMessages.length > 0) {
        setSonarMessage(newSonarMessages[newSonarMessages.length - 1]);
      }
    };

    context.watch("topics");
    context.watch("currentFrame");
    context.subscribe([{ topic: "/drone/sonar" }]);
  }, [context]);



  useEffect(() => {
    renderDone?.();
  }, [renderDone]);

  // Display sonar data if available
  const sonarDisplay = sonarMessage ? (
    <>    
    <p>Sonar range: {sonarMessage.message.range.toFixed(5)} meters</p>
    <p>Max range: {sonarMessage.message.max_range.toFixed(5)} meters</p>
    <p>Min range: {sonarMessage.message.min_range.toFixed(5)} meters</p>
    <p>Field of view: {sonarMessage.message.field_of_view.toFixed(5)} degrees</p>
    <p>Radiation type: {sonarMessage.message.radiation_type} </p>
    <h2>Sonar Range Gauge</h2>
      <GaugeChart 
        id="sonar-gauge"
        nrOfLevels={30}
        percent={getGaugeValue()}
        arcWidth={0.3}
        colors={["#FF5F6D", "#FFC371"]} // Example color range
        textColor={"#000000"}
        needleColor={"#464A4F"}
        needleBaseColor={"#464A4F"}
      />
      <p>Current Sonar Range: {sonarMessage ? `${sonarMessage.message.range.toFixed(2)} meters` : "No data"}</p>
    </>


  ) : (
    <p>No sonar data available.</p>
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Welcome to the SONAR extension panel!</h2>
      {sonarDisplay}
    </div>
  );
}

export function initSonarPanel(context: PanelExtensionContext): () => void {
  ReactDOM.render(<SonarPanel context={context} />, context.panelElement);
  return () => {
    ReactDOM.unmountComponentAtNode(context.panelElement);
  };
}

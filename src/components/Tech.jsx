import React, { useMemo } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = React.memo(() => {
  const renderedTechnologies = useMemo(
    () =>
      technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h3 className='text-white font-medium text-[18px] text-center'>{technology.name}</h3>
        </div>
      )),
    []
  );

  return <div className='flex flex-row flex-wrap justify-center gap-10'>{renderedTechnologies}</div>;
});

export default SectionWrapper(Tech, "");

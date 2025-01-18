import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { education } from "./constants.jsx";
import EducationCard from "./EducationCard";

const Index = () => {
  return (
    <div
      id="education"
      className="flex flex-col items-center justify-center relative z-[1] px-4 pb-[60px] md:px-0"
    >
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1350px] pt-[40px] gap-6">
        {/* Header */}
        <div className="text-center font-semibold mt-5">
          <h1 className="text-4xl font-extrabold tracking-tight text-textPrimary sm:text-5xl">
            Education
          </h1>
        </div>
        {/* Subheader */}
        <div className="text-textSecondary text-center max-w-[600px]">
          <p className="text-lg mt-4 text-center text-textSecondary99 max-w-[600px] lg:text-base">
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </p>
        </div>
        {/* Timeline */}
        <div className="w-full max-w-[1000px] mt-4">
          <Timeline position="alternate">
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    style={{
                      borderColor: "#FF7F50", // Custom border color
                      backgroundColor: "transparent", // Ensure background remains transparent
                    }}
                  />

                  {/* Always display the connector */}
                  <TimelineConnector
                    className="bg-primary h-[100%]"
                    style={{ background: "#FF7F50" }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="flex justify-start items-center w-full">
                    <div className="w-full max-w-[700px] p-4">
                      <EducationCard education={edu} />
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Index;

import { Chip, Label, ListBox, Select } from "@heroui/react";
import "./App.css";
import { CircleCheckFill, CircleFill, Clock } from "@gravity-ui/icons";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
import ProjectCard from "./components/ProjectCard";

const itemsPD = [
  {
    image: "/PressD1.png",
  },
  {
    image: "/PressD2.png",
  },
  {
    image: "/PressD3.png",
  },
  {
    image: "/PressD4.png",
  },
];
const itemsQCNG = [
  {
    image: "/QCNG1.png",
  },
  {
    image: "/QCNG2.png",
  },
  {
    image: "/QCNG3.png",
  },
  {
    image: "/QCNG4.png",
  },
  {
    image: "/QCNG5.png",
  },
];
const itemsProdD = [
  {
    image: "/PD1.png",
  },
  {
    image: "/PD2.png",
  },
  {
    image: "/PD3.png",
  },
  {
    image: "/PD4.png",
  },
  {
    image: "/PD5.png",
  },
  {
    image: "/PD6.png",
  },
];
const itemsUniver = [
  {
    image: "/University1.png",
  },
  {
    image: "/University2.png",
  },
  {
    image: "/University3.png",
  },
  {
    image: "/University4.png",
  },
  {
    image: "/University5.png",
  },
];
const itemsCAPA = [
  {
    image: "/CAPA1.png",
  },
  {
    image: "/CAPA2.png",
  },
  {
    image: "/CAPA3.png",
  },
  {
    image: "/CAPA4.png",
  },
  {
    image: "/CAPA5.png",
  },
  {
    image: "/CAPA6.png",
  },
  {
    image: "/CAPA7.png",
  },
  {
    image: "/CAPA8.png",
  },
  {
    image: "/CAPA9.png",
  },
];

const projectsList = [
  {
    category: "Analytics",
    name: "PRESS DATA",
    subtitle: "Molding parameters",
    description: `Press data is a software in which users can <b>inspect</b>,
                <b>analyze</b> and <b>compare</b> press parameters used in every
                press cycle. Can apply four different <b>types</b> of filters
                like <b>Platen Tonnage</b>,<b>Shroud Vacuum</b>,{" "}
                <b>Platen Referenced position</b> and <b>Tank Vacuum</b>.
                Additional you can review <b>Press history</b>.`,
    options: ["Live data", "Filters", "Charts"],
    link: "http://10.190.10.14:3014/",
    images: itemsPD,
  },
  {
    category: "Defects",
    name: "QCNG REPORTS",
    subtitle: "Defects Live",
    description: `QCNG reports is a software in which users can inspect in{" "}
                <b>real time</b> the register of defects on production floor,
                you can review the <b>status of the product</b>, and some
                information about it. Additional you can review the{" "}
                <b> register for station</b> in the process.`,
    options: ["Live data", "Defects", "Station Count"],
    link: "http://10.190.10.20:3004/",
    images: itemsQCNG,
  },
  {
    category: "Tracking",
    name: "PRODUCT DETAILS",
    subtitle: "Tracking products",
    description: `Product details is a software in which users can review all
                information about a product, like a <b>birth certificate</b>.
                Product details includes <b>product model</b>,{" "}
                <b>serial number of SMC</b>, <b>SMC supplier</b>,{" "}
                <b>press parameters</b>,
                <b>recording of product hours in the process</b> and a{" "}
                <b>register of defects</b>. Additional you can generate a{" "}
                <b>PDF report</b> with all the information.`,
    options: ["Track products", "SMC Supplier", "Press Data", "Defects"],
    link: "http://10.190.10.14:3015/",
    images: itemsProdD,
  },
  {
    category: "Learning",
    name: "UNIVERSITY",
    subtitle: "knowledge conservation",
    description: `University is a software in which employees can review all the
                information about of all the processes in the company, like{" "}
                <b>work instructions</b>, <b>presentations</b>, <b>videos</b>,
                and <b>materials</b>. University has a big library of
                information that can be used to <b>train new employees</b> and
                to improve the <b>knowledge of the current employees</b>`,
    options: ["Work Instructions", "Presentations", "Videos", "Materials"],
    link: "http://10.190.10.14:3012/",
    images: itemsUniver,
  },
  {
    category: "Solving problems",
    name: "CAPA",
    subtitle: "Solving process problems",
    description: `University is a software in which employees can review all the
                information about of all the processes in the company, like{" "}
                <b>work instructions</b>, <b>presentations</b>, <b>videos</b>,
                and <b>materials</b>. University has a big library of
                information that can be used to <b>train new employees</b> and
                to improve the <b>knowledge of the current employees</b>`,
    options: [
      "Corrective Actions",
      "Preventive Actions",
      "Action Log",
      "Action Reports",
      "Emails",
    ],
    link: "http://10.190.10.20:3001/",
    images: itemsCAPA,
  },
];

function App() {
  const [boxId, setBoxId] = useState<string>("");

  return (
    <div className="min-h-screen p-8 flex justify-between">
      <section className="text-white w-3/4 p-4 flex flex-col gap-8">
        <div className="w-full flex gap-8">
          <div className="w-[65%] flex flex-col gap-4">
            <div className="justify-end items-start flex mt-6">
              <SearchBox onSearch={setBoxId} />
            </div>
          </div>
          <div className="w-[35%]">
            <Select className="w-1/2" placeholder="Choose a category">
              <Label>Categories Filter:</Label>
              <Select.Trigger className="h-13">
                <Select.Value className="flex items-center" />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="analytics" textValue="analytics">
                    Analytics
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="defects" textValue="defects">
                    Defects
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="learning" textValue="learning">
                    Learning
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="tracking" textValue="tracking">
                    Tracking
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item
                    id="solvingProblems"
                    textValue="solvingProblems"
                  >
                    Solving problems
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-187.5 overflow-auto">
          {projectsList.map((project) => (
            <ProjectCard
              key={project.name}
              category={project.category}
              name={project.name}
              subtitle={project.subtitle}
              description={project.description}
              options={project.options}
              link={project.link}
              images={project.images}
            />
          ))}
        </div>
      </section>
      <section className="text-white w-1/4 flex flex-col items-center p-4">
        <h1 className="text-6xl font-bold">
          CSP <span className="text-[#0068FF]">UNIX</span>
        </h1>
        <p className="text-[#86868B] font-bold text-sm">
          The unification of all systems
        </p>
        <section className="flex flex-col gap-8 mt-8 w-full">
          <div className="bg-[#141414] rounded-xl p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center border-b-2 border-[#86868B] pb-2">
              <h2 className="font-semibold">System status</h2>
              <p className="text-[#9F9FA9] font-semibold">4/5 Online</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex justify-center items-center gap-2">
                <div className="h-3 w-3 bg-[#28A745] rounded-full"></div>
                <h2 className="font-semibold">PRESS DATA</h2>
              </div>
              <p className="text-[#28A745] font-semibold">Online</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <div className="h-3 w-3 bg-[#FF791B] rounded-full"></div>
                <h2 className="font-semibold">QCNG REPORTS</h2>
              </div>
              <p className="text-[#9F9FA9] font-semibold">Offline</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <div className="h-3 w-3 bg-[#28A745] rounded-full"></div>
                <h2 className="font-semibold">PRODUCT DETAILS</h2>
              </div>
              <p className="text-[#28A745] font-semibold">Online</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <div className="h-3 w-3 bg-[#28A745] rounded-full"></div>
                <h2 className="font-semibold">UNIVERSITY</h2>
              </div>
              <p className="text-[#28A745] font-semibold">Online</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <div className="h-3 w-3 bg-[#28A745] rounded-full"></div>
                <h2 className="font-semibold">CAPA</h2>
              </div>
              <p className="text-[#28A745] font-semibold">Online</p>
            </div>
          </div>
          {/* RIGHT PANEL */}
          <div className="bg-[#141414] rounded-xl p-4 flex flex-col gap-4">
            <h2 className="text-[#86868B] text-2xl font-medium text-center">
              CSP Develop News
            </h2>
            <div className="flex flex-col gap-2">
              <Chip color="success">
                <CircleFill width={12} />
                New
              </Chip>
              <p className="font-medium">
                We are working to develop a{" "}
                <span className="text-[#FF791B]">new dashboard</span> for
                engineering department.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Chip color="accent">
                <CircleCheckFill width={12} />
                Update
              </Chip>
              <p className="font-medium">
                CSP Product Details had a{" "}
                <span className="text-[#28A745]">big update</span>, adding new
                <span className="text-[#DC3545]"> features</span> in the{" "}
                <span className="text-[#FF791B]">PDF report</span>, the last
                update includes press data parameters.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Chip color="danger">
                <Clock width={12} />
                Pending
              </Chip>
              <p className="font-medium">
                QCNG Reports will receive an{" "}
                <span className="text-[#28A745]">
                  important functional update
                </span>{" "}
                to improve the{" "}
                <span className="text-[#DC3545]">efficiency</span> of the
                display information. However, this change will take{" "}
                <span className="text-[#FF791B]">some time</span>.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;

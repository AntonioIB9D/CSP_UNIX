import { Chip, Label, ListBox, Select } from "@heroui/react";
import "./App.css";
import { CircleCheckFill, CircleFill, Clock } from "@gravity-ui/icons";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";

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

function App() {
  const [boxId, setBoxId] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexQC, setCurrentIndexQC] = useState(0);
  const [currentIndexPD, setCurrentIndexPD] = useState(0);
  const [currentIndexUni, setCurrentIndexUni] = useState(0);
  const items = itemsPD;
  const itemsQC = itemsQCNG;
  const itemsProD = itemsProdD;
  const itemsU = itemsUniver;

  /* The `useEffect` hook in the provided code snippet is setting up a timer interval that updates the
 current index of the carousel every 5 seconds. Here's a breakdown of what it's doing: */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 8000); // Avanza cada 5 segundos

    return () => clearInterval(interval); // Limpieza cuando el componente se desmonta
  }, [items.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexQC((prevIndex) => (prevIndex + 1) % itemsQC.length);
    }, 8000); // Avanza cada 5 segundos

    return () => clearInterval(interval); // Limpieza cuando el componente se desmonta
  }, [itemsQC.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexPD((prevIndex) => (prevIndex + 1) % itemsProD.length);
    }, 8000); // Avanza cada 5 segundos

    return () => clearInterval(interval); // Limpieza cuando el componente se desmonta
  }, [itemsProD.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexUni((prevIndex) => (prevIndex + 1) % itemsU.length);
    }, 8000); // Avanza cada 5 segundos

    return () => clearInterval(interval); // Limpieza cuando el componente se desmonta
  }, [itemsU.length]);

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
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-187.5 overflow-auto">
          {/* Data 1 */}
          <div className="bg-[#141414] rounded-2xl p-2 w-30 text-center font-bold text-[#28A745]">
            Analytics
          </div>
          <div className="bg-[#141414] rounded-2xl p-4 w-[90%] flex justify-center gap-4">
            <div className="flex flex-col gap-4 justify-center items-center w-2/4">
              <img
                src={items[currentIndex].image}
                alt="Carousel Image"
                className="w-full h-full object-cover"
              />
              <div className="flex gap-2 mt-2 md:mt-0 ">
                {items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full hover:cursor-pointer ${
                      index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-2/4">
              <h1 className="font-semibold text-[#FF791B]">
                Molding parameters
              </h1>
              <h2 className="text-2xl font-semibold">PRESS DATA</h2>
              <p className="text-[#86868B] font-medium text-pretty">
                Press data is a software in which users can <b>inspect</b>,
                <b>analyze</b> and <b>compare</b> press parameters used in every
                press cycle. Can apply four different <b>types</b> of filters
                like <b>Platen Tonnage</b>,<b>Shroud Vacuum</b>,{" "}
                <b>Platen Referenced position</b> and <b>Tank Vacuum</b>.
                Additional you can review <b>Press history</b>.
              </p>
              <div className="flex gap-2 mt-2">
                <Chip color="success" className="text-[14px]">
                  Live data
                </Chip>
                <Chip color="accent" className="text-[14px]">
                  Filters
                </Chip>
                <Chip color="danger" className="text-[14px]">
                  Charts
                </Chip>
              </div>
              <div className="text-[#0068FF] font-semibold flex justify-end items-end h-full ">
                <p className="hover:cursor-pointer">Visit</p>
              </div>
            </div>
          </div>
          {/* Data 2 */}
          <div className="bg-[#141414] rounded-2xl p-2 w-30 text-center font-bold text-[#CFA011]">
            Defects
          </div>
          <div className="bg-[#141414] rounded-2xl p-4 w-[90%] flex justify-center gap-4">
            <div className="flex flex-col gap-4 justify-center items-center w-2/4">
              <img
                src={itemsQC[currentIndexQC].image}
                alt="Carousel Image"
                className="w-full h-full object-cover"
              />
              <div className="flex gap-2 mt-2 md:mt-0 ">
                {itemsQC.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndexQC(index)}
                    className={`w-2 h-2 rounded-full hover:cursor-pointer ${
                      index === currentIndexQC ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2  w-2/4">
              <h1 className="font-semibold text-[#FF791B]">Defects Live</h1>
              <h2 className="text-2xl font-semibold">QCNG REPORTS</h2>
              <p className="text-[#86868B] font-medium text-pretty">
                QCNG reports is a software in which users can inspect in{" "}
                <b>real time</b> the register of defects on production floor,
                you can review the <b>status of the product</b>, and some
                information about it. Additional you can review the{" "}
                <b> register for station</b> in the process.
              </p>
              <div className="flex gap-2 mt-2">
                <Chip color="success" className="text-[14px]">
                  Live data
                </Chip>
                <Chip color="accent" className="text-[14px]">
                  Defects
                </Chip>
                <Chip color="danger" className="text-[14px]">
                  Station count
                </Chip>
              </div>
              <div className="text-[#0068FF] font-semibold flex justify-end items-end h-full ">
                <p className="hover:cursor-pointer">Visit</p>
              </div>
            </div>
          </div>
          {/* Data 3 */}
          <div className="bg-[#141414] rounded-2xl p-2 w-30 text-center font-bold text-[#0068FF]">
            Tracking
          </div>
          <div className="bg-[#141414] rounded-2xl p-4 w-[90%] flex justify-center gap-4">
            <div className="flex flex-col gap-4 justify-center items-center  w-2/4">
              <img
                src={itemsProD[currentIndexPD].image}
                alt="Carousel Image"
                className="w-full h-full object-cover"
              />
              <div className="flex gap-2 mt-2 md:mt-0 ">
                {itemsProD.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndexPD(index)}
                    className={`w-2 h-2 rounded-full hover:cursor-pointer ${
                      index === currentIndexPD ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2  w-2/4">
              <h1 className="font-semibold text-[#FF791B]">
                Tracking products
              </h1>
              <h2 className="text-2xl font-semibold">PRODUCT DETAILS</h2>
              <p className="text-[#86868B] font-medium text-pretty">
                Product details is a software in which users can review all
                information about a product, like a <b>birth certificate</b>.
                Product details includes <b>product model</b>,{" "}
                <b>serial number of SMC</b>, <b>SMC supplier</b>,{" "}
                <b>press parameters</b>,
                <b>recording of product hours in the process</b> and a{" "}
                <b>register of defects</b>. Additional you can generate a{" "}
                <b>PDF report</b> with all the information.
              </p>
              <div className="flex gap-2 mt-2">
                <Chip color="success" className="text-[14px]">
                  Track product
                </Chip>
                <Chip color="accent" className="text-[14px]">
                  SMC supplier
                </Chip>
                <Chip color="danger" className="text-[14px]">
                  Press Data
                </Chip>
                <Chip color="warning" className="text-[14px]">
                  Defects
                </Chip>
              </div>
              <div className="text-[#0068FF] font-semibold flex justify-end items-end h-full ">
                <p className="hover:cursor-pointer">Visit</p>
              </div>
            </div>
          </div>
          {/* Data 4 */}
          <div className="bg-[#141414] rounded-2xl p-2 w-30 text-center font-bold text-[#D74273]">
            Learning
          </div>
          <div className="bg-[#141414] rounded-2xl p-4 w-[90%] flex justify-center gap-4">
            <div className="flex flex-col gap-4 justify-center items-center  w-2/4">
              <img
                src={itemsUniver[currentIndexUni].image}
                alt="Carousel Image"
                className="w-full h-full object-cover"
              />
              <div className="flex gap-2 mt-2 md:mt-0 ">
                {itemsUniver.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndexUni(index)}
                    className={`w-2 h-2 rounded-full hover:cursor-pointer ${
                      index === currentIndexUni ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2  w-2/4">
              <h1 className="font-semibold text-[#FF791B]">
                knowledge conservation
              </h1>
              <h2 className="text-2xl font-semibold">UNIVERSITY</h2>
              <p className="text-[#86868B] font-medium text-pretty">
                University is a software in which employees can review all the
                information about of all the processes in the company, like work
                instructions, presentations, videos, and materials. University
                has a big library of information that can be used to train new
                employees and to improve the knowledge of the current employees.
              </p>
              <div className="flex gap-2 mt-2">
                <Chip color="success" className="text-[14px]">
                  Work Instructions
                </Chip>
                <Chip color="accent" className="text-[14px]">
                  Presentations
                </Chip>
                <Chip color="danger" className="text-[14px]">
                  Videos
                </Chip>
                <Chip color="warning" className="text-[14px]">
                  Materials
                </Chip>
              </div>
              <div className="text-[#0068FF] font-semibold flex justify-end items-end h-full ">
                <p className="hover:cursor-pointer">Visit</p>
              </div>
            </div>
          </div>
          {/* Data 5 */}
          <div className="bg-[#141414] rounded-2xl p-2 w-30 text-center font-bold text-[#D74273]">
            -
          </div>
          <div className="bg-[#141414] rounded-2xl p-4 w-[90%] flex justify-center gap-4">
            <div className="flex flex-col gap-4 justify-center items-center  w-2/4">
              <img
                src={itemsUniver[currentIndexUni].image}
                alt="Carousel Image"
                className="w-full h-full object-cover"
              />
              <div className="flex gap-2 mt-2 md:mt-0 ">
                {itemsUniver.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndexUni(index)}
                    className={`w-2 h-2 rounded-full hover:cursor-pointer ${
                      index === currentIndexUni ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2  w-2/4">
              <h1 className="font-semibold text-[#FF791B]">
                Solving process problems
              </h1>
              <h2 className="text-2xl font-semibold">CAPA</h2>
              <p className="text-[#86868B] font-medium text-pretty">
                CAPA is a software in which administrator can create, assign and
                solve corrective and preventive actions. CAPA has the ability to
                create reports and track the progress of the actions.
                Administrator can send an email to the responsible, additional
                the software sends a notification to the responsible when the
                action is assigned.
              </p>
              <div className="flex gap-2 mt-2">
                <Chip color="success" className="text-[14px]">
                  Work Instructions
                </Chip>
                <Chip color="accent" className="text-[14px]">
                  Presentations
                </Chip>
                <Chip color="danger" className="text-[14px]">
                  Videos
                </Chip>
                <Chip color="warning" className="text-[14px]">
                  Materials
                </Chip>
              </div>
              <div className="text-[#0068FF] font-semibold flex justify-end items-end h-full ">
                <p className="hover:cursor-pointer">Visit</p>
              </div>
            </div>
          </div>
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

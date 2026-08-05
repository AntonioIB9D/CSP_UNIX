import { Chip, Label, ListBox, Select } from "@heroui/react";
import "./App.css";
import { CircleCheckFill, CircleFill, Clock } from "@gravity-ui/icons";
import SearchBox from "./components/SearchBox";
import { useState } from "react";

function App() {
  const [boxId, setBoxId] = useState<string>("");

  console.log("To search: ", boxId);

  return (
    <div className="min-h-screen p-8 flex justify-between">
      <section className="text-white w-3/4  p-4 flex gap-8">
        <div className="w-[65%] flex flex-col gap-4">
          <div className="justify-end items-start flex mt-6">
            <SearchBox onSearch={setBoxId} />
          </div>
        </div>
        <div className="w-[35%]">
          <Select className="w-3/4" placeholder="Choose a category">
            <Label>Categories Filter:</Label>
            <Select.Trigger className="h-13">
              <Select.Value className="flex items-center" />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="florida" textValue="Florida">
                  Analytics
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="delaware" textValue="Delaware">
                  Defects
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="california" textValue="California">
                  Learning
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
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
                <h2 className="font-semibold">DETAILS PRODUCT</h2>
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

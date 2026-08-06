import { Keyboard } from "@gravity-ui/icons";
/* import { Button } from "@heroui/react"; */
/* import { useForm } from "react-hook-form"; */

type SearchBox = {
  searchTerm: string;
};

type searchBoxProps = {
  onSearch: (boxId: string) => void;
};

export default function SearchBox({ onSearch }: searchBoxProps) {
  /*  const { register /* handleSubmit */ /* } = useForm<SearchBox>(); */ /* */

  /*  const onSubmit = (data: SearchBox) => {
    onSearch(data.searchTerm);
  }; */

  return (
    <div className="bg-[#141414] opacity-95 rounded-3xl pr-4 pl-4 pt-2 pb-2 flex flex-row items-center w-3/4 border-2 border-[#282828]">
      <div className="flex items-center w-full gap-1">
        <Keyboard width={20} />
        <form
          noValidate
          /* onSubmit={handleSubmit(onSubmit)} */
          className="flex w-full"
        >
          <div className="w-full">
            <input
              id="boxId"
              className="w-full h-8 p-4 border border-[#141414] bg-[#141414]  text-white focus:outline-none focus:border-[#141414] focus:ring-1 focus:ring-[#141414]"
              type="text"
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Press data"
              /* {...register("searchTerm", {
                required: "Campo obligatorio",
              })} */
            />
          </div>
        </form>
      </div>
    </div>
  );
}

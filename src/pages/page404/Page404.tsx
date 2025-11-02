import type { FC } from "react";
// import not_found from "../../src/assets/svg/not_found.svg";

const Page404: FC = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#F5F7FA]">
        <div className="grid grid-cols-10 ">
          <div className="col-span-3 sm:p-4 p-1 flex justify-center flex-col">
            <h2 className="sm:text-[21px] text-[19px] mb-4 sm:mb-2 font-extrabold mr-4 sm:mr-0">
              صفحه‌ی مورد نظر پیدا نشد
            </h2>
          </div>
          <div className="col-span-7 sm:p-4 p-1 mb-[6vh]">
            {/* <img className="" width={700} src={not_found} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;

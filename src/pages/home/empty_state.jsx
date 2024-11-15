// import { ReactComponent as Empty } from "../../../../svgs/Empty State Search.svg";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center gap-2 col-span-1 lg:col-span-3">
      {/* <Empty /> */}
      <p className="text-base text-gray-800 mt-2">No Result Founded!</p>
      <p className="text-sm text-gray-300">
        With this filter no Result Founded!
      </p>
    </div>
  );
};
export default EmptyState;

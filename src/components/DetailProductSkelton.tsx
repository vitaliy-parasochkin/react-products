import Skeleton from "react-loading-skeleton";

export default function DetailProductSkeleton() {
  return (
    <div className="grid grid-cols-[65%_35%] gap-x-3 h-screen">
      <div className="h-2/3">
        <Skeleton height="100%" />
      </div>
      <div className="flex flex-col w-full">
        <Skeleton height="24px" width="90%" />
        <Skeleton height="24px" width="50%" />
        <Skeleton height="28px" width="25%" />
        <Skeleton height="120px" width="100%" />
        <div className="border-b pt-2"></div>
        <Skeleton height="36px" width="36px" />
      </div>
    </div>
  );
}

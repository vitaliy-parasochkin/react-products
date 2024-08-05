import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductItemSkeleton() {
  return (
    <div className="flex flex-col rounded gap-y-1 relative border p-1">
      <Skeleton height="160px" width="100%" />
      <Skeleton height="32px" width="100%" />
      <Skeleton height="24px" width="50%" />
      <div className="flex justify-between items-center w-full">
        <Skeleton height="44px" width="60px" />
        <Skeleton height="44px" width="80px" />
      </div>
    </div>
  );
}

import imgNoData from "../assets/noData.jpg";
import clsx from "clsx";

interface NoDataProps {
  text: string;
  className?: string;
}

export default function NoData({ text, className }: NoDataProps) {
  return (
    <div
      className={clsx("flex flex-col items-center justify-center", className)}
    >
      <img src={imgNoData} alt="empty cart" width={500} height={500} />
      <span>{text}</span>
    </div>
  );
}

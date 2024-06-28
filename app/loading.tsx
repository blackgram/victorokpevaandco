import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <SkeletonTheme baseColor="#000" highlightColor="#444">
        <div className="w-full min-h-[100vh] p-72 flex flex-row items-center justify-center">
            <Skeleton count={1} className="w-full h-32" circle={true} />
            <Skeleton count={5} className="w-full" />
        </div>
    </SkeletonTheme>
  );
}

import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-125 space-y-5">
        <Skeleton className="h-40 rounded-lg" />
        <Skeleton className="h-4 w-3/5 rounded-lg" />
        <Skeleton className="h-4 w-4/5 rounded-lg" />
        <Skeleton className="h-4 w-2/5 rounded-lg" />
      </div>
    </div>
  );
}
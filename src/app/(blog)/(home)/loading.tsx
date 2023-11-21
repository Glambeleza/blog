import SkeletonPrimaryCard from "@/src/components/skeleton/primaryCardSkeleton";
import SkeletonSecondaryCard from "@/src/components/skeleton/secondaryCardSkeleton";

export default function loadingHome() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "968px",
        margin: "0 auto",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "8px",
          }}
        >
          <SkeletonPrimaryCard />
        </div>
        <div
          style={{
            margin: "8px",
          }}
        >
          <SkeletonPrimaryCard />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            margin: "10px",
          }}
        >
          <SkeletonSecondaryCard />
        </div>
        <div
          style={{
            margin: "10px",
          }}
        >
          <SkeletonSecondaryCard />
        </div>
        <div
          style={{
            margin: "10px",
          }}
        >
          <SkeletonSecondaryCard />
        </div>
      </div>
    </div>
  );
}

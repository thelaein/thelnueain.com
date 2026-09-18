import Image from "next/image";

type Props = { mockClass: string; image?: string; alt?: string };

export function MockVisual({ mockClass, image, alt }: Props) {
  if (image) {
    return (
      <div className="mock" style={{ background: "var(--bg2)", overflow: "hidden" }}>
        <Image
          src={image}
          alt={alt ?? "Project preview"}
          width={1600}
          height={1060}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
    );
  }
  if (mockClass === "mock-hr") {
    return (
      <div className="mock mock-hr">
        <div className="bar-top">
          <i />
          <i />
        </div>
        <div className="body">
          <div className="side">
            <i />
            <i />
            <i />
            <i style={{ width: "70%" }} />
          </div>
          <div className="main">
            <div className="card">
              <i />
              <i style={{ width: "60%" }} />
            </div>
            <div className="card">
              <i />
              <i style={{ width: "40%" }} />
            </div>
            <div className="card">
              <i />
              <i style={{ width: "80%" }} />
            </div>
            <div className="card">
              <i />
              <i style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (mockClass === "mock-readfam") {
    return (
      <div className="mock mock-readfam">
        <div className="phone">
          <div className="cover" />
          <div className="line" />
          <div className="line w60" />
          <div className="line" />
        </div>
      </div>
    );
  }
  return (
    <div className="mock mock-posco">
      <div className="grid3">
        <div className="panel">
          <i />
          <div className="chart">
            <span style={{ height: "40%" }} />
            <span style={{ height: "70%" }} />
            <span style={{ height: "55%" }} />
            <span style={{ height: "85%" }} />
          </div>
        </div>
        <div className="panel">
          <i />
          <div className="chart">
            <span style={{ height: "60%" }} />
            <span style={{ height: "30%" }} />
            <span style={{ height: "75%" }} />
            <span style={{ height: "50%" }} />
          </div>
        </div>
        <div className="panel">
          <i />
          <div className="chart">
            <span style={{ height: "50%" }} />
            <span style={{ height: "90%" }} />
            <span style={{ height: "40%" }} />
            <span style={{ height: "65%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockFrame({ mockClass, image, alt }: { mockClass: string; image?: string; alt?: string }) {
  return (
    <div className="work-frame" data-cursor-view>
      <MockVisual mockClass={mockClass} image={image} alt={alt} />
    </div>
  );
}

export function ProjectCover({ image, alt, mockClass }: { image?: string; alt: string; mockClass: string }) {
  if (image) {
    return (
      <div className="work-frame" style={{ aspectRatio: "16/11" }}>
        <Image
          src={image}
          alt={alt}
          width={1600}
          height={1100}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          sizes="(max-width: 900px) 100vw, 50vw"
          priority={false}
        />
      </div>
    );
  }
  return <MockFrame mockClass={mockClass} alt={alt} />;
}

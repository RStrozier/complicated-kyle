import HomepageHero from "../components/HomepageHero";

const SectionOne = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="bg-main-col h-[400px]">
          <HomepageHero />
        </div>
        <div className="bg-submain-col h-[800px]">
          <div className="div">Test test</div>
        </div>
        <div className="bg-sub-col-1 h-[800px]">
          <div className="div">Test test</div>
        </div>
        <div className="bg-sub-col-2 h-[800px]" />
        <div className="bg-main-col h-[200px]" />
      </div>
    </>
  );
};

export default SectionOne;

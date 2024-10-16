import bannerImg from "../../assets/Icons/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse justify-between items-center gap-5  sm:flex-row">
      {/* content */}
      <div className="space-y-7">
        <h1 className="text-2xl md:text-5xl font-medium text-center sm:text-left  ">
          New Releases This Week
        </h1>
        <p className="max-w-md text-center sm:text-left ">
          Its time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this weeks new releases offer something for
          everyone
        </p>
        <div className="flex justify-center sm:justify-start">
          <button className="btn-primary text-white">Subscribe</button>
        </div>
      </div>
      {/* image */}
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

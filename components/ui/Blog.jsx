
function Blog({ blogInfo }) {
  return (
    <div id="blog" className="pageMainDiv">
      <h3 className="subTitle">{blogInfo?.title}</h3>

      <div className="h-[460px] md:h-[400px] w-auto rounded-xl relative   my-4">
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <img
          src={blogInfo?.image}
          alt="blog image"
          className="h-full w-full overflow-hidden object-cover rounded-xl"
        />

        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-4 md:gap-y-8 absolute top-0 px-4 md:px-8">
          <h3 className="text-xl text-[#fdeed4] font-semibold tracking-wider">
            {blogInfo?.sub_title}
          </h3>

          <p className="text-sm text-start md:text-xl md:text-justify py-2 leading-6 md:leading-8 text-white font-mono ">
            {blogInfo?.description}
          </p>

          <a href={blogInfo?.link}>
            <button className="normalButton">Go to Blog</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;

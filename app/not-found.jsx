import { IMAGES } from "@/constants";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <img
        src={IMAGES.notFound}
        alt="Funny Photo"
        className="w-80 h-auto mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-200">
        Looks like the page you{"'"}re looking for is missing.
      </p>
    </div>
  );
};

export default PageNotFound;

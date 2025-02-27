import Loader from "@/components/ui/Loader";
function loading() {
  return (
    <div className="min-h-screen flex justify-center items-center  bg-gradient-to-b from-gray-900 via-purple-900/30 to-gray-900">
      <Loader />
    </div>
  );
}

export default loading;

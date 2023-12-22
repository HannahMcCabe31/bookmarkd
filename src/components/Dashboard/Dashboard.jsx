import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation";

function Dashboard() {
  window.scrollTo(0, 0);
  return (
    <div className="md:m-auto">
      <>
    
        <div className="mt-10 text-white p-6 mb-[8vh] flex flex-col items-center">
          {/* This component contains the header (profile picture and username) */}
          <div>
            <WelcomeUser />
          </div>
          {/* This component contains the my current reads */}
          <div className=" mt-10 md:flex md:flex-row lg:flex lg:flex-row md:justify-between lg:justify-between">
            <div className="">
              <CurrentlyReading />
            </div>

            {/* This component contains multiple links to other pages */}
            <div className=" ">
              <DashboardNavigation />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Dashboard;

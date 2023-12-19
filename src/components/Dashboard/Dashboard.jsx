import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation";

function Dashboard() {



  return (
    <div>
      <>
        {/* Mobile display only  */}
        <div className="text-white p-6 mb-[8vh]  flex flex-col items-center">
          {/* This component contains the header (profile picture and username) */}
          <div className="text-[5vw]">
            <WelcomeUser />
          </div>
          {/* This component contains the my current reads */}
          <div className="md:max-w-30 md:mr-10">
            <CurrentlyReading />
          </div>
          {/* This component contains multiple links to other pages */}
          <div className="md:mr-10 lg:mr-10 ">
            <DashboardNavigation />
          </div>
        </div>
      </>
    </div>
  );
}

export default Dashboard;

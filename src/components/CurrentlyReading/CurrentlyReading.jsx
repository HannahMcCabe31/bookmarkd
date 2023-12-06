import { Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";

function CurrentlyReading(props) {
    return(
        <div className=" text-black p-3">
        <Link to="/book-page">
                <div className="border rounded-2xl bg-white p-1 border-element-blue border-4">
                  <button className="border rounded-full bg-element-blue text-white p-2  ">
                    <div className="flex flex-row justify-between">
                      <p className="text-sm mr-1">My Current Read</p>{" "}
                      <img className="w-4" src={rightArrow} alt="Right arrow" />
                    </div>{" "}
                  </button>

                  <div className="flex mx-5 justify-evenly">
                    <div className="w-36 h-44 mb-4 mt-3 bg-black border rounded-md"></div>
                    <div className="font-light">
                      <h2 className="pl-3 text-2xl">Neuromancer</h2>
                      <p>Author:</p>
                      <p className="pl-11">William Gibson</p>
                      <p>Rating:</p>
                      <p className="pl-11">3.90 / 5</p>
                      <p>Current Page:</p>
                      <p className="pl-8 font-medium">160 of 320</p>
                      <button className="border rounded-full bg-element-blue text-white p-2  ">
                        <div className="flex flex-row justify-between">
                          <p className="text-sm">Update Activity</p>{" "}
                        </div>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              </div>
    )
}

export default CurrentlyReading
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectFacility } from "../../../redux/slice/userSelected";

export default function RecyclingCard({ item }) {
  const dispatch = useDispatch();
  const facilities = useSelector((state) => state.facilityReducer);

  const handelSelectFacility = (id) => {
    const selectedFacility = facilities.find((f) => f._id === id);
    dispatch(selectFacility(selectedFacility));
  };

  return (
    <div className="bg-white rounded-xl shadow-md border-l-4 border-orange-500 p-5 m-3 sm:m-2 flex flex-col gap-3">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-gray-800 break-words">{item.name}</h2>
        <span className={`flex items-center text-sm font-medium ${item.verified ? "text-green-500" : "text-orange-500"}`}>
          <span className={`w-2 h-2 rounded-full mr-1 ${item.verified ? "bg-green-500" : "bg-orange-500"}`}></span>
          {item.verified ? "Verified" : "UnVerified"}
        </span>
      </div>

      {/* Address */}
      <div className="flex items-start gap-3 text-gray-600 text-sm">
        <FaMapMarkerAlt className="text-lg mt-1 flex-shrink-0" />
        <p className="leading-relaxed break-words">{item.address}</p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3 text-gray-600 text-sm">
        <FaPhoneAlt className="text-sm flex-shrink-0" />
        <p>{item.contact}</p>
      </div>

      {/* Time */}
      <div className="flex items-center gap-3 text-gray-600 text-sm">
        <FaClock className="text-sm flex-shrink-0" />
        <p>{item.time}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <button
          onClick={() => handelSelectFacility(item._id)}
          className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium transition"
        >
          Directions
        </button>
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-medium transition">
          ♻ Book Recycling
        </button>
      </div>
    </div>
  );
}

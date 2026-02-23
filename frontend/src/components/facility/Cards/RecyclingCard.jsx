import React, { memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MapPin, Phone, Clock, ShieldCheck, ShieldAlert, Navigation, CalendarCheck } from "lucide-react";
import { selectFacility } from "../../../redux/slice/userSelected";
import toast , {Toaster}from 'react-hot-toast';
import { useNavigate } from 'react-router';

// Using memo to prevent unnecessary re-renders when other cards in a list change


const RecyclingCard = memo(({ item }) => {
    const dispatch = useDispatch();
  const facilities = useSelector((state) => state.facilityReducer);
  const navigate = useNavigate()

  const handleSelectFacility = (id) => {
    if (!id) return;
    const selectedFacility = facilities?.find((f) => f._id === id);
    if (selectedFacility) {
      dispatch(selectFacility(selectedFacility));
      toast.success("Facility Selected")
    }
  };

  const handelselected = (id) => {
    if (!id) return;
    const selectedFacility = facilities?.find((f) => f._id === id);
    if (selectedFacility) {
      dispatch(selectFacility(selectedFacility));
      toast.success("Facility Selected")
      navigate("/recycle")
    }
  };


  const statusColor = item.verified ? "emerald" : "orange";

  return (
    <div className="group mt-2 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-fit">
      <div className={`h-1 w-full bg-${statusColor}-500`} />
      <Toaster/>

      <div className="p-5 flex flex-col flex-grow gap-4">
        
        <div className="flex justify-between items-start gap-3">
          <h2 className="text-base font-bold text-slate-800 leading-tight group-hover:text-emerald-700 transition-colors">
            {item.name || "Unnamed Facility"}
          </h2>
          <div 
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-${statusColor}-50 text-${statusColor}-700 border border-${statusColor}-100`}
            title={item.verified ? "Verified Facility" : "Unverified Facility"}
          >
            {item.verified ? <ShieldCheck size={12} /> : <ShieldAlert size={12} />}
            {item.verified ? "Verified" : "Pending"}
          </div>
        </div>


        <div className="space-y-2.5">
          <div className="flex items-start gap-3 text-slate-500 hover:text-slate-700 transition-colors">
            <MapPin size={16} className="mt-0.5 flex-shrink-0 text-slate-400" />
            <p className="text-xs font-medium leading-relaxed line-clamp-2">
              {item.address || "No address provided"}
            </p>
          </div>

          <div className="flex items-center gap-3 text-slate-500">
            <Phone size={14} className="flex-shrink-0 text-slate-400" />
            <p className="text-xs font-semibold">{item.contact || "N/A"}</p>
          </div>

          <div className="flex items-center gap-3 text-slate-500">
            <Clock size={14} className="flex-shrink-0 text-slate-400" />
            <p className="text-xs font-medium italic">{item.time || "Hours not set"}</p>
          </div>
        </div>

        <div className="flex gap-2 mt-auto pt-2">
          <button
            onClick={() => handleSelectFacility(item._id)}
            aria-label={`Get directions to ${item.name}`}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 py-2.5 rounded-xl text-xs font-bold transition-all border border-slate-200 active:scale-95"
          >
            <Navigation size={14} />
            Directions
          </button>
          
          <button 
            aria-label={`Book recycling at ${item.name}`}
            onClick={() => handelselected(item._id)}
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm shadow-emerald-100 active:scale-95"
          >
            <CalendarCheck size={14} />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
});

RecyclingCard.displayName = "RecyclingCard";

export default RecyclingCard;